/* Metas. Texto de la web vieja, adaptado a Rumbo Norte. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.metas = {
  hero: {
    eyebrow: 'Metas',
    title: [
      'Ir a trabajar',
      'no es la meta.',
      'Es el primer paso.'
    ],
    text: [
      'La guía te cuenta dónde te metes. Esta página te cuenta **adónde se puede llegar**: salir del alojamiento de la agencia, tener coche, alquilar algo tuyo, pasar a contrato directo con la empresa y acabar con un indefinido.',
      'No es motivación barata. Son ocho metas con lo que cuesta cada una y el plazo real en que se consiguen. Es el camino que hace la gente que se queda. No es rápido ni bonito, pero se hace.'
    ],
    accent: 1
  },
  aviso: {
    title: 'Antes de seguir leyendo',
    tone: 'ink',
    blocks: [
      'Esto **no es una promesa y no le pasa a todo el mundo**. Hay gente que se vuelve a los dos meses, gente que se queda estancada en el primer escalón durante años y gente a la que le sale mal por motivos que no controla.',
      'Lo que sí es cierto es que **el camino existe y está marcado**. Quien lo recorre no es el más listo ni el que más suerte tiene: es el que aguanta los primeros meses, no se funde lo que gana y usa el tiempo muerto en aprender algo. No hay atajo, y quien te venda uno te está vendiendo algo.'
    ]
  },
  mapa: {
    id: 'mapa',
    eyebrow: 'El mapa',
    title: [
      'Cuánto tarda',
      'de verdad cada cosa.'
    ],
    deck: 'Plazos de gente que va en serio y trabaja a jornada completa. Si vas a medio gas, multiplica por dos.',
    blocks: [
      {
        table: {
          caption: 'Recorrido habitual · orientativo',
          head: [
            'Momento',
            'Dónde estás',
            'Qué se consigue'
          ],
          rows: [
            {
              cells: [
                'Semana 1–4',
                'Fase A, alojamiento de la agencia',
                'BSN, seguro médico, cuenta bancaria, bici. Gastas más de lo que ingresas.'
              ]
            },
            {
              cells: [
                'Mes 2–6',
                'Fase A, ya con ritmo',
                'Primer ahorro real. Recuperas el colchón que trajiste y empiezas a acumular.'
              ]
            },
            {
              cells: [
                'Mes 6–12',
                'Final de fase A',
                'Certificados (carretilla, VCA), neerlandés básico, coche si lo necesitas.'
              ]
            },
            {
              cells: [
                'Año 1–2',
                'Fase B o contrato directo',
                'Sales del alojamiento de la agencia. Alquiler propio. Contrato con la empresa cliente.'
              ]
            },
            {
              cells: [
                'Año 2–4',
                'Contrato temporal en la empresa',
                'Subes de puesto. Encadenas contratos hasta el indefinido.'
              ],
              kind: 'sub'
            },
            {
              cells: [
                'Año 3–5',
                'Contrato indefinido',
                'Se abre todo: alquileres buenos, crédito, hipoteca. Independencia real.'
              ],
              kind: 'total'
            }
          ]
        }
      },
      {
        small: 'Los saltos no son automáticos ni están garantizados. Dependen de la empresa, del sector, de la temporada y, sobre todo, de que tú hagas la parte que te toca. Pero ninguno de estos escalones es raro: es el recorrido normal de quien se queda.'
      }
    ]
  },
  metas: {
    id: 'metas',
    eyebrow: 'Una por una',
    title: [
      'Las ocho metas,',
      'con su precio y su plazo.'
    ],
    deck: 'En orden. Cada una se apoya en la anterior: saltarse escalones es la forma más rápida de acabar volviendo.',
    goals: [
      {
        when: 'Mes 1 a mes 6',
        title: 'Ahorrar de verdad, no «lo que sobre»',
        blocks: [
          'Esta es la meta madre. Si esta falla, no hay ninguna de las siete siguientes. Y la mayoría de la gente que fracasa en Países Bajos no fracasa por el trabajo: fracasa aquí.',
          'El método que funciona es aburrido: **el día que cobras, apartas primero y vives con lo que queda**. No al revés. Abre una segunda cuenta (en cualquier banco neerlandés se hace en cinco minutos desde el móvil) y mete ahí la cantidad fija en cuanto entra la nómina. Lo que no ves, no te lo gastas.',
          {
            stats: [
              { value: '200–255 €', label: 'Ahorrable a la semana con la nómina del ejemplo de la guía' },
              { value: '600–800 €', label: 'Objetivo mensual realista sin vivir mal' },
              { value: '7.000–9.500 €', label: 'En doce meses, si aguantas el ritmo' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Los tres agujeros por los que se va el dinero de la gente, por orden: **los fines de semana** (una noche mala son 80 €, cuatro al mes son un coche al año), **los envíos a casa sin control** —manda, pero pon una cifra fija y no la muevas— y **la comida comprada hecha**. Cocinar en grupo con los del piso es el ahorro más grande y más fácil.',
          {
            note: {
              title: 'Regla práctica',
              tone: 'stone',
              blocks: [
                'Los primeros seis meses no compres nada que no puedas cargar en la bici. Suena tonto y funciona: te obliga a distinguir lo que necesitas de lo que te apetece mientras todavía no tienes margen.'
              ]
            }
          }
        ]
      },
      {
        when: 'Primera semana',
        title: 'La bici',
        blocks: [
          'Es la primera compra que hay que hacer y la que mejor se amortiza de toda la lista. Entre **60 y 120 € de segunda mano**, y a partir de ahí dejas de depender del horario de la furgoneta de la empresa para todo lo que no sea ir a trabajar.',
          'Cómprala en un *fietsenwinkel* con garantía o en Marktplaats, que es el portal de segunda mano de todo el país. Dos avisos: **no compres una bici en la calle a alguien que te la ofrece suelta** —casi siempre son robadas y es delito comprarlas— y **gástate 20 € en un candado bueno**, porque el robo de bicis allí es deporte nacional.',
          'Con bici cambia todo: haces la compra en el supermercado barato en vez de en el caro que tienes al lado, vas al ayuntamiento sin pedir favores y sales del alojamiento el domingo sin depender de nadie.'
        ]
      },
      {
        when: 'Mes 6 a mes 12',
        title: 'Los papeles que valen dinero',
        blocks: [
          'Antes de gastar en un coche, gasta en ti. Los certificados neerlandeses son baratos, se sacan en días y **suben el precio de tu hora de forma inmediata**. Es la inversión con mejor retorno de toda la lista.',
          {
            ul: [
              '**Carretilla elevadora (*heftruck*) y transpaleta (*reachtruck*).** Curso de uno o dos días. Muchas agencias te lo pagan si llevas unos meses y lo pides. Pídelo.',
              '**VCA.** Es el certificado básico de seguridad laboral. Cuesta poco, se aprueba estudiando un par de tardes y en algunos sectores directamente no te contratan sin él.',
              '**Neerlandés.** Aquí está la palanca de verdad. No hace falta hablarlo bien: con entender las instrucciones y poder contestar ya te separas del 90 % de los extranjeros de tu turno, y eres el primero al que ascienden. Empieza con una aplicación gratis en los trayectos y pregunta si la empresa paga clases: muchas lo hacen.'
            ]
          },
          {
            note: {
              title: 'Por qué esto va antes que el coche',
              tone: 'sand',
              blocks: [
                'Un coche te cuesta dinero todos los meses. Un certificado te lo devuelve todos los meses. Con el mismo esfuerzo, el orden importa.'
              ]
            }
          }
        ]
      },
      {
        when: 'Mes 8 a mes 18',
        title: 'El coche',
        blocks: [
          'No es imprescindible, pero cambia tu vida si el trabajo está lejos, si haces turnos de noche o si quieres poder cambiar de empleo sin depender de que la nueva empresa tenga transporte.',
          'Un coche usado decente ronda los **2.000–4.000 €**. Lo importante no es ese número, sino lo que cuesta tenerlo parado:',
          {
            stats: [
              { value: '40–70 €/mes', label: 'Seguro obligatorio (*WA-verzekering*)' },
              { value: '30–70 €/mes', label: 'Impuesto de circulación (*wegenbelasting*), según peso y provincia' },
              { value: '~50 €/año', label: 'La *APK*, que es la ITV de allí' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Súmale gasolina, que es cara. Cuenta con **150–250 € al mes** de coste real antes de moverlo. Si eso se come tu ahorro mensual, todavía no toca.',
          {
            note: {
              title: 'Dos cosas que la gente descubre tarde',
              tone: 'stone',
              blocks: [
                '**El carnet español vale** en Países Bajos sin ningún trámite mientras esté en vigor.',
                '**Traerse el coche de España tiene truco.** Si te empadronas allí, hay un plazo para matricularlo en Países Bajos, y eso implica pagar un impuesto de matriculación (el *BPM*) que en muchos casos cuesta más que el propio coche. Antes de subirte con tus matrículas, infórmate en la [Belastingdienst](https://www.belastingdienst.nl). A casi todo el mundo le sale más barato comprar allí.'
              ]
            }
          }
        ]
      },
      {
        when: 'Año 1 a año 2',
        title: 'Salir del alojamiento de la agencia',
        blocks: [
          'Este es el escalón que más se nota. Dejas de compartir habitación, dejas de que tu casa dependa de tu contrato y empiezas a vivir como una persona en vez de como un trabajador desplazado.',
          'Lo que piden los caseros, y por qué es difícil al principio:',
          {
            ul: [
              '**Contrato de trabajo**, cuanto más estable mejor. Con fase A y cláusula de puesta a disposición te van a decir que no muchas veces.',
              '**Ingresos de tres a cuatro veces el alquiler.** Es el filtro estándar y es el motivo real por el que no te cogen, no tu acento.',
              '**Empadronamiento** en el municipio y extractos bancarios de los últimos meses.',
              '**Fianza** (*borg*) de uno o dos meses, más a veces gastos de agencia inmobiliaria.'
            ]
          },
          {
            stats: [
              { value: '400–600 €/mes', label: 'Habitación en piso compartido, fuera de las grandes ciudades' },
              { value: '800–1.200 €/mes', label: 'Estudio o piso pequeño en ciudad mediana' },
              { value: '1.500 €+', label: 'Lo mismo en Ámsterdam, Utrecht o La Haya' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Dos cosas que casi nadie aprovecha: existe una **ayuda estatal al alquiler** (*huurtoeslag*) para rentas bajas cuando el alquiler no pasa de cierto tope; se pide con el DigiD en [toeslagen.nl](https://www.toeslagen.nl) y no es automática. Y existe la **vivienda social** (*sociale huurwoning*), muchísimo más barata, con listas de espera de años: por eso hay que apuntarse el primer año aunque no la necesites todavía. El tiempo en la lista es lo que vale.',
          { h4: 'Vivir en Alemania y trabajar en Países Bajos' },
          'Mucha gente que trabaja cerca de la frontera acaba alquilando en Alemania, en la zona de Renania del Norte-Westfalia, porque **por el mismo dinero se vive bastante mejor**. Es legal y es común. Pero infórmate antes, porque pasas a ser trabajador transfronterizo (*grensarbeider*) y eso cambia dos cosas importantes: **dónde tributas** y **cómo funciona tu seguro médico** (necesitarás el formulario S1 para poder ir al médico en Alemania con el seguro neerlandés). No es complicado, pero hay que hacerlo bien desde el principio.'
        ]
      },
      {
        when: 'Año 1 a año 2',
        title: 'Que te contrate directamente la empresa',
        blocks: [
          'Mientras estás en la agencia, la empresa donde trabajas paga por ti bastante más de lo que tú cobras. La diferencia se la queda la agencia. Cuando pasas a contrato directo, **parte de esa diferencia pasa a tu bolsillo**, y además dejas de tener un intermediario entre tú y tu empleador.',
          'Cómo ocurre en la práctica: pasas meses en la misma empresa, te conocen, funcionas, y llega un momento en que a ellos les sale más a cuenta contratarte que seguir pagando a la agencia. Ese momento existe y llega solo si tú haces que llegue.',
          'Lo que de verdad pesa cuando deciden a quién se quedan:',
          {
            ul: [
              '**Que no faltes y llegues a la hora.** Suena básico. Es literalmente el primer filtro y elimina a mucha gente.',
              '**Que entiendas y te hagas entender.** Aunque sea en inglés chapurreado. El que se comunica es el que puede coordinar.',
              '**Que aprendas más de un puesto.** El que sabe cubrir tres posiciones no se sustituye fácil.',
              '**Que lo digas.** Habla con tu responsable directo y dile claramente que te quieres quedar en la empresa. Muchos ascensos y contratos no llegan porque nadie sabía que los querías.'
            ]
          },
          {
            note: {
              title: 'Un detalle contractual que conviene saber',
              tone: 'sand',
              blocks: [
                'Las agencias suelen tener acuerdos con la empresa cliente sobre el traspaso: durante un tiempo, contratarte directamente les cuesta una compensación, y pasado ese periodo ya no. Por eso a veces la respuesta es «ahora no, en unos meses». **Pregunta cuándo**, y apunta la fecha. Ninguna agencia legal puede impedirte aceptar un empleo directo.'
              ]
            }
          }
        ]
      },
      {
        when: 'Año 2 a año 4',
        title: 'Subir de puesto',
        blocks: [
          'En almacén y producción la escalera está bastante clara y se sube más rápido de lo que la gente cree, porque la rotación es enorme y los que se quedan destacan solos.',
          {
            table: {
              caption: 'Escalera habitual en logística y producción',
              head: [
                'Puesto',
                'Qué hace falta'
              ],
              rows: [
                {
                  cells: [
                    'Operario / *orderpicker*',
                    'El punto de entrada. Nada más que presentarse.'
                  ]
                },
                {
                  cells: [
                    'Carretillero / *reachtruck*',
                    'Certificado neerlandés. Salto de sueldo inmediato.'
                  ]
                },
                {
                  cells: [
                    'Especialista o control de calidad',
                    'Experiencia en el proceso e inglés funcional.'
                  ]
                },
                {
                  cells: [
                    '*Voorman* / jefe de equipo',
                    'Neerlandés básico ya sí. Y que confíen en ti.'
                  ]
                },
                {
                  cells: [
                    '*Teamleider* / supervisor',
                    'Neerlandés, contrato directo y años dentro.'
                  ],
                  kind: 'sub'
                }
              ]
            }
          },
          'Y hay una vía que casi ningún español conoce: la **formación dual** (*BBL*). Trabajas cuatro días y estudias uno, cobrando, y sales con un título oficial neerlandés de formación profesional. **Lo suele pagar la empresa.** Es la forma más rápida de dejar de ser mano de obra intercambiable, y pregunta por ella en cuanto tengas contrato directo.'
        ]
      },
      {
        when: 'Año 3 a año 5',
        title: 'El contrato indefinido',
        blocks: [
          'El *vast contract*. Es la meta que cierra todas las demás, y no por el sueldo —que sube poco— sino **por lo que desbloquea**.',
          'Se llega por dos caminos, explicados en detalle en [el bloque de contratos de la guía](guia.html#contrato): encadenando contratos temporales con la misma empresa hasta que por ley el siguiente tiene que ser indefinido, o llegando a la última fase dentro de la agencia.',
          'Lo que cambia el día que lo firmas:',
          {
            ul: [
              '**Los caseros te cogen el teléfono.** Pasas de ser descartado automáticamente a ser un candidato normal.',
              '**Puedes pedir una hipoteca.** En Países Bajos se puede comprar vivienda con un contrato indefinido, y en muchos casos la cuota mensual sale por debajo de lo que pagabas de alquiler. Habla con un asesor hipotecario (*hypotheekadviseur*): la primera consulta suele ser gratuita.',
              '**Dejas de vivir con la maleta medio hecha.** Esto no se mide en euros y es lo que más se nota.'
            ]
          },
          'Casi todo el que llega hasta aquí se ha equivocado en alguno de los escalones anteriores. Esta página está escrita para que tú tardes menos.'
        ]
      }
    ]
  },
  final: {
    id: 'independencia',
    eyebrow: 'El final del camino',
    title: [
      'La meta no es el dinero.',
      'Es no tener que pensar en él.'
    ],
    deck: 'Independencia es poder decir que no. A un turno, a un jefe, a un piso malo, a volver antes de tiempo.',
    blocks: [
      {
        lede: 'Cuando la gente se imagina el éxito en el extranjero se imagina una cifra en la cuenta. Con los años te das cuenta de que no va de eso. Va de llegar a un punto en el que **una mala semana no te descoloca la vida**: se te rompe el coche y lo arreglas, te sale un imprevisto en casa y lo cubres, y no tienes que pedirle dinero a nadie ni aceptar un turno que no quieres.'
      },
      'Eso es lo que muchos no tenían en España, y no por falta de ganas de trabajar. Es la diferencia entre estar siempre a un mes de un problema y no estarlo. Se llama tranquilidad y no se compra: se construye durante unos años, con muchas semanas aburridas seguidas.',
      {
        pull: {
          text: 'No hay ningún truco. Se consigue trabajando, no fundiéndote lo que ganas y teniendo la cabeza puesta en crecer como persona y como profesional.',
          by: 'Iván · Rumbo Norte'
        }
      },
      { h3: 'Las tres cosas que separan a quien lo consigue de quien vuelve' },
      '**Aguantar los primeros tres meses.** Son los peores con diferencia: el idioma, el frío, la habitación compartida, la comida rara y la sensación de haberte equivocado. Casi todo el que vuelve, vuelve en ese tramo. Los que pasan de ahí se quedan.',
      '**No gastarte lo que ganas.** Ganar bien y ahorrar son dos cosas distintas y no vienen juntas. Dos personas pueden cobrar lo mismo durante tres años y acabar una con casa propia y la otra pidiendo prestado en enero.',
      '**Aprender algo cada año.** Un certificado, el idioma, un puesto nuevo. El que hace exactamente el mismo trabajo el quinto año que el primero cobra casi lo mismo que el primero, y encima con cinco años más encima.',
      {
        note: {
          title: 'Y una última honestidad',
          tone: 'ink',
          blocks: [
            'Nada de esto compensa a todo el mundo. Estás lejos de tu gente, te pierdes cumpleaños y navidades, y hay domingos de noviembre en los que llueve de lado y te preguntas qué haces allí. Eso también es parte del trato y nadie lo cuenta.',
            'Si lo que quieres es dinero rápido y volverte, hay formas más fáciles. Esta página es para quien se plantea construir algo.'
          ]
        }
      }
    ]
  },
  cta: {
    eyebrow: 'Empezar',
    title: [
      'El primer escalón',
      'es entrar con buen pie.',
      'Ahí entro yo.'
    ],
    text: [
      'Los siete siguientes dependen de ti. El primero, llegar sabiendo dónde te metes y a una agencia legal, es justo mi trabajo.',
      'Cuéntame tu situación y te digo para qué perfiles encajas, qué números te saldrían a ti, qué colchón necesitas y en qué fijarte antes de firmar nada.'
    ],
    actions: [
      { label: 'Escribir por WhatsApp', href: 'wa:' },
      { label: 'Enviar mi candidatura', href: './#candidatura' }
    ],
    foot: 'Antes, léete [la guía](guia.html). Es lo que te ahorra los errores caros.'
  },
  legalNote: 'Las cifras y los plazos de esta página son orientativos y no constituyen una promesa de resultado.'
};
