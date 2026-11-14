/* O guia prático (português). A mesma estrutura de contenido/guia.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.guia = {
  legalNote: 'Os valores deste guia são indicativos e não constituem aconselhamento jurídico nem fiscal.',
  hero: {
    eyebrow: 'O guia prático',
    title: [
      'O que tens',
      'de saber antes',
      'da entrevista.'
    ],
    text: [
      'É o mesmo que explico a cada candidato antes de o apresentar a uma agência, posto por escrito e por ordem. Sete blocos: o BSN, o recibo de vencimento linha a linha, o alojamento, quanto custa viver lá, os contratos, como verificar uma agência e as perguntas a fazer antes de assinar.',
      'Todos os valores são indicativos e têm data. O sistema neerlandês muda a 1 de janeiro e a 1 de julho de cada ano: **confirma sempre o dado na fonte oficial para a qual te remeto** antes de tomares uma decisão com base nele.'
    ],
    accent: 2
  },
  sections: [
    {
      id: 'bsn',
      eyebrow: '01 · Burgerservicenummer',
      title: [
        'O BSN: sem isto não existes para a administração'
      ],
      blocks: [
        {
          lede: 'O BSN é o teu número de identificação de cidadão nos Países Baixos. Nove dígitos. Sem ele não te podem inscrever como deve ser, não podes contratar o seguro de saúde obrigatório, não podes abrir conta na maioria dos bancos e não podes pedir nenhum apoio. É literalmente a primeira coisa a fazer quando chegas, antes mesmo de desfazeres a mala.'
        },
        { h3: 'Como se pede' },
        'Depende de quanto tempo vais ficar, e a fronteira está nos **quatro meses**:',
        {
          ul: [
            '**Menos de quatro meses.** Inscreves-te no registo de não residentes (*RNI*). Faz-se com marcação num dos balcões municipais habilitados para isso, espalhados pelo país. Não precisas de ter morada fixa.',
            '**Mais de quatro meses.** Registas a residência na câmara municipal do sítio onde vives (*inschrijving* no registo BRP). Aqui precisas de uma morada real e da autorização do titular do alojamento.'
          ]
        },
        'Nos dois casos levas o **passaporte ou o cartão de cidadão válido** — o cartão de cidadão de um país da UE serve — e, se o tiveres, o contrato de trabalho. Quase sempre te dão o número na mesma marcação, em papel.',
        {
          note: {
            title: 'Isto é gratuito',
            tone: 'sand',
            blocks: [
              'Nem o registo RNI nem o registo de residência têm custos para ti. Se alguém te oferecer «tratar do BSN» por 50, 100 ou 200 €, é uma burla. O normal é a agência dar-te a marcação já feita e às vezes até te levar lá.'
            ]
          }
        },
        { h3: 'Depois do BSN: o DigiD' },
        'Quando já tiveres o BSN e a residência registada, pede o **DigiD**. É a identidade digital com que se trata tudo com a administração neerlandesa: a declaração de IRS, o apoio ao seguro de saúde, o subsídio de desemprego. Pede-se em [digid.nl](https://www.digid.nl) e recebes um código por correio na tua morada, por isso demora uns dias.',
        { h4: 'Fontes oficiais' },
        {
          ul: [
            '[Governo neerlandês — o que é o BSN](https://www.government.nl/topics/personal-data/citizen-service-number-bsn) (em inglês)',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl) — portal geral do Estado (em neerlandês)'
          ]
        }
      ]
    },
    {
      id: 'nomina',
      eyebrow: '02 · Loonstrook',
      title: [
        'O recibo de vencimento,',
        'linha a linha.'
      ],
      deck: 'É aqui que se desfaz a maioria das expectativas. Entre o que te dizem que vais ganhar e o que te entra na conta vai uma grande distância, e convém percorrê-la antes de apanhares o avião.',
      blocks: [
        { h3: 'Primeiro: o salário por hora' },
        'Os Países Baixos têm um **salário mínimo por hora fixado por lei**, igual para todos os setores, que é atualizado **a 1 de janeiro e a 1 de julho** de cada ano. Para maiores de 21 anos é de **15,29 € brutos por hora a partir de 1 de janeiro de 2027** (até 31 de dezembro de 2026, 14,99 €), e sobe em cada revisão.',
        'Quando leres isto pode já ter mudado. **Confirma tu, são trinta segundos:** [rijksoverheid.nl — minimumloon](https://www.rijksoverheid.nl/onderwerpen/minimumloon).',
        'Acima desse mínimo, se a empresa cliente tiver o seu próprio contrato coletivo, muitas vezes tens direito ao **mesmo salário que um empregado efetivo dessa empresa a fazer o teu trabalho**. É a chamada equiparação salarial e é um direito, não um favor. Pergunta sempre se se aplica a ti.',
        { h3: 'Exemplo completo de uma semana' },
        'Quarenta horas a 15,00 € brutos, com alojamento e seguro descontados pela agência. Os montantes são **indicativos e não definitivos**: as retenções dependem da tua situação pessoal, e o salário e o alojamento dependem da agência que te contrata, da cidade e do tipo de alojamento.',
        {
          payslip: {
            caption: 'Exemplo indicativo · 40 h a 15,00 €/h brutos · uma semana',
            head: [
              'Rubrica',
              'Montante'
            ],
            rows: [
              {
                cells: [
                  'Salário bruto ~~40 h × 15,00 €~~',
                  '600,00 €'
                ]
              },
              {
                cells: [
                  'Pensão ~~A tua parte do plano setorial da agência~~',
                  '−15,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Retenção de impostos ~~*Loonheffing*. Varia muito conforme a tua situação~~',
                  '−95,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Líquido antes dos descontos',
                  '490,00 €'
                ],
                kind: 'sub'
              },
              {
                cells: [
                  'Alojamento ~~Quarto partilhado gerido pela agência~~',
                  '−110,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Seguro de saúde ~~Obrigatório. Cerca de 140 €/mês~~',
                  '−32,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Transporte ~~Carrinha da empresa ou bicicleta~~',
                  '−22,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'O que te entra na conta',
                  '326,00 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        'Neste exemplo concreto ficam cerca de **1400 € por mês** limpos. É só um exemplo: conforme a agência, o posto, a cidade, as horas e o alojamento, o que entra na conta pode variar **entre 1250 e 2200 € por mês**, e ninguém to pode garantir antes de a agência te dar as condições por escrito. E cuidado com os «2500 € por mês» que se leem por aí: com o salário mínimo, isso é o bruto, antes de acontecer absolutamente nada.',
        { small: window.RumboNorteCifras.aviso },
        { h3: 'As reservas: dinheiro teu que não vês todas as semanas' },
        'Além de tudo isto, todas as semanas **acumulam-se reservas** que são tuas e que se recebem à parte:',
        {
          table: {
            caption: 'Reservas acumuladas · sobre o bruto do exemplo',
            head: [
              'Rubrica',
              'Aprox.',
              'Semana'
            ],
            rows: [
              {
                cells: [
                  'Subsídio de férias ~~*Vakantiegeld*~~',
                  '8,33 %',
                  '50,00 €'
                ]
              },
              {
                cells: [
                  'Dias de férias ~~Acumulam-se como saldo de horas~~',
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
        'São pagas quando as pedes, quando gozas férias ou no fim do contrato, conforme o contrato coletivo que se te aplica. **Vê-as em cada recibo.** Se o saldo das reservas não subir de semana para semana, pergunta porquê antes de passar um mês.',
        {
          note: {
            title: 'Duas coisas que custam dinheiro se não as souberes',
            tone: 'stone',
            blocks: [
              '**1. A dedução fiscal (*loonheffingskorting*) aplica-se num só empregador.** Se trabalhares para dois e a marcares nos dois, recebes mais todos os meses mas acabas por devolver na declaração. Marca-a só no principal.',
              '**2. No ano em que chegas, a declaração costuma dar reembolso.** Porque não trabalhaste os doze meses. Muita gente não a entrega e perde várias centenas de euros. Faz-se com o DigiD no site da *Belastingdienst*.'
            ]
          }
        },
        {
          note: {
            title: 'Como ler o teu *loonstrook* no primeiro dia',
            tone: 'sand',
            blocks: [
              'Procura estas palavras e confirma que batem certo: **gewerkte uren** (horas trabalhadas), **uurloon** (preço por hora), **bruto loon** (bruto), **loonheffing** (retenção), **inhoudingen** (descontos: aqui aparecem o alojamento e o seguro), **reserveringen** (as reservas), **netto uitbetaald** (o que é transferido).',
              'Se as horas não coincidirem com as que fizeste, reclama nessa mesma semana. Quanto mais tarde, mais difícil.'
            ]
          }
        }
      ]
    },
    {
      id: 'alojamiento',
      eyebrow: '03 · Huisvesting',
      title: [
        'O alojamento e quanto',
        'descontam mesmo.'
      ],
      deck: 'É o capítulo com mais letra pequena e o que dá mais desgostos. Também é o que tem limites legais mais claros, se souberes quais são.',
      blocks: [
        { h3: 'O que vais encontrar' },
        'O habitual é um **quarto partilhado com outra pessoa** num bungalow, num antigo hotel reconvertido ou num bloco próprio para trabalhadores. Cozinha e casa de banho partilhadas com mais quatro a seis pessoas. Costuma estar mobilado, com wifi e roupa de cama incluída. O preço é **por pessoa e por semana**, não por quarto.',
        'Os preços indicativos variam **entre 80 e 150 € por semana e por pessoa**, conforme a agência, a cidade e o tipo de alojamento. Um quarto individual, quando existe, costuma estar na parte alta desse intervalo.',
        { cifra: window.RumboNorteCifras.nota },
        { h3: 'O limite legal do desconto' },
        'Isto é o importante e quase ninguém o sabe: a lei permite descontar o alojamento diretamente do recibo, mas **com um teto de 25 % do salário mínimo** que te corresponde, e só se **o alojamento estiver certificado pela SNF** (ou por um sistema equivalente reconhecido).',
        'Na prática: com o salário mínimo a tempo inteiro, esses 25 % dão **cerca de 150 € por semana**. Se te estão a descontar acima disso, ou o alojamento não aparece no registo SNF, há um problema e tens com que reclamar.',
        {
          note: {
            title: 'As três perguntas a fazer, por escrito',
            tone: 'sand',
            blocks: [
              '**1.** Quanto custa exatamente por semana e quantas pessoas há por quarto?',
              '**2.** A que distância fica do local de trabalho e quem paga a deslocação?',
              '**3.** Se ficar sem trabalho, quantos dias tenho para deixar o quarto?',
              'A terceira é a que separa as agências sérias das restantes. Pede-o pelo WhatsApp ou por email, não de boca, e guarda a resposta.'
            ]
          }
        },
        { h3: 'O nó: casa e contrato andam juntos' },
        'Na maioria dos casos o alojamento depende do contrato de trabalho. Se o contrato terminar — e na fase A pode terminar muito depressa, vemos isso no bloco 5 —, **perdes o trabalho e o quarto ao mesmo tempo**. É essa a situação real a ter presente antes de entrar no avião, e é a principal razão por que insisto tanto na reserva de 800–1200 €.',
        'Os contratos coletivos do setor fixam um prazo mínimo para sair e obrigam a que to comuniquem por escrito. Esse prazo existir não te livra de teres de procurar alguma coisa em poucos dias num país que não conheces.',
        { h3: 'O seguro de saúde' },
        'Assim que começas a trabalhar nos Países Baixos **és obrigado por lei a contratar um seguro de saúde neerlandês** (*zorgverzekering*), tenhas ou não o Cartão Europeu de Seguro de Doença. Tens um prazo curto para o fazer e há multas se não o fizeres.',
        'A apólice básica ronda os **140 € por mês** e muitas agências têm um acordo coletivo mais barato que te descontam do recibo. Existe ainda um apoio do Estado, o ***zorgtoeslag***, para rendimentos baixos: pede-se com o DigiD e para muitos trabalhadores cobre boa parte do prémio. Não é automático: **tens de o pedir**, e muita gente não o faz.',
        { cifra: window.RumboNorteCifras.nota },
        {
          ul: [
            '[toeslagen.nl](https://www.toeslagen.nl) — pedido do *zorgtoeslag*',
            '[normeringflexwonen.nl](https://www.normeringflexwonen.nl) — registo SNF de alojamentos'
          ]
        }
      ]
    },
    {
      id: 'coste-vida',
      eyebrow: '04 · As compras',
      title: [
        'O que custa viver lá',
        'todas as semanas.'
      ],
      deck: 'Com o alojamento já descontado do recibo, o que te sobra para gastar é basicamente comer, o telemóvel e o que fizeres aos domingos.',
      blocks: [
        'Os grandes supermercados são o **Albert Heijn** (o mais caro e o mais cómodo), o **Jumbo** (intermédio) e o **Lidl** e o **Aldi** (os baratos). A diferença entre fazer as compras num ou noutro são facilmente 20 € por semana, o que por mês é quase um dia de trabalho.',
        {
          table: {
            caption: 'Gasto semanal indicativo · uma pessoa',
            head: [
              'Rubrica',
              'Por semana'
            ],
            rows: [
              {
                cells: [
                  'Compras de comida ~~A cozinhar em casa, a comprar no Lidl ou no Aldi~~',
                  '45 – 70 €'
                ]
              },
              {
                cells: [
                  'Telemóvel e dados ~~Cartão pré-pago neerlandês~~',
                  '3 – 6 €'
                ]
              },
              {
                cells: [
                  'Produtos de higiene e limpeza',
                  '5 – 10 €'
                ]
              },
              {
                cells: [
                  'Lazer e outros ~~Uma cerveja fora, um comboio ao domingo~~',
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
        { cifra: window.RumboNorteCifras.nota },
        'Com os 326 € do exemplo do recibo, isso deixaria **entre 200 e 255 € de poupança por semana** se te souberes gerir. É um cálculo indicativo: o teu caso vai depender do que recebes e do que te descontam. É aí que está o sentido de ir: não no salário bruto, mas no que consegues pôr de parte todos os meses.',
        {
          note: {
            title: 'Três truques que valem dinheiro a sério',
            tone: 'stone',
            blocks: [
              '**A bicicleta.** Uma em segunda mão custa entre 60 e 120 € e poupa-te o transporte para sempre. É a primeira compra a fazer.',
              '**O *statiegeld*.** As garrafas e latas têm um depósito entre 0,15 e 0,25 €. Devolvem-se na máquina do supermercado. Parece uma ninharia e são 5–10 € por semana.',
              '**Cozinhar em grupo.** Partilham casa: comprar e cozinhar entre quatro baixa o gasto com comida quase para metade.'
            ]
          }
        }
      ]
    },
    {
      id: 'contrato',
      eyebrow: '05 · Contratos',
      title: [
        'Todos os contratos',
        'que te podem oferecer.'
      ],
      deck: 'Por agência e por empresa direta. Qual é qual, o que te dá cada um e qual é o que queres mesmo acabar por assinar.',
      blocks: [
        {
          lede: 'Nos Países Baixos há duas formas de estar a trabalhar, e confundi-las é a origem de metade dos mal-entendidos. Ou te contrata uma **agência de trabalho temporário** (*uitzendbureau*) que te cede a uma empresa cliente, ou te contrata **diretamente a empresa** onde trabalhas. Quase toda a gente começa pela primeira e o objetivo é acabar na segunda.'
        },
        {
          note: {
            title: 'A diferença numa frase',
            tone: 'stone',
            blocks: [
              'Com a agência, o teu chefe e o teu empregador **não são a mesma empresa**: trabalhas para uma e paga-te outra. Com contrato direto, são. Tudo o resto — estabilidade, salário, direitos — vem daí.'
            ]
          }
        },
        { h3: 'A · Se te contrata uma agência de trabalho temporário' },
        'Aqui o contrato coletivo do setor organiza a tua antiguidade por **fases**. Quantas mais semanas acumulares com a mesma agência, mais estabilidade tens. Começa-se sempre por baixo, e uma interrupção longa pode fazer-te voltar ao início da contagem.',
        {
          table: {
            caption: 'As fases do trabalho temporário · esquema geral',
            head: [
              'Fase',
              'Duração aproximada',
              'O que significa para ti'
            ],
            rows: [
              {
                cells: [
                  'Fase A',
                  'Cerca do primeiro ano de trabalho',
                  'Máxima flexibilidade para a empresa. Costuma ter cláusula de cedência: se o cliente deixar de precisar de ti, o contrato acaba. Recebes pelas horas trabalhadas.'
                ]
              },
              {
                cells: [
                  'Fase B',
                  'Os anos seguintes, com um número limitado de contratos',
                  'Contratos a termo com data de fim. Já não te podem despedir de um dia para o outro e recebes salário mesmo que o cliente pare.'
                ]
              },
              {
                cells: [
                  'Fase C',
                  'Depois da fase B',
                  'Contrato sem termo com a agência. Estabilidade real: é o equivalente a ser efetivo.'
                ],
                kind: 'total'
              }
            ]
          }
        },
        {
          small: 'As durações exatas e o número de contratos são fixados pelo contrato coletivo do setor, que é renegociado a cada poucos anos e mudou várias vezes na última década. **Pede sempre por escrito em que fase entras e que contrato coletivo se te aplica.** São duas perguntas de um minuto.'
        },
        { h4: 'Os cinco tipos que te podem pôr à frente' },
        'No mundo das agências nem tudo é igual, mesmo que to contem da mesma maneira:',
        {
          table: {
            caption: 'Modalidades através de intermediário',
            head: [
              'Modalidade',
              'Como funciona',
              'Cuidado com'
            ],
            rows: [
              {
                cells: [
                  '*Uitzendovereenkomst* com cláusula',
                  'O clássico da fase A. O contrato termina automaticamente se o cliente prescindir de ti.',
                  'É o mais frágil de todos. Se além disso o alojamento estiver ligado, ficas sem as duas coisas ao mesmo tempo.'
                ]
              },
              {
                cells: [
                  '*Uitzendovereenkomst* sem cláusula',
                  'Contrato a termo com data de início e de fim. A agência paga-te mesmo que o cliente pare.',
                  'Costuma chegar na fase B. Se to oferecerem antes, é bom sinal da agência.'
                ]
              },
              {
                cells: [
                  '*Detachering*',
                  'Cedência, mas com contrato estável com a empresa que te cede. Habitual em perfis técnicos.',
                  'Melhores condições, mas costuma pedir experiência ou formação.'
                ]
              },
              {
                cells: [
                  '*Payrolling*',
                  'A empresa escolhe-te a ti, mas quem te paga e aparece como empregador é uma gestora externa.',
                  'Por lei tens direito às **mesmas condições que os trabalhadores do próprio** cliente. Confirma, porque nem sempre se aplica sozinho.'
                ]
              },
              {
                cells: [
                  '*ZZP* (falso independente)',
                  'Inscrevem-te como trabalhador independente e passas faturas pelas tuas horas em vez de teres recibo de vencimento.',
                  '**É o maior sinal de alarme.** Vê o aviso abaixo.'
                ],
                kind: 'minus'
              }
            ]
          }
        },
        {
          note: {
            title: 'Se te propuserem ir como independente (ZZP), desconfia',
            tone: 'sand',
            blocks: [
              'Para um trabalho de armazém, produção ou agricultura com horário e chefe, **ser independente quase nunca é legal**: é o que lá chamam falso trabalho independente, e a autoridade tributária neerlandesa anda há tempo a persegui-lo a sério.',
              'O que perdes se aceitares: **não tens subsídio de desemprego, não tens baixa por doença, não tens férias pagas nem subsídio de férias, e és tu que pagas os impostos e o seguro** de um dinheiro que julgavas teu. E se depois a inspeção concluir que era uma relação laboral encoberta, a confusão também te salpica.',
              'Se alguém to apresentar como um favor ou uma forma de «ganhar mais», é exatamente o contrário.'
            ]
          }
        },
        { h3: 'B · Se te contrata diretamente a empresa' },
        'Aqui já estás no regime laboral geral (*arbeidsovereenkomst*), o mesmo de qualquer neerlandês. Estas são as modalidades que existem:',
        {
          table: {
            caption: 'Contratos diretos com o empregador',
            head: [
              'Tipo',
              'O que é',
              'O que é preciso saber'
            ],
            rows: [
              {
                cells: [
                  'A termo ~~*bepaalde tijd*~~',
                  'Contrato com data de fim.',
                  'Existe um limite legal de contratos a termo encadeados com a mesma empresa. Ao ultrapassá-lo, o seguinte **passa a ser sem termo por lei**. Faz tu a contagem.'
                ]
              },
              {
                cells: [
                  'Sem termo ~~*onbepaalde tijd*~~',
                  'Sem data de fim. O *vast contract*.',
                  'A meta. É o que te abre arrendamentos decentes, crédito e hipoteca.'
                ],
                kind: 'total'
              },
              {
                cells: [
                  'Zero horas ~~*nulurencontract*~~',
                  'Estás contratado mas sem horas garantidas: chamam-te quando há trabalho.',
                  'Têm de te avisar com vários dias de antecedência, e **se cancelarem com menos margem, recebes na mesma**. Passado algum tempo, a empresa é obrigada a oferecer-te um horário fixo conforme a tua média.'
                ]
              },
              {
                cells: [
                  'Mínimo-máximo ~~*min-maxcontract*~~',
                  'Garantem-te umas horas mínimas e podes fazer mais até um limite.',
                  'Melhor do que o de zero horas. Confirma que o mínimo chega para viver.'
                ]
              },
              {
                cells: [
                  'Formação dual ~~*BBL*~~',
                  'Trabalhas e estudas ao mesmo tempo, a receber, e sais com um diploma oficial.',
                  'Costuma ser a empresa a pagar. É a via mais rápida para deixares de ser mão de obra substituível.'
                ]
              },
              {
                cells: [
                  'Estágio ~~*stage*~~',
                  'Ligado a uma formação. Não é um contrato de trabalho normal.',
                  'A compensação é baixa e não dá os mesmos direitos. Cuidado se to oferecerem sem estares a estudar.'
                ]
              }
            ]
          }
        },
        { h3: 'C · As cláusulas que aparecem nos dois' },
        'Seja quem for que te contrate, estes quatro conceitos vão estar no teu contrato e convém reconhecê-los antes de assinares.',
        {
          table: {
            caption: 'Letra pequena comum',
            head: [
              'Conceito',
              'O que significa'
            ],
            rows: [
              {
                cells: [
                  'Período experimental ~~*proeftijd*~~',
                  'Durante ele, qualquer das partes pode terminar no próprio dia. A duração máxima depende da duração do contrato, e **nos contratos muito curtos nem sequer se pode pôr**. Se vires um período experimental longo num contrato de poucos meses, pergunta.'
                ]
              },
              {
                cells: [
                  'Aviso prévio ~~*opzegtermijn*~~',
                  'O tempo com que é preciso avisar antes de te ires embora ou de te despedirem. Para o trabalhador costuma ser um mês; para a empresa aumenta com os teus anos de antiguidade. Atenção: normalmente conta **até ao fim do mês**, não a partir do dia em que avisas.'
                ]
              },
              {
                cells: [
                  'Compensação ~~*transitievergoeding*~~',
                  'Se for a empresa a terminar a relação, tens direito a uma compensação **desde o primeiro dia de trabalho**, proporcional ao tempo que lá estás. Muita gente sai sem a pedir porque não sabe que existe.'
                ]
              },
              {
                cells: [
                  'Não concorrência ~~*concurrentiebeding*~~',
                  'Limita-te a trabalhar para a concorrência quando sais. Nos contratos a termo só vale se estiver justificada por escrito. **Nenhuma agência te pode impedir de aceitar um emprego direto com a empresa cliente.**'
                ]
              }
            ]
          }
        },
        { h3: 'D · A cláusula a que tens de estar atento: o *uitzendbeding*' },
        'É a cláusula de cedência. Em bom português: **enquanto estiver ativa, o contrato de trabalho termina automaticamente quando a empresa cliente decide que já não precisa de ti**. Sem aviso prévio longo, sem compensação, sem discussão.',
        'Também funciona ao contrário: podes ir-te embora tu com muito pouco aviso. Essa é a parte boa, e para algumas pessoas compensa.',
        'O que tens de ter claro é que **na fase A, com essa cláusula, a tua situação é frágil**. Se além disso o alojamento estiver ligado ao contrato, um mau dia na fábrica pode transformar-se em ficares sem trabalho e sem casa na mesma sexta-feira.',
        {
          pull: {
            text: 'Na fase A não tens um emprego estável. Tens um emprego. A diferença nota-se no dia em que o cliente corta turnos.'
          }
        },
        { h3: 'E · Se ficares doente' },
        'Com o *uitzendbeding* ativo, ficar doente pode fazer o contrato terminar. Nesse caso passas a receber uma **prestação por doença do organismo público (UWV)**, que ronda os 70 % do teu salário diário. Não é o mesmo que continuar a receber o salário.',
        'Avisa no primeiro dia e fá-lo pelo canal que te indicarem (costuma haver um número próprio). Avisar tarde é das poucas coisas que te podem custar a prestação inteira.',
        { h3: 'F · Se ficares sem trabalho' },
        'Para receberes o subsídio de desemprego neerlandês (*WW*) tens de ter trabalhado um mínimo de semanas dentro de um período de referência. No início quase ninguém lá chega, e é precisamente o momento de maior risco.',
        'Duas coisas práticas: se vens de trabalhar noutro país da UE, pede o **formulário U1** antes de saíres, porque permite somar os períodos de descontos feitos lá. E guarda **todos os recibos e contratos** desde o primeiro dia: são a prova das semanas trabalhadas.',
        {
          note: {
            title: 'Para onde vai isto',
            tone: 'ink',
            blocks: [
              'O percurso completo é sempre o mesmo: fase A com cláusula → contrato a termo sem cláusula → contrato direto com a empresa cliente → sem termo. Cada degrau tira-te fragilidade e acrescenta-te salário.',
              'Quanto demora cada salto, o que é preciso para o dar e o que se desbloqueia lá em cima está na [página das metas](metas.html).'
            ]
          }
        },
        { h4: 'Fontes oficiais' },
        {
          ul: [
            '[uwv.nl](https://www.uwv.nl) — prestações de desemprego e de doença',
            '[belastingdienst.nl](https://www.belastingdienst.nl) — autoridade tributária neerlandesa',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao) — tipos de contrato e contratos coletivos'
          ]
        }
      ]
    },
    {
      id: 'verificar',
      eyebrow: '06 · SNA e SNF',
      title: [
        'Como verificar uma agência',
        'em dois minutos.'
      ],
      deck: 'De graça, no telemóvel e sem te registares em nada. Se há uma só coisa deste guia que vale a pena fazer, é esta.',
      blocks: [
        { h3: 'Os dois registos' },
        '**SNA — Stichting Normering Arbeid.** Audita se a empresa liquida bem os impostos e as contribuições e se cumpre a legislação laboral. É o selo que realmente importa: as empresas clientes sérias só trabalham com agências que o têm, porque senão respondem elas pelas dívidas.',
        'Consulta-se em [normeringarbeid.nl](https://www.normeringarbeid.nl), no motor de pesquisa do registo.',
        '**SNF — Stichting Normering Flexwonen.** Certifica que o alojamento cumpre uns mínimos de espaço, segurança e higiene, e é inspecionado periodicamente. Consulta-se em [normeringflexwonen.nl](https://www.normeringflexwonen.nl).',
        { h3: 'Como se faz, passo a passo' },
        {
          ol: [
            '**Pede o nome legal exato e o número KvK.** O KvK é o número do registo comercial neerlandês. Uma agência legal dá-to sem pestanejar. Atenção: o nome comercial com que te escrevem e o nome legal às vezes não são o mesmo.',
            '**Procura esse nome no registo SNA.** Tem de aparecer com a certificação *em vigor*, não caducada nem suspensa.',
            '**Procura o alojamento no registo SNF.** Às vezes o alojamento é gerido por outra empresa: pede também esse nome.',
            '**Confirma o número KvK** em [kvk.nl](https://www.kvk.nl). Vê desde quando existe a empresa. Uma sociedade criada há três meses que já recruta cem pessoas merece um segundo olhar.',
            '**Procura o nome no Google juntamente com as palavras *ervaringen* ou *klachten*** (experiências, queixas). Em neerlandês e em polaco vais encontrar muito mais do que em português.'
          ]
        },
        {
          note: {
            title: 'Sinais de alarme. Se aparecer um só, para.',
            tone: 'sand',
            blocks: [
              {
                ul: [
                  'Pedem-te **dinheiro adiantado** por qualquer motivo: inscrição, reserva de lugar, tratar do BSN, traduzir papéis, «despesas de gestão».',
                  'Pedem-te **fotografias do cartão de cidadão ou do passaporte antes de teres falado com alguém**, ou por um canal estranho.',
                  'Não te dão o **nome legal nem o número KvK**, ou ficam na defensiva quando o pedes.',
                  '**Não há contrato escrito**, ou dizem-te que «assina-se lá» e que não é preciso vê-lo antes.',
                  'Prometem-te um **salário líquido muito acima** do que leste aqui, ou «trabalho garantido».',
                  'Pressionam-te para **decidires hoje** porque «restam dois lugares».',
                  'Oferecem-te receber **uma parte por fora**. Isso deixa-te sem subsídio de desemprego, sem baixa e sem nada.'
                ]
              }
            ]
          }
        },
        {
          note: {
            title: 'Uma mudança que chega a 1 de janeiro de 2027',
            tone: 'stone',
            blocks: [
              'Os Países Baixos aprovaram um **sistema de admissão obrigatória** para as empresas de trabalho temporário (*Wet toelating terbeschikkingstelling arbeidskrachten*). A partir de 1 de janeiro de 2027 já não basta estar certificado: para poder ceder trabalhadores será precisa uma autorização oficial. As agências que já funcionam têm um período de transição enquanto o seu pedido é analisado, e as multas começam em 2028.',
              'Até lá, a SNA e a SNF continuam a ser a melhor ferramenta que tens. Quando o novo registo estiver a funcionar, acrescento-o a este guia.'
            ]
          }
        },
        { h4: 'Onde reclamar se alguma coisa correr mal' },
        {
          ul: [
            '[Inspeção do Trabalho neerlandesa](https://www.nlarbeidsinspectie.nl) — denúncias, também anónimas',
            '[FNV](https://www.fnv.nl) — o maior sindicato, atende trabalhadores estrangeiros',
            '[Work in NL](https://www.workinnl.nl) — pontos de informação oficiais para trabalhadores europeus'
          ]
        }
      ]
    },
    {
      id: 'preguntas-firmar',
      eyebrow: '07 · A lista',
      title: [
        'O que perguntar',
        'antes de assinar.'
      ],
      deck: 'Catorze perguntas. Copia-as, cola-as no chat com a agência e guarda as respostas. Uma agência séria responde a todas sem se incomodar.',
      blocks: [
        {
          cards: [
            {
              eyebrow: 'Contrato',
              title: 'Primeiro que tudo',
              blocks: [
                '**1.** Em que fase entro e que contrato coletivo se me aplica?\n**2.** Tem cláusula de cedência?\n**3.** Posso ler o contrato completo antes de viajar?\n**4.** Em que língua está e dão-mo traduzido?'
              ]
            },
            {
              eyebrow: 'Dinheiro',
              title: 'Os números',
              blocks: [
                '**5.** Qual é o preço bruto por hora exato?\n**6.** Tenho direito a equiparação salarial com os trabalhadores do cliente?\n**7.** Como são pagos os acréscimos dos turnos de noite e de fim de semana?\n**8.** Recebe-se à semana ou ao mês, e em que dia?'
              ]
            },
            {
              eyebrow: 'Casa',
              title: 'O alojamento',
              blocks: [
                '**9.** Quanto se desconta por semana e quantas pessoas há por quarto?\n**10.** O alojamento está no registo SNF? Em nome de quem?\n**11.** Se o trabalho acabar, quantos dias tenho para sair?'
              ]
            },
            {
              eyebrow: 'Deslocações',
              title: 'Chegar e circular',
              blocks: [
                '**12.** A que distância fica o trabalho e quem paga o transporte?\n**13.** Quem paga a viagem de ida e em que condições?'
              ]
            },
            {
              eyebrow: 'Papéis',
              title: 'As formalidades',
              blocks: [
                '**14.** Ajudam-me com a marcação do BSN e com o seguro de saúde, e isso tem algum custo para mim?'
              ]
            },
            {
              eyebrow: 'Regra de ouro',
              title: 'Por escrito',
              blocks: [
                'Faz todas estas perguntas **por escrito** — WhatsApp ou email — e guarda as respostas. Não é desconfiança: é o que te vai servir de prova se alguma coisa não for cumprida.'
              ]
            }
          ]
        },
        {
          note: {
            title: 'E uma última coisa',
            tone: 'ink',
            blocks: [
              'Se depois de leres tudo isto decidires que não te compensa, ganhaste na mesma. A informação serve para isso: para decidires com dados e não com um anúncio do Facebook. Eu não vou insistir.'
            ]
          }
        },
        {
          buttons: [
            { label: 'Enviar a minha candidatura', href: './#candidatura' },
            { label: 'Perguntar uma dúvida concreta', href: 'wa:' }
          ]
        }
      ]
    }
  ],
  toc: [
    { href: '#bsn', label: 'O BSN: sem isto não existes para a administração' },
    { href: '#nomina', label: 'O recibo de vencimento, linha a linha' },
    { href: '#alojamiento', label: 'O alojamento e quanto descontam mesmo' },
    { href: '#coste-vida', label: 'O que custa viver lá todas as semanas' },
    { href: '#contrato', label: 'Todos os tipos de contrato que existem' },
    { href: '#verificar', label: 'Como verificar uma agência na SNA e na SNF' },
    { href: '#preguntas-firmar', label: 'O que perguntar antes de assinar' }
  ]
};
