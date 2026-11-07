/* Quién soy. Texto de la web vieja, adaptado a Rumbo Norte. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.quien = {
  hero: {
    eyebrow: 'Quién soy',
    title: [
      'Soy reclutador.',
      'Antes fui',
      'candidato.'
    ],
    text: [
      'Me llamo **Iván Guerra**. Soy español, vivo en Kleve, a un paso de la frontera con Países Bajos, y me dedico a seleccionar candidatos en España para agencias de trabajo temporal neerlandesas certificadas.',
      'Conozco el proceso desde los dos lados: el de quien llega con una maleta y una oferta que suena bien, y el de quien busca gente para cubrir puestos. Esta web es la conversación que tengo con cada candidato antes de presentarle a nadie.'
    ],
    accent: 2
  },
  historia: {
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    tag: 'Rumbo Norte / Reclutamiento independiente',
    name: 'Iván Guerra Arroyo',
    tagline: 'Antes fui candidato.\nHoy te ayudo a entender el camino.',
    title: 'De dónde sale todo esto',
    blocks: [
      'Yo también entré a trabajar a través de una agencia neerlandesa. Como casi todo el mundo, con poca información y la idea de que ya me enteraría sobre la marcha. Me enteré, pero algunas cosas las aprendí tarde.',
      'Estando allí, la agencia abrió un programa de referidos y empecé a traer gente de España: amigos, conocidos, conocidos de conocidos. Fueron doce personas hasta que el programa terminó. Con eso vi dos cosas. Que en España hay mucha gente con ganas de trabajar que no sabe por dónde empezar. Y que la diferencia entre quien se queda y quien se vuelve casi siempre está en la información con la que llega.',
      'Hoy me dedico a esto como reclutador independiente: selecciono candidatos para agencias certificadas y les cuento antes lo bueno y lo malo. No todo el sector es un fraude, ni mucho menos. Hay agencias que funcionan bien y gente que se saca un dinero que en España no se sacaría. Pero también hay intermediarios que viven de que no sepas lo suficiente, y yo prefiero que lo sepas.',
      {
        note: {
          title: 'Lo que no soy',
          tone: 'ink',
          blocks: [
            'No soy la agencia ni tu empleador. Tampoco soy abogado, ni gestor, ni asesor fiscal. Lo que hay aquí es experiencia de campo y documentación oficial enlazada para que la compruebes tú. Para una decisión legal o fiscal seria, habla con un profesional colegiado.'
          ]
        }
      }
    ]
  },
  modelo: {
    id: 'modelo',
    eyebrow: 'El modelo',
    title: [
      'Cómo gano dinero,',
      'dicho claramente.'
    ],
    text: 'Si una web te dice que su servicio es gratis y no te explica de qué vive, desconfía. Yo te lo explico y luego decides.',
    paragraphs: [
      'Las agencias de trabajo temporal neerlandesas necesitan candidatos todo el año y gastan mucho en encontrarlos: portales de empleo, anuncios, reclutadores en varios países. **Yo soy uno de esos reclutadores. La agencia me paga por los candidatos que selecciono y le presento. Tú no pagas nada.**',
      'Ese es todo el negocio. Lo repito aquí porque es justo el punto en el que otros se ponen de perfil.'
    ],
    flow: [
      {
        who: 'Tú',
        title: 'No pagas nada',
        text: 'Ni cuota, ni comisión, ni descuento en la nómina. Ni antes, ni durante, ni después.'
      },
      { arrow: 'candidatura', back: false },
      {
        who: 'Iván · reclutador',
        title: 'Selecciona y presenta',
        text: 'Valoro tu perfil, te explico el sistema y, si tú lo autorizas, te presento a una agencia certificada.'
      },
      { arrow: 'me paga', back: true },
      {
        who: 'Agencia certificada',
        title: 'Te contrata y te paga',
        text: 'Es tu empleador real. Tu sueldo sale entero del convenio, sin ningún descuento por venir a través de mí.'
      }
    ],
    after: [
      { h3: 'El conflicto de interés, y qué hago con él' },
      'Cobrar de las agencias significa que **me interesa que acabes trabajando con alguna**. Es un conflicto de interés real y prefiero ponerlo sobre la mesa a que lo descubras tú.',
      'Lo que hago con él es contarte también lo que juega en contra: los descuentos, la cláusula que puede terminar tu contrato de un día para otro, la habitación atada al empleo, el colchón de dinero que necesitas. Nada de eso ayuda a que digas que sí más rápido.',
      'Lo hago por una razón práctica, no por bondad: **alguien que llega engañado y se vuelve a los dos meses no le sirve a nadie.** Ni a él, que ha perdido tiempo y dinero. Ni a la agencia, que ha pagado un proceso para nada. Ni a mí, porque un reclutador vale lo que vale la gente que se queda.',
      {
        pull: {
          text: 'Prefiero que cinco personas se lo piensen bien a que veinte cojan un avión sin saber lo que hay.',
          by: 'Iván'
        }
      }
    ]
  },
  limites: {
    id: 'no-hago',
    eyebrow: 'Los límites',
    title: [
      'Qué no hago,',
      'y por qué no.'
    ],
    text: 'Algunas de estas cosas no las hago por decisión propia. Otras, sencillamente, no se pueden hacer.',
    items: [
      {
        eyebrow: 'Prohibido por ley',
        title: 'Cobrarte a ti',
        blocks: [
          'La normativa neerlandesa prohíbe que una empresa de trabajo temporal cobre al trabajador por conseguirle empleo. No es una promesa comercial mía: es la ley. Si alguien te pide dinero, no es una agencia legal.'
        ]
      },
      {
        eyebrow: 'No es mi papel',
        title: 'Ser tu empleador',
        blocks: [
          'Yo selecciono y presento. Quien te contrata, te paga la nómina y responde del contrato es la agencia. Así sabes siempre a quién reclamar cada cosa.'
        ]
      },
      {
        eyebrow: 'Imposible de sostener',
        title: 'Garantizarte un trabajo',
        blocks: [
          'Depende de la temporada, del sector, de tu perfil y de decisiones de empresas que yo no controlo. Cualquiera que te garantice un puesto te está mintiendo o no sabe cómo funciona esto.'
        ]
      },
      {
        eyebrow: 'Decisión propia',
        title: 'Presentarte a ciegas',
        blocks: [
          'Antes de enviar tu candidatura te digo a qué agencia va, con su nombre legal y su número KvK, para que la compruebes tú antes de que salga nada.'
        ]
      },
      {
        eyebrow: 'Decisión propia',
        title: 'Perseguirte',
        blocks: [
          'Sin llamadas comerciales, sin newsletter automática, sin «te escribo otra vez por si acaso». Preguntas lo que necesites y, si decides que no, ahí se acaba.'
        ]
      },
      {
        eyebrow: 'Decisión propia',
        title: 'Vender tus datos',
        blocks: [
          'Tus datos van solo a las agencias que tú autorices marcando la casilla, y para nada más. No hay listas, ni terceros, ni publicidad. Está detallado en la [política de privacidad](privacidad.html).'
        ]
      }
    ],
    note: {
      title: 'Si esto te parece poco agresivo para un reclutador, tienes razón',
      tone: 'sand',
      blocks: [
        'Una web de reclutamiento normal te habría enseñado ya cuatro ofertas con el sueldo bruto en grande, una foto de gente sonriendo en un almacén y un contador de plazas libres. Aquí no vas a encontrar ninguna de esas cosas.'
      ]
    }
  },
  cta: {
    eyebrow: 'Hablamos',
    title: [
      'Pregúntame',
      'lo que quieras.'
    ],
    text: [
      'Contesto yo. Puedes preguntar por WhatsApp sin dar ningún dato personal y sin compromiso de nada.',
      'Si prefieres que valore tu perfil y te escriba con los números de tu caso, deja tu candidatura en el formulario de la página de inicio.'
    ],
    actions: [
      { label: 'Escribir por WhatsApp', href: 'wa:' },
      { label: 'Enviar mi candidatura', href: './#candidatura' }
    ],
    foot: 'Antes de escribir, quizá te merezca la pena leer [la guía](guia.html).'
  }
};
