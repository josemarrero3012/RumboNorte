/* Metas (português). A mesma estrutura de contenido/metas.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.metas = {
  hero: {
    eyebrow: 'Metas',
    title: [
      'Ir trabalhar',
      'não é a meta.',
      'É o primeiro passo.'
    ],
    text: [
      'O guia conta-te onde te estás a meter. Esta página conta-te **até onde se pode chegar**: sair do alojamento da agência, ter carro, arrendar algo teu, passar a contrato direto com a empresa e acabar com um contrato sem termo.',
      'Não é motivação barata. São oito metas com o que custa cada uma e o prazo real em que se conseguem. É o caminho que faz quem fica. Não é rápido nem bonito, mas faz-se.'
    ],
    accent: 1
  },
  aviso: {
    title: 'Antes de continuares a ler',
    tone: 'ink',
    blocks: [
      'Isto **não é uma promessa e não acontece a toda a gente**. Há quem volte ao fim de dois meses, quem fique parado no primeiro degrau durante anos e quem veja as coisas correrem mal por motivos que não controla.',
      'O que é verdade é que **o caminho existe e está marcado**. Quem o percorre não é o mais esperto nem o que tem mais sorte: é quem aguenta os primeiros meses, não estoira o que ganha e usa o tempo morto para aprender alguma coisa. Não há atalho, e quem te vender um está a vender-te alguma coisa.'
    ]
  },
  mapa: {
    id: 'mapa',
    eyebrow: 'O mapa',
    title: [
      'Quanto demora',
      'mesmo cada coisa.'
    ],
    deck: 'Prazos de quem vai a sério e trabalha a tempo inteiro. Se fores a meio gás, multiplica por dois.',
    blocks: [
      {
        table: {
          caption: 'Percurso habitual · indicativo',
          head: [
            'Momento',
            'Onde estás',
            'O que se consegue'
          ],
          rows: [
            {
              cells: [
                'Semana 1–4',
                'Fase A, alojamento da agência',
                'BSN, seguro de saúde, conta bancária, bicicleta. Gastas mais do que ganhas.'
              ]
            },
            {
              cells: [
                'Mês 2–6',
                'Fase A, já com ritmo',
                'Primeira poupança a sério. Recuperas a reserva que trouxeste e começas a juntar.'
              ]
            },
            {
              cells: [
                'Mês 6–12',
                'Fim da fase A',
                'Certificados (empilhador, VCA), neerlandês básico, carro se precisares.'
              ]
            },
            {
              cells: [
                'Ano 1–2',
                'Fase B ou contrato direto',
                'Sais do alojamento da agência. Arrendamento próprio. Contrato com a empresa cliente.'
              ]
            },
            {
              cells: [
                'Ano 2–4',
                'Contrato a termo na empresa',
                'Sobes de posto. Encadeias contratos até ao contrato sem termo.'
              ],
              kind: 'sub'
            },
            {
              cells: [
                'Ano 3–5',
                'Contrato sem termo',
                'Abre-se tudo: bons arrendamentos, crédito, hipoteca. Independência real.'
              ],
              kind: 'total'
            }
          ]
        }
      },
      {
        small: 'Os saltos não são automáticos nem garantidos. Dependem da empresa, do setor, da época e, sobretudo, de fazeres a parte que te cabe. Mas nenhum destes degraus é raro: é o percurso normal de quem fica.'
      }
    ]
  },
  metas: {
    id: 'metas',
    eyebrow: 'Uma a uma',
    title: [
      'As oito metas,',
      'com o seu preço e o seu prazo.'
    ],
    deck: 'Por ordem. Cada uma apoia-se na anterior: saltar degraus é a forma mais rápida de acabar a voltar.',
    goals: [
      {
        when: 'Mês 1 a mês 6',
        title: 'Poupar a sério, não «o que sobrar»',
        blocks: [
          'Esta é a meta-mãe. Se esta falhar, não há nenhuma das sete seguintes. E a maioria das pessoas que falham nos Países Baixos não falha por causa do trabalho: falha aqui.',
          'O método que funciona é aborrecido: **no dia em que recebes, pões de parte primeiro e vives com o que fica**. Não ao contrário. Abre uma segunda conta (em qualquer banco neerlandês faz-se em cinco minutos no telemóvel) e mete lá o valor fixo assim que entra o salário. O que não vês, não gastas.',
          {
            stats: [
              { value: '200–255 €', label: 'Possível poupar por semana com o recibo do exemplo do guia' },
              { value: '600–800 €', label: 'Objetivo mensal realista sem viver mal' },
              { value: '7000–9500 €', label: 'Em doze meses, se aguentares o ritmo' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Os três buracos por onde se vai o dinheiro das pessoas, por ordem: **os fins de semana** (uma noite má são 80 €, quatro por mês são um carro por ano), **os envios para casa sem controlo** — manda, mas define um valor fixo e não mexas nele — e **a comida já feita**. Cozinhar em grupo com quem vive contigo é a maior e mais fácil poupança.',
          {
            note: {
              title: 'Regra prática',
              tone: 'stone',
              blocks: [
                'Nos primeiros seis meses não compres nada que não consigas levar na bicicleta. Parece parvo e funciona: obriga-te a distinguir o que precisas do que te apetece enquanto ainda não tens margem.'
              ]
            }
          }
        ]
      },
      {
        when: 'Primeira semana',
        title: 'A bicicleta',
        blocks: [
          'É a primeira compra que tens de fazer e a que melhor se paga de toda a lista. Entre **60 e 120 € em segunda mão**, e a partir daí deixas de depender do horário da carrinha da empresa para tudo o que não seja ir trabalhar.',
          'Compra-a numa *fietsenwinkel* com garantia ou no Marktplaats, o portal de segunda mão do país inteiro. Dois avisos: **não compres uma bicicleta na rua a alguém que ta oferece assim do nada** — quase sempre são roubadas e comprá-las é crime — e **gasta 20 € num bom cadeado**, porque lá o roubo de bicicletas é desporto nacional.',
          'Com bicicleta muda tudo: fazes as compras no supermercado barato em vez de no caro ao lado, vais à câmara municipal sem pedir favores e sais do alojamento ao domingo sem depender de ninguém.'
        ]
      },
      {
        when: 'Mês 6 a mês 12',
        title: 'Os papéis que valem dinheiro',
        blocks: [
          'Antes de gastar num carro, gasta em ti. Os certificados neerlandeses são baratos, tiram-se em dias e **sobem logo o preço da tua hora**. É o investimento com melhor retorno de toda a lista.',
          {
            ul: [
              '**Empilhador (*heftruck*) e empilhador retrátil (*reachtruck*).** Curso de um ou dois dias. Muitas agências pagam-to se já lá estás há uns meses e pedires. Pede.',
              '**VCA.** É o certificado básico de segurança no trabalho. Custa pouco, passa-se a estudar duas tardes e em alguns setores simplesmente não te contratam sem ele.',
              '**Neerlandês.** Aqui está a verdadeira alavanca. Não precisas de falar bem: basta perceber as instruções e conseguir responder para te distinguires de 90 % dos estrangeiros do teu turno, e és o primeiro a ser promovido. Começa com uma aplicação gratuita nas deslocações e pergunta se a empresa paga aulas: muitas pagam.'
            ]
          },
          {
            note: {
              title: 'Porque é que isto vem antes do carro',
              tone: 'sand',
              blocks: [
                'Um carro custa-te dinheiro todos os meses. Um certificado devolve-to todos os meses. Com o mesmo esforço, a ordem importa.'
              ]
            }
          }
        ]
      },
      {
        when: 'Mês 8 a mês 18',
        title: 'O carro',
        blocks: [
          'Não é imprescindível, mas muda-te a vida se o trabalho for longe, se fizeres turnos de noite ou se quiseres poder mudar de emprego sem depender de a nova empresa ter transporte.',
          'Um carro usado decente custa à volta de **2000–4000 €**. O importante não é esse número, mas o que custa tê-lo parado:',
          {
            stats: [
              { value: '40–70 €/mês', label: 'Seguro obrigatório (*WA-verzekering*)' },
              { value: '30–70 €/mês', label: 'Imposto de circulação (*wegenbelasting*), conforme o peso e a província' },
              { value: '~50 €/ano', label: 'A *APK*, a inspeção periódica de lá' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Junta-lhe o combustível, que é caro. Conta com **150–250 € por mês** de custo real antes de o tirares do sítio. Se isso te come a poupança mensal, ainda não é altura.',
          {
            note: {
              title: 'Duas coisas que as pessoas descobrem tarde',
              tone: 'stone',
              blocks: [
                '**A carta de condução da UE é válida** nos Países Baixos sem qualquer formalidade enquanto estiver em vigor.',
                '**Levar o carro do teu país tem truque.** Se te registares lá como residente, há um prazo para o matricular nos Países Baixos, e isso implica pagar um imposto de matrícula (o *BPM*) que em muitos casos custa mais do que o próprio carro. Antes de ires com as tuas matrículas, informa-te na [Belastingdienst](https://www.belastingdienst.nl). A quase toda a gente sai mais barato comprar lá.'
              ]
            }
          }
        ]
      },
      {
        when: 'Ano 1 a ano 2',
        title: 'Sair do alojamento da agência',
        blocks: [
          'Este é o degrau que mais se nota. Deixas de partilhar quarto, a tua casa deixa de depender do teu contrato e começas a viver como uma pessoa em vez de como um trabalhador deslocado.',
          'O que pedem os senhorios, e porque é difícil no início:',
          {
            ul: [
              '**Contrato de trabalho**, quanto mais estável melhor. Com fase A e cláusula de cedência vão dizer-te que não muitas vezes.',
              '**Rendimentos de três a quatro vezes a renda.** É o filtro padrão e é o verdadeiro motivo por que não te aceitam, não o teu sotaque.',
              '**Registo de residência** no município e extratos bancários dos últimos meses.',
              '**Caução** (*borg*) de um ou dois meses, às vezes mais despesas da imobiliária.'
            ]
          },
          {
            stats: [
              { value: '400–600 €/mês', label: 'Quarto em casa partilhada, fora das grandes cidades' },
              { value: '800–1200 €/mês', label: 'Estúdio ou apartamento pequeno numa cidade média' },
              { value: '1500 €+', label: 'O mesmo em Amesterdão, Utrecht ou Haia' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Duas coisas que quase ninguém aproveita: existe um **apoio estatal ao arrendamento** (*huurtoeslag*) para rendimentos baixos quando a renda não ultrapassa um certo teto; pede-se com o DigiD em [toeslagen.nl](https://www.toeslagen.nl) e não é automático. E existe a **habitação social** (*sociale huurwoning*), muitíssimo mais barata, com listas de espera de anos: por isso tens de te inscrever no primeiro ano, mesmo que ainda não precises. O tempo na lista é o que conta.',
          { h4: 'Viver na Alemanha e trabalhar nos Países Baixos' },
          'Muita gente que trabalha perto da fronteira acaba por arrendar na Alemanha, na zona da Renânia do Norte-Vestefália, porque **pelo mesmo dinheiro vive-se bastante melhor**. É legal e é comum. Mas informa-te antes, porque passas a ser trabalhador transfronteiriço (*grensarbeider*) e isso muda duas coisas importantes: **onde pagas impostos** e **como funciona o teu seguro de saúde** (vais precisar do formulário S1 para poderes ir ao médico na Alemanha com o seguro neerlandês). Não é complicado, mas tem de ser bem feito desde o início.'
        ]
      },
      {
        when: 'Ano 1 a ano 2',
        title: 'Seres contratado diretamente pela empresa',
        blocks: [
          'Enquanto estás na agência, a empresa onde trabalhas paga por ti bastante mais do que tu recebes. A diferença fica para a agência. Quando passas a contrato direto, **parte dessa diferença passa para o teu bolso**, e além disso deixas de ter um intermediário entre ti e o teu empregador.',
          'Como acontece na prática: passas meses na mesma empresa, conhecem-te, funcionas, e chega um momento em que lhes compensa mais contratar-te do que continuar a pagar à agência. Esse momento existe e só chega se tu o fizeres chegar.',
          'O que pesa mesmo quando decidem com quem ficam:',
          {
            ul: [
              '**Que não faltes e chegues a horas.** Parece básico. É literalmente o primeiro filtro e elimina muita gente.',
              '**Que percebas e te faças perceber.** Mesmo que seja num inglês arranhado. Quem comunica é quem pode coordenar.',
              '**Que aprendas mais do que um posto.** Quem sabe cobrir três posições não se substitui facilmente.',
              '**Que o digas.** Fala com o teu responsável direto e diz-lhe claramente que queres ficar na empresa. Muitas promoções e contratos não chegam porque ninguém sabia que os querias.'
            ]
          },
          {
            note: {
              title: 'Um pormenor contratual que convém saber',
              tone: 'sand',
              blocks: [
                'As agências costumam ter acordos com a empresa cliente sobre a passagem: durante um tempo, contratar-te diretamente custa-lhes uma compensação, e passado esse período já não. Por isso às vezes a resposta é «agora não, daqui a uns meses». **Pergunta quando**, e aponta a data. Nenhuma agência legal te pode impedir de aceitar um emprego direto.'
              ]
            }
          }
        ]
      },
      {
        when: 'Ano 2 a ano 4',
        title: 'Subir de posto',
        blocks: [
          'No armazém e na produção a escada é bastante clara e sobe-se mais depressa do que as pessoas pensam, porque a rotação é enorme e quem fica destaca-se sozinho.',
          {
            table: {
              caption: 'Escada habitual em logística e produção',
              head: [
                'Posto',
                'O que é preciso'
              ],
              rows: [
                {
                  cells: [
                    'Operário / *orderpicker*',
                    'O ponto de entrada. Basta aparecer.'
                  ]
                },
                {
                  cells: [
                    'Operador de empilhador / *reachtruck*',
                    'Certificado neerlandês. Aumento de salário imediato.'
                  ]
                },
                {
                  cells: [
                    'Especialista ou controlo de qualidade',
                    'Experiência no processo e inglês funcional.'
                  ]
                },
                {
                  cells: [
                    '*Voorman* / chefe de equipa',
                    'Aqui já é preciso neerlandês básico. E que confiem em ti.'
                  ]
                },
                {
                  cells: [
                    '*Teamleider* / supervisor',
                    'Neerlandês, contrato direto e anos lá dentro.'
                  ],
                  kind: 'sub'
                }
              ]
            }
          },
          'E há uma via que quase nenhum recém-chegado conhece: a **formação dual** (*BBL*). Trabalhas quatro dias e estudas um, a receber, e sais com um diploma oficial neerlandês de formação profissional. **Costuma ser a empresa a pagar.** É a forma mais rápida de deixares de ser mão de obra substituível, por isso pergunta por ela assim que tiveres contrato direto.'
        ]
      },
      {
        when: 'Ano 3 a ano 5',
        title: 'O contrato sem termo',
        blocks: [
          'O *vast contract*. É a meta que fecha todas as outras, e não pelo salário — que sobe pouco — mas **pelo que desbloqueia**.',
          'Chega-se lá por dois caminhos, explicados em pormenor [na parte do guia sobre contratos](guia.html#contrato): encadeando contratos a termo com a mesma empresa até que, por lei, o seguinte tenha de ser sem termo, ou chegando à última fase dentro da agência.',
          'O que muda no dia em que o assinas:',
          {
            ul: [
              '**Os senhorios atendem-te o telefone.** Passas de ser descartado automaticamente a ser um candidato normal.',
              '**Podes pedir um crédito à habitação.** Nos Países Baixos pode-se comprar casa com um contrato sem termo e, em muitos casos, a prestação mensal fica abaixo do que pagavas de renda. Fala com um consultor de crédito (*hypotheekadviseur*): a primeira consulta costuma ser gratuita.',
              '**Deixas de viver com a mala meio feita.** Isto não se mede em euros e é o que mais se nota.'
            ]
          },
          'Quase toda a gente que chega até aqui enganou-se em algum dos degraus anteriores. Esta página está escrita para que tu demores menos.'
        ]
      }
    ]
  },
  final: {
    id: 'independencia',
    eyebrow: 'O fim do caminho',
    title: [
      'A meta não é o dinheiro.',
      'É não ter de pensar nele.'
    ],
    deck: 'Independência é poder dizer que não. A um turno, a um chefe, a uma casa má, a voltar antes do tempo.',
    blocks: [
      {
        lede: 'Quando as pessoas imaginam o sucesso no estrangeiro, imaginam um número na conta. Com os anos percebes que não é isso. É chegar a um ponto em que **uma má semana não te desarruma a vida**: o carro avaria e arranjas, aparece um imprevisto em casa e cobres, e não tens de pedir dinheiro a ninguém nem aceitar um turno que não queres.'
      },
      'É isso que muitos não tinham no seu país, e não por falta de vontade de trabalhar. É a diferença entre estar sempre a um mês de um problema e não estar. Chama-se tranquilidade e não se compra: constrói-se durante alguns anos, com muitas semanas aborrecidas seguidas.',
      {
        pull: {
          text: 'Não há truque nenhum. Consegue-se trabalhando, não estoirando o que se ganha e tendo a cabeça posta em crescer como pessoa e como profissional.',
          by: 'Iván · Rumbo Norte'
        }
      },
      { h3: 'As três coisas que separam quem consegue de quem volta' },
      '**Aguentar os primeiros três meses.** São de longe os piores: a língua, o frio, o quarto partilhado, a comida estranha e a sensação de te teres enganado. Quase todos os que voltam, voltam nessa fase. Quem passa dali fica.',
      '**Não gastar o que se ganha.** Ganhar bem e poupar são duas coisas diferentes e não vêm juntas. Duas pessoas podem ganhar o mesmo durante três anos e acabar uma com casa própria e a outra a pedir dinheiro emprestado em janeiro.',
      '**Aprender alguma coisa todos os anos.** Um certificado, a língua, um posto novo. Quem faz exatamente o mesmo trabalho no quinto ano que no primeiro ganha quase o mesmo que no primeiro, e ainda por cima com mais cinco anos em cima.',
      {
        note: {
          title: 'E uma última honestidade',
          tone: 'ink',
          blocks: [
            'Nada disto compensa a toda a gente. Estás longe da tua gente, perdes aniversários e natais, e há domingos de novembro em que chove de lado e te perguntas o que estás lá a fazer. Isso também faz parte do acordo e ninguém o conta.',
            'Se o que queres é dinheiro rápido e voltar, há formas mais fáceis. Esta página é para quem pensa construir alguma coisa.'
          ]
        }
      }
    ]
  },
  cta: {
    eyebrow: 'Começar',
    title: [
      'O primeiro degrau',
      'é entrar com o pé direito.',
      'Aí entro eu.'
    ],
    text: [
      'Os sete seguintes dependem de ti. O primeiro, chegar sabendo onde te metes e a uma agência legal, é precisamente o meu trabalho.',
      'Conta-me a tua situação e digo-te para que perfis encaixas, que números te sairiam a ti, que reserva precisas e no que reparar antes de assinares seja o que for.'
    ],
    actions: [
      { label: 'Escrever pelo WhatsApp', href: 'wa:' },
      { label: 'Enviar a minha candidatura', href: './#candidatura' }
    ],
    foot: 'Antes, lê [o guia](guia.html). É o que te poupa os erros caros.'
  },
  legalNote: 'Os valores e os prazos desta página são indicativos e não constituem uma promessa de resultado.'
};
