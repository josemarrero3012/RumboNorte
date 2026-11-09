// Lo que sabe el asistente: fichas cortas sacadas de la propia web (preguntas frecuentes,
// requisitos, la guía). Cada una lleva palabras clave, la pregunta que aparece en su botón,
// la respuesta y a dónde ir para leerla entera. Si cambia algo en la web, se cambia aquí también.
// Marcas en el texto: **negrita** y [enlace](dirección); «wa:» abre WhatsApp como en el resto de la web.

export const SALUDO = 'Hola, soy la brújula de Rumbo Norte. Respondo con lo que cuenta la web de Iván: sueldo, alojamiento, requisitos, el BSN, las agencias… Pregunta lo que quieras.';

export const NO_SE = 'Eso no lo tengo en la web, y prefiero no inventármelo. Pregúntaselo a Iván por WhatsApp: te contesta él.';

export const PENSANDO = ['Buscando el rumbo', 'Mirando la guía', 'Repasando las preguntas'];

// Las primeras preguntas que se ofrecen, por el id de su ficha.
export const SUGERENCIAS = ['gratis', 'neto', 'alojamiento', 'agencia'];

// Comprobación rápida de los tres requisitos obligatorios.
export const REQUISITOS = {
  start: '¿Cumplo los requisitos?',
  steps: [
    { q: '¿Tienes 21 años o más?', si: 'Sí, tengo 21 o más', no: 'Todavía no' },
    { q: '¿Tienes nacionalidad o pasaporte de la Unión Europea?', si: 'Sí, de la UE', no: 'No' },
    { q: '¿Tu inglés es al menos B1, de poder mantener una conversación?', si: 'Sí, B1 o más', no: 'Menos de B1' }
  ],
  ok: '**Cumples los tres requisitos.** El siguiente paso es hablar con Iván: confirma tus datos, te pregunta por tu experiencia y te hace unas preguntas en inglés. El mensaje ya va escrito.',
  okMessage: 'Hola Iván. He hecho la prueba de la web: tengo 21 años o más, pasaporte de la UE e inglés B1. Me interesa trabajar en el norte de Europa.',
  no: 'Con lo que me cuentas, **no se cumple: {fallo}**. Los tres requisitos son indispensables y no tienen excepciones, así que ahora mismo Iván no podría presentarte a sus vacantes. Si tu situación cambia, aquí estará.',
  fallos: ['tener 21 años o más', 'tener nacionalidad o pasaporte de la UE', 'un inglés B1 conversacional'],
  whatsapp: 'Escribir a Iván',
  form: 'Prefiero el formulario'
};

export const FICHAS = [
  {
    id: 'hola',
    keys: 'hola buenas hey saludos ayuda ayudame',
    text: '¡Hola! Pregúntame por el sueldo, el alojamiento, los requisitos, el BSN o cómo comprobar una agencia. Si lo prefieres, mira si cumples los requisitos en un minuto.',
    saludo: true
  },
  {
    id: 'gratis',
    label: '¿Me cuesta algo?',
    keys: 'pagar pago cuesta coste gratis gratuito comision cuota precio euros tarifa',
    text: '**No. Ni un euro, en ningún momento.** Ni a Iván ni a la agencia: ni cuota, ni comisión, ni descuento en la nómina. En Países Bajos la ley prohíbe que una agencia cobre al trabajador por conseguirle empleo. Si alguien te pide dinero, no es una agencia legal.',
    href: 'quienes-somos.html',
    link: 'Lo que Iván no hace'
  },
  {
    id: 'requisitos',
    label: '¿Qué requisitos piden?',
    keys: 'requisitos requisito piden pedis condiciones edad años mayor nacionalidad pasaporte europeo ue nie encajo',
    text: 'Son tres, **indispensables y sin excepciones**: tener **21 años o más**, **nacionalidad o pasaporte de la Unión Europea** e **inglés B1 conversacional** como mínimo. Suma tener carnet B (mejor con coche), poder viajar pronto y querer quedarte una temporada de verdad.',
    href: './#perfiles',
    link: 'Ver los perfiles',
    flow: true
  },
  {
    id: 'neto',
    label: '¿Cuánto se cobra?',
    keys: 'horas turnos cobra cobrar cobro sueldo salario neto bruto gana ganar nomina mes mensual hora minimo paga',
    text: 'Con 40 horas a la semana y el alojamiento ya descontado, lo que entra en la cuenta suele moverse **entre 1.250 y 2.200 € al mes**. No es una cifra fija ni garantizada: depende de la agencia, el puesto, la ciudad, las horas extra y el alojamiento. En puestos sin cualificación se cobra el salario mínimo: en Países Bajos, para mayores de 21, **15,29 € brutos la hora desde el 1 de enero de 2027** (14,99 € hasta el 31 de diciembre de 2026).',
    href: 'guia.html#nomina',
    link: 'La nómina, línea a línea'
  },
  {
    id: 'vakantiegeld',
    label: '¿Qué es el vakantiegeld?',
    keys: 'vakantiegeld vacaciones paga extra reservas mayo',
    text: 'Es la paga extra de vacaciones: **un 8,33 % del bruto**. No la ves cada semana porque se acumula aparte, junto con las reservas de vacaciones, y se cobra cuando la pides o en mayo. Es tuya.',
    href: 'guia.html#nomina',
    link: 'Ver la nómina en la guía'
  },
  {
    id: 'alojamiento',
    label: '¿Cuánto cuesta el alojamiento?',
    keys: 'alojamiento vivo casa habitacion vivienda piso dormir compartida bungalow descuentan semana snf',
    text: 'Como orientación, **entre 80 y 150 € por semana y por persona**, casi siempre en habitación compartida. Hay un límite legal: el descuento **no puede superar el 25 % del salario mínimo**, y solo se puede quitar de la nómina si el alojamiento tiene la certificación **SNF**. Pide por escrito cuánto cuesta, cuántas personas hay por habitación y a qué distancia está del trabajo.',
    href: 'guia.html#alojamiento',
    link: 'El alojamiento en la guía'
  },
  {
    id: 'sin-casa',
    label: 'Si pierdo el trabajo, ¿me quedo sin casa?',
    keys: 'pierdo perder despido despiden despedir echan quedo sin casa termina contrato acaba calle',
    text: 'La respuesta honesta: **en muchos casos sí**, porque el alojamiento va atado al contrato. En la fase A, si la empresa deja de necesitarte, el contrato puede terminar casi de un día para otro. Antes de firmar, **pregunta por escrito cuántos días tienes para dejar la habitación**. Una agencia seria lo contesta sin problema.',
    href: 'guia.html#contrato',
    link: 'Los contratos, explicados'
  },
  {
    id: 'contrato',
    label: '¿Qué tipo de contrato me hacen?',
    keys: 'contrato fase fases uitzendbeding indefinido temporal fijo directo agencia firmar',
    text: 'Con agencia hay tres fases. **Fase A**, más o menos el primer año: máxima flexibilidad para la empresa y, normalmente, la cláusula de puesta a disposición (*uitzendbeding*). **Fase B**: contratos temporales con fecha de fin, ya no te pueden echar de un día para otro. **Fase C**: indefinido con la agencia, el equivalente al fijo.',
    href: 'guia.html#contrato',
    link: 'Todos los contratos en la guía'
  },
  {
    id: 'colchon',
    label: '¿Cuánto dinero necesito para empezar?',
    keys: 'dinero cuando empezar vida coste ahorros colchon primer pago cobro viaje gastos fianza semanas',
    text: 'Calcula **entre 800 y 1.200 €** de colchón: el viaje, la comida de las primeras semanas, la fianza si la piden y los primeros gastos. Lo normal es **cobrar por semanas** y el primer pago suele llegar a las dos semanas de empezar. Ir sin colchón es el error más caro.',
    href: 'guia.html#coste-vida',
    link: 'El coste de vida'
  },
  {
    id: 'viaje',
    label: '¿Quién paga el vuelo?',
    keys: 'vuelo avion billete viaje viajar aeropuerto recogen traslado transporte llegar furgoneta',
    text: '**El vuelo y el traslado hasta la oficina de la agencia o el alojamiento los pagas tú.** Algunas agencias recogen en el aeropuerto, pero no todas. Una vez allí, el alojamiento y el transporte al trabajo los organiza la agencia y se descuentan del sueldo.',
    href: './#proceso',
    link: 'El proceso, paso a paso'
  },
  {
    id: 'idiomas',
    label: '¿Tengo que hablar inglés?',
    keys: 'ingles idioma idiomas neerlandes holandes hablar nivel b1 b2 aleman frances',
    text: '**Inglés, sí: un B1 conversacional es obligatorio para cualquier vacante.** Iván lo comprueba en la entrevista con unas preguntas en inglés. Lo necesitas para las instrucciones de seguridad, los turnos y hablar con tus responsables. El neerlandés casi nadie lo pide al principio, pero marca la diferencia si te quedas.',
    href: './#preguntas',
    link: 'Más preguntas frecuentes'
  },
  {
    id: 'carnet',
    label: '¿Hace falta carnet de conducir?',
    keys: 'carnet conducir coche licencia permiso b c d cap camion autobus carretilla heftruck',
    text: 'No es obligatorio, pero **cambia bastante las cosas**: muchos alojamientos están en polígonos o pueblos pequeños. El carnet español vale en Países Bajos sin trámites. Para **conductor de camión o de autobús**, el carnet profesional (C, C+E o D) y el CAP sí son obligatorios.',
    href: './#preguntas',
    link: 'Más preguntas frecuentes'
  },
  {
    id: 'bsn',
    label: '¿Qué es el BSN?',
    keys: 'bsn burgerservicenummer numero identificacion gemeente ayuntamiento rni empadronar registro papeles',
    text: 'El **BSN** es el número de identificación ciudadana neerlandés: sin él no puedes cobrar en condiciones ni tener seguro médico. Se pide con cita en el ayuntamiento (*gemeente*), o en una oficina RNI si vas a estar menos de cuatro meses. **Es gratis: nadie te puede cobrar por tramitarlo.**',
    href: 'guia.html#bsn',
    link: 'El BSN, paso a paso'
  },
  {
    id: 'agencia',
    label: '¿Cómo sé si una agencia es legal?',
    keys: 'agencia legal fiable estafa seria comprobar verificar registro sna snf timo certificada',
    text: 'En Países Bajos se comprueba gratis en dos registros públicos: **SNA** ([normeringarbeid.nl](https://www.normeringarbeid.nl)), que audita impuestos y cotizaciones, y **SNF** ([normeringflexwonen.nl](https://www.normeringflexwonen.nl)), que certifica el alojamiento. Busca el nombre legal exacto de la agencia: si no aparece, para.',
    href: 'guia.html#verificar',
    link: 'Cómo verificar una agencia'
  },
  {
    id: 'puestos',
    label: '¿Qué trabajos hay?',
    keys: 'camionero conductor chofer puestos trabajos vacantes ofertas empleo sector sectores perfiles almacen logistica invernaderos limpieza alimentacion produccion construccion metal',
    text: 'Los perfiles que más se piden: **logística y almacén**, **conductores de camión y de autobús**, **producción de alimentación**, **agricultura e invernaderos** (muy por temporadas) y **limpieza industrial**. Construcción y metal piden experiencia acreditada. Lo que hay abierto ahora te lo dice Iván por WhatsApp, porque cambia cada semana.',
    href: './#perfiles',
    link: 'Ver los perfiles'
  },
  {
    id: 'pais',
    label: '¿Qué país me conviene?',
    keys: 'pais paises holanda bajos belgica alemania conviene mejor destino donde',
    text: '**En la mayoría de los casos, Países Bajos:** es donde están casi todas las vacantes y el sistema está más rodado. Bélgica se parece mucho, y si hablas francés suma. **Alemania paga bien la experiencia en industria y metal**, pero el alemán pesa más. En los tres, inglés B1 obligatorio.',
    href: './#destinos',
    link: 'Ver los destinos'
  },
  {
    id: 'pareja',
    label: '¿Puedo ir con mi pareja o un amigo?',
    keys: 'pareja amigo amiga novio novia mujer marido juntos acompañado familia hermano',
    text: 'Sí, y se lleva mejor. Pero **que os contraten a la vez no garantiza que os alojen juntos ni que tengáis el mismo turno**. Si para vosotros es innegociable, díselo a Iván desde el primer mensaje: lo plantea así a la agencia y pide que quede por escrito.',
    href: './#preguntas',
    link: 'Más preguntas frecuentes'
  },
  {
    id: 'entrevista',
    label: '¿Qué me preguntan en la entrevista?',
    keys: 'entrevista primera conversacion preguntan llamada dni documentos',
    text: 'Primero, los tres requisitos: edad, nacionalidad e inglés. Después, tu experiencia, si tienes carnet, desde cuándo puedes viajar y si vas solo o acompañado. Al final, unas preguntas en inglés. **En esa primera conversación no se pide el DNI ni ningún documento.**',
    href: './#proceso',
    link: 'El proceso completo'
  },
  {
    id: 'plazos',
    label: '¿Cuánto tarda todo?',
    keys: 'tarda plazo plazos rapido pronto semanas proceso pasos',
    text: 'Depende de la temporada y de tu perfil, así que una cifra cerrada sería mentira. El orden real: requisitos y entrevista; si la pasas, te registras en la plataforma de candidatos con tu CV en inglés y te asigna **tres vacantes**. Desde ahí decide la agencia.',
    href: './#proceso',
    link: 'El proceso, paso a paso'
  },
  {
    id: 'ivan',
    label: '¿Quién es Iván?',
    keys: 'ivan quien eres reclutador persona detras empresa',
    text: 'Iván Guerra Arroyo es reclutador independiente: selecciona candidatos en España y, con tu consentimiento, los presenta a agencias de trabajo temporal certificadas de Países Bajos, Bélgica y Alemania. No es una agencia ni tu empleador, y no garantiza el empleo.',
    href: 'quienes-somos.html',
    link: 'Su historia'
  },
  {
    id: 'metas',
    label: '¿Qué se puede conseguir allí?',
    keys: 'metas conseguir ahorrar ahorro futuro quedarme coche alquilar propio largo plazo',
    text: 'Ahorrar, salir del alojamiento de la agencia, comprar coche, alquilar tu propia vivienda, pasar a contrato directo y llegar al indefinido. Está todo en Metas, con cifras y plazos reales.',
    href: 'metas.html',
    link: 'Ver Metas'
  },
  {
    id: 'contacto',
    label: '¿Cómo me apunto?',
    keys: 'apuntarme apunto inscribirme contacto contactar escribir whatsapp telefono correo email formulario candidatura enviar cv',
    text: 'Lo más rápido es **WhatsApp**: te contesta Iván y en diez minutos sabéis si hay algo para ti. Si prefieres dejarlo por escrito, rellena el formulario de candidatura y te escribe él. Sin llamadas comerciales ni newsletter.',
    href: './#candidatura',
    link: 'Ir al formulario',
    whatsapp: true
  }
];
