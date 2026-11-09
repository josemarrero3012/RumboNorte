/* Página de inicio. Texto de la web vieja, adaptado a Rumbo Norte. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.inicio = {
  hero: {
    // Países Bajos fijo en el titular: es donde está la gran mayoría de las vacantes.
    countries: ['Países Bajos'],
    also: 'También vacantes en Bélgica y Alemania.',
    subtitle: 'Antes de hacer la maleta sabrás cuánto vas a cobrar, cuánto pagarás por la habitación y cuánto te quedará limpio. Después te presento a una agencia certificada.',
    note: 'En español, de tú a tú y sin coste para ti.',
    primaryCta: { label: 'Enviar mi candidatura', href: '#candidatura' },
    secondaryCta: { label: 'Así funciona', href: '#proceso' },
    ring: 'De España al norte de Europa',
    promises: [
      'Gratis para el candidato, siempre',
      'Agencias de trabajo temporal certificadas',
      'Información con fuentes oficiales',
      'Requisitos: +21 años · pasaporte UE · inglés B1'
    ],
    person: { name: 'Soy Iván', role: 'Tu reclutador en Rumbo Norte' },
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    // Mapa del hero: lo dibuja herramientas/mapa_europa.py, que también da estas posiciones.
    map: {
      src: 'assets/mapa/europa.svg',
      width: 1000,
      height: 1073,
      origin: [177, 843],
      places: [
        { name: 'Países Bajos', id: 'nl', pin: [458, 443] },
        { name: 'Alemania', id: 'de', pin: [561, 490] },
        { name: 'Bélgica', id: 'be', pin: [432, 502] }
      ]
    },
    logos: [
      { name: 'OTTO Workforce', src: 'assets/empresas/otto-workforce.webp', width: 120, height: 44 },
      { name: 'Covebo', src: 'assets/empresas/covebo.webp', width: 168, height: 30 },
      { name: 'Jobfield', src: 'assets/empresas/jobfield.webp', width: 124, height: 43 },
      { name: 'Randstad', src: 'assets/empresas/randstad.webp', width: 110, height: 47 },
      { name: 'Robin', src: 'assets/empresas/robin.webp', width: 128, height: 41 },
      { name: 'Tempo-Team', src: 'assets/empresas/tempo-team.webp', width: 170, height: 30 }
    ]
  },
  facts: {
    id: 'presentacion',
    eyebrow: 'Una persona, las cosas claras',
    arrowSrc: 'assets/logos/rumbo-norte-arrow.webp',
    title: [
      'Antes de hacer',
      'la maleta,',
      'hablemos de',
      'lo importante.'
    ],
    cta: { label: 'Conoce a Iván', href: 'quienes-somos.html' },
    intro: 'Me llamo Iván y soy reclutador.',
    paragraphs: [
      'Busco en España a gente que quiera trabajar en Países Bajos, donde están la gran mayoría de mis vacantes, y también en Bélgica y Alemania. La presento a agencias de trabajo temporal certificadas de esos países, que son las que contratan.',
      'Antes de presentarte a nadie te cuento lo que casi ningún anuncio cuenta: cuánto te queda limpio después de los descuentos, qué te cobran por la habitación y cómo comprobar que la agencia es legal. Si con eso delante te sigue interesando, seguimos.'
    ],
    note: {
      title: 'Para ti es gratis, ahora y después.',
      text: 'Yo selecciono y presento, pero no contrato: la última palabra es de la agencia y no te voy a prometer un puesto. Toda la información lleva su fuente oficial para que la compruebes tú.'
    }
  },
  topics: {
    id: 'como-funciona',
    items: [
      {
        eyebrow: 'Nómina',
        title: 'Lo que queda limpio en tu cuenta.',
        src: 'assets/ilustraciones/ilustracion-nomina.webp',
        width: 840,
        height: 456,
        figure: '1.250–2.200 €',
        unit: 'al mes en tu cuenta',
        figureNote: 'Cifra orientativa: depende de la agencia, la ciudad y el alojamiento.',
        text: 'Con 40 horas a la semana y el alojamiento ya descontado. La nómina, línea a línea, en la guía.',
        href: 'guia.html#nomina',
        linkHint: 'Entender la nómina'
      },
      {
        eyebrow: 'Alojamiento',
        title: 'Dónde vives y a qué precio.',
        src: 'assets/ilustraciones/ilustracion-alojamiento.webp',
        width: 840,
        height: 450,
        figure: '80–150 €',
        unit: 'a la semana por la habitación',
        figureNote: 'Cifra orientativa: depende de la agencia, la ciudad y el alojamiento.',
        text: 'Casi siempre compartida, y atada al contrato. Qué preguntar antes de firmar.',
        href: 'guia.html#alojamiento',
        linkHint: 'Conocer las condiciones'
      },
      {
        eyebrow: 'Registros',
        title: 'Saber con quién firmas.',
        src: 'assets/ilustraciones/ilustracion-registros.webp',
        width: 840,
        height: 453,
        figure: '2 registros',
        unit: 'públicos y gratis',
        text: 'SNA y SNF en Países Bajos: dos minutos desde el móvil para comprobar una agencia.',
        href: 'guia.html#verificar',
        linkHint: 'Verificar una agencia'
      }
    ]
  },
  destinos: {
    eyebrow: 'Destinos',
    title: [
      'Países Bajos primero.',
      'Bélgica y Alemania, también.'
    ],
    text: 'Casi todas mis vacantes están en Países Bajos. En Bélgica y Alemania también hay, pero menos y más puntuales. Las reglas cambian al cruzar la frontera: quién certifica a la agencia, qué número te piden al llegar y qué idioma pesa. Esto es lo básico de cada uno; lo de tu caso, lo hablamos.',
    id: 'destinos',
    hint: 'Un rumbo, tres destinos. Elige un país en la maqueta.',
    placeLabel: 'Ver su ficha',
    sceneUrl: 'js/paises-3d.js',
    defaultId: 'paises-bajos',
    posterSrc: 'assets/3d/paises-poster.webp',
    posterTallSrc: 'assets/3d/paises-poster-movil.webp',
    items: [
      {
        id: 'paises-bajos',
        name: 'Países Bajos',
        main: true,
        tag: 'Destino principal · la mayoría de vacantes',
        spot: [50, 69.8],
        spotTall: [44.9, 29.5],
        intro: 'El destino más rodado: mucha logística, invernaderos y producción, con alojamiento casi siempre gestionado por la agencia.',
        facts: [
          { label: 'Se pide sobre todo', value: 'Almacén, carretilla, alimentación, invernaderos' },
          { label: 'Cómo verificar la agencia', value: 'Registro SNA y, para el alojamiento, SNF' },
          { label: 'Tu número al llegar', value: 'BSN, en el ayuntamiento (*gemeente*)' },
          { label: 'Idioma', value: 'Inglés B1 conversacional, obligatorio. El neerlandés no se pide al principio.' }
        ],
        action: { label: 'Guía completa de Países Bajos', href: 'guia.html' }
      },
      {
        id: 'belgica',
        name: 'Bélgica',
        tag: 'Vacantes puntuales',
        spot: [17.5, 80.6],
        spotTall: [47, 92.4],
        intro: 'Cerca, con sueldos que se actualizan con la inflación y un país partido en dos idiomas. Dónde caigas cambia mucho el día a día.',
        facts: [
          { label: 'Se pide sobre todo', value: 'Logística, alimentación, producción' },
          { label: 'Cómo verificar la agencia', value: 'Acreditación de su región: Flandes, Valonia o Bruselas' },
          { label: 'Tu número al llegar', value: 'Número de la seguridad social belga (INSZ / NISS)' },
          { label: 'Idioma', value: 'Inglés B1 conversacional, obligatorio. Suman el neerlandés en Flandes y el francés en Valonia.' }
        ],
        action: {
          label: 'Pregúntame por Bélgica',
          href: 'wa:Hola Iván. Me interesa trabajar en Bélgica, ¿me cuentas cómo funciona?'
        }
      },
      {
        id: 'alemania',
        name: 'Alemania',
        tag: 'Vacantes puntuales',
        spot: [82.9, 82.4],
        spotTall: [52.8, 60.8],
        intro: 'El mercado más grande: industria, automoción y centros logísticos enormes. Pide más papeleo y premia al que se defiende en alemán.',
        facts: [
          { label: 'Se pide sobre todo', value: 'Logística, producción, metal y automoción' },
          {
            label: 'Cómo verificar la agencia',
            value: 'Permiso de cesión de trabajadores de la Bundesagentur für Arbeit'
          },
          { label: 'Tu número al llegar', value: 'Empadronamiento (*Anmeldung*), número fiscal y de seguridad social' },
          { label: 'Idioma', value: 'Inglés B1 conversacional, obligatorio. El alemán suma mucho más que en los otros dos.' }
        ],
        action: {
          label: 'Pregúntame por Alemania',
          href: 'wa:Hola Iván. Me interesa trabajar en Alemania, ¿me cuentas cómo funciona?'
        }
      }
    ]
  },
  servicios: {
    eyebrow: 'Lo primero',
    title: [
      'Qué hago exactamente',
      'y qué no.'
    ],
    text: 'En este sector hay muchos intermediarios que no dicen lo que son. Yo soy reclutador, lo pongo en la primera pantalla y aquí tienes lo que eso significa para ti.',
    id: 'que-hago',
    columns: [
      {
        title: 'Lo que sí hago',
        items: [
          {
            title: 'Hablo contigo y valoro tu perfil',
            blocks: [
              'Una conversación corta por WhatsApp o por teléfono: experiencia, idiomas, carnet y cuándo puedes viajar. Con eso ya sé para qué puestos encajas.'
            ]
          },
          {
            title: 'Te explico los números de tu caso',
            blocks: [
              'Nómina, descuentos, alojamiento, contrato de fase A, seguro médico, BSN. En español y con cifras orientativas.'
            ]
          },
          {
            title: 'Te asigno vacantes de agencias certificadas',
            blocks: [
              'Si cumples los requisitos y pasas la entrevista, te doy acceso a la plataforma de candidatos y te asigno vacantes de agencias de trabajo temporal certificadas, sobre todo de Países Bajos.'
            ]
          },
          {
            title: 'Te preparo para la entrevista y el contrato',
            blocks: [
              'Qué te van a preguntar, qué tienes que preguntar tú y qué mirar en el contrato antes de firmarlo.'
            ]
          }
        ]
      },
      {
        title: 'Lo que no hago',
        items: [
          {
            title: 'No soy tu empleador',
            blocks: [
              'Quien te contrata, te paga y firma contigo es la agencia. Mi trabajo es la selección y la presentación.'
            ]
          },
          {
            title: 'No te cobro nada',
            blocks: [
              'Ni inscripción, ni gestión, ni «reserva de plaza», ni traducción de papeles. Nada. Si alguien te pide dinero en mi nombre, no soy yo.'
            ]
          },
          {
            title: 'No garantizo trabajo',
            blocks: [
              'Puedo decirte si tu perfil encaja y presentarte. Contratar lo decide la agencia, y depende de la temporada y del puesto.'
            ]
          }
        ]
      }
    ],
    note: {
      title: 'Aviso importante',
      tone: 'sand',
      blocks: [
        'Una agencia de trabajo temporal legal no puede cobrarte por darte trabajo. En Países Bajos lo prohíbe la *Waadi* (artículo 9), y en Bélgica y Alemania tampoco pueden cobrar al trabajador por la cesión. Si te piden dinero por adelantado para «reservar plaza», «tramitar el BSN» o «apuntarte a la lista», es una estafa. Vale conmigo y con cualquier otro.'
      ]
    }
  },
  perfiles: {
    eyebrow: 'Lo que se busca',
    title: [
      'Los perfiles que',
      'más me piden.'
    ],
    text: 'No son ofertas concretas. Es lo que las agencias para las que selecciono, sobre todo en Países Bajos, piden casi siempre. Qué hay abierto en cada momento te lo cuento cuando hablemos, porque cambia cada semana.',
    id: 'perfiles',
    items: [
      {
        eyebrow: 'Logística',
        id: 'almacen',
        photo: 'assets/perfiles/almacen',
        focus: [41, 45],
        short: 'Almacén',
        title: 'Almacén y preparación de pedidos',
        text: 'Preparar pedidos (*orderpicking*), cargar y descargar, escanear mercancía. Es la entrada más habitual. No hace falta experiencia; sí aguantar turnos y muchas horas de pie.'
      },
      {
        eyebrow: 'Logística',
        id: 'carretilla',
        photo: 'assets/perfiles/carretilla',
        focus: [34, 40],
        short: 'Carretilla',
        title: 'Carretilleros y retráctil',
        text: 'El perfil más buscado del almacén y de los mejor pagados. Si has llevado carretilla o *reachtruck*, dímelo desde el principio. Allí suelen pedir el certificado neerlandés, y muchas agencias te lo pagan.'
      },
      {
        eyebrow: 'Transporte',
        id: 'camion',
        photo: 'assets/perfiles/camion',
        focus: [50, 50],
        short: 'Camión',
        title: 'Conductores de camión',
        text: 'Rutas nacionales e internacionales, distribución y reparto. Es uno de los perfiles con más vacantes. Se pide carnet C o C+E en vigor, el CAP (código 95) y tarjeta de tacógrafo. Cuánta experiencia piden depende de la agencia y del puesto.'
      },
      {
        eyebrow: 'Transporte',
        id: 'autobus',
        photo: 'assets/perfiles/autobus',
        focus: [50, 50],
        short: 'Autobús',
        title: 'Conductores de autobús',
        text: 'Transporte urbano, interurbano y de empresa. Es uno de los perfiles con más vacantes. Se pide carnet D en vigor y el CAP (código 95). Los requisitos exactos dependen de la agencia y del puesto.'
      },
      {
        eyebrow: 'Industria',
        id: 'alimentacion',
        photo: 'assets/perfiles/alimentacion',
        focus: [31, 45],
        short: 'Alimentación',
        title: 'Producción alimentaria',
        text: 'Líneas de envasado, control de producto y limpieza de línea. Se trabaja a turnos, muchas veces en frío, y hay movimiento todo el año.'
      },
      {
        eyebrow: 'Campo',
        id: 'invernaderos',
        photo: 'assets/perfiles/invernaderos',
        focus: [45, 45],
        short: 'Invernaderos',
        title: 'Agricultura e invernaderos',
        text: 'Cosecha, plantación y clasificación. Va muy por temporadas, con picos claros y meses flojos, así que conviene saber las fechas antes de comprar el billete.'
      },
      {
        eyebrow: 'Servicios',
        id: 'limpieza',
        photo: 'assets/perfiles/limpieza',
        focus: [38, 45],
        short: 'Limpieza',
        title: 'Limpieza industrial',
        text: 'Limpieza de fábricas, naves y plantas de producción. Mucho turno de noche y de fin de semana.'
      },
      {
        eyebrow: 'Oficios',
        id: 'construccion',
        photo: 'assets/perfiles/construccion',
        focus: [68, 40],
        short: 'Construcción',
        title: 'Construcción y metal',
        text: 'Soldadores, montadores, electricistas. Aquí sí piden experiencia que se pueda demostrar y, a veces, certificados como el VCA de seguridad.'
      }
    ],
    requisitos: {
      title: 'Requisitos obligatorios para cualquier vacante',
      items: [
        'Tener 21 años o más.',
        'Nacionalidad o pasaporte de la Unión Europea.',
        'Inglés nivel B1 conversacional como mínimo.'
      ],
      text: 'Son indispensables y no tienen excepciones. Si no cumples alguno de los tres, no puedo presentarte a ninguna de mis vacantes.'
    },
    note: {
      title: 'Lo que suma en cualquier perfil',
      tone: 'sand',
      blocks: [
        'Carnet B, y mejor todavía si tienes coche. Poder viajar pronto. Y la intención de quedarte una temporada de verdad, no tres semanas.',
        'Si cumples los tres requisitos, escríbeme y vemos qué vacantes encajan con tu perfil.'
      ]
    }
  },
  proceso: {
    eyebrow: 'El proceso',
    title: [
      'Cómo es la selección,',
      'paso a paso.'
    ],
    text: 'Seis pasos. Del 2 al 4 son la entrevista conmigo.',
    id: 'proceso',
    steps: [
      {
        when: 'Día 1',
        title: 'Me escribes o envías tu candidatura',
        text: 'Por WhatsApp o con el formulario. Cuéntame tu situación: idiomas, si tienes carnet, cuándo podrías viajar y qué te preocupa. No hace falta que lo tengas todo decidido.'
      },
      {
        when: 'Entrevista',
        title: 'Confirmo que cumples los requisitos',
        text: 'Lo primero que compruebo son los tres requisitos obligatorios para cualquier vacante: tener 21 años o más, nacionalidad o pasaporte de la Unión Europea y un nivel de inglés B1 conversacional como mínimo. Si falta alguno, te lo digo en ese momento y no seguimos.'
      },
      {
        when: 'Entrevista',
        title: 'Hablamos de tu experiencia',
        text: 'Repasamos dónde has trabajado, en qué puestos y durante cuánto tiempo, si tienes carnet o algún certificado (carretilla, CAP…) y desde cuándo podrías viajar. Con eso veo qué vacantes encajan contigo.'
      },
      {
        when: 'Entrevista en inglés',
        title: 'Unas preguntas en inglés',
        text: 'Te hago unas preguntas en inglés para comprobar tu nivel. No es un examen de gramática: es ver que puedes mantener una conversación, porque es lo que te van a pedir en el trabajo.'
      },
      {
        when: 'Si pasas la entrevista',
        title: 'Te registras en la plataforma de candidatos',
        blocks: [
          'Para acceder a nuestras vacantes te envío un enlace de acceso para candidatos. Ahí te registras y subes toda la documentación necesaria.',
          {
            ul: [
              'Lo más importante es el **CV**. Tiene que estar actualizado, con las fechas de cada trabajo en mes y año, tus datos al día y todo en inglés.',
              'Ten en cuenta también que algunas de nuestras agencias piden un **certificado de antecedentes penales** limpio, con una antigüedad máxima de 6 meses.'
            ]
          },
          'Cuando estés registrado, te asigno **tres vacantes** que se ajusten a tu perfil.'
        ]
      },
      {
        when: 'Antes de viajar',
        title: 'Las condiciones de trabajo',
        blocks: [
          {
            ul: [
              '**Sueldo:** en puestos sin cualificación se cobra el salario mínimo. En Países Bajos, para mayores de 21 años, es de 14,99 € brutos la hora (unos 15 €) desde el 1 de julio de 2026.',
              '**Alojamiento y transporte:** los organiza la agencia que te contrata como empleado, y los dos se descuentan del sueldo. Normalmente la casa y la habitación son compartidas, aunque depende de la agencia y del alojamiento.',
              '**Turnos:** pueden ser de mañana, tarde o noche.',
              '**Viaje:** el vuelo y el traslado hasta la oficina de la agencia o el alojamiento los pagas tú. Algunas agencias recogen en el aeropuerto, pero no todas.',
              '**Dinero para empezar:** te aconsejo llevar un colchón para comer y moverte hasta el primer pago, que suele llegar a las dos semanas.'
            ]
          },
          { small: 'Todas las cifras de esta página son orientativas y no son una promesa. Lo que cobres y lo que te descuenten lo fija la agencia que te contrate como empleado, y depende de la ciudad, el puesto, las horas, los turnos y el alojamiento y su tipo. Las condiciones reales solo las sabrás cuando la agencia te las dé por escrito.' },
          'Antes de firmar, repasa [la lista de preguntas de la guía](guia.html#preguntas-firmar).'
        ]
      }
    ],
    actions: [
      { label: 'Empezar por el paso 1', href: '#candidatura' },
      { label: 'Leer antes la guía completa', href: 'guia.html' }
    ]
  },
  preguntas: {
    eyebrow: 'Sin rodeos',
    title: [
      'Las preguntas que',
      'me hace todo el mundo.'
    ],
    text: 'Las dudas más habituales, agrupadas por tema. Encuentra lo que necesitas saber sobre las condiciones, el viaje y la selección.',
    id: 'preguntas',
    groups: [
      {
        title: 'Sueldo y alojamiento',
        items: [
          {
            q: '¿Cuánto se cobra de verdad, después de todos los descuentos?',
            blocks: [
              'Trabajando 40 horas semanales y con el alojamiento ya descontado, lo que entra en la cuenta puede moverse en un abanico amplio, **entre 1.250 y 2.200 € al mes**. No es una cifra fija ni garantizada: depende de la agencia que te contrate, el puesto, la ciudad, las horas extra y los turnos, y el alojamiento y su tipo. El bruto es bastante más alto: la diferencia se la llevan la retención de impuestos, el alojamiento, el seguro médico y el transporte.',
              'Hay una parte que no ves cada semana pero que es tuya: las *reservas* de vacaciones y la paga extra (*vakantiegeld*, un 8,33 % del bruto). Se acumulan aparte y se cobran cuando las pides o en mayo.',
              'El desglose línea a línea de una nómina está en [la guía](guia.html#nomina).',
              { small: window.RumboNorteCifras.aviso }
            ]
          },
          {
            q: '¿Cuánto me quitan por el alojamiento?',
            blocks: [
              'Como orientación, **entre 80 y 150 € por semana y por persona**, según la agencia, la ciudad y el tipo de alojamiento. Casi siempre en habitación compartida con otra persona, en un bungalow, un antiguo hotel o un edificio reconvertido.',
              'Hay un límite legal: el descuento por alojamiento **no puede superar el 25 % del salario mínimo** que te corresponda. Y solo se puede descontar directamente de la nómina si el alojamiento cumple la norma **SNF**. Si te descuentan más, o el alojamiento no está certificado, algo va mal.',
              'Antes de presentarte a una agencia le pregunto tres cosas, y te aconsejo que las tengas tú también por escrito: cuánto cuesta a la semana, cuántas personas hay por habitación y a qué distancia está del trabajo.'
            ]
          },
          {
            q: 'Si pierdo el trabajo, ¿me quedo también sin casa?',
            blocks: [
              'Esta es la pregunta importante y casi nadie la responde. La respuesta honesta: **en muchos casos sí, porque el alojamiento va atado al contrato de trabajo**.',
              'Durante la **fase A** del contrato es habitual que exista la llamada cláusula de puesta a disposición (*uitzendbeding*): si la empresa cliente deja de necesitarte, el contrato termina prácticamente de un día para otro. Y si el alojamiento depende del contrato, se acaba con él.',
              'Lo que sí puedes hacer: **preguntar por escrito, antes de firmar, cuántos días tienes para dejar la habitación** si te quedas sin trabajo. Yo lo pregunto siempre antes de presentar a alguien. Una agencia seria lo contesta sin problema, y una que se pone nerviosa con esa pregunta ya te está diciendo mucho.'
            ]
          },
          {
            q: '¿Cuánto dinero necesito para empezar?',
            blocks: [
              'Como orientación, calcula **entre 800 y 1.200 €** de colchón. Se van en el viaje, en comer las dos o tres primeras semanas hasta el primer cobro, en la fianza del alojamiento si la piden y en los primeros gastos sueltos.',
              { cifra: window.RumboNorteCifras.nota },
              'Lo normal en el sector es **cobrar por semanas**, así que el primer ingreso suele llegar entre siete y catorce días después de empezar. Ese hueco es el que hay que cubrir. Ir sin colchón es el error más caro que veo.'
            ]
          },
          {
            q: '¿Tengo que pagarte algo a ti o a la agencia?',
            blocks: [
              '**No. Ni un euro, en ningún momento.** Ni a mí ni a la agencia.',
              'Las agencias de trabajo temporal no pueden cobrar al trabajador por conseguirle un empleo; en Países Bajos lo prohíbe expresamente la ley.'
            ]
          }
        ]
      },
      {
        title: 'Preparar el viaje',
        items: [
          {
            q: '¿Necesito hablar inglés o neerlandés?',
            blocks: [
              '**Inglés, sí: un nivel B1 conversacional como mínimo es obligatorio para cualquiera de mis vacantes, sin excepciones.** Lo compruebo yo en la entrevista con unas preguntas en inglés.',
              'Lo necesitas para entender instrucciones de seguridad, turnos y números, y para hablar con tus responsables. Con un nivel más alto se abren puestos con más responsabilidad. El neerlandés casi nadie lo pide al principio, pero es lo que marca la diferencia si te quedas.'
            ]
          },
          {
            q: '¿Hace falta carnet de conducir?',
            blocks: [
              'No es obligatorio, pero **cambia bastante las cosas**. Muchos alojamientos están en polígonos o en pueblos pequeños y el transporte lo organiza la agencia con furgonetas a horas fijas.',
              'Con carnet B (y sobre todo si te atreves a conducir allí) tienes más flexibilidad, más puestos donde elegir y dependes menos de los demás. El carnet español vale en Países Bajos sin hacer ningún trámite.',
              'Si eres carretillero, es un plus real: el *heftruck* se paga mejor. Allí suelen pedir el certificado neerlandés, y muchas agencias te lo pagan cuando ya estás dentro.',
              'Para trabajar de **conductor de camión o de autobús**, el carnet profesional (C, C+E o D) y el CAP sí son obligatorios.'
            ]
          },
          {
            q: '¿Qué es el BSN y cómo lo consigo?',
            blocks: [
              'El **BSN** (*burgerservicenummer*) es el número de identificación ciudadana neerlandés. Sin él no puedes cobrar en condiciones, ni tener seguro médico, ni casi nada. Es lo primero que se hace al llegar.',
              'Se pide con cita en el ayuntamiento (*gemeente*). Si vas a estar menos de cuatro meses, te registras como no residente en una de las oficinas RNI; si vas a estar más, te empadronas y necesitas una dirección. Normalmente la agencia te acompaña o te da la cita.',
              '**Nadie te puede cobrar por tramitar el BSN.** Es gratis. Lo tienes explicado paso a paso en [la guía](guia.html#bsn).'
            ]
          },
          {
            q: '¿Puedo ir con mi pareja o con un amigo?',
            blocks: [
              'Sí, y de hecho se lleva mejor. Pero conviene saber una cosa: **que os contraten a la vez no garantiza que os alojen juntos ni que trabajéis en el mismo turno**. El alojamiento se asigna según lo que haya libre.',
              'Si para vosotros es innegociable estar juntos, dímelo desde el primer mensaje: lo planteo así a la agencia y pido que quede confirmado por escrito. Es mejor esperar dos semanas más que llegar y descubrir que estáis a cuarenta kilómetros el uno del otro.'
            ]
          },
          {
            q: '¿Qué país me conviene más?',
            blocks: [
              '**En la mayoría de los casos, Países Bajos:** es donde están casi todas mis vacantes y donde el sistema está más rodado. Bélgica se parece mucho y, si además hablas francés, Valonia y Bruselas suman. **Alemania paga bien la experiencia en industria y metal**, pero el alemán pesa más y hay más trámites al llegar. En los tres, el inglés B1 es obligatorio.',
              'Lo vemos en la primera conversación con tu perfil delante. No te voy a mandar a un país que no te encaja solo porque ahí haya plazas.'
            ]
          }
        ]
      },
      {
        title: 'Selección y agencias',
        items: [
          {
            q: '¿Cómo sé si una agencia es legal?',
            blocks: [
              'En Países Bajos se comprueba en dos registros públicos, gratis, en dos minutos y desde el móvil:',
              {
                ul: [
                  '**SNA** — [normeringarbeid.nl](https://www.normeringarbeid.nl). Audita que la empresa paga los impuestos y las cotizaciones como debe.',
                  '**SNF** — [normeringflexwonen.nl](https://www.normeringflexwonen.nl). Certifica que el alojamiento cumple unos mínimos.'
                ]
              },
              'En Bélgica la agencia tiene que estar acreditada por su región, y en Alemania necesita el permiso de cesión de la Bundesagentur für Arbeit. Cuando te asigne una vacante sabrás qué agencia es: busca su nombre legal en el registro y compruébalo tú, no solo yo. Si el nombre exacto no aparece en el registro, para. En [la guía](guia.html#verificar) tienes el paso a paso y las señales de alarma.'
            ]
          },
          {
            q: '¿Qué puestos tienes ahora mismo?',
            blocks: [
              'Los perfiles que más me piden los tienes [más arriba](#perfiles): **logística y almacén** (el país entero funciona como el almacén de Europa), **conductores de camión y de autobús**, **producción de alimentación**, **agricultura e invernaderos**, que van muy por temporadas, y **limpieza industrial**. Construcción y metal piden más experiencia acreditada.',
              'Lo que hay abierto en concreto te lo digo por WhatsApp, porque cambia de una semana a otra y prefiero no colgar en la web algo que mañana ya no existe. Ahí también te explico cómo funciona cada sector por dentro, los turnos y lo que se paga.'
            ]
          },
          {
            q: '¿Qué me vas a preguntar en la primera conversación?',
            blocks: [
              'Primero confirmo los tres requisitos: edad, nacionalidad y nivel de inglés. Después, qué experiencia tienes, si tienes carnet, desde cuándo podrías viajar y si vas solo o acompañado. Al final te hago unas preguntas en inglés para comprobar tu nivel.',
              '**En esa primera conversación no te pido el DNI ni ningún documento.** Si alguien te los pide antes de haber hablado contigo, desconfía.'
            ]
          },
          {
            q: '¿Cuánto tarda todo desde que te escribo?',
            blocks: [
              'Depende sobre todo de la temporada y de tu perfil, así que cualquier cifra cerrada sería mentira. Lo que sí te puedo decir es el orden real: primero confirmo los requisitos y hacemos la entrevista; si la pasas, te registras en la plataforma de candidatos, subes tu documentación y te asigno tres vacantes que encajen con tu perfil.',
              'Desde que te asigno las vacantes, la decisión ya no es mía, y no voy a fingir que lo es. El proceso completo, paso a paso, está [en el apartado del proceso](#proceso).'
            ]
          }
        ]
      }
    ]
  },
  aviso: {
    eyebrow: 'La guía práctica',
    title: [
      'Viaja con las',
      'preguntas resueltas.'
    ],
    text: 'BSN, nómina, alojamiento, contratos y coste de vida. Toda la información para preparar tu llegada a Países Bajos, con sus fuentes oficiales.',
    cta: { label: 'Leer la guía completa', href: 'guia.html' }
  },
  candidatura: {
    id: 'candidatura',
    eyebrow: 'Tu candidatura',
    title: [
      'Cuéntame tu caso',
      'y vemos si encajas.'
    ],
    paragraphs: [
      'Lo más rápido es WhatsApp: te contesto yo y en diez minutos sabemos si hay algo para ti. Si prefieres dejarlo por escrito, rellena el formulario y te escribo yo.',
      'Sin llamadas comerciales, sin newsletter y sin nadie insistiendo a los tres días.'
    ],
    whatsapp: { label: 'Abrir WhatsApp', note: 'El mensaje ya va escrito. Solo tienes que darle a enviar.' },
    form: {
      name: 'candidatura',
      action: 'gracias.html',
      subject: 'Nueva candidatura desde proyectoholanda.com',
      trap: 'No rellenes esto',
      heading: 'Formulario de candidatura',
      required: 'Los campos marcados con * son obligatorios.',
      submit: 'Enviar mi candidatura',
      failure: 'No se ha podido enviar. Revisa la conexión o [escríbeme por WhatsApp](wa:).',
      consentValue: 'Sí, consiente que se valore su candidatura y se ceda a agencias de Países Bajos, Bélgica o Alemania',
      prefijos: [
      '+34 ES',
      '+31 NL',
      '+351 PT',
      '+33 FR',
      '+49 DE',
      '+32 BE',
      '+39 IT',
      '+40 RO',
      '+48 PL',
      '+44 UK',
      '+52 MX',
      '+54 AR',
      '+57 CO',
      '+58 VE',
      '+593 EC',
      '+51 PE',
      '+56 CL',
      'Otro'
    ],
    edadHint: 'Mínimo 21 años',
    nacionalidad: {
      label: '¿Tienes nacionalidad o pasaporte de la Unión Europea?',
      options: ['Elige una opción', 'Sí', 'No']
    },
    ingles: [
      'Elige una opción',
      'Menos de B1',
      'B1 (conversacional)',
      'B2 o superior'
    ],
    destinos: [
      { value: 'Países Bajos', note: '(la mayoría de vacantes)' },
      'Bélgica',
      'Alemania',
      'Me da igual'
    ],
    idiomas: [
      'Español',
      'Neerlandés',
      'Francés',
      'Alemán',
      'Otro'
    ],
    carnet: [
      'Carnet B',
      'Coche propio',
      'Carnet C o C+E (camión)',
      'Carnet D (autobús)',
      'CAP (código 95)',
      'Certificado de carretillero',
      'No tengo carnet'
    ],
    sector: [
      'Elige una opción',
      'Logística y almacén',
      'Carretillero / reachtruck',
      'Conductor de camión (C / C+E)',
      'Conductor de autobús (D)',
      'Producción y alimentación',
      'Agricultura e invernaderos',
      'Limpieza industrial',
      'Construcción o metal',
      'Automoción e industria',
      'Hostelería',
      'Me da igual, lo que salga',
      'Todavía no lo sé'
    ],
    consent: 'He leído la [política de privacidad](privacidad.html) y acepto que **Rumbo Norte (Iván Guerra Arroyo) use estos datos para valorar mi candidatura y, si encajo, los envíe a agencias de trabajo temporal certificadas de Países Bajos, Bélgica o Alemania** para que se pongan en contacto conmigo. Sé que es una transferencia a otra empresa dentro de la Unión Europea y que puedo retirar este consentimiento cuando quiera escribiendo a [ivan@proyectoholanda.com](mailto:ivan@proyectoholanda.com).',
      foot: 'No cuesta nada, ni ahora ni después. No te voy a llamar sin avisarte antes por WhatsApp.'
    }
  }
};
