/* La guía práctica. Texto de la web vieja, adaptado a Rumbo Norte. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.guia = {
  legalNote: 'Las cifras de esta guía son orientativas y no constituyen asesoramiento legal ni fiscal.',
  hero: {
    eyebrow: 'La guía práctica',
    title: [
      'Lo que tienes',
      'que saber antes',
      'de la entrevista.'
    ],
    text: [
      'Es lo mismo que le explico a cada candidato antes de presentarle a una agencia, puesto por escrito y en orden. Siete bloques: el BSN, la nómina línea a línea, el alojamiento, lo que cuesta vivir allí, los contratos, cómo verificar una agencia y las preguntas que hay que hacer antes de firmar.',
      'Todas las cifras son orientativas y llevan fecha. El sistema neerlandés cambia el 1 de enero y el 1 de julio de cada año: **comprueba siempre el dato en la fuente oficial que te enlazo** antes de tomar una decisión con él.'
    ],
    accent: 2
  },
  sections: [
    {
      id: 'bsn',
      eyebrow: '01 · Burgerservicenummer',
      title: [
        'El BSN: sin esto no existes administrativamente'
      ],
      blocks: [
        {
          lede: 'El BSN es tu número de identificación ciudadana en Países Bajos. Nueve dígitos. Sin él no te pueden dar de alta en condiciones, no puedes contratar el seguro médico obligatorio, no puedes abrir cuenta en la mayoría de bancos y no puedes pedir ninguna ayuda. Es literalmente lo primero que hay que hacer al llegar, antes incluso de deshacer la maleta.'
        },
        { h3: 'Cómo se pide' },
        'Depende de cuánto tiempo vayas a quedarte, y la frontera está en los **cuatro meses**:',
        {
          ul: [
            '**Menos de cuatro meses.** Te inscribes en el registro de no residentes (*RNI*). Se hace con cita previa en una de las oficinas municipales habilitadas para ello, repartidas por el país. No necesitas tener una dirección fija.',
            '**Más de cuatro meses.** Te empadronas en el ayuntamiento del municipio donde vivas (*inschrijving* en el registro BRP). Aquí sí necesitas una dirección real y el permiso del titular del alojamiento.'
          ]
        },
        'En los dos casos vas con el **pasaporte o el DNI en vigor** —el DNI español vale— y, si lo tienes, el contrato de trabajo. Te dan el número casi siempre en la misma cita, en papel.',
        {
          note: {
            title: 'Esto es gratis',
            tone: 'sand',
            blocks: [
              'Ni el registro RNI ni el empadronamiento tienen coste para ti. Si alguien te ofrece «tramitarte el BSN» por 50, 100 o 200 €, es una estafa. Lo normal es que la agencia te dé la cita ya reservada y a veces incluso te lleve.'
            ]
          }
        },
        { h3: 'Después del BSN: el DigiD' },
        'Una vez tienes BSN y estás empadronado, pide el **DigiD**. Es la identidad digital con la que se hace todo con la administración neerlandesa: la declaración de la renta, la ayuda para el seguro médico, el paro. Se pide en [digid.nl](https://www.digid.nl) y te llega un código por correo postal a tu dirección, así que tarda unos días.',
        { h4: 'Fuentes oficiales' },
        {
          ul: [
            '[Gobierno neerlandés — qué es el BSN](https://www.government.nl/topics/personal-data/citizen-service-number-bsn) (en inglés)',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl) — portal general del Estado'
          ]
        }
      ]
    },
    {
      id: 'nomina',
      eyebrow: '02 · Loonstrook',
      title: [
        'La nómina,',
        'línea a línea.'
      ],
      deck: 'Aquí es donde se rompen la mayoría de las expectativas. Entre lo que te dicen que vas a ganar y lo que te entra en la cuenta hay un trecho largo, y conviene recorrerlo antes de coger el avión.',
      blocks: [
        { h3: 'Primero: el salario por hora' },
        'Países Bajos tiene un **salario mínimo por hora fijado por ley**, igual para todos los sectores, que se actualiza **el 1 de enero y el 1 de julio** de cada año. Desde el 1 de julio de 2026 es de **14,99 € brutos la hora** para mayores de 21 años, y sube en cada revisión.',
        'Cuando leas esto puede que ya haya cambiado. **Compruébalo tú, son treinta segundos:** [rijksoverheid.nl — minimumloon](https://www.rijksoverheid.nl/onderwerpen/minimumloon).',
        'Encima de ese mínimo, si la empresa cliente tiene su propio convenio, a menudo te corresponde **el mismo salario que a un empleado fijo de esa empresa haciendo tu trabajo**. Es lo que se llama la equiparación salarial y es un derecho, no un favor. Pregunta siempre si se te aplica.',
        { h3: 'Ejemplo completo de una semana' },
        'Cuarenta horas a 15,00 € brutos, con alojamiento y seguro descontados por la agencia. Los importes son **orientativos**: las retenciones dependen de tu situación personal y el alojamiento varía mucho.',
        {
          payslip: {
            caption: 'Ejemplo orientativo · 40 h a 15,00 €/h brutos · una semana',
            head: [
              'Concepto',
              'Importe'
            ],
            rows: [
              {
                cells: [
                  'Salario bruto ~~40 h × 15,00 €~~',
                  '600,00 €'
                ]
              },
              {
                cells: [
                  'Pensión ~~Tu parte del plan sectorial de la ETT~~',
                  '−15,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Retención de impuestos ~~*Loonheffing*. Varía mucho según tu situación~~',
                  '−95,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Neto antes de descuentos',
                  '490,00 €'
                ],
                kind: 'sub'
              },
              {
                cells: [
                  'Alojamiento ~~Habitación compartida gestionada por la agencia~~',
                  '−110,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Seguro médico ~~Obligatorio. Unos 140 €/mes~~',
                  '−32,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Transporte ~~Furgoneta de empresa o bicicleta~~',
                  '−22,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Lo que te entra en la cuenta',
                  '326,00 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        'Eso son unos **1.400 € al mes** limpios. Es una cifra digna, pero está muy lejos de los «2.500 € al mes» que se leen por ahí: esos 2.500 son el bruto, antes de que pase absolutamente nada.',
        { h3: 'Las reservas: dinero tuyo que no ves cada semana' },
        'Aparte de todo lo anterior, cada semana se te **acumulan reservas** que son tuyas y que se cobran aparte:',
        {
          table: {
            caption: 'Reservas acumuladas · sobre el bruto del ejemplo',
            head: [
              'Concepto',
              'Aprox.',
              'Semana'
            ],
            rows: [
              {
                cells: [
                  'Paga extra de vacaciones ~~*Vakantiegeld*~~',
                  '8,33 %',
                  '50,00 €'
                ]
              },
              {
                cells: [
                  'Días de vacaciones ~~Se acumulan como saldo de horas~~',
                  '~10,9 %',
                  '65,00 €'
                ]
              },
              {
                cells: [
                  'Acumulado semanal',
                  '—',
                  '115,00 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1, 2]
          }
        },
        'Se pagan cuando las pides, cuando coges vacaciones o al terminar el contrato, según el convenio que te aplique. **Míralas en cada nómina.** Si el saldo de reservas no sube semana a semana, pregunta por qué antes de que pase un mes.',
        {
          note: {
            title: 'Dos cosas que cuestan dinero si no las sabes',
            tone: 'stone',
            blocks: [
              '**1. La reducción fiscal (*loonheffingskorting*) se aplica en un solo empleador.** Si trabajas para dos y la marcas en los dos, cobras más cada mes pero acabas devolviéndolo con la declaración. Márcala solo en el principal.',
              '**2. El año en que llegas, la declaración suele salirte a devolver.** Porque no has trabajado los doce meses. Mucha gente no la presenta y pierde varios cientos de euros. Se hace con el DigiD en la web de la *Belastingdienst*.'
            ]
          }
        },
        {
          note: {
            title: 'Cómo leer tu *loonstrook* el primer día',
            tone: 'sand',
            blocks: [
              'Busca estas palabras y comprueba que cuadran: **gewerkte uren** (horas trabajadas), **uurloon** (precio por hora), **bruto loon** (bruto), **loonheffing** (retención), **inhoudingen** (descuentos: aquí aparecen el alojamiento y el seguro), **reserveringen** (las reservas), **netto uitbetaald** (lo que se ingresa).',
              'Si las horas no coinciden con las que hiciste, reclámalo esa misma semana. Cuanto más tarde, más difícil.'
            ]
          }
        }
      ]
    },
    {
      id: 'alojamiento',
      eyebrow: '03 · Huisvesting',
      title: [
        'El alojamiento y cuánto',
        'descuentan de verdad.'
      ],
      deck: 'Es el capítulo con más letra pequeña y el que más disgustos da. También es el que tiene límites legales más claros, si sabes cuáles son.',
      blocks: [
        { h3: 'Qué te vas a encontrar' },
        'Lo habitual es una **habitación compartida con otra persona** en un bungalow, un antiguo hotel reconvertido o un bloque específico para trabajadores. Cocina y baño compartidos con cuatro o seis personas más. Suele estar amueblado, con wifi y con la ropa de cama incluida. El precio va **por persona y por semana**, no por habitación.',
        'Los precios reales se mueven entre **90 y 130 € por semana**. Una habitación individual, cuando la hay, se va por encima de los 150 €.',
        { h3: 'El límite legal del descuento' },
        'Esto es lo importante y casi nadie lo sabe: la ley permite descontar el alojamiento directamente de la nómina, pero **con un tope del 25 % del salario mínimo** que te corresponda, y solo si **el alojamiento está certificado por SNF** (o un sistema equivalente reconocido).',
        'En la práctica: con el salario mínimo a jornada completa, ese 25 % viene a ser **unos 150 € semanales**. Si te están descontando por encima de eso, o el alojamiento no aparece en el registro SNF, hay un problema y tienes con qué reclamar.',
        {
          note: {
            title: 'Las tres preguntas que hay que hacer, por escrito',
            tone: 'sand',
            blocks: [
              '**1.** ¿Cuánto cuesta exactamente a la semana y cuántas personas hay por habitación?',
              '**2.** ¿A qué distancia está del centro de trabajo y quién paga el desplazamiento?',
              '**3.** Si me quedo sin trabajo, ¿cuántos días tengo para dejar la habitación?',
              'La tercera es la que separa a las agencias serias del resto. Pídelo por WhatsApp o por correo, no de palabra, y guarda la respuesta.'
            ]
          }
        },
        { h3: 'El nudo: casa y contrato van atados' },
        'En la mayoría de los casos el alojamiento depende del contrato de trabajo. Si el contrato termina —y en fase A puede terminar muy rápido, lo vemos en el bloque 5—, **pierdes el trabajo y la habitación a la vez**. Esa es la situación real que hay que tener presente antes de subirse al avión, y es la razón principal por la que insisto tanto en el colchón de 800–1.200 €.',
        'Los convenios del sector fijan un plazo mínimo para desalojar y obligan a que te lo comuniquen por escrito. Que exista ese plazo no te salva de tener que buscar algo en pocos días en un país que no conoces.',
        { h3: 'El seguro médico' },
        'En cuanto empiezas a trabajar en Países Bajos **estás obligado por ley a contratar un seguro médico neerlandés** (*zorgverzekering*), tengas o no tarjeta sanitaria europea. Tienes un plazo corto para hacerlo y hay multas si no lo haces.',
        'La póliza básica ronda los **140 € al mes** y muchas agencias tienen un acuerdo colectivo más barato que te descuentan de la nómina. Además existe una ayuda del Estado, la ***zorgtoeslag***, para rentas bajas: se pide con el DigiD y para muchos trabajadores cubre buena parte de la cuota. No es automática: **hay que solicitarla**, y mucha gente no lo hace.',
        {
          ul: [
            '[toeslagen.nl](https://www.toeslagen.nl) — solicitud de la *zorgtoeslag*',
            '[normeringflexwonen.nl](https://www.normeringflexwonen.nl) — registro SNF de alojamientos'
          ]
        }
      ]
    },
    {
      id: 'coste-vida',
      eyebrow: '04 · La compra',
      title: [
        'Lo que cuesta vivir allí',
        'cada semana.'
      ],
      deck: 'Con el alojamiento ya descontado de la nómina, el gasto que te queda es básicamente comer, el teléfono y lo que hagas los domingos.',
      blocks: [
        'Los supermercados grandes son **Albert Heijn** (el más caro y el más cómodo), **Jumbo** (intermedio) y **Lidl** y **Aldi** (los baratos). La diferencia entre hacer la compra en uno u otro son fácilmente 20 € a la semana, que al mes es casi un día de trabajo.',
        {
          table: {
            caption: 'Gasto semanal orientativo · una persona',
            head: [
              'Concepto',
              'A la semana'
            ],
            rows: [
              {
                cells: [
                  'Compra de comida ~~Cocinando en casa, comprando en Lidl o Aldi~~',
                  '45 – 70 €'
                ]
              },
              {
                cells: [
                  'Teléfono y datos ~~Tarjeta prepago neerlandesa~~',
                  '3 – 6 €'
                ]
              },
              {
                cells: [
                  'Productos de higiene y limpieza',
                  '5 – 10 €'
                ]
              },
              {
                cells: [
                  'Ocio y varios ~~Una cerveza fuera, un tren el domingo~~',
                  '15 – 40 €'
                ]
              },
              {
                cells: [
                  'Total habitual',
                  '70 – 125 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        'Con los 326 € del ejemplo de nómina, eso deja **entre 200 y 255 € de ahorro real a la semana** si te administras. Ahí está el sentido de irse: no en el sueldo bruto, sino en lo que consigues apartar cada mes.',
        {
          note: {
            title: 'Tres trucos que valen dinero de verdad',
            tone: 'stone',
            blocks: [
              '**La bici.** Una de segunda mano cuesta entre 60 y 120 € y te ahorra el transporte para siempre. Es la primera compra que hay que hacer.',
              '**El *statiegeld*.** Las botellas y latas llevan un depósito de entre 0,15 y 0,25 €. Se devuelven en la máquina del supermercado. Suena a tontería y son 5–10 € a la semana.',
              '**Cocinar en grupo.** Compartís piso: comprar y cocinar entre cuatro baja el gasto de comida casi a la mitad.'
            ]
          }
        }
      ]
    },
    {
      id: 'contrato',
      eyebrow: '05 · Contratos',
      title: [
        'Todos los contratos',
        'que te pueden ofrecer.'
      ],
      deck: 'Por agencia y por empresa directa. Cuál es cuál, qué te da cada uno y cuál es el que de verdad quieres acabar firmando.',
      blocks: [
        {
          lede: 'En Países Bajos hay dos formas de estar trabajando, y confundirlas es el origen de la mitad de los malentendidos. O te contrata una **agencia de trabajo temporal** (*uitzendbureau*) y te cede a una empresa cliente, o te contrata **directamente la empresa** donde trabajas. Casi todo el mundo empieza por la primera y el objetivo es acabar en la segunda.'
        },
        {
          note: {
            title: 'La diferencia en una frase',
            tone: 'stone',
            blocks: [
              'Con la agencia, tu jefe y tu empleador **no son la misma empresa**: trabajas para una y te paga otra. Con contrato directo, sí lo son. Todo lo demás —estabilidad, sueldo, derechos— se deriva de ahí.'
            ]
          }
        },
        { h3: 'A · Si te contrata una agencia de trabajo temporal' },
        'Aquí el convenio del sector organiza tu antigüedad por **fases**. Cuantas más semanas acumulas con la misma agencia, más estabilidad tienes. Se empieza siempre por abajo, y una interrupción larga puede hacerte volver a empezar la cuenta.',
        {
          table: {
            caption: 'Las fases del trabajo temporal · esquema general',
            head: [
              'Fase',
              'Duración aproximada',
              'Qué significa para ti'
            ],
            rows: [
              {
                cells: [
                  'Fase A',
                  'Alrededor del primer año trabajado',
                  'Máxima flexibilidad para la empresa. Suele llevar cláusula de puesta a disposición: si el cliente deja de necesitarte, el contrato acaba. Cobras por horas trabajadas.'
                ]
              },
              {
                cells: [
                  'Fase B',
                  'Los años siguientes, con un número limitado de contratos',
                  'Contratos temporales con fecha de fin. Ya no te pueden echar de un día para otro y tienes salario aunque el cliente pare.'
                ]
              },
              {
                cells: [
                  'Fase C',
                  'Después de la fase B',
                  'Contrato indefinido con la agencia. Estabilidad real: es el equivalente al fijo.'
                ],
                kind: 'total'
              }
            ]
          }
        },
        {
          small: 'Las duraciones exactas y el número de contratos los fija el convenio colectivo del sector, que se renegocia cada pocos años y ha cambiado varias veces en la última década. **Pide siempre por escrito en qué fase entras y qué convenio se te aplica.** Son dos preguntas de un minuto.'
        },
        { h4: 'Los cinco tipos que te pueden poner delante' },
        'Dentro del mundo de las agencias no todo es lo mismo, aunque te lo cuenten igual:',
        {
          table: {
            caption: 'Modalidades a través de intermediario',
            head: [
              'Modalidad',
              'Cómo funciona',
              'Cuidado con'
            ],
            rows: [
              {
                cells: [
                  '*Uitzendovereenkomst* con cláusula',
                  'El clásico de fase A. El contrato termina automáticamente si el cliente prescinde de ti.',
                  'Es el más frágil de todos. Si además el alojamiento va atado, te quedas sin las dos cosas a la vez.'
                ]
              },
              {
                cells: [
                  '*Uitzendovereenkomst* sin cláusula',
                  'Contrato temporal con fecha de inicio y fin. La agencia te paga aunque el cliente pare.',
                  'Suele llegar en fase B. Si te lo ofrecen antes, es buena señal de la agencia.'
                ]
              },
              {
                cells: [
                  '*Detachering*',
                  'Cesión pero con contrato estable con la empresa que te cede. Habitual en perfiles técnicos.',
                  'Mejores condiciones, pero suele pedir experiencia o titulación.'
                ]
              },
              {
                cells: [
                  '*Payrolling*',
                  'La empresa te elige a ti, pero quien te paga y figura como empleador es una gestora externa.',
                  'Por ley te corresponden **las mismas condiciones que a la plantilla propia** del cliente. Compruébalo, porque no siempre se aplica solo.'
                ]
              },
              {
                cells: [
                  '*ZZP* (falso autónomo)',
                  'Te dan de alta como autónomo y facturas tus horas en vez de tener nómina.',
                  '**Es la señal de alarma más grande.** Ver el aviso de abajo.'
                ],
                kind: 'minus'
              }
            ]
          }
        },
        {
          note: {
            title: 'Si te proponen ir como autónomo (ZZP), desconfía',
            tone: 'sand',
            blocks: [
              'Para un trabajo de almacén, producción o agricultura con horario y jefe, **ser autónomo casi nunca es legal**: es lo que allí llaman falsa autonomía, y la agencia tributaria neerlandesa lleva tiempo persiguiéndola en serio.',
              'Lo que pierdes si aceptas: **no tienes paro, no tienes baja por enfermedad, no tienes vacaciones pagadas ni paga extra, y te toca a ti pagar los impuestos y el seguro** de un dinero que creías tuyo. Y si luego la inspección determina que era una relación laboral encubierta, el lío también te salpica.',
              'Si alguien te lo plantea como si fuera un favor o una forma de «cobrar más», es exactamente al revés.'
            ]
          }
        },
        { h3: 'B · Si te contrata directamente la empresa' },
        'Aquí ya estás en el régimen laboral general (*arbeidsovereenkomst*), el mismo que cualquier neerlandés. Estas son las modalidades que existen:',
        {
          table: {
            caption: 'Contratos directos con el empleador',
            head: [
              'Tipo',
              'Qué es',
              'Lo que hay que saber'
            ],
            rows: [
              {
                cells: [
                  'Temporal ~~*bepaalde tijd*~~',
                  'Contrato con fecha de fin.',
                  'Existe un límite legal de contratos temporales encadenados con la misma empresa. Al superarlo, el siguiente **pasa a ser indefinido por ley**. Lleva tú la cuenta.'
                ]
              },
              {
                cells: [
                  'Indefinido ~~*onbepaalde tijd*~~',
                  'Sin fecha de fin. El *vast contract*.',
                  'La meta. Es lo que te abre alquileres decentes, crédito e hipoteca.'
                ],
                kind: 'total'
              },
              {
                cells: [
                  'Cero horas ~~*nulurencontract*~~',
                  'Estás contratado pero sin horas garantizadas: te llaman cuando hay trabajo.',
                  'Te tienen que avisar con varios días de antelación, y **si te cancelan con menos margen, cobras igual**. Pasado un tiempo, la empresa está obligada a ofrecerte una jornada fija según tu media.'
                ]
              },
              {
                cells: [
                  'Mínimo-máximo ~~*min-maxcontract*~~',
                  'Te garantizan unas horas mínimas y puedes hacer más hasta un tope.',
                  'Mejor que el de cero horas. Comprueba que el mínimo dé para vivir.'
                ]
              },
              {
                cells: [
                  'Formación dual ~~*BBL*~~',
                  'Trabajas y estudias a la vez, cobrando, y sales con título oficial.',
                  'Lo suele pagar la empresa. Es la vía más rápida para dejar de ser mano de obra intercambiable.'
                ]
              },
              {
                cells: [
                  'Prácticas ~~*stage*~~',
                  'Vinculado a unos estudios. No es un contrato laboral normal.',
                  'La compensación es baja y no genera los mismos derechos. Cuidado si te lo ofrecen sin estar estudiando.'
                ]
              }
            ]
          }
        },
        { h3: 'C · Las cláusulas que aparecen en los dos' },
        'Da igual quién te contrate: estos cuatro conceptos van a estar en tu contrato y conviene reconocerlos antes de firmar.',
        {
          table: {
            caption: 'Letra pequeña común',
            head: [
              'Concepto',
              'Qué significa'
            ],
            rows: [
              {
                cells: [
                  'Periodo de prueba ~~*proeftijd*~~',
                  'Durante él, cualquiera de las dos partes puede cortar el mismo día. Su duración máxima depende de lo que dure el contrato, y **en los contratos muy cortos directamente no se puede poner**. Si ves un periodo de prueba largo en un contrato de pocos meses, pregunta.'
                ]
              },
              {
                cells: [
                  'Preaviso ~~*opzegtermijn*~~',
                  'El tiempo que hay que avisar antes de irse o de echarte. Para el trabajador suele ser un mes; para la empresa aumenta con tus años de antigüedad. Ojo: normalmente cuenta **a fin de mes**, no desde el día que avisas.'
                ]
              },
              {
                cells: [
                  'Indemnización ~~*transitievergoeding*~~',
                  'Si es la empresa quien termina la relación, te corresponde una compensación **desde el primer día trabajado**, proporcional al tiempo que llevas. Mucha gente se va sin pedirla porque no sabe que existe.'
                ]
              },
              {
                cells: [
                  'No competencia ~~*concurrentiebeding*~~',
                  'Te limita trabajar para la competencia al terminar. En contratos temporales solo vale si está justificado por escrito. **Ninguna agencia puede impedirte aceptar un empleo directo con la empresa cliente.**'
                ]
              }
            ]
          }
        },
        { h3: 'D · La cláusula que hay que mirar: el *uitzendbeding*' },
        'Es la cláusula de puesta a disposición. Traducida al castellano de andar por casa: **mientras esté activa, el contrato de trabajo termina automáticamente cuando la empresa cliente decide que ya no te necesita**. Sin preaviso largo, sin indemnización, sin discusión.',
        'También funciona al revés: puedes irte tú con muy poco preaviso. Esa es la parte buena, y para algunas personas compensa.',
        'Lo que hay que tener claro es que **en fase A, con esa cláusula, tu situación es frágil**. Si además el alojamiento va atado al contrato, un mal día en la fábrica puede convertirse en quedarte sin trabajo y sin casa el mismo viernes.',
        {
          pull: {
            text: 'En fase A no tienes un empleo estable. Tienes un empleo. La diferencia se nota el día que el cliente reduce turnos.'
          }
        },
        { h3: 'E · Si te pones enfermo' },
        'Con el *uitzendbeding* activo, ponerse enfermo puede hacer que el contrato termine. En ese caso pasas a cobrar una **prestación por enfermedad del organismo público (UWV)**, que ronda el 70 % de tu salario diario. No es lo mismo que seguir cobrando la nómina.',
        'Avisa el primer día y hazlo por el canal que te digan (suele haber un número específico). Llegar tarde al aviso es de las pocas cosas que te pueden costar la prestación entera.',
        { h3: 'F · Si te quedas sin trabajo' },
        'Para cobrar el paro neerlandés (*WW*) hay que haber trabajado un mínimo de semanas dentro de un periodo de referencia. Al principio casi nadie llega, y ese es justo el momento de mayor riesgo.',
        'Dos cosas prácticas: si vienes de trabajar en España, pide el **formulario U1** antes de irte, porque permite sumar los periodos cotizados aquí. Y guarda **todas las nóminas y contratos** desde el primer día: son la prueba de las semanas trabajadas.',
        {
          note: {
            title: 'Hacia dónde va esto',
            tone: 'ink',
            blocks: [
              'El recorrido completo es siempre el mismo: fase A con cláusula → contrato temporal sin cláusula → contrato directo con la empresa cliente → indefinido. Cada escalón te quita fragilidad y te añade sueldo.',
              'Cuánto tarda cada salto, qué hace falta para darlo y qué se desbloquea al llegar arriba está en [la página de metas](metas.html).'
            ]
          }
        },
        { h4: 'Fuentes oficiales' },
        {
          ul: [
            '[uwv.nl](https://www.uwv.nl) — prestaciones por desempleo y enfermedad',
            '[belastingdienst.nl](https://www.belastingdienst.nl) — agencia tributaria neerlandesa',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao) — tipos de contrato y convenios'
          ]
        }
      ]
    },
    {
      id: 'verificar',
      eyebrow: '06 · SNA y SNF',
      title: [
        'Cómo verificar una agencia',
        'en dos minutos.'
      ],
      deck: 'Gratis, desde el móvil y sin registrarte en nada. Si hay una sola cosa de esta guía que merezca la pena hacer, es esta.',
      blocks: [
        { h3: 'Los dos registros' },
        '**SNA — Stichting Normering Arbeid.** Audita que la empresa liquida bien los impuestos y las cotizaciones y que cumple la normativa laboral. Es el sello que de verdad importa: las empresas clientes serias solo trabajan con agencias que lo tienen, porque si no responden ellas de las deudas.',
        'Se consulta en [normeringarbeid.nl](https://www.normeringarbeid.nl), en el buscador del registro.',
        '**SNF — Stichting Normering Flexwonen.** Certifica que el alojamiento cumple unos mínimos de espacio, seguridad e higiene, y se inspecciona periódicamente. Se consulta en [normeringflexwonen.nl](https://www.normeringflexwonen.nl).',
        { h3: 'Cómo se hace, paso a paso' },
        {
          ol: [
            '**Pide el nombre legal exacto y el número KvK.** El KvK es el número del registro mercantil neerlandés. Una agencia legal te lo da sin pestañear. Ojo: el nombre comercial con el que te escriben y el nombre legal a veces no son el mismo.',
            '**Busca ese nombre en el registro SNA.** Tiene que aparecer con la certificación *en vigor*, no caducada ni suspendida.',
            '**Busca el alojamiento en el registro SNF.** A veces el alojamiento lo gestiona otra empresa distinta: pide también ese nombre.',
            '**Comprueba el número KvK** en [kvk.nl](https://www.kvk.nl). Mira desde cuándo existe la empresa. Una sociedad creada hace tres meses que ya recluta a cien personas merece una segunda mirada.',
            '**Busca el nombre en Google junto a las palabras *ervaringen* o *klachten*** (experiencias, quejas). En neerlandés y en polaco vas a encontrar mucho más que en español.'
          ]
        },
        {
          note: {
            title: 'Señales de alarma. Si aparece una sola, para.',
            tone: 'sand',
            blocks: [
              {
                ul: [
                  'Te piden **dinero por adelantado** por cualquier concepto: inscripción, reserva de plaza, tramitar el BSN, traducir papeles, «gastos de gestión».',
                  'Te piden **fotos del DNI o del pasaporte antes de haber hablado con nadie**, o por un canal raro.',
                  'No te dan el **nombre legal ni el número KvK**, o se ponen a la defensiva cuando lo pides.',
                  '**No hay contrato escrito**, o te dicen que «se firma allí» y que no hace falta verlo antes.',
                  'Te prometen un **sueldo neto muy por encima** de lo que has leído aquí, o «trabajo garantizado».',
                  'Te presionan para **decidir hoy** porque «quedan dos plazas».',
                  'Te ofrecen cobrar **una parte en negro**. Eso te deja sin paro, sin baja y sin nada.'
                ]
              }
            ]
          }
        },
        {
          note: {
            title: 'Un cambio que llega el 1 de enero de 2027',
            tone: 'stone',
            blocks: [
              'Países Bajos ha aprobado un **sistema de admisión obligatoria** para las empresas de trabajo temporal (*Wet toelating terbeschikkingstelling arbeidskrachten*). Desde el 1 de enero de 2027 ya no basta con estar certificado: para poder ceder trabajadores hará falta una autorización oficial. Las agencias que ya funcionan tienen un periodo de transición mientras se revisa su solicitud, y las multas empiezan en 2028.',
              'Mientras tanto, SNA y SNF siguen siendo la mejor herramienta que tienes. Cuando el registro nuevo esté en marcha, lo añadiré a esta guía.'
            ]
          }
        },
        { h4: 'Dónde reclamar si algo va mal' },
        {
          ul: [
            '[Inspección de Trabajo neerlandesa](https://www.nlarbeidsinspectie.nl) — denuncias, también anónimas',
            '[FNV](https://www.fnv.nl) — el sindicato mayoritario, atiende a trabajadores extranjeros',
            '[Work in NL](https://www.workinnl.nl) — puntos de información oficiales para trabajadores europeos'
          ]
        }
      ]
    },
    {
      id: 'preguntas-firmar',
      eyebrow: '07 · La lista',
      title: [
        'Qué preguntar',
        'antes de firmar.'
      ],
      deck: 'Catorce preguntas. Cópialas, pégalas en el chat con la agencia y guarda las respuestas. Una agencia seria las contesta todas sin incomodarse.',
      blocks: [
        {
          cards: [
            {
              eyebrow: 'Contrato',
              title: 'Lo primero',
              blocks: [
                '**1.** ¿En qué fase entro y qué convenio se me aplica?\n**2.** ¿Lleva cláusula de puesta a disposición?\n**3.** ¿Puedo leer el contrato completo antes de viajar?\n**4.** ¿En qué idioma está y me lo dais traducido?'
              ]
            },
            {
              eyebrow: 'Dinero',
              title: 'Los números',
              blocks: [
                '**5.** ¿Cuál es el precio bruto por hora exacto?\n**6.** ¿Me corresponde equiparación salarial con la plantilla del cliente?\n**7.** ¿Cómo se pagan los recargos de turno de noche y fin de semana?\n**8.** ¿Se cobra por semanas o por meses, y qué día?'
              ]
            },
            {
              eyebrow: 'Casa',
              title: 'El alojamiento',
              blocks: [
                '**9.** ¿Cuánto se descuenta a la semana y cuántas personas por habitación?\n**10.** ¿Está el alojamiento en el registro SNF? ¿A qué nombre?\n**11.** Si acaba el trabajo, ¿cuántos días tengo para salir?'
              ]
            },
            {
              eyebrow: 'Traslados',
              title: 'Llegar y moverse',
              blocks: [
                '**12.** ¿A qué distancia está el trabajo y quién paga el transporte?\n**13.** ¿Quién paga el viaje de ida y en qué condiciones?'
              ]
            },
            {
              eyebrow: 'Papeles',
              title: 'Los trámites',
              blocks: [
                '**14.** ¿Me ayudáis con la cita del BSN y con el seguro médico, y tiene algún coste para mí?'
              ]
            },
            {
              eyebrow: 'Regla de oro',
              title: 'Por escrito',
              blocks: [
                'Haz todas estas preguntas **por escrito** —WhatsApp o correo— y guarda las respuestas. No es desconfianza: es lo que te va a servir de prueba si algo no se cumple.'
              ]
            }
          ]
        },
        {
          note: {
            title: 'Y una última cosa',
            tone: 'ink',
            blocks: [
              'Si después de leer todo esto decides que no te compensa, has ganado igual. La información sirve para eso: para decidir con datos y no con un anuncio de Facebook. Yo no te voy a insistir.'
            ]
          }
        },
        {
          buttons: [
            { label: 'Enviar mi candidatura', href: './#candidatura' },
            { label: 'Preguntar una duda concreta', href: 'wa:' }
          ]
        }
      ]
    }
  ],
  toc: [
    { href: '#bsn', label: 'El BSN: sin esto no existes administrativamente' },
    { href: '#nomina', label: 'La nómina, línea a línea' },
    { href: '#alojamiento', label: 'El alojamiento y cuánto descuentan de verdad' },
    { href: '#coste-vida', label: 'Lo que cuesta vivir allí cada semana' },
    { href: '#contrato', label: 'Todos los tipos de contrato que existen' },
    { href: '#verificar', label: 'Cómo verificar una agencia en SNA y SNF' },
    { href: '#preguntas-firmar', label: 'Qué preguntar antes de firmar' }
  ]
};
