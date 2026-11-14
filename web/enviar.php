<?php
// Recibe la candidatura del formulario y se la manda por correo a Iván. Funciona en cualquier
// hosting con PHP y mail() (Hostinger lo trae activado). build.mjs rellena los datos de {{…}}.
//
// - Con JavaScript, la web envía por fetch y espera JSON: {"ok":true} o un error con código HTTP.
// - Sin JavaScript, el navegador envía el formulario normal y aquí se redirige a la página de gracias.
// - No se guarda nada en el servidor: la candidatura solo existe en el correo que llega.

declare(strict_types=1);

const DESTINO = '{{CORREO}}';
const REMITENTE = '{{REMITENTE}}';
const MARCA = '{{MARCA}}';
const IDIOMAS = ['es', 'en', 'pl', 'pt'];
const MAX = 2000;

date_default_timezone_set('Europe/Berlin');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$json = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function responder(int $code, bool $json, string $idioma, string $error = ''): void {
  http_response_code($code);
  if ($json) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($code === 200 ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    exit;
  }
  $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
  $dir = $idioma === 'es' ? '' : $idioma . '/';
  if ($code === 200) {
    header('Location: ' . $base . '/' . $dir . 'gracias.html', true, 303);
    exit;
  }
  header('Content-Type: text/html; charset=utf-8');
  echo '<!doctype html><meta charset="utf-8"><title>' . MARCA . '</title>'
    . '<p>No se ha podido enviar la candidatura. / The application could not be sent.</p>'
    . '<p><a href="' . htmlspecialchars($base . '/' . $dir . '#candidatura') . '">← ' . MARCA . '</a></p>';
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  header('Allow: POST');
  responder(405, $json, 'es', 'method');
}

$idioma = in_array($_POST['idioma'] ?? '', IDIOMAS, true) ? $_POST['idioma'] : 'es';

// Un texto de una línea, sin saltos (evita inyectar cabeceras) y con longitud limitada.
function linea(string $k): string {
  $v = is_string($_POST[$k] ?? null) ? $_POST[$k] : '';
  return trim(mb_substr(preg_replace('/[\r\n\t]+/', ' ', $v) ?? '', 0, 300));
}
function texto(string $k): string {
  $v = is_string($_POST[$k] ?? null) ? $_POST[$k] : '';
  return trim(mb_substr(str_replace("\r", '', $v), 0, MAX));
}
// Casillas de un mismo grupo: sin JavaScript llegan repetidas (destino=…&destino=…) y PHP solo
// guardaría la última, así que se leen del cuerpo tal cual. Con JavaScript ya llegan juntas.
function grupo(string $k): string {
  $todos = [];
  foreach (explode('&', (string) file_get_contents('php://input')) as $par) {
    [$n, $v] = array_pad(explode('=', $par, 2), 2, '');
    if (urldecode($n) === $k) $todos[] = trim(preg_replace('/[\r\n\t]+/', ' ', urldecode($v)) ?? '');
  }
  $todos = array_values(array_filter($todos, 'strlen'));
  return $todos ? mb_substr(implode(', ', $todos), 0, 300) : linea($k);
}

// Trampa para robots: un campo oculto que una persona nunca rellena. Se responde como si fuera bien.
if (linea('bot-field') !== '') responder(200, $json, $idioma);

$d = [
  'nombre' => linea('nombre'),
  'prefijo' => linea('prefijo'),
  'telefono' => linea('telefono'),
  'email' => linea('email'),
  'edad' => linea('edad'),
  'nacionalidad_ue' => linea('nacionalidad_ue'),
  'nivel_ingles' => linea('nivel_ingles'),
  'destino' => grupo('destino'),
  'idiomas' => grupo('idiomas'),
  'carnet' => grupo('carnet'),
  'sector' => linea('sector'),
  'disponibilidad' => linea('disponibilidad'),
  'mensaje' => texto('mensaje'),
  'consentimiento_rgpd' => linea('consentimiento_rgpd'),
];

// Las mismas reglas que comprueba el formulario antes de enviar.
$fallos = [];
if ($d['nombre'] === '') $fallos[] = 'nombre';
if (!preg_match('/^[\d\s()+-]{6,}$/', $d['telefono'])) $fallos[] = 'telefono';
if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) $fallos[] = 'email';
if (!preg_match('/^\d{2}$/', $d['edad'])) $fallos[] = 'edad';
foreach (['nacionalidad_ue', 'nivel_ingles', 'carnet', 'sector', 'consentimiento_rgpd'] as $k) {
  if ($d[$k] === '' || $d[$k] === '(ninguno marcado)') $fallos[] = $k;
}
if ($fallos) responder(422, $json, $idioma, implode(',', $fallos));

$etiquetas = [
  'nombre' => 'Nombre',
  'telefono' => 'WhatsApp',
  'email' => 'Correo',
  'edad' => 'Edad',
  'nacionalidad_ue' => 'Nacionalidad o pasaporte UE',
  'nivel_ingles' => 'Nivel de inglés',
  'destino' => 'Destino',
  'idiomas' => 'Otros idiomas',
  'carnet' => 'Carnet y certificados',
  'sector' => 'Sector',
  'disponibilidad' => 'Disponible desde',
  'consentimiento_rgpd' => 'Consentimiento',
];

$cuerpo = "Nueva candidatura desde la web (" . strtoupper($idioma) . ")\n"
  . 'Recibida: ' . date('Y-m-d H:i:s T') . "\n\n";
foreach ($etiquetas as $k => $nombre) {
  $valor = $k === 'telefono' ? trim($d['prefijo'] . ' ' . $d['telefono']) : $d[$k];
  $cuerpo .= str_pad($nombre . ':', 30) . ($valor !== '' ? $valor : '—') . "\n";
}
$cuerpo .= "\nExperiencia / mensaje:\n" . ($d['mensaje'] !== '' ? $d['mensaje'] : '—') . "\n";

$asunto = 'Candidatura: ' . $d['nombre'] . ' (' . ($d['sector'] ?: 'sin sector') . ', ' . strtoupper($idioma) . ')';
$cabeceras = [
  'From: ' . mb_encode_mimeheader(MARCA, 'UTF-8') . ' <' . REMITENTE . '>',
  'Reply-To: ' . $d['email'],
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
];

$ok = mail(DESTINO, mb_encode_mimeheader($asunto, 'UTF-8'), $cuerpo, implode("\r\n", $cabeceras), '-f' . REMITENTE);

// Si el correo no sale, se dice: la web ofrece entonces seguir por WhatsApp.
responder($ok ? 200 : 500, $json, $idioma, $ok ? '' : 'mail');
