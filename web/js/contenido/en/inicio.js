/* Home page (English). Same structure as contenido/inicio.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.inicio = {
  hero: {
    countries: ['the Netherlands'],
    also: 'Also vacancies in Belgium and Germany.',
    subtitle: 'Before you pack your bags, I explain with approximate figures what people usually earn, what the room costs and how much you can expect to keep. If you pass the interview, I assign you vacancies from certified agencies.',
    note: 'Straight talk, one to one, and free for you.',
    primaryCta: { label: 'Send my application', href: '#candidatura' },
    secondaryCta: { label: 'How it works', href: '#proceso' },
    ring: 'From Spain to northern Europe',
    promises: [
      'Always free for the candidate',
      'Certified temporary work agencies',
      'Information backed by official sources',
      'Requirements: 21+ · EU passport · English B1'
    ],
    person: { name: 'I’m Iván', role: 'Your recruiter at Rumbo Norte' },
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    map: {
      src: 'assets/mapa/europa.svg',
      width: 1000,
      height: 1073,
      origin: [177, 843],
      places: [
        { name: 'the Netherlands', id: 'nl', pin: [458, 443] },
        { name: 'Germany', id: 'de', pin: [561, 490] },
        { name: 'Belgium', id: 'be', pin: [432, 502] }
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
    eyebrow: 'One person, clear facts',
    arrowSrc: 'assets/logos/rumbo-norte-arrow.webp',
    title: [
      'Before you',
      'pack your bags,',
      'let’s talk about',
      'what matters.'
    ],
    cta: { label: 'Meet Iván', href: 'quienes-somos.html' },
    intro: 'My name is Iván and I’m a recruiter.',
    paragraphs: [
      'I look for people in Spain who want to work in the Netherlands, where most of my vacancies are, and also in Belgium and Germany. I introduce them to certified temporary work agencies in those countries, which are the ones that hire.',
      'Before I put you forward to anyone, I tell you what almost no job ad does: how much you keep after deductions, what they charge you for the room and how to check that the agency is legal. If you’re still interested with all that in front of you, we carry on.'
    ],
    note: {
      title: 'It’s free for you, now and later.',
      text: 'I select and introduce candidates, but I don’t hire: the final say belongs to the agency and I won’t promise you a job. Every piece of information comes with its official source so you can check it yourself.'
    }
  },
  topics: {
    id: 'como-funciona',
    items: [
      {
        eyebrow: 'Payslip',
        title: 'What actually lands in your account.',
        src: 'assets/ilustraciones/ilustracion-nomina.webp',
        width: 840,
        height: 456,
        figure: '€1,250–2,200',
        unit: 'a month in your account',
        figureNote: 'Approximate figure: it depends on the agency, the city and the accommodation.',
        text: 'Working 40 hours a week, with accommodation already deducted. The payslip, line by line, in the guide.',
        href: 'guia.html#nomina',
        linkHint: 'Understand the payslip'
      },
      {
        eyebrow: 'Accommodation',
        title: 'Where you live and at what price.',
        src: 'assets/ilustraciones/ilustracion-alojamiento.webp',
        width: 840,
        height: 450,
        figure: '€80–150',
        unit: 'a week for the room',
        figureNote: 'Approximate figure: it depends on the agency, the city and the accommodation.',
        text: 'Almost always shared, and tied to the contract. What to ask before you sign.',
        href: 'guia.html#alojamiento',
        linkHint: 'Know the conditions'
      },
      {
        eyebrow: 'Registers',
        title: 'Know who you’re signing with.',
        src: 'assets/ilustraciones/ilustracion-registros.webp',
        width: 840,
        height: 453,
        figure: '2 registers',
        unit: 'public and free',
        text: 'SNA and SNF in the Netherlands: two minutes on your phone to check an agency.',
        href: 'guia.html#verificar',
        linkHint: 'Check an agency'
      }
    ]
  },
  destinos: {
    eyebrow: 'Destinations',
    title: [
      'The Netherlands first.',
      'Belgium and Germany, too.'
    ],
    text: 'Almost all my vacancies are in the Netherlands. There are some in Belgium and Germany too, but fewer and more occasional. The rules change when you cross the border: who certifies the agency, which number you need on arrival and which language counts. This is the basics of each one; your own case, we’ll discuss.',
    id: 'destinos',
    hint: 'One course, three destinations. Pick a country on the model.',
    placeLabel: 'See its profile',
    sceneUrl: 'js/paises-3d.js',
    defaultId: 'paises-bajos',
    posterSrc: 'assets/3d/paises-poster.webp',
    posterTallSrc: 'assets/3d/paises-poster-movil.webp',
    items: [
      {
        id: 'paises-bajos',
        name: 'the Netherlands',
        main: true,
        tag: 'Main destination · most vacancies',
        spot: [50, 69.8],
        spotTall: [44.9, 29.5],
        intro: 'The most established destination: lots of logistics, greenhouses and production, with accommodation almost always arranged by the agency.',
        facts: [
          { label: 'Most in demand', value: 'Warehouse, forklift, food, greenhouses' },
          { label: 'How to check the agency', value: 'SNA register and, for the accommodation, SNF' },
          { label: 'Your number on arrival', value: 'BSN, at the town hall (*gemeente*)' },
          { label: 'Language', value: 'Conversational English B1, compulsory. Dutch isn’t required at first.' }
        ],
        action: { label: 'Full guide to the Netherlands', href: 'guia.html' }
      },
      {
        id: 'belgica',
        name: 'Belgium',
        tag: 'Occasional vacancies',
        spot: [17.5, 80.6],
        spotTall: [47, 92.4],
        intro: 'Close by, with wages that are index-linked to inflation and a country split between two languages. Where you end up changes your day-to-day a lot.',
        facts: [
          { label: 'Most in demand', value: 'Logistics, food, production' },
          { label: 'How to check the agency', value: 'Accreditation from its region: Flanders, Wallonia or Brussels' },
          { label: 'Your number on arrival', value: 'Belgian social security number (INSZ / NISS)' },
          { label: 'Language', value: 'Conversational English B1, compulsory. Dutch helps in Flanders and French in Wallonia.' }
        ],
        action: {
          label: 'Ask me about Belgium',
          href: 'wa:Hi Iván. I’m interested in working in Belgium, can you tell me how it works?'
        }
      },
      {
        id: 'alemania',
        name: 'Germany',
        tag: 'Occasional vacancies',
        spot: [82.9, 82.4],
        spotTall: [52.8, 60.8],
        intro: 'The biggest market: industry, automotive and huge logistics centres. More paperwork, and it rewards people who can get by in German.',
        facts: [
          { label: 'Most in demand', value: 'Logistics, production, metalwork and automotive' },
          {
            label: 'How to check the agency',
            value: 'Temporary agency work licence from the Bundesagentur für Arbeit'
          },
          { label: 'Your number on arrival', value: 'Address registration (*Anmeldung*), tax number and social security number' },
          { label: 'Language', value: 'Conversational English B1, compulsory. German counts far more than in the other two.' }
        ],
        action: {
          label: 'Ask me about Germany',
          href: 'wa:Hi Iván. I’m interested in working in Germany, can you tell me how it works?'
        }
      }
    ]
  },
  servicios: {
    eyebrow: 'First things first',
    title: [
      'What exactly I do',
      'and what I don’t.'
    ],
    text: 'This sector is full of middlemen who don’t say what they are. I’m a recruiter, I say so on the first screen, and here’s what that means for you.',
    id: 'que-hago',
    columns: [
      {
        title: 'What I do',
        items: [
          {
            title: 'I talk to you and assess your profile',
            blocks: [
              'A short conversation on WhatsApp or by phone: experience, languages, driving licence and when you can travel. That tells me which jobs you’re a fit for.'
            ]
          },
          {
            title: 'I explain the numbers for your case',
            blocks: [
              'Payslip, deductions, accommodation, phase A contract, health insurance, BSN. Clearly explained, with approximate figures.'
            ]
          },
          {
            title: 'I assign you vacancies from certified agencies',
            blocks: [
              'If you meet the requirements and pass the interview, I give you access to the candidate platform and assign you vacancies from certified temporary work agencies, mainly in the Netherlands.'
            ]
          },
          {
            title: 'I prepare you for the interview and the contract',
            blocks: [
              'What they’ll ask you, what you should ask them and what to look at in the contract before you sign it.'
            ]
          }
        ]
      },
      {
        title: 'What I don’t do',
        items: [
          {
            title: 'I’m not your employer',
            blocks: [
              'The agency is who hires you, pays you and signs with you. My job is selection and introduction.'
            ]
          },
          {
            title: 'I don’t charge you anything',
            blocks: [
              'No registration fee, no admin fee, no “place reservation”, no paperwork translation. Nothing. If someone asks you for money in my name, it isn’t me.'
            ]
          },
          {
            title: 'I don’t guarantee a job',
            blocks: [
              'I can tell you whether your profile fits and put you forward. Hiring is up to the agency, and it depends on the season and the job.'
            ]
          }
        ]
      }
    ],
    note: {
      title: 'Important notice',
      tone: 'sand',
      blocks: [
        'A legal temporary work agency can’t charge you for giving you work. In the Netherlands it is prohibited by the *Waadi* (article 9), and in Belgium and Germany agencies can’t charge the worker for the placement either. If they ask you for money upfront to “reserve a place”, “process the BSN” or “put you on the list”, it’s a scam. That goes for me and for anyone else.'
      ]
    }
  },
  perfiles: {
    eyebrow: 'What’s in demand',
    title: [
      'The profiles I’m',
      'asked for most.'
    ],
    text: 'These aren’t specific job offers. They’re what the agencies I recruit for, mainly in the Netherlands, ask for almost all the time. What’s open at any given moment I’ll tell you when we talk, because it changes every week.',
    id: 'perfiles',
    items: [
      {
        eyebrow: 'Logistics',
        id: 'almacen',
        photo: 'assets/perfiles/almacen',
        focus: [41, 45],
        short: 'Warehouse',
        title: 'Warehouse and order picking',
        text: 'Order picking, loading and unloading, scanning goods. It’s the most common way in. No experience needed, but you do need to handle shifts and long hours on your feet.'
      },
      {
        eyebrow: 'Logistics',
        id: 'carretilla',
        photo: 'assets/perfiles/carretilla',
        focus: [34, 40],
        short: 'Forklift',
        title: 'Forklift and reach truck drivers',
        text: 'The most sought-after warehouse profile and one of the best paid. If you’ve driven a forklift or a *reachtruck*, tell me from the start. They usually ask for the Dutch certificate there, and many agencies pay for it.'
      },
      {
        eyebrow: 'Transport',
        id: 'camion',
        photo: 'assets/perfiles/camion',
        focus: [60, 35],
        short: 'Truck',
        title: 'Truck drivers',
        text: 'National and international routes, distribution and delivery. It’s one of the profiles with the most vacancies. You need a valid C or C+E licence, the CPC (code 95) and a tachograph card. How much experience they ask for depends on the agency and the job.'
      },
      {
        eyebrow: 'Transport',
        id: 'autobus',
        photo: 'assets/perfiles/autobus',
        focus: [32, 32],
        short: 'Bus',
        title: 'Bus drivers',
        text: 'City, intercity and company transport. It’s one of the profiles with the most vacancies. You need a valid D licence and the CPC (code 95). The exact requirements depend on the agency and the job.'
      },
      {
        eyebrow: 'Industry',
        id: 'alimentacion',
        photo: 'assets/perfiles/alimentacion',
        focus: [31, 45],
        short: 'Food',
        title: 'Food production',
        text: 'Packing lines, product checks and line cleaning. It’s shift work, often in the cold, and there’s activity all year round.'
      },
      {
        eyebrow: 'Farming',
        id: 'invernaderos',
        photo: 'assets/perfiles/invernaderos',
        focus: [45, 45],
        short: 'Greenhouses',
        title: 'Agriculture and greenhouses',
        text: 'Harvesting, planting and sorting. It’s very seasonal, with clear peaks and quiet months, so it’s worth knowing the dates before you buy your ticket.'
      },
      {
        eyebrow: 'Services',
        id: 'limpieza',
        photo: 'assets/perfiles/limpieza',
        focus: [38, 45],
        short: 'Cleaning',
        title: 'Industrial cleaning',
        text: 'Cleaning factories, warehouses and production plants. Lots of night and weekend shifts.'
      },
      {
        eyebrow: 'Trades',
        id: 'construccion',
        photo: 'assets/perfiles/construccion',
        focus: [68, 40],
        short: 'Construction',
        title: 'Construction and metalwork',
        text: 'Welders, fitters, electricians. Here they do ask for experience you can prove and, sometimes, certificates such as the VCA safety certificate.'
      }
    ],
    requisitos: {
      title: 'Compulsory requirements for every vacancy',
      items: [
        'Being 21 or older.',
        'EU nationality or passport.',
        'At least conversational B1 English.'
      ],
      text: 'They’re essential and there are no exceptions. If you don’t meet any one of the three, I can’t put you forward for any of my vacancies.'
    },
    note: {
      title: 'What helps in any profile',
      tone: 'sand',
      blocks: [
        'A B driving licence, and even better if you have a car. Being able to travel soon. And the intention to stay for a proper season, not three weeks.',
        'If you meet all three requirements, write to me and we’ll see which vacancies match your profile.'
      ]
    }
  },
  proceso: {
    eyebrow: 'The process',
    title: [
      'How selection works,',
      'step by step.'
    ],
    text: 'Six steps. Steps 2 to 4 are the interview with me.',
    id: 'proceso',
    steps: [
      {
        when: 'Day 1',
        title: 'You write to me or send your application',
        text: 'On WhatsApp or with the form. Tell me about your situation: languages, whether you have a driving licence, when you could travel and what worries you. You don’t need to have it all decided.'
      },
      {
        when: 'Interview',
        title: 'I confirm you meet the requirements',
        text: 'The first thing I check are the three compulsory requirements for every vacancy: being 21 or older, EU nationality or passport, and at least conversational B1 English. If one is missing, I tell you there and then and we stop.'
      },
      {
        when: 'Interview',
        title: 'We talk about your experience',
        text: 'We go over where you’ve worked, in which jobs and for how long, whether you have a driving licence or any certificate (forklift, CPC…) and when you could travel. That shows me which vacancies suit you.'
      },
      {
        when: 'Interview in English',
        title: 'A few questions in English',
        text: 'I ask you a few questions in English to check your level. It isn’t a grammar test: it’s about seeing that you can hold a conversation, because that’s what they’ll expect at work.'
      },
      {
        when: 'If you pass the interview',
        title: 'You register on the candidate platform',
        blocks: [
          'To access our vacancies, I send you a candidate access link. There you register and upload all the required documents.',
          {
            ul: [
              'The most important thing is your **CV**. It must be up to date, with the dates of each job in month and year, your current details and everything in English.',
              'Bear in mind too that some of our agencies ask for a clean **criminal record certificate**, no more than 6 months old.'
            ]
          },
          'Once you’re registered, I assign you **three vacancies** that match your profile.'
        ]
      },
      {
        when: 'Before you travel',
        title: 'The working conditions',
        blocks: [
          {
            ul: [
              '**Pay:** unskilled jobs pay the minimum wage. In the Netherlands, for people aged 21 and over, it is €15.29 gross per hour from 1 January 2027 (until 31 December 2026, €14.99).',
              '**Accommodation and transport:** they are arranged by the agency that employs you, and both are deducted from your pay. The house and the room are usually shared, although it depends on the agency and the accommodation.',
              '**Shifts:** they can be morning, afternoon or night.',
              '**Travel:** you pay for the flight and the transfer to the agency office or the accommodation. Some agencies pick you up at the airport, but not all of them.',
              '**Money to get started:** I recommend bringing a cushion for food and getting around until your first payment, which usually comes after two weeks.'
            ]
          },
          { small: 'All the figures on this page are approximate and are not a promise. What you earn and what is deducted is set by the agency that employs you, and depends on the city, the job, the hours, the shifts and the accommodation and its type. You will only know the real conditions when the agency gives them to you in writing.' },
          'Before you sign, go through [the list of questions in the guide](guia.html#preguntas-firmar).'
        ]
      }
    ],
    actions: [
      { label: 'Start with step 1', href: '#candidatura' },
      { label: 'Read the full guide first', href: 'guia.html' }
    ]
  },
  preguntas: {
    eyebrow: 'No beating around the bush',
    title: [
      'The questions',
      'everyone asks me.'
    ],
    text: 'The most common questions, grouped by topic. Find what you need to know about the conditions, the journey and the selection.',
    id: 'preguntas',
    groups: [
      {
        title: 'Pay and accommodation',
        items: [
          {
            q: 'How much do you really earn, after all the deductions?',
            blocks: [
              'Working 40 hours a week, with accommodation already deducted, what goes into your account can vary across a wide range, **between €1,250 and €2,200 a month**. It isn’t a fixed or guaranteed figure: it depends on the agency that hires you, the job, the city, overtime and shifts, and the accommodation and its type. The gross amount is quite a bit higher: the difference goes on tax withholding, accommodation, health insurance and transport.',
              'There’s a part you don’t see every week but that is yours: the holiday *reserves* and holiday pay (*vakantiegeld*, 8.33% of gross pay). They build up separately and are paid when you ask for them or in May.',
              'The line-by-line breakdown of a payslip is in [the guide](guia.html#nomina).',
              { small: window.RumboNorteCifras.aviso }
            ]
          },
          {
            q: 'How much do they take for accommodation?',
            blocks: [
              'As a guide, **between €80 and €150 per week per person**, depending on the agency, the city and the type of accommodation. Almost always in a room shared with another person, in a bungalow, a former hotel or a converted building.',
              'There’s a legal limit: the accommodation deduction **can’t exceed 25% of the minimum wage** that applies to you. And it can only be deducted directly from your payslip if the accommodation meets the **SNF** standard. If they deduct more, or the accommodation isn’t certified, something is wrong.',
              'Before I put you forward to an agency I ask three things, and I advise you to have them in writing too: how much it costs per week, how many people share a room and how far it is from work.'
            ]
          },
          {
            q: 'If I lose my job, do I lose my home too?',
            blocks: [
              'This is the important question and almost nobody answers it. The honest answer: **in many cases yes, because the accommodation is tied to the employment contract**.',
              'During **phase A** of the contract there is usually what’s called the agency clause (*uitzendbeding*): if the client company no longer needs you, the contract ends practically overnight. And if the accommodation depends on the contract, it ends with it.',
              'What you can do: **ask in writing, before you sign, how many days you have to leave the room** if you lose your job. I always ask this before putting anyone forward. A serious agency answers without any problem, and one that gets nervous at that question is already telling you a lot.'
            ]
          },
          {
            q: 'How much money do I need to get started?',
            blocks: [
              'As a guide, allow **between €800 and €1,200** as a cushion. It goes on the journey, on food for the first two or three weeks until your first payment, on the accommodation deposit if they ask for one and on the first odd expenses.',
              { cifra: window.RumboNorteCifras.nota },
              'The norm in the sector is **weekly pay**, so the first payment usually arrives two weeks after you start. That gap is what you need to cover. Going without a cushion is the most expensive mistake I see.'
            ]
          },
          {
            q: 'Do I have to pay you or the agency anything?',
            blocks: [
              '**No. Not a single euro, at any point.** Neither me nor the agency.',
              'Temporary work agencies can’t charge workers for finding them a job; in the Netherlands the law expressly forbids it.'
            ]
          }
        ]
      },
      {
        title: 'Preparing the trip',
        items: [
          {
            q: 'Do I need to speak English or Dutch?',
            blocks: [
              '**English, yes: at least conversational B1 is compulsory for any of my vacancies, no exceptions.** I check it myself in the interview with a few questions in English.',
              'You need it to understand safety instructions, shifts and numbers, and to talk to your supervisors. With a higher level, jobs with more responsibility open up. Almost nobody asks for Dutch at first, but it’s what makes the difference if you stay.'
            ]
          },
          {
            q: 'Do I need a driving licence?',
            blocks: [
              'It isn’t compulsory, but **it changes things quite a lot**. Many accommodations are on industrial estates or in small villages, and the agency organises transport in vans at fixed times.',
              'With a B licence (and especially if you’re willing to drive there) you have more flexibility, more jobs to choose from and depend less on others. An EU driving licence is valid in the Netherlands without any paperwork.',
              'If you’re a forklift driver, it’s a real plus: *heftruck* work pays better. They usually ask for the Dutch certificate there, and many agencies pay for it once you’re in.',
              'To work as a **truck or bus driver**, the professional licence (C, C+E or D) and the CPC are compulsory.'
            ]
          },
          {
            q: 'What is the BSN and how do I get it?',
            blocks: [
              'The **BSN** (*burgerservicenummer*) is the Dutch citizen service number. Without it you can’t get paid properly, have health insurance or do almost anything. It’s the first thing you do when you arrive.',
              'You apply for it with an appointment at the town hall (*gemeente*). If you’ll be staying less than four months, you register as a non-resident at one of the RNI offices; if you’ll stay longer, you register at an address. The agency usually goes with you or books the appointment.',
              '**Nobody can charge you for getting the BSN.** It’s free. It’s explained step by step in [the guide](guia.html#bsn).'
            ]
          },
          {
            q: 'Can I go with my partner or a friend?',
            blocks: [
              'Yes, and in fact it’s easier. But there’s one thing to know: **being hired at the same time doesn’t guarantee you’ll be housed together or work the same shift**. Accommodation is assigned according to what’s available.',
              'If being together is non-negotiable for you, tell me from the very first message: I raise it that way with the agency and ask for it to be confirmed in writing. It’s better to wait two more weeks than to arrive and find you’re forty kilometres apart.'
            ]
          },
          {
            q: 'Which country suits me best?',
            blocks: [
              '**In most cases, the Netherlands:** it’s where almost all my vacancies are and where the system is most established. Belgium is very similar and, if you also speak French, Wallonia and Brussels are a plus. **Germany pays well for experience in industry and metalwork**, but German counts for more and there’s more paperwork on arrival. In all three, B1 English is compulsory.',
              'We’ll look at it in the first conversation with your profile in front of us. I won’t send you to a country that doesn’t suit you just because there are places there.'
            ]
          }
        ]
      },
      {
        title: 'Selection and agencies',
        items: [
          {
            q: 'How do I know if an agency is legal?',
            blocks: [
              'In the Netherlands you can check it in two public registers, free, in two minutes and from your phone:',
              {
                ul: [
                  '**SNA** — [normeringarbeid.nl](https://www.normeringarbeid.nl). It audits that the company pays its taxes and contributions as it should.',
                  '**SNF** — [normeringflexwonen.nl](https://www.normeringflexwonen.nl). It certifies that the accommodation meets minimum standards.'
                ]
              },
              'In Belgium the agency must be accredited by its region, and in Germany it needs the temporary agency work licence from the Bundesagentur für Arbeit. When I assign you a vacancy you’ll know which agency it is: look up its legal name in the register and check it yourself, not just me. If the exact name doesn’t appear in the register, stop. In [the guide](guia.html#verificar) you’ll find the step-by-step and the warning signs.'
            ]
          },
          {
            q: 'What jobs do you have right now?',
            blocks: [
              'The profiles I’m asked for most are [further up](#perfiles): **logistics and warehouse** (the whole country works as Europe’s warehouse), **truck and bus drivers**, **food production**, **agriculture and greenhouses**, which are very seasonal, and **industrial cleaning**. Construction and metalwork ask for more proven experience.',
              'What’s open right now I’ll tell you on WhatsApp, because it changes from one week to the next and I’d rather not post something on the website that won’t exist tomorrow. There I’ll also explain how each sector works from the inside, the shifts and what it pays.'
            ]
          },
          {
            q: 'What will you ask me in the first conversation?',
            blocks: [
              'First I confirm the three requirements: age, nationality and level of English. Then what experience you have, whether you have a driving licence, when you could travel and whether you’re going alone or with someone. At the end I ask you a few questions in English to check your level.',
              '**In that first conversation I don’t ask for your ID or any document.** If someone asks you for them before even talking to you, be wary.'
            ]
          },
          {
            q: 'How long does it all take from when I write to you?',
            blocks: [
              'It depends mostly on the season and your profile, so any fixed figure would be a lie. What I can tell you is the real order: first I confirm the requirements and we do the interview; if you pass it, you register on the candidate platform, upload your documents and I assign you three vacancies that match your profile.',
              'Once I assign you the vacancies, the decision is no longer mine, and I won’t pretend it is. The full process, step by step, is [in the process section](#proceso).'
            ]
          }
        ]
      }
    ]
  },
  aviso: {
    eyebrow: 'The practical guide',
    title: [
      'Travel with your',
      'questions answered.'
    ],
    text: 'BSN, payslip, accommodation, contracts and cost of living. All the information to prepare your arrival in the Netherlands, with its official sources.',
    cta: { label: 'Read the full guide', href: 'guia.html' }
  },
  candidatura: {
    id: 'candidatura',
    eyebrow: 'Your application',
    title: [
      'Tell me your story',
      'and we’ll see if you fit.'
    ],
    paragraphs: [
      'WhatsApp is the fastest: I reply myself and within ten minutes we know if there’s something for you. If you’d rather put it in writing, fill in the form and I’ll write to you.',
      'No sales calls, no newsletter and nobody chasing you three days later.'
    ],
    whatsapp: { label: 'Open WhatsApp', note: 'The message is already written. You just have to press send.' },
    form: {
      name: 'candidatura',
      action: 'gracias.html',
      subject: 'Nueva candidatura desde proyectoholanda.com (EN)',
      trap: 'Don’t fill this in',
      heading: 'Application form',
      required: 'Fields marked with * are required.',
      submit: 'Send my application',
      failure: 'It couldn’t be sent. Check your connection or [message me on WhatsApp](wa:).',
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
      'Other'
    ],
    edadHint: 'Minimum age 21',
    nacionalidad: {
      label: 'Do you have EU nationality or an EU passport?',
      options: ['Choose an option', { value: 'Sí', label: 'Yes' }, { value: 'No', label: 'No' }]
    },
    ingles: [
      'Choose an option',
      { value: 'Menos de B1', label: 'Below B1' },
      { value: 'B1 (conversacional)', label: 'B1 (conversational)' },
      { value: 'B2 o superior', label: 'B2 or higher' }
    ],
    destinos: [
      { value: 'Países Bajos', label: 'The Netherlands', note: '(most vacancies)' },
      { value: 'Bélgica', label: 'Belgium' },
      { value: 'Alemania', label: 'Germany' },
      { value: 'Me da igual', label: 'I don’t mind' }
    ],
    idiomas: [
      { value: 'Español', label: 'Spanish' },
      { value: 'Neerlandés', label: 'Dutch' },
      { value: 'Francés', label: 'French' },
      { value: 'Alemán', label: 'German' },
      { value: 'Polaco', label: 'Polish' },
      { value: 'Portugués', label: 'Portuguese' },
      { value: 'Otro', label: 'Other' }
    ],
    carnet: [
      { value: 'Carnet B', label: 'B licence (car)' },
      { value: 'Coche propio', label: 'Own car' },
      { value: 'Carnet C o C+E (camión)', label: 'C or C+E licence (truck)' },
      { value: 'Carnet D (autobús)', label: 'D licence (bus)' },
      { value: 'CAP (código 95)', label: 'CPC (code 95)' },
      { value: 'Certificado de carretillero', label: 'Forklift certificate' },
      { value: 'No tengo carnet', label: 'No driving licence' }
    ],
    sector: [
      'Choose an option',
      { value: 'Logística y almacén', label: 'Logistics and warehouse' },
      { value: 'Carretillero / reachtruck', label: 'Forklift / reach truck' },
      { value: 'Conductor de camión (C / C+E)', label: 'Truck driver (C / C+E)' },
      { value: 'Conductor de autobús (D)', label: 'Bus driver (D)' },
      { value: 'Producción y alimentación', label: 'Production and food' },
      { value: 'Agricultura e invernaderos', label: 'Agriculture and greenhouses' },
      { value: 'Limpieza industrial', label: 'Industrial cleaning' },
      { value: 'Construcción o metal', label: 'Construction or metalwork' },
      { value: 'Automoción e industria', label: 'Automotive and industry' },
      { value: 'Hostelería', label: 'Hospitality' },
      { value: 'Me da igual, lo que salga', label: 'I don’t mind, whatever comes up' },
      { value: 'Todavía no lo sé', label: 'I don’t know yet' }
    ],
    consent: 'I have read the [privacy policy](privacidad.html) and I agree that **Rumbo Norte (Iván Guerra Arroyo) may use this data to assess my application and, if I’m a fit, send it to certified temporary work agencies in the Netherlands, Belgium or Germany** so that they can contact me. I understand this is a transfer to another company within the European Union and that I can withdraw this consent at any time by writing to [ivan@proyectoholanda.com](mailto:ivan@proyectoholanda.com).',
      foot: 'It costs nothing, now or later. I won’t call you without letting you know first on WhatsApp.'
    }
  }
};
