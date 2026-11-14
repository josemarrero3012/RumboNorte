/* Quem sou (português). A mesma estrutura de contenido/quien.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.quien = {
  hero: {
    eyebrow: 'Quem sou',
    title: [
      'Sou recrutador.',
      'Antes fui',
      'candidato.'
    ],
    text: [
      'Chamo-me **Iván Guerra**. Sou espanhol, vivo em Kleve, mesmo ao lado da fronteira com os Países Baixos, e dedico-me a selecionar candidatos em Espanha para agências de trabalho temporário neerlandesas certificadas.',
      'Conheço o processo dos dois lados: o de quem chega com uma mala e uma oferta que parece boa, e o de quem procura pessoas para preencher postos. Esta página é a conversa que tenho com cada candidato antes de o apresentar a alguém.'
    ],
    accent: 2
  },
  historia: {
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    tag: 'Rumbo Norte / Recrutamento independente',
    name: 'Iván Guerra Arroyo',
    tagline: 'Antes fui candidato.\nHoje ajudo-te a perceber o caminho.',
    title: 'De onde vem tudo isto',
    blocks: [
      'Eu também comecei a trabalhar através de uma agência neerlandesa. Como quase toda a gente, com pouca informação e a ideia de que ia percebendo pelo caminho. Percebi, mas algumas coisas aprendi tarde.',
      'Quando lá estava, a agência abriu um programa de indicações e comecei a trazer pessoas de Espanha: amigos, conhecidos, conhecidos de conhecidos. Foram doze pessoas até o programa acabar. Com isso vi duas coisas. Que em Espanha há muita gente com vontade de trabalhar que não sabe por onde começar. E que a diferença entre quem fica e quem volta está quase sempre na informação com que chega.',
      'Hoje dedico-me a isto como recrutador independente: seleciono candidatos para agências certificadas e conto-lhes antes o bom e o mau. Nem todo o setor é uma fraude, longe disso. Há agências que funcionam bem e pessoas que ganham um dinheiro que em Espanha não ganhariam. Mas também há intermediários que vivem de tu não saberes o suficiente, e eu prefiro que saibas.',
      {
        pull: {
          text: 'Prefiro que cinco pessoas pensem bem no assunto do que vinte apanhem um avião sem saber o que as espera.',
          by: 'Iván'
        }
      },
      {
        note: {
          title: 'O que não sou',
          tone: 'ink',
          blocks: [
            'Não sou a agência nem o teu empregador. Também não sou advogado, nem contabilista, nem consultor fiscal. O que tens aqui é experiência de terreno e documentação oficial com ligação para que a confirmes tu. Para uma decisão legal ou fiscal séria, fala com um profissional qualificado.'
          ]
        }
      }
    ]
  },
  limites: {
    id: 'no-hago',
    eyebrow: 'Os limites',
    title: [
      'O que não faço,',
      'e porquê.'
    ],
    text: 'Algumas destas coisas não faço por decisão própria. Outras, simplesmente, não se podem fazer.',
    items: [
      {
        eyebrow: 'Proibido por lei',
        title: 'Cobrar-te a ti',
        blocks: [
          'Não pagas nada. Nem quota, nem comissão, nem desconto no recibo. Nem antes, nem durante, nem depois.',
          'A lei neerlandesa proíbe que uma empresa de trabalho temporário cobre ao trabalhador por lhe arranjar emprego. Não é uma promessa comercial minha: é a lei. Se alguém te pedir dinheiro, não é uma agência legal.'
        ]
      },
      {
        eyebrow: 'Não é o meu papel',
        title: 'Ser o teu empregador',
        blocks: [
          'Eu seleciono e apresento. Quem te contrata, te paga o salário e responde pelo contrato é a agência. Assim sabes sempre a quem reclamar cada coisa.'
        ]
      },
      {
        eyebrow: 'Impossível de cumprir',
        title: 'Garantir-te um trabalho',
        blocks: [
          'Depende da época, do setor, do teu perfil e de decisões de empresas que eu não controlo. Quem te garantir um posto está a mentir-te ou não sabe como isto funciona.'
        ]
      },
      {
        eyebrow: 'Decisão própria',
        title: 'Apresentar-te às cegas',
        blocks: [
          'Quando te atribuir uma vaga vais saber que agência é: procura o nome legal no registo e confirma tu, não só eu.'
        ]
      },
      {
        eyebrow: 'Decisão própria',
        title: 'Andar atrás de ti',
        blocks: [
          'Sem chamadas comerciais, sem newsletter automática, sem «volto a escrever-te, por via das dúvidas». Perguntas o que precisares e, se decidires que não, fica por aí.'
        ]
      },
      {
        eyebrow: 'Decisão própria',
        title: 'Vender os teus dados',
        blocks: [
          'Os teus dados vão só para as agências de trabalho temporário certificadas, com o consentimento que dás ao marcar a caixa do formulário, e para mais nada. Não há listas, nem terceiros, nem publicidade. Está explicado na [política de privacidade](privacidad.html).'
        ]
      }
    ],
    note: {
      title: 'Se isto te parece pouco agressivo para um recrutador, tens razão',
      tone: 'sand',
      blocks: [
        'Uma página de recrutamento normal já te teria mostrado quatro ofertas com o salário bruto em letras grandes, uma fotografia de gente sorridente num armazém e um contador de vagas livres. Aqui não vais encontrar nenhuma dessas coisas.'
      ]
    }
  },
  cta: {
    eyebrow: 'Falamos',
    title: [
      'Pergunta-me',
      'o que quiseres.'
    ],
    text: [
      'Respondo eu. Podes perguntar pelo WhatsApp sem dar nenhum dado pessoal e sem compromisso nenhum.',
      'Se preferires que avalie o teu perfil e te escreva com os números do teu caso, deixa a tua candidatura no formulário da página inicial.'
    ],
    actions: [
      { label: 'Escrever pelo WhatsApp', href: 'wa:' },
      { label: 'Enviar a minha candidatura', href: './#candidatura' }
    ],
    foot: 'Antes de escreveres, talvez valha a pena ler [o guia](guia.html).'
  }
};
