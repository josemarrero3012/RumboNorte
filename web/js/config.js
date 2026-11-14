/* Datos de contacto y marca: se cambian aquí y la web entera se actualiza. */
window.RumboNorteConfig = {
  marca: 'Rumbo Norte',
  dominio: 'https://proyectoholanda.com',
  correo: 'ivan@proyectoholanda.com',
  whatsapp: '31647834341',
  telefono: '+31 647 834 341',
  mensaje: 'Hola Iván. He visto Rumbo Norte y me interesa trabajar en el norte de Europa.',
  // Las candidaturas del formulario llegan por correo desde enviar.php (Hostinger, con PHP).
  // El remitente tiene que ser un buzón del propio dominio para que el correo no acabe en spam.
  remitente: 'web@proyectoholanda.com',
  // Idiomas de la web. El español va en la raíz; el resto en su carpeta (/en/, /pl/, /pt/).
  idiomas: [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'pl', name: 'Polski' },
    { code: 'pt', name: 'Português' }
  ]
};
