/* Página inicial (português). A mesma estrutura de contenido/inicio.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.inicio = {
  hero: {
    countries: ['Países Baixos'],
    also: 'Também há vagas na Bélgica e na Alemanha.',
    subtitle: 'Antes de fazeres a mala, explico-te com valores indicativos quanto se costuma ganhar, quanto custa o quarto e quanto te pode ficar limpo. Se passares a entrevista, atribuo-te vagas de agências certificadas.',
    note: 'Sem rodeios, de tu para tu e sem custos para ti.',
    primaryCta: { label: 'Enviar a minha candidatura', href: '#candidatura' },
    secondaryCta: { label: 'Como funciona', href: '#proceso' },
    ring: 'De Espanha para o norte da Europa',
    promises: [
      'Sempre gratuito para o candidato',
      'Agências de trabalho temporário certificadas',
      'Informação com fontes oficiais',
      'Requisitos: +21 anos · passaporte UE · inglês B1'
    ],
    person: { name: 'Sou o Iván', role: 'O teu recrutador na Rumbo Norte' },
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    map: {
      src: 'assets/mapa/europa.svg',
      width: 1000,
      height: 1073,
      origin: [177, 843],
      places: [
        { name: 'Países Baixos', id: 'nl', pin: [458, 443] },
        { name: 'Alemanha', id: 'de', pin: [561, 490] },
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
    eyebrow: 'Uma pessoa, as coisas claras',
    arrowSrc: 'assets/logos/rumbo-norte-arrow.webp',
    title: [
      'Antes de',
      'fazeres a mala,',
      'vamos falar',
      'do que importa.'
    ],
    cta: { label: 'Conhece o Iván', href: 'quienes-somos.html' },
    intro: 'Chamo-me Iván e sou recrutador.',
    paragraphs: [
      'Procuro em Espanha pessoas que queiram trabalhar nos Países Baixos, onde está a grande maioria das minhas vagas, e também na Bélgica e na Alemanha. Apresento-as a agências de trabalho temporário certificadas desses países, que são quem contrata.',
      'Antes de te apresentar a alguém, conto-te o que quase nenhum anúncio conta: quanto te fica limpo depois dos descontos, quanto te cobram pelo quarto e como confirmar que a agência é legal. Se, com tudo isso à frente, continuares interessado, seguimos.'
    ],
    note: {
      title: 'Para ti é gratuito, agora e depois.',
      text: 'Eu seleciono e apresento, mas não contrato: a última palavra é da agência e não te vou prometer um posto. Toda a informação traz a fonte oficial para que a possas confirmar tu mesmo.'
    }
  },
  topics: {
    id: 'como-funciona',
    items: [
      {
        eyebrow: 'Recibo de vencimento',
        title: 'O que fica limpo na tua conta.',
        src: 'assets/ilustraciones/ilustracion-nomina.webp',
        width: 840,
        height: 456,
        figure: '1250–2200 €',
        unit: 'por mês na tua conta',
        figureNote: 'Valor indicativo: depende da agência, da cidade e do alojamento.',
        text: 'Com 40 horas por semana e o alojamento já descontado. O recibo, linha a linha, no guia.',
        href: 'guia.html#nomina',
        linkHint: 'Perceber o recibo de vencimento'
      },
      {
        eyebrow: 'Alojamento',
        title: 'Onde vives e a que preço.',
        src: 'assets/ilustraciones/ilustracion-alojamiento.webp',
        width: 840,
        height: 450,
        figure: '80–150 €',
        unit: 'por semana pelo quarto',
        figureNote: 'Valor indicativo: depende da agência, da cidade e do alojamento.',
        text: 'Quase sempre partilhado e ligado ao contrato. O que perguntar antes de assinar.',
        href: 'guia.html#alojamiento',
        linkHint: 'Conhecer as condições'
      },
      {
        eyebrow: 'Registos',
        title: 'Saber com quem assinas.',
        src: 'assets/ilustraciones/ilustracion-registros.webp',
        width: 840,
        height: 453,
        figure: '2 registos',
        unit: 'públicos e gratuitos',
        text: 'SNA e SNF nos Países Baixos: dois minutos no telemóvel para verificar uma agência.',
        href: 'guia.html#verificar',
        linkHint: 'Verificar uma agência'
      }
    ]
  },
  destinos: {
    eyebrow: 'Destinos',
    title: [
      'Primeiro, os Países Baixos.',
      'Bélgica e Alemanha, também.'
    ],
    text: 'Quase todas as minhas vagas estão nos Países Baixos. Na Bélgica e na Alemanha também há, mas menos e mais pontuais. As regras mudam ao atravessar a fronteira: quem certifica a agência, que número te pedem quando chegas e que língua conta. Isto é o básico de cada um; o teu caso, falamos dele.',
    id: 'destinos',
    hint: 'Um rumo, três destinos. Escolhe um país na maqueta.',
    placeLabel: 'Ver a ficha',
    sceneUrl: 'js/paises-3d.js',
    defaultId: 'paises-bajos',
    posterSrc: 'assets/3d/paises-poster.webp',
    posterTallSrc: 'assets/3d/paises-poster-movil.webp',
    items: [
      {
        id: 'paises-bajos',
        name: 'Países Baixos',
        main: true,
        tag: 'Destino principal · a maioria das vagas',
        spot: [50, 69.8],
        spotTall: [44.9, 29.5],
        intro: 'O destino mais experimentado: muita logística, estufas e produção, com alojamento quase sempre gerido pela agência.',
        facts: [
          { label: 'O que mais se pede', value: 'Armazém, empilhador, alimentação, estufas' },
          { label: 'Como verificar a agência', value: 'Registo SNA e, para o alojamento, SNF' },
          { label: 'O teu número ao chegar', value: 'BSN, na câmara municipal (*gemeente*)' },
          { label: 'Língua', value: 'Inglês B1 de conversação, obrigatório. O neerlandês não se pede no início.' }
        ],
        action: { label: 'Guia completo dos Países Baixos', href: 'guia.html' }
      },
      {
        id: 'belgica',
        name: 'Bélgica',
        tag: 'Vagas pontuais',
        spot: [17.5, 80.6],
        spotTall: [47, 92.4],
        intro: 'Perto, com salários atualizados com a inflação e um país dividido em duas línguas. O sítio onde calhas muda muito o dia a dia.',
        facts: [
          { label: 'O que mais se pede', value: 'Logística, alimentação, produção' },
          { label: 'Como verificar a agência', value: 'Acreditação da sua região: Flandres, Valónia ou Bruxelas' },
          { label: 'O teu número ao chegar', value: 'Número da segurança social belga (INSZ / NISS)' },
          { label: 'Língua', value: 'Inglês B1 de conversação, obrigatório. Na Flandres ajuda o neerlandês e na Valónia o francês.' }
        ],
        action: {
          label: 'Pergunta-me pela Bélgica',
          href: 'wa:Olá Iván. Tenho interesse em trabalhar na Bélgica, podes explicar-me como funciona?'
        }
      },
      {
        id: 'alemania',
        name: 'Alemanha',
        tag: 'Vagas pontuais',
        spot: [82.9, 82.4],
        spotTall: [52.8, 60.8],
        intro: 'O maior mercado: indústria, automóvel e centros logísticos enormes. Pede mais papelada e premeia quem se desenrasca em alemão.',
        facts: [
          { label: 'O que mais se pede', value: 'Logística, produção, metalurgia e indústria automóvel' },
          {
            label: 'Como verificar a agência',
            value: 'Licença de cedência de trabalhadores da Bundesagentur für Arbeit'
          },
          { label: 'O teu número ao chegar', value: 'Registo de residência (*Anmeldung*), número fiscal e da segurança social' },
          { label: 'Língua', value: 'Inglês B1 de conversação, obrigatório. O alemão conta muito mais do que nos outros dois.' }
        ],
        action: {
          label: 'Pergunta-me pela Alemanha',
          href: 'wa:Olá Iván. Tenho interesse em trabalhar na Alemanha, podes explicar-me como funciona?'
        }
      }
    ]
  },
  servicios: {
    eyebrow: 'Primeiro que tudo',
    title: [
      'O que faço exatamente',
      'e o que não faço.'
    ],
    text: 'Neste setor há muitos intermediários que não dizem o que são. Eu sou recrutador, digo-o logo no primeiro ecrã, e aqui tens o que isso significa para ti.',
    id: 'que-hago',
    columns: [
      {
        title: 'O que faço',
        items: [
          {
            title: 'Falo contigo e avalio o teu perfil',
            blocks: [
              'Uma conversa curta pelo WhatsApp ou por telefone: experiência, línguas, carta de condução e quando podes viajar. Com isso já sei para que postos encaixas.'
            ]
          },
          {
            title: 'Explico-te os números do teu caso',
            blocks: [
              'Recibo de vencimento, descontos, alojamento, contrato de fase A, seguro de saúde, BSN. Com clareza e valores indicativos.'
            ]
          },
          {
            title: 'Atribuo-te vagas de agências certificadas',
            blocks: [
              'Se cumprires os requisitos e passares a entrevista, dou-te acesso à plataforma de candidatos e atribuo-te vagas de agências de trabalho temporário certificadas, sobretudo dos Países Baixos.'
            ]
          },
          {
            title: 'Preparo-te para a entrevista e para o contrato',
            blocks: [
              'O que te vão perguntar, o que tens de perguntar tu e o que ver no contrato antes de o assinares.'
            ]
          }
        ]
      },
      {
        title: 'O que não faço',
        items: [
          {
            title: 'Não sou o teu empregador',
            blocks: [
              'Quem te contrata, te paga e assina contigo é a agência. O meu trabalho é a seleção e a apresentação.'
            ]
          },
          {
            title: 'Não te cobro nada',
            blocks: [
              'Nem inscrição, nem gestão, nem «reserva de lugar», nem tradução de papéis. Nada. Se alguém te pedir dinheiro em meu nome, não sou eu.'
            ]
          },
          {
            title: 'Não garanto trabalho',
            blocks: [
              'Posso dizer-te se o teu perfil encaixa e apresentar-te. Contratar é decisão da agência e depende da época e do posto.'
            ]
          }
        ]
      }
    ],
    note: {
      title: 'Aviso importante',
      tone: 'sand',
      blocks: [
        'Uma agência de trabalho temporário legal não te pode cobrar por te dar trabalho. Nos Países Baixos isso é proibido pela *Waadi* (artigo 9.º), e na Bélgica e na Alemanha também não podem cobrar ao trabalhador pela cedência. Se te pedirem dinheiro adiantado para «reservar lugar», «tratar do BSN» ou «pôr-te na lista», é uma burla. Vale para mim e para qualquer outro.'
      ]
    }
  },
  perfiles: {
    eyebrow: 'O que se procura',
    title: [
      'Os perfis que',
      'mais me pedem.'
    ],
    text: 'Não são ofertas concretas. É o que as agências para quem faço seleção, sobretudo nos Países Baixos, pedem quase sempre. O que há aberto em cada momento conto-te quando falarmos, porque muda todas as semanas.',
    id: 'perfiles',
    items: [
      {
        eyebrow: 'Logística',
        id: 'almacen',
        photo: 'assets/perfiles/almacen',
        focus: [41, 45],
        short: 'Armazém',
        title: 'Armazém e preparação de encomendas',
        text: 'Preparar encomendas (*orderpicking*), carregar e descarregar, digitalizar mercadoria. É a entrada mais habitual. Não é preciso experiência; é preciso aguentar turnos e muitas horas de pé.'
      },
      {
        eyebrow: 'Logística',
        id: 'carretilla',
        photo: 'assets/perfiles/carretilla',
        focus: [34, 40],
        short: 'Empilhador',
        title: 'Operadores de empilhador e retrátil',
        text: 'O perfil mais procurado do armazém e dos mais bem pagos. Se já conduziste empilhador ou *reachtruck*, diz-mo logo no início. Lá costumam pedir o certificado neerlandês, e muitas agências pagam-to.'
      },
      {
        eyebrow: 'Transporte',
        id: 'camion',
        photo: 'assets/perfiles/camion',
        focus: [60, 35],
        short: 'Camião',
        title: 'Motoristas de camião',
        text: 'Rotas nacionais e internacionais, distribuição e entregas. É um dos perfis com mais vagas. Pede-se carta C ou C+E válida, o CAM (código 95) e cartão de condutor para o tacógrafo. A experiência que pedem depende da agência e do posto.'
      },
      {
        eyebrow: 'Transporte',
        id: 'autobus',
        photo: 'assets/perfiles/autobus',
        focus: [32, 32],
        short: 'Autocarro',
        title: 'Motoristas de autocarro',
        text: 'Transporte urbano, interurbano e de empresa. É um dos perfis com mais vagas. Pede-se carta D válida e o CAM (código 95). Os requisitos exatos dependem da agência e do posto.'
      },
      {
        eyebrow: 'Indústria',
        id: 'alimentacion',
        photo: 'assets/perfiles/alimentacion',
        focus: [31, 45],
        short: 'Alimentar',
        title: 'Produção alimentar',
        text: 'Linhas de embalagem, controlo de produto e limpeza de linha. Trabalha-se por turnos, muitas vezes ao frio, e há movimento todo o ano.'
      },
      {
        eyebrow: 'Campo',
        id: 'invernaderos',
        photo: 'assets/perfiles/invernaderos',
        focus: [45, 45],
        short: 'Estufas',
        title: 'Agricultura e estufas',
        text: 'Colheita, plantação e seleção. Vai muito por épocas, com picos claros e meses fracos, por isso convém saber as datas antes de comprares o bilhete.'
      },
      {
        eyebrow: 'Serviços',
        id: 'limpieza',
        photo: 'assets/perfiles/limpieza',
        focus: [38, 45],
        short: 'Limpeza',
        title: 'Limpeza industrial',
        text: 'Limpeza de fábricas, armazéns e unidades de produção. Muitos turnos de noite e de fim de semana.'
      },
      {
        eyebrow: 'Ofícios',
        id: 'construccion',
        photo: 'assets/perfiles/construccion',
        focus: [68, 40],
        short: 'Construção',
        title: 'Construção e metalurgia',
        text: 'Soldadores, montadores, eletricistas. Aqui pedem experiência que se possa comprovar e, por vezes, certificados como o VCA de segurança.'
      }
    ],
    requisitos: {
      title: 'Requisitos obrigatórios para qualquer vaga',
      items: [
        'Ter 21 anos ou mais.',
        'Nacionalidade ou passaporte da União Europeia.',
        'Inglês de nível B1 de conversação, no mínimo.'
      ],
      text: 'São indispensáveis e não têm exceções. Se não cumprires algum dos três, não te posso apresentar a nenhuma das minhas vagas.'
    },
    note: {
      title: 'O que conta a favor em qualquer perfil',
      tone: 'sand',
      blocks: [
        'Carta de condução B, e melhor ainda se tiveres carro. Poder viajar em breve. E a intenção de ficar uma temporada a sério, não três semanas.',
        'Se cumprires os três requisitos, escreve-me e vemos que vagas encaixam no teu perfil.'
      ]
    }
  },
  proceso: {
    eyebrow: 'O processo',
    title: [
      'Como é a seleção,',
      'passo a passo.'
    ],
    text: 'Seis passos. Do 2 ao 4 é a entrevista comigo.',
    id: 'proceso',
    steps: [
      {
        when: 'Dia 1',
        title: 'Escreves-me ou envias a tua candidatura',
        text: 'Pelo WhatsApp ou com o formulário. Conta-me a tua situação: línguas, se tens carta de condução, quando podes viajar e o que te preocupa. Não precisas de ter tudo decidido.'
      },
      {
        when: 'Entrevista',
        title: 'Confirmo que cumpres os requisitos',
        text: 'A primeira coisa que verifico são os três requisitos obrigatórios para qualquer vaga: ter 21 anos ou mais, nacionalidade ou passaporte da União Europeia e um nível de inglês B1 de conversação, no mínimo. Se faltar algum, digo-to nesse momento e não seguimos.'
      },
      {
        when: 'Entrevista',
        title: 'Falamos da tua experiência',
        text: 'Revemos onde trabalhaste, em que postos e durante quanto tempo, se tens carta ou algum certificado (empilhador, CAM…) e a partir de quando podes viajar. Com isso vejo que vagas encaixam contigo.'
      },
      {
        when: 'Entrevista em inglês',
        title: 'Umas perguntas em inglês',
        text: 'Faço-te umas perguntas em inglês para verificar o teu nível. Não é um exame de gramática: é ver se consegues manter uma conversa, porque é o que te vão pedir no trabalho.'
      },
      {
        when: 'Se passares a entrevista',
        title: 'Registas-te na plataforma de candidatos',
        blocks: [
          'Para acederes às nossas vagas, envio-te uma ligação de acesso para candidatos. Aí registas-te e carregas toda a documentação necessária.',
          {
            ul: [
              'O mais importante é o **CV**. Tem de estar atualizado, com as datas de cada trabalho em mês e ano, os teus dados em dia e tudo em inglês.',
              'Tem também em conta que algumas das nossas agências pedem um **certificado de registo criminal** limpo, com no máximo 6 meses.'
            ]
          },
          'Quando estiveres registado, atribuo-te **três vagas** que se ajustem ao teu perfil.'
        ]
      },
      {
        when: 'Antes de viajar',
        title: 'As condições de trabalho',
        blocks: [
          {
            ul: [
              '**Salário:** nos postos sem qualificação recebe-se o salário mínimo. Nos Países Baixos, para maiores de 21 anos, é de 15,29 € brutos por hora a partir de 1 de janeiro de 2027 (até 31 de dezembro de 2026, 14,99 €).',
              '**Alojamento e transporte:** são organizados pela agência que te contrata como empregado, e os dois são descontados do salário. Normalmente a casa e o quarto são partilhados, embora dependa da agência e do alojamento.',
              '**Turnos:** podem ser de manhã, de tarde ou de noite.',
              '**Viagem:** o voo e a deslocação até ao escritório da agência ou ao alojamento são pagos por ti. Algumas agências vão buscar-te ao aeroporto, mas nem todas.',
              '**Dinheiro para começar:** aconselho-te a levar uma reserva para comer e deslocares-te até ao primeiro pagamento, que costuma chegar ao fim de duas semanas.'
            ]
          },
          { small: 'Todos os valores desta página são indicativos e não são uma promessa. O que recebes e o que te descontam é fixado pela agência que te contrata como empregado, e depende da cidade, do posto, das horas, dos turnos e do alojamento e do seu tipo. As condições reais só as vais saber quando a agência tas der por escrito.' },
          'Antes de assinares, revê [a lista de perguntas do guia](guia.html#preguntas-firmar).'
        ]
      }
    ],
    actions: [
      { label: 'Começar pelo passo 1', href: '#candidatura' },
      { label: 'Ler primeiro o guia completo', href: 'guia.html' }
    ]
  },
  preguntas: {
    eyebrow: 'Sem rodeios',
    title: [
      'As perguntas que',
      'toda a gente me faz.'
    ],
    text: 'As dúvidas mais habituais, agrupadas por tema. Encontra o que precisas de saber sobre as condições, a viagem e a seleção.',
    id: 'preguntas',
    groups: [
      {
        title: 'Salário e alojamento',
        items: [
          {
            q: 'Quanto se ganha mesmo, depois de todos os descontos?',
            blocks: [
              'A trabalhar 40 horas semanais e com o alojamento já descontado, o que entra na conta pode variar bastante, **entre 1250 e 2200 € por mês**. Não é um valor fixo nem garantido: depende da agência que te contrata, do posto, da cidade, das horas extra e dos turnos, e do alojamento e do seu tipo. O bruto é bastante mais alto: a diferença vai para a retenção de impostos, o alojamento, o seguro de saúde e o transporte.',
              'Há uma parte que não vês todas as semanas mas que é tua: as *reservas* de férias e o subsídio de férias (*vakantiegeld*, 8,33 % do bruto). Acumulam-se à parte e recebes quando as pedes ou em maio.',
              'A explicação linha a linha de um recibo de vencimento está [no guia](guia.html#nomina).',
              { small: window.RumboNorteCifras.aviso }
            ]
          },
          {
            q: 'Quanto me tiram pelo alojamento?',
            blocks: [
              'Como referência, **entre 80 e 150 € por semana e por pessoa**, consoante a agência, a cidade e o tipo de alojamento. Quase sempre num quarto partilhado com outra pessoa, num bungalow, num antigo hotel ou num edifício reconvertido.',
              'Há um limite legal: o desconto pelo alojamento **não pode ultrapassar 25 % do salário mínimo** que te corresponde. E só pode ser descontado diretamente do recibo se o alojamento cumprir a norma **SNF**. Se te descontarem mais, ou o alojamento não for certificado, alguma coisa está mal.',
              'Antes de te apresentar a uma agência, pergunto-lhe três coisas, e aconselho-te a tê-las também por escrito: quanto custa por semana, quantas pessoas há por quarto e a que distância fica do trabalho.'
            ]
          },
          {
            q: 'Se perder o trabalho, também fico sem casa?',
            blocks: [
              'Esta é a pergunta importante e quase ninguém lhe responde. A resposta honesta: **em muitos casos sim, porque o alojamento está ligado ao contrato de trabalho**.',
              'Durante a **fase A** do contrato é habitual existir a chamada cláusula de cedência (*uitzendbeding*): se a empresa cliente deixar de precisar de ti, o contrato termina praticamente de um dia para o outro. E se o alojamento depender do contrato, acaba com ele.',
              'O que podes fazer: **perguntar por escrito, antes de assinar, quantos dias tens para deixar o quarto** se ficares sem trabalho. Eu pergunto sempre antes de apresentar alguém. Uma agência séria responde sem problema, e uma que fica nervosa com essa pergunta já te está a dizer muito.'
            ]
          },
          {
            q: 'Quanto dinheiro preciso para começar?',
            blocks: [
              'Como referência, conta com **entre 800 e 1200 €** de reserva. Vão para a viagem, para comer nas duas ou três primeiras semanas até ao primeiro pagamento, para a caução do alojamento se a pedirem e para as primeiras despesas avulsas.',
              { cifra: window.RumboNorteCifras.nota },
              'O normal no setor é **receber à semana**, por isso o primeiro pagamento costuma chegar duas semanas depois de começares. É esse intervalo que tens de cobrir. Ir sem reserva é o erro mais caro que vejo.'
            ]
          },
          {
            q: 'Tenho de te pagar alguma coisa a ti ou à agência?',
            blocks: [
              '**Não. Nem um euro, em momento nenhum.** Nem a mim nem à agência.',
              'As agências de trabalho temporário não podem cobrar ao trabalhador por lhe arranjarem emprego; nos Países Baixos a lei proíbe-o expressamente.'
            ]
          }
        ]
      },
      {
        title: 'Preparar a viagem',
        items: [
          {
            q: 'Preciso de falar inglês ou neerlandês?',
            blocks: [
              '**Inglês, sim: um nível B1 de conversação, no mínimo, é obrigatório para qualquer uma das minhas vagas, sem exceções.** Sou eu que o verifico na entrevista com umas perguntas em inglês.',
              'Precisas dele para perceber instruções de segurança, turnos e números, e para falar com os teus responsáveis. Com um nível mais alto abrem-se postos com mais responsabilidade. O neerlandês quase ninguém pede no início, mas é o que faz a diferença se ficares.'
            ]
          },
          {
            q: 'É preciso carta de condução?',
            blocks: [
              'Não é obrigatória, mas **muda bastante as coisas**. Muitos alojamentos ficam em zonas industriais ou em aldeias pequenas, e o transporte é organizado pela agência em carrinhas a horas fixas.',
              'Com carta B (e sobretudo se tiveres coragem de conduzir lá) tens mais flexibilidade, mais postos à escolha e dependes menos dos outros. A carta de condução da UE é válida nos Países Baixos sem qualquer formalidade.',
              'Se fores operador de empilhador, é uma vantagem real: o *heftruck* paga-se melhor. Lá costumam pedir o certificado neerlandês, e muitas agências pagam-to quando já estás lá dentro.',
              'Para trabalhar como **motorista de camião ou de autocarro**, a carta profissional (C, C+E ou D) e o CAM são obrigatórios.'
            ]
          },
          {
            q: 'O que é o BSN e como o obtenho?',
            blocks: [
              'O **BSN** (*burgerservicenummer*) é o número de identificação do cidadão neerlandês. Sem ele não podes receber como deve ser, nem ter seguro de saúde, nem quase nada. É a primeira coisa que se trata ao chegar.',
              'Pede-se com marcação na câmara municipal (*gemeente*). Se fores ficar menos de quatro meses, registas-te como não residente num dos balcões RNI; se fores ficar mais, registas a morada e precisas de um endereço. Normalmente a agência acompanha-te ou marca-te a visita.',
              '**Ninguém te pode cobrar por tratar do BSN.** É gratuito. Está explicado passo a passo [no guia](guia.html#bsn).'
            ]
          },
          {
            q: 'Posso ir com o meu companheiro ou com um amigo?',
            blocks: [
              'Sim, e até corre melhor. Mas convém saberes uma coisa: **serem contratados ao mesmo tempo não garante que vos alojem juntos nem que trabalhem no mesmo turno**. O alojamento é atribuído conforme o que houver livre.',
              'Se para vocês ficar juntos é inegociável, diz-mo logo na primeira mensagem: apresento-o assim à agência e peço que fique confirmado por escrito. É melhor esperar mais duas semanas do que chegar e descobrir que estão a quarenta quilómetros um do outro.'
            ]
          },
          {
            q: 'Que país me convém mais?',
            blocks: [
              '**Na maioria dos casos, os Países Baixos:** é onde estão quase todas as minhas vagas e onde o sistema está mais rodado. A Bélgica é muito parecida e, se também falares francês, a Valónia e Bruxelas contam a favor. **A Alemanha paga bem a experiência na indústria e na metalurgia**, mas o alemão pesa mais e há mais formalidades ao chegar. Nos três, o inglês B1 é obrigatório.',
              'Vemos isso na primeira conversa com o teu perfil à frente. Não te vou mandar para um país que não te serve só porque lá há lugares.'
            ]
          }
        ]
      },
      {
        title: 'Seleção e agências',
        items: [
          {
            q: 'Como sei se uma agência é legal?',
            blocks: [
              'Nos Países Baixos confirma-se em dois registos públicos, de graça, em dois minutos e no telemóvel:',
              {
                ul: [
                  '**SNA** — [normeringarbeid.nl](https://www.normeringarbeid.nl). Audita se a empresa paga os impostos e as contribuições como deve.',
                  '**SNF** — [normeringflexwonen.nl](https://www.normeringflexwonen.nl). Certifica que o alojamento cumpre uns mínimos.'
                ]
              },
              'Na Bélgica a agência tem de estar acreditada pela sua região, e na Alemanha precisa da licença de cedência da Bundesagentur für Arbeit. Quando te atribuir uma vaga vais saber que agência é: procura o nome legal no registo e confirma tu, não só eu. Se o nome exato não aparecer no registo, para. [No guia](guia.html#verificar) tens o passo a passo e os sinais de alarme.'
            ]
          },
          {
            q: 'Que postos tens neste momento?',
            blocks: [
              'Os perfis que mais me pedem estão [mais acima](#perfiles): **logística e armazém** (o país inteiro funciona como o armazém da Europa), **motoristas de camião e de autocarro**, **produção alimentar**, **agricultura e estufas**, que vão muito por épocas, e **limpeza industrial**. Construção e metalurgia pedem mais experiência comprovada.',
              'O que há aberto em concreto digo-te pelo WhatsApp, porque muda de uma semana para a outra e prefiro não pôr na página algo que amanhã já não existe. Aí também te explico como funciona cada setor por dentro, os turnos e quanto se paga.'
            ]
          },
          {
            q: 'O que me vais perguntar na primeira conversa?',
            blocks: [
              'Primeiro confirmo os três requisitos: idade, nacionalidade e nível de inglês. Depois, que experiência tens, se tens carta, a partir de quando podes viajar e se vais sozinho ou acompanhado. No fim faço-te umas perguntas em inglês para verificar o teu nível.',
              '**Nessa primeira conversa não te peço o cartão de cidadão nem nenhum documento.** Se alguém tos pedir antes de ter falado contigo, desconfia.'
            ]
          },
          {
            q: 'Quanto tempo demora tudo desde que te escrevo?',
            blocks: [
              'Depende sobretudo da época e do teu perfil, por isso qualquer número fechado seria mentira. O que te posso dizer é a ordem real: primeiro confirmo os requisitos e fazemos a entrevista; se a passares, registas-te na plataforma de candidatos, carregas a tua documentação e eu atribuo-te três vagas que encaixem no teu perfil.',
              'A partir do momento em que te atribuo as vagas, a decisão já não é minha, e não vou fingir que é. O processo completo, passo a passo, está [na secção do processo](#proceso).'
            ]
          }
        ]
      }
    ]
  },
  aviso: {
    eyebrow: 'O guia prático',
    title: [
      'Viaja com as',
      'perguntas respondidas.'
    ],
    text: 'BSN, recibo de vencimento, alojamento, contratos e custo de vida. Toda a informação para preparares a tua chegada aos Países Baixos, com as fontes oficiais.',
    cta: { label: 'Ler o guia completo', href: 'guia.html' }
  },
  candidatura: {
    id: 'candidatura',
    eyebrow: 'A tua candidatura',
    title: [
      'Conta-me o teu caso',
      'e vemos se encaixas.'
    ],
    paragraphs: [
      'O mais rápido é o WhatsApp: respondo eu e em dez minutos sabemos se há alguma coisa para ti. Se preferires deixar por escrito, preenche o formulário e eu escrevo-te.',
      'Sem chamadas comerciais, sem newsletter e sem ninguém a insistir três dias depois.'
    ],
    whatsapp: { label: 'Abrir o WhatsApp', note: 'A mensagem já vai escrita. Só tens de carregar em enviar.' },
    form: {
      name: 'candidatura',
      action: 'gracias.html',
      subject: 'Nueva candidatura desde proyectoholanda.com (PT)',
      trap: 'Não preenchas isto',
      heading: 'Formulário de candidatura',
      required: 'Os campos marcados com * são obrigatórios.',
      submit: 'Enviar a minha candidatura',
      failure: 'Não foi possível enviar. Verifica a ligação ou [escreve-me pelo WhatsApp](wa:).',
      consentValue: 'Sí, consiente que se valore su candidatura y se ceda a agencias de Países Bajos, Bélgica o Alemania',
      prefijos: [
      '+351 PT',
      '+31 NL',
      '+34 ES',
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
      'Outro'
    ],
    edadHint: 'Mínimo 21 anos',
    nacionalidad: {
      label: 'Tens nacionalidade ou passaporte da União Europeia?',
      options: ['Escolhe uma opção', { value: 'Sí', label: 'Sim' }, { value: 'No', label: 'Não' }]
    },
    ingles: [
      'Escolhe uma opção',
      { value: 'Menos de B1', label: 'Abaixo de B1' },
      { value: 'B1 (conversacional)', label: 'B1 (conversação)' },
      { value: 'B2 o superior', label: 'B2 ou superior' }
    ],
    destinos: [
      { value: 'Países Bajos', label: 'Países Baixos', note: '(a maioria das vagas)' },
      { value: 'Bélgica', label: 'Bélgica' },
      { value: 'Alemania', label: 'Alemanha' },
      { value: 'Me da igual', label: 'Tanto faz' }
    ],
    idiomas: [
      { value: 'Español', label: 'Espanhol' },
      { value: 'Neerlandés', label: 'Neerlandês' },
      { value: 'Francés', label: 'Francês' },
      { value: 'Alemán', label: 'Alemão' },
      { value: 'Polaco', label: 'Polaco' },
      { value: 'Portugués', label: 'Português' },
      { value: 'Otro', label: 'Outra' }
    ],
    carnet: [
      { value: 'Carnet B', label: 'Carta B' },
      { value: 'Coche propio', label: 'Carro próprio' },
      { value: 'Carnet C o C+E (camión)', label: 'Carta C ou C+E (camião)' },
      { value: 'Carnet D (autobús)', label: 'Carta D (autocarro)' },
      { value: 'CAP (código 95)', label: 'CAM (código 95)' },
      { value: 'Certificado de carretillero', label: 'Certificado de operador de empilhador' },
      { value: 'No tengo carnet', label: 'Não tenho carta' }
    ],
    sector: [
      'Escolhe uma opção',
      { value: 'Logística y almacén', label: 'Logística e armazém' },
      { value: 'Carretillero / reachtruck', label: 'Operador de empilhador / reachtruck' },
      { value: 'Conductor de camión (C / C+E)', label: 'Motorista de camião (C / C+E)' },
      { value: 'Conductor de autobús (D)', label: 'Motorista de autocarro (D)' },
      { value: 'Producción y alimentación', label: 'Produção e indústria alimentar' },
      { value: 'Agricultura e invernaderos', label: 'Agricultura e estufas' },
      { value: 'Limpieza industrial', label: 'Limpeza industrial' },
      { value: 'Construcción o metal', label: 'Construção ou metalurgia' },
      { value: 'Automoción e industria', label: 'Indústria automóvel e indústria' },
      { value: 'Hostelería', label: 'Hotelaria e restauração' },
      { value: 'Me da igual, lo que salga', label: 'Tanto faz, o que aparecer' },
      { value: 'Todavía no lo sé', label: 'Ainda não sei' }
    ],
    consent: 'Li a [política de privacidade](privacidad.html) e aceito que **a Rumbo Norte (Iván Guerra Arroyo) use estes dados para avaliar a minha candidatura e, se eu encaixar, os envie a agências de trabalho temporário certificadas dos Países Baixos, da Bélgica ou da Alemanha** para que me contactem. Sei que é uma transferência para outra empresa dentro da União Europeia e que posso retirar este consentimento quando quiser, escrevendo para [ivan@proyectoholanda.com](mailto:ivan@proyectoholanda.com).',
      foot: 'Não custa nada, nem agora nem depois. Não te vou ligar sem te avisar antes pelo WhatsApp.'
    }
  }
};
