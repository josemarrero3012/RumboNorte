// O que o assistente sabe (português): fichas curtas tiradas da própria página. A mesma estrutura e os
// mesmos ids de js/asistente-datos.js. Cada ficha tem palavras-chave, a pergunta do botão, a resposta e
// onde ler mais. Marcas no texto: **negrito** e [ligação](endereço); «wa:» abre o WhatsApp.

// Palavras que não ajudam a encontrar a ficha (ignoram-se na pesquisa). Sem acentos, porque a
// pesquisa também os retira.
export const STOP = 'a o as os ao aos um uma uns umas de do da dos das em no na nos nas por pelo pela para com sem e ou mas que se nao sim eu tu ele ela nos vos eles elas me te lhe meu minha teu tua seu sua isto isso aquilo este esta esse essa ha tem tenho tens temos ser estar sou es esta estou vou vais posso pode podes quero queria saber qual quais quanto quanta quantos quantas como onde quando porque muito pouco ja tambem mais menos';

export const SALUDO = 'Olá, sou a bússola da Rumbo Norte. Respondo com o que diz a página do Iván: salário, alojamento, requisitos, o BSN, as agências… Pergunta o que quiseres.';

export const NO_SE = 'Isso não está na página, e prefiro não inventar. Pergunta ao Iván pelo WhatsApp: é ele que te responde.';

export const PENSANDO = ['À procura do rumo', 'A ver o guia', 'A rever as perguntas'];

export const SUGERENCIAS = ['gratis', 'neto', 'alojamiento', 'agencia'];

export const REQUISITOS = {
  start: 'Cumpro os requisitos?',
  steps: [
    { q: 'Tens 21 anos ou mais?', si: 'Sim, tenho 21 ou mais', no: 'Ainda não' },
    { q: 'Tens nacionalidade ou passaporte da União Europeia?', si: 'Sim, da UE', no: 'Não' },
    { q: 'O teu inglês é pelo menos B1, de conseguir manter uma conversa?', si: 'Sim, B1 ou mais', no: 'Abaixo de B1' }
  ],
  ok: '**Cumpres os três requisitos.** O passo seguinte é falar com o Iván: confirma os teus dados, pergunta-te pela tua experiência e faz-te umas perguntas em inglês. A mensagem já vai escrita.',
  okMessage: 'Olá Iván. Fiz o teste da página: tenho 21 anos ou mais, passaporte da UE e inglês B1. Tenho interesse em trabalhar no norte da Europa.',
  no: 'Pelo que me contas, **não se cumpre: {fallo}**. Os três requisitos são indispensáveis e não têm exceções, por isso neste momento o Iván não te poderia apresentar às vagas dele. Se a tua situação mudar, isto continua aqui.',
  fallos: ['ter 21 anos ou mais', 'ter nacionalidade ou passaporte da UE', 'um inglês B1 de conversação'],
  whatsapp: 'Escrever ao Iván',
  form: 'Prefiro o formulário'
};

export const FICHAS = [
  {
    id: 'hola',
    keys: 'ola bom dia boa tarde boas ajuda ajudar',
    text: 'Olá! Pergunta-me pelo salário, o alojamento, os requisitos, o BSN ou como verificar uma agência. Se preferires, vê se cumpres os requisitos num minuto.',
    saludo: true
  },
  {
    id: 'gratis',
    label: 'Custa-me alguma coisa?',
    keys: 'pagar pagamento custa custo gratis gratuito comissao quota preco euros taxa dinheiro',
    text: '**Não. Nem um euro, em momento nenhum.** Nem ao Iván nem à agência: nem quota, nem comissão, nem desconto no recibo. Nos Países Baixos a lei proíbe que uma agência cobre ao trabalhador por lhe arranjar emprego. Se alguém te pedir dinheiro, não é uma agência legal.',
    href: 'quienes-somos.html',
    link: 'O que o Iván não faz'
  },
  {
    id: 'requisitos',
    label: 'Que requisitos pedem?',
    keys: 'requisitos requisito pedem condicoes idade anos maior nacionalidade passaporte europeu ue encaixo cumpro',
    text: 'São três, **indispensáveis e sem exceções**: ter **21 anos ou mais**, **nacionalidade ou passaporte da União Europeia** e **inglês B1 de conversação**, no mínimo. Conta a favor ter carta B (melhor com carro), poder viajar em breve e querer ficar uma temporada a sério.',
    href: './#perfiles',
    link: 'Ver os perfis',
    flow: true
  },
  {
    id: 'neto',
    label: 'Quanto se ganha?',
    keys: 'horas turnos ganha ganhar recebe receber salario ordenado vencimento liquido bruto recibo mes mensal hora minimo',
    text: 'Com 40 horas por semana e o alojamento já descontado, o que entra na conta costuma variar **entre 1250 e 2200 € por mês**. Não é um valor fixo nem garantido: depende da agência, do posto, da cidade, das horas extra e do alojamento. Nos postos sem qualificação recebe-se o salário mínimo: nos Países Baixos, para maiores de 21, **15,29 € brutos por hora a partir de 1 de janeiro de 2027** (14,99 € até 31 de dezembro de 2026).',
    href: 'guia.html#nomina',
    link: 'O recibo, linha a linha'
  },
  {
    id: 'vakantiegeld',
    label: 'O que é o vakantiegeld?',
    keys: 'vakantiegeld ferias subsidio extra reservas maio',
    text: 'É o subsídio de férias: **8,33 % do bruto**. Não o vês todas as semanas porque se acumula à parte, junto com as reservas de férias, e recebes quando o pedes ou em maio. É teu.',
    href: 'guia.html#nomina',
    link: 'Ver o recibo no guia'
  },
  {
    id: 'alojamiento',
    label: 'Quanto custa o alojamento?',
    keys: 'alojamento viver casa quarto habitacao apartamento dormir partilhado bungalow descontam semana snf renda',
    text: 'Como referência, **entre 80 e 150 € por semana e por pessoa**, quase sempre em quarto partilhado. Há um limite legal: o desconto **não pode ultrapassar 25 % do salário mínimo**, e só pode ser tirado do recibo se o alojamento tiver a certificação **SNF**. Pede por escrito quanto custa, quantas pessoas há por quarto e a que distância fica do trabalho.',
    href: 'guia.html#alojamiento',
    link: 'O alojamento no guia'
  },
  {
    id: 'sin-casa',
    label: 'Se perder o trabalho, fico sem casa?',
    keys: 'perco perder despedimento despedem despedir mandam embora fico sem casa termina contrato acaba rua',
    text: 'A resposta honesta: **em muitos casos sim**, porque o alojamento está ligado ao contrato. Na fase A, se a empresa deixar de precisar de ti, o contrato pode terminar quase de um dia para o outro. Antes de assinares, **pergunta por escrito quantos dias tens para deixar o quarto**. Uma agência séria responde sem problema.',
    href: 'guia.html#contrato',
    link: 'Os contratos, explicados'
  },
  {
    id: 'contrato',
    label: 'Que tipo de contrato me fazem?',
    keys: 'contrato contratos fase fases uitzendbeding termo efetivo temporario fixo direto agencia assinar',
    text: 'Com agência há três fases. **Fase A**, mais ou menos o primeiro ano: máxima flexibilidade para a empresa e, normalmente, a cláusula de cedência (*uitzendbeding*). **Fase B**: contratos a termo com data de fim, já não te podem despedir de um dia para o outro. **Fase C**: contrato sem termo com a agência, o equivalente a ser efetivo.',
    href: 'guia.html#contrato',
    link: 'Todos os contratos no guia'
  },
  {
    id: 'colchon',
    label: 'Quanto dinheiro preciso para começar?',
    keys: 'dinheiro comecar inicio vida custo poupancas reserva primeiro pagamento viagem despesas caucao semanas',
    text: 'Conta com **entre 800 e 1200 €** de reserva: a viagem, a comida das primeiras semanas, a caução se a pedirem e as primeiras despesas. O normal é **receber à semana** e o primeiro pagamento costuma chegar duas semanas depois de começares. Ir sem reserva é o erro mais caro.',
    href: 'guia.html#coste-vida',
    link: 'O custo de vida'
  },
  {
    id: 'viaje',
    label: 'Quem paga o voo?',
    keys: 'voo aviao bilhete viagem viajar aeroporto buscar recolha transferencia transporte chegar carrinha',
    text: '**O voo e a deslocação até ao escritório da agência ou ao alojamento são pagos por ti.** Algumas agências vão buscar-te ao aeroporto, mas nem todas. Lá, o alojamento e o transporte para o trabalho são organizados pela agência e descontados do salário.',
    href: './#proceso',
    link: 'O processo, passo a passo'
  },
  {
    id: 'idiomas',
    label: 'Tenho de falar inglês?',
    keys: 'ingles lingua linguas idioma neerlandes holandes falar nivel b1 b2 alemao frances',
    text: '**Inglês, sim: um B1 de conversação é obrigatório para qualquer vaga.** O Iván verifica-o na entrevista com umas perguntas em inglês. Precisas dele para as instruções de segurança, os turnos e falar com os teus responsáveis. O neerlandês quase ninguém pede no início, mas faz a diferença se ficares.',
    href: './#preguntas',
    link: 'Mais perguntas frequentes'
  },
  {
    id: 'carnet',
    label: 'É preciso carta de condução?',
    keys: 'carta conducao conduzir carro licenca b c d cam camiao autocarro empilhador heftruck',
    text: 'Não é obrigatória, mas **muda bastante as coisas**: muitos alojamentos ficam em zonas industriais ou aldeias pequenas. A carta de condução da UE é válida nos Países Baixos sem formalidades. Para **motorista de camião ou de autocarro**, a carta profissional (C, C+E ou D) e o CAM são obrigatórios.',
    href: './#preguntas',
    link: 'Mais perguntas frequentes'
  },
  {
    id: 'bsn',
    label: 'O que é o BSN?',
    keys: 'bsn burgerservicenummer numero identificacao gemeente camara municipal rni registo residencia papeis',
    text: 'O **BSN** é o número de identificação do cidadão neerlandês: sem ele não podes receber como deve ser nem ter seguro de saúde. Pede-se com marcação na câmara municipal (*gemeente*), ou num balcão RNI se fores ficar menos de quatro meses. **É gratuito: ninguém te pode cobrar por tratar dele.**',
    href: 'guia.html#bsn',
    link: 'O BSN, passo a passo'
  },
  {
    id: 'agencia',
    label: 'Como sei se uma agência é legal?',
    keys: 'agencia legal fiavel burla seria confirmar verificar registo sna snf fraude certificada',
    text: 'Nos Países Baixos confirma-se de graça em dois registos públicos: **SNA** ([normeringarbeid.nl](https://www.normeringarbeid.nl)), que audita impostos e contribuições, e **SNF** ([normeringflexwonen.nl](https://www.normeringflexwonen.nl)), que certifica o alojamento. Procura o nome legal exato da agência: se não aparecer, para.',
    href: 'guia.html#verificar',
    link: 'Como verificar uma agência'
  },
  {
    id: 'puestos',
    label: 'Que trabalhos há?',
    keys: 'camionista motorista condutor postos trabalhos trabalho vagas ofertas emprego setor setores perfis armazem logistica estufas limpeza alimentar producao construcao metalurgia',
    text: 'Os perfis mais pedidos: **logística e armazém**, **motoristas de camião e de autocarro**, **produção alimentar**, **agricultura e estufas** (muito por épocas) e **limpeza industrial**. Construção e metalurgia pedem experiência comprovada. O que há aberto agora diz-to o Iván pelo WhatsApp, porque muda todas as semanas.',
    href: './#perfiles',
    link: 'Ver os perfis'
  },
  {
    id: 'pais',
    label: 'Que país me convém?',
    keys: 'pais paises holanda baixos belgica alemanha convem melhor destino onde',
    text: '**Na maioria dos casos, os Países Baixos:** é onde estão quase todas as vagas e o sistema está mais rodado. A Bélgica é muito parecida, e se falares francês conta a favor. **A Alemanha paga bem a experiência na indústria e na metalurgia**, mas o alemão pesa mais. Nos três, inglês B1 obrigatório.',
    href: './#destinos',
    link: 'Ver os destinos'
  },
  {
    id: 'pareja',
    label: 'Posso ir com o meu companheiro ou um amigo?',
    keys: 'companheiro companheira namorado namorada amigo amiga mulher marido juntos casal familia irmao irma',
    text: 'Sim, e corre melhor. Mas **serem contratados ao mesmo tempo não garante que vos alojem juntos nem que tenham o mesmo turno**. Se para vocês é inegociável, diz ao Iván logo na primeira mensagem: ele apresenta-o assim à agência e pede que fique por escrito.',
    href: './#preguntas',
    link: 'Mais perguntas frequentes'
  },
  {
    id: 'entrevista',
    label: 'O que me perguntam na entrevista?',
    keys: 'entrevista primeira conversa perguntam perguntas chamada cartao cidadao documentos',
    text: 'Primeiro, os três requisitos: idade, nacionalidade e inglês. Depois, a tua experiência, se tens carta, a partir de quando podes viajar e se vais sozinho ou acompanhado. No fim, umas perguntas em inglês. **Nessa primeira conversa ninguém te pede o cartão de cidadão nem nenhum documento.**',
    href: './#proceso',
    link: 'O processo completo'
  },
  {
    id: 'plazos',
    label: 'Quanto demora tudo?',
    keys: 'demora prazo prazos rapido breve semanas processo passos tempo',
    text: 'Depende da época e do teu perfil, por isso um número fechado seria mentira. A ordem real: requisitos e entrevista; se a passares, registas-te na plataforma de candidatos com o teu CV em inglês e são-te atribuídas **três vagas**. A partir daí decide a agência.',
    href: './#proceso',
    link: 'O processo, passo a passo'
  },
  {
    id: 'ivan',
    label: 'Quem é o Iván?',
    keys: 'ivan quem es recrutador pessoa por tras empresa',
    text: 'Iván Guerra Arroyo é recrutador independente: seleciona candidatos em Espanha e, com o teu consentimento, apresenta-os a agências de trabalho temporário certificadas dos Países Baixos, da Bélgica e da Alemanha. Não é uma agência nem o teu empregador, e não garante emprego.',
    href: 'quienes-somos.html',
    link: 'A história dele'
  },
  {
    id: 'metas',
    label: 'O que se pode conseguir lá?',
    keys: 'metas conseguir poupar poupanca futuro ficar carro arrendar proprio longo prazo',
    text: 'Poupar, sair do alojamento da agência, comprar carro, arrendar casa própria, passar a contrato direto e chegar ao contrato sem termo. Está tudo em Metas, com valores e prazos reais.',
    href: 'metas.html',
    link: 'Ver Metas'
  },
  {
    id: 'contacto',
    label: 'Como me inscrevo?',
    keys: 'inscrever inscrevo inscricao candidatar contacto contactar escrever whatsapp telefone email formulario candidatura enviar cv',
    text: 'O mais rápido é o **WhatsApp**: responde o Iván e em dez minutos ficam a saber se há alguma coisa para ti. Se preferires deixar por escrito, preenche o formulário de candidatura e ele escreve-te. Sem chamadas comerciais nem newsletter.',
    href: './#candidatura',
    link: 'Ir para o formulário',
    whatsapp: true
  }
];
