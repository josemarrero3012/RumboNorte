// What the assistant knows (English): short cards taken from the website itself. Same structure and ids
// as js/asistente-datos.js. Each card has keywords, the question shown on its button, the answer and where
// to read more. Markup in the text: **bold** and [link](address); «wa:» opens WhatsApp.

// Words that don't help find the card (they're ignored when searching).
export const STOP = 'a an the and or but of to in on at for from by with about as is are was were be been am do does did can could would should will shall may might must i me my mine you your yours we us our they them their it its this that these those there here what which who whom how when where why if then than so not no yes just also too very much many some any all each have has had get got go going want need know tell please there';

export const SALUDO = 'Hi, I’m the Rumbo Norte compass. I answer with what Iván’s website says: pay, accommodation, requirements, the BSN, agencies… Ask me anything.';

export const NO_SE = 'That’s not on the website, and I’d rather not make it up. Ask Iván on WhatsApp: he’ll answer you himself.';

export const PENSANDO = ['Finding north', 'Checking the guide', 'Going over the questions'];

export const SUGERENCIAS = ['gratis', 'neto', 'alojamiento', 'agencia'];

export const REQUISITOS = {
  start: 'Do I meet the requirements?',
  steps: [
    { q: 'Are you 21 or older?', si: 'Yes, I’m 21 or older', no: 'Not yet' },
    { q: 'Do you have EU nationality or an EU passport?', si: 'Yes, from the EU', no: 'No' },
    { q: 'Is your English at least B1, enough to hold a conversation?', si: 'Yes, B1 or higher', no: 'Below B1' }
  ],
  ok: '**You meet all three requirements.** The next step is to talk to Iván: he’ll confirm your details, ask about your experience and ask you a few questions in English. The message is already written.',
  okMessage: 'Hi Iván. I did the check on the website: I’m 21 or older, I have an EU passport and B1 English. I’m interested in working in northern Europe.',
  no: 'From what you tell me, **this one isn’t met: {fallo}**. All three requirements are essential and have no exceptions, so right now Iván couldn’t put you forward for his vacancies. If your situation changes, this will still be here.',
  fallos: ['being 21 or older', 'having EU nationality or an EU passport', 'conversational B1 English'],
  whatsapp: 'Message Iván',
  form: 'I’d rather use the form'
};

export const FICHAS = [
  {
    id: 'hola',
    keys: 'hello hi hey greetings help morning evening',
    text: 'Hi! Ask me about pay, accommodation, the requirements, the BSN or how to check an agency. If you like, see whether you meet the requirements in a minute.',
    saludo: true
  },
  {
    id: 'gratis',
    label: 'Does it cost me anything?',
    keys: 'pay paying cost costs free charge fee fees commission price euros money',
    text: '**No. Not a single euro, at any point.** Neither to Iván nor to the agency: no fee, no commission, no deduction from your pay. In the Netherlands the law forbids an agency from charging a worker for finding them a job. If someone asks you for money, it isn’t a legal agency.',
    href: 'quienes-somos.html',
    link: 'What Iván doesn’t do'
  },
  {
    id: 'requisitos',
    label: 'What are the requirements?',
    keys: 'requirements requirement conditions eligible age old older nationality passport european eu fit qualify',
    text: 'There are three, **essential and with no exceptions**: being **21 or older**, **EU nationality or an EU passport** and at least **conversational B1 English**. It helps to have a B licence (better with a car), to be able to travel soon and to want to stay for a proper season.',
    href: './#perfiles',
    link: 'See the profiles',
    flow: true
  },
  {
    id: 'neto',
    label: 'How much do you earn?',
    keys: 'hours shifts earn earning earnings salary wage wages net gross payslip month monthly hourly minimum income',
    text: 'Working 40 hours a week with accommodation already deducted, what goes into your account is usually **between €1,250 and €2,200 a month**. It isn’t a fixed or guaranteed figure: it depends on the agency, the job, the city, overtime and the accommodation. Unskilled jobs pay the minimum wage: in the Netherlands, for people aged 21 and over, **€15.29 gross per hour from 1 January 2027** (€14.99 until 31 December 2026).',
    href: 'guia.html#nomina',
    link: 'The payslip, line by line'
  },
  {
    id: 'vakantiegeld',
    label: 'What is vakantiegeld?',
    keys: 'vakantiegeld holiday holidays vacation bonus reserves may',
    text: 'It’s holiday pay: **8.33% of your gross pay**. You don’t see it every week because it builds up separately, together with the holiday reserves, and it’s paid when you ask for it or in May. It’s yours.',
    href: 'guia.html#nomina',
    link: 'See the payslip in the guide'
  },
  {
    id: 'alojamiento',
    label: 'How much does accommodation cost?',
    keys: 'accommodation housing house room rooms flat home live sleep shared bungalow deducted week snf rent',
    text: 'As a guide, **between €80 and €150 per week per person**, almost always in a shared room. There’s a legal limit: the deduction **can’t exceed 25% of the minimum wage**, and it can only be taken from your pay if the accommodation has **SNF** certification. Ask in writing how much it costs, how many people share a room and how far it is from work.',
    href: 'guia.html#alojamiento',
    link: 'Accommodation in the guide'
  },
  {
    id: 'sin-casa',
    label: 'If I lose my job, do I lose my home?',
    keys: 'lose losing fired dismissed sacked dismissal homeless home house ends contract end street',
    text: 'The honest answer: **in many cases yes**, because the accommodation is tied to the contract. In phase A, if the company no longer needs you, the contract can end almost overnight. Before you sign, **ask in writing how many days you have to leave the room**. A serious agency answers without any problem.',
    href: 'guia.html#contrato',
    link: 'Contracts, explained'
  },
  {
    id: 'contrato',
    label: 'What kind of contract will I get?',
    keys: 'contract contracts phase phases uitzendbeding permanent temporary fixed direct agency sign',
    text: 'With an agency there are three phases. **Phase A**, roughly the first year: maximum flexibility for the company and usually the agency clause (*uitzendbeding*). **Phase B**: fixed-term contracts with an end date, they can no longer dismiss you overnight. **Phase C**: permanent contract with the agency, the equivalent of a permanent job.',
    href: 'guia.html#contrato',
    link: 'All contracts in the guide'
  },
  {
    id: 'colchon',
    label: 'How much money do I need to start?',
    keys: 'money start starting savings cushion first payment travel expenses deposit weeks cost living budget',
    text: 'Allow **between €800 and €1,200** as a cushion: the journey, food for the first weeks, the deposit if they ask for one and the first expenses. Pay is usually **weekly** and the first payment usually arrives two weeks after you start. Going without a cushion is the most expensive mistake.',
    href: 'guia.html#coste-vida',
    link: 'The cost of living'
  },
  {
    id: 'viaje',
    label: 'Who pays for the flight?',
    keys: 'flight fly plane ticket travel trip airport pick pickup transfer transport arrive van',
    text: '**You pay for the flight and the transfer to the agency office or the accommodation.** Some agencies pick you up at the airport, but not all of them. Once you’re there, the agency arranges accommodation and transport to work, and both are deducted from your pay.',
    href: './#proceso',
    link: 'The process, step by step'
  },
  {
    id: 'idiomas',
    label: 'Do I need to speak English?',
    keys: 'english language languages dutch speak level b1 b2 german french',
    text: '**English, yes: conversational B1 is compulsory for every vacancy.** Iván checks it in the interview with a few questions in English. You need it for safety instructions, shifts and talking to your supervisors. Almost nobody asks for Dutch at first, but it makes the difference if you stay.',
    href: './#preguntas',
    link: 'More frequently asked questions'
  },
  {
    id: 'carnet',
    label: 'Do I need a driving licence?',
    keys: 'licence license driving drive car b c d cpc truck lorry bus forklift heftruck',
    text: 'It isn’t compulsory, but **it changes things quite a lot**: many accommodations are on industrial estates or in small villages. An EU driving licence is valid in the Netherlands without any paperwork. For **truck or bus drivers**, the professional licence (C, C+E or D) and the CPC are compulsory.',
    href: './#preguntas',
    link: 'More frequently asked questions'
  },
  {
    id: 'bsn',
    label: 'What is the BSN?',
    keys: 'bsn burgerservicenummer number identification gemeente town hall rni register registration papers',
    text: 'The **BSN** is the Dutch citizen service number: without it you can’t get paid properly or have health insurance. You apply for it with an appointment at the town hall (*gemeente*), or at an RNI office if you’ll be staying less than four months. **It’s free: nobody can charge you for getting it.**',
    href: 'guia.html#bsn',
    link: 'The BSN, step by step'
  },
  {
    id: 'agencia',
    label: 'How do I know if an agency is legal?',
    keys: 'agency legal reliable scam serious check verify register sna snf fraud certified trust',
    text: 'In the Netherlands you can check it for free in two public registers: **SNA** ([normeringarbeid.nl](https://www.normeringarbeid.nl)), which audits taxes and contributions, and **SNF** ([normeringflexwonen.nl](https://www.normeringflexwonen.nl)), which certifies the accommodation. Look up the agency’s exact legal name: if it isn’t there, stop.',
    href: 'guia.html#verificar',
    link: 'How to check an agency'
  },
  {
    id: 'puestos',
    label: 'What jobs are there?',
    keys: 'trucker driver chauffeur jobs job work vacancies offers employment sector sectors profiles warehouse logistics greenhouses cleaning food production construction metal',
    text: 'The most requested profiles: **logistics and warehouse**, **truck and bus drivers**, **food production**, **agriculture and greenhouses** (very seasonal) and **industrial cleaning**. Construction and metalwork ask for proven experience. What’s open right now Iván tells you on WhatsApp, because it changes every week.',
    href: './#perfiles',
    link: 'See the profiles'
  },
  {
    id: 'pais',
    label: 'Which country suits me?',
    keys: 'country countries holland netherlands belgium germany best suit destination where',
    text: '**In most cases, the Netherlands:** that’s where almost all the vacancies are and the system is most established. Belgium is very similar, and if you speak French it’s a plus. **Germany pays well for experience in industry and metalwork**, but German counts for more. In all three, B1 English is compulsory.',
    href: './#destinos',
    link: 'See the destinations'
  },
  {
    id: 'pareja',
    label: 'Can I go with my partner or a friend?',
    keys: 'partner friend boyfriend girlfriend wife husband together couple family brother sister',
    text: 'Yes, and it’s easier. But **being hired at the same time doesn’t guarantee you’ll be housed together or work the same shift**. If it’s non-negotiable for you, tell Iván in your first message: he raises it that way with the agency and asks for it in writing.',
    href: './#preguntas',
    link: 'More frequently asked questions'
  },
  {
    id: 'entrevista',
    label: 'What do they ask in the interview?',
    keys: 'interview first conversation ask questions call id documents',
    text: 'First, the three requirements: age, nationality and English. Then your experience, whether you have a driving licence, when you can travel and whether you’re going alone or with someone. At the end, a few questions in English. **In that first conversation nobody asks for your ID or any document.**',
    href: './#proceso',
    link: 'The full process'
  },
  {
    id: 'plazos',
    label: 'How long does it all take?',
    keys: 'long time timeframe quick fast soon weeks process steps',
    text: 'It depends on the season and your profile, so a fixed figure would be a lie. The real order: requirements and interview; if you pass, you register on the candidate platform with your CV in English and you’re assigned **three vacancies**. From there, the agency decides.',
    href: './#proceso',
    link: 'The process, step by step'
  },
  {
    id: 'ivan',
    label: 'Who is Iván?',
    keys: 'ivan who are you recruiter person behind company',
    text: 'Iván Guerra Arroyo is an independent recruiter: he selects candidates in Spain and, with your consent, introduces them to certified temporary work agencies in the Netherlands, Belgium and Germany. He isn’t an agency or your employer, and he doesn’t guarantee a job.',
    href: 'quienes-somos.html',
    link: 'His story'
  },
  {
    id: 'metas',
    label: 'What can you achieve there?',
    keys: 'goals achieve save saving savings future stay car rent own long term',
    text: 'Saving, moving out of agency housing, buying a car, renting your own place, getting a direct contract and reaching a permanent one. It’s all in Goals, with real figures and timeframes.',
    href: 'metas.html',
    link: 'See Goals'
  },
  {
    id: 'contacto',
    label: 'How do I sign up?',
    keys: 'sign signup apply application register contact write whatsapp phone email form send cv',
    text: 'The fastest way is **WhatsApp**: Iván replies himself and within ten minutes you know if there’s something for you. If you’d rather put it in writing, fill in the application form and he’ll write to you. No sales calls or newsletter.',
    href: './#candidatura',
    link: 'Go to the form',
    whatsapp: true
  }
];
