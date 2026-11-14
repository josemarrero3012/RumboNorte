/* O que se repete em todas as páginas: menu e rodapé (português). */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.comun = {
  header: {
    markSrc: 'assets/logos/rumbo-norte-mark-reversed.webp',
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    homeHref: './',
    links: [
      { label: 'Início', href: './' },
      { label: 'Destinos', href: './#destinos' },
      { label: 'O guia', href: 'guia.html' },
      { label: 'Metas', href: 'metas.html' },
      { label: 'Quem sou', href: 'quienes-somos.html' }
    ],
    cta: { label: 'WhatsApp', href: 'wa:', icon: 'whatsapp' }
  },
  footer: {
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    tagline: 'Recrutamento sem promessas',
    text: 'A Rumbo Norte é o serviço de recrutamento independente de Iván Guerra Arroyo. Seleciona candidatos e apresenta-os, com o seu consentimento, a agências de trabalho temporário certificadas dos Países Baixos, da Bélgica e da Alemanha. Não é uma empresa de trabalho temporário nem o empregador do candidato, e não garante a obtenção de emprego. É gratuito para o candidato em qualquer momento.',
    columns: [
      {
        title: 'Secções',
        links: [
          { label: 'Início', href: './' },
          { label: 'O guia prático', href: 'guia.html' },
          { label: 'Perfis que procuro', href: './#perfiles' },
          { label: 'Metas', href: 'metas.html' },
          { label: 'Quem sou', href: 'quienes-somos.html' },
          { label: 'Enviar candidatura', href: './#candidatura' }
        ]
      },
      {
        title: 'Verificar e contactar',
        links: [
          { label: 'Registo SNA', href: 'https://www.normeringarbeid.nl' },
          { label: 'Registo SNF', href: 'https://www.normeringflexwonen.nl' },
          { label: 'ivan@proyectoholanda.com', href: 'mailto:ivan@proyectoholanda.com' },
          { label: 'WhatsApp', href: 'wa:' }
        ]
      }
    ],
    copy: '© 2026 Rumbo Norte',
    legal: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Política de privacidade', href: 'privacidad.html' },
      { label: 'Cookies', href: 'privacidad.html#cookies' }
    ]
  }
};

window.RumboNorteCifras = {
  nota: 'Valor indicativo, não definitivo. Depende da agência que te contrata, da cidade, do posto e do alojamento.',
  aviso: 'Todos os valores desta página são indicativos e não são uma promessa. O que recebes e o que te descontam é fixado pela agência que te contrata como empregado, e depende da cidade, do posto, das horas, dos turnos e do alojamento e do seu tipo. As condições reais só as vais saber quando a agência tas der por escrito, e podem ser diferentes das deste exemplo.'
};
