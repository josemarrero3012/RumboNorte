/* Lo que se repite en todas las páginas: menú y pie. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.comun = {
  header: {
    markSrc: 'assets/logos/rumbo-norte-mark-reversed.webp',
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    homeHref: './',
    links: [
      { label: 'Inicio', href: './' },
      { label: 'Destinos', href: './#destinos' },
      { label: 'La guía', href: 'guia.html' },
      { label: 'Metas', href: 'metas.html' },
      { label: 'Quién soy', href: 'quienes-somos.html' }
    ],
    cta: { label: 'WhatsApp', href: 'wa:', icon: 'whatsapp' }
  },
  footer: {
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    tagline: 'Reclutamiento sin promesas',
    text: 'Rumbo Norte es el servicio de reclutamiento independiente de Iván Guerra Arroyo. Selecciona candidatos y los presenta, con su consentimiento, a agencias de trabajo temporal certificadas de Países Bajos, Bélgica y Alemania. No es una empresa de trabajo temporal ni el empleador del candidato, y no garantiza la obtención de empleo. Es gratuito para el candidato en todo momento.',
    columns: [
      {
        title: 'Secciones',
        links: [
          { label: 'Inicio', href: './' },
          { label: 'La guía práctica', href: 'guia.html' },
          { label: 'Perfiles que busco', href: './#perfiles' },
          { label: 'Metas', href: 'metas.html' },
          { label: 'Quién soy', href: 'quienes-somos.html' },
          { label: 'Enviar candidatura', href: './#candidatura' }
        ]
      },
      {
        title: 'Comprobar y contactar',
        links: [
          { label: 'Registro SNA', href: 'https://www.normeringarbeid.nl' },
          { label: 'Registro SNF', href: 'https://www.normeringflexwonen.nl' },
          { label: 'ivan@proyectoholanda.com', href: 'mailto:ivan@proyectoholanda.com' },
          { label: 'WhatsApp', href: 'wa:' }
        ]
      }
    ],
    copy: '© 2026 Rumbo Norte',
    legal: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Política de privacidad', href: 'privacidad.html' },
      { label: 'Cookies', href: 'privacidad.html#cookies' }
    ]
  }
};

// Nota corta (bajo cada cifra destacada) y aviso completo sobre las cifras. Mismo texto en toda la web.
window.RumboNorteCifras = {
  nota: 'Cifra orientativa, no definitiva. Depende de la agencia que te contrate, la ciudad, el puesto y el alojamiento.',
  aviso: 'Todas las cifras de esta página son orientativas y no son una promesa. Lo que cobres y lo que te descuenten lo fija la agencia que te contrate como empleado, y depende de la ciudad, el puesto, las horas, los turnos y el alojamiento y su tipo. Las condiciones reales solo las sabrás cuando la agencia te las dé por escrito, y pueden ser distintas de las de este ejemplo.'
};
