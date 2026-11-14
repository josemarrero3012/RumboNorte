/* The practical guide (English). Same structure as contenido/guia.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.guia = {
  legalNote: 'The figures in this guide are approximate and do not constitute legal or tax advice.',
  hero: {
    eyebrow: 'The practical guide',
    title: [
      'What you need',
      'to know before',
      'the interview.'
    ],
    text: [
      'It’s the same thing I explain to every candidate before I put them forward to an agency, written down and in order. Seven sections: the BSN, the payslip line by line, accommodation, what it costs to live there, contracts, how to check an agency and the questions to ask before you sign.',
      'All the figures are approximate and dated. The Dutch system changes on 1 January and 1 July every year: **always check the figure at the official source I link to** before making a decision based on it.'
    ],
    accent: 2
  },
  sections: [
    {
      id: 'bsn',
      eyebrow: '01 · Burgerservicenummer',
      title: [
        'The BSN: without it you don’t exist on paper'
      ],
      blocks: [
        {
          lede: 'The BSN is your citizen service number in the Netherlands. Nine digits. Without it you can’t be properly registered for work, you can’t take out the compulsory health insurance, you can’t open an account at most banks and you can’t apply for any benefit. It’s literally the first thing to do when you arrive, even before you unpack.'
        },
        { h3: 'How to apply' },
        'It depends on how long you’re going to stay, and the dividing line is **four months**:',
        {
          ul: [
            '**Less than four months.** You register in the non-residents register (*RNI*). It’s done by appointment at one of the municipal offices designated for it, spread around the country. You don’t need a fixed address.',
            '**More than four months.** You register at the town hall of the municipality where you live (*inschrijving* in the BRP register). Here you do need a real address and permission from whoever holds the accommodation.'
          ]
        },
        'In both cases you bring a **valid passport or national ID card** — an EU ID card is accepted — and, if you have it, your employment contract. You almost always get the number at the same appointment, on paper.',
        {
          note: {
            title: 'This is free',
            tone: 'sand',
            blocks: [
              'Neither RNI registration nor municipal registration costs you anything. If someone offers to “sort out your BSN” for €50, €100 or €200, it’s a scam. Normally the agency gives you an appointment already booked and sometimes even takes you there.'
            ]
          }
        },
        { h3: 'After the BSN: DigiD' },
        'Once you have a BSN and you’re registered, apply for **DigiD**. It’s the digital identity you use for everything with the Dutch authorities: tax returns, the health insurance allowance, unemployment benefit. You apply at [digid.nl](https://www.digid.nl) and a code is sent by post to your address, so it takes a few days.',
        { h4: 'Official sources' },
        {
          ul: [
            '[Dutch government — what the BSN is](https://www.government.nl/topics/personal-data/citizen-service-number-bsn)',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl) — the government’s main portal (in Dutch)'
          ]
        }
      ]
    },
    {
      id: 'nomina',
      eyebrow: '02 · Loonstrook',
      title: [
        'The payslip,',
        'line by line.'
      ],
      deck: 'This is where most expectations fall apart. There’s a long way between what they tell you you’ll earn and what goes into your account, and it’s worth walking it before you get on the plane.',
      blocks: [
        { h3: 'First: the hourly wage' },
        'The Netherlands has a **statutory minimum hourly wage**, the same for all sectors, updated **on 1 January and 1 July** every year. For people aged 21 and over it is **€15.29 gross per hour from 1 January 2027** (until 31 December 2026, €14.99), and it rises at every review.',
        'By the time you read this it may already have changed. **Check it yourself, it takes thirty seconds:** [rijksoverheid.nl — minimumloon](https://www.rijksoverheid.nl/onderwerpen/minimumloon).',
        'On top of that minimum, if the client company has its own collective agreement, you’re often entitled to **the same wage as a permanent employee of that company doing your job**. It’s called equal pay and it’s a right, not a favour. Always ask whether it applies to you.',
        { h3: 'Full example of one week' },
        'Forty hours at €15.00 gross, with accommodation and insurance deducted by the agency. The amounts are **approximate, not final**: tax withholding depends on your personal situation, and the pay and accommodation depend on the agency that hires you, the city and the type of accommodation.',
        {
          payslip: {
            caption: 'Approximate example · 40 h at €15.00/h gross · one week',
            head: [
              'Item',
              'Amount'
            ],
            rows: [
              {
                cells: [
                  'Gross pay ~~40 h × €15.00~~',
                  '€600.00'
                ]
              },
              {
                cells: [
                  'Pension ~~Your share of the temp agency sector scheme~~',
                  '−€15.00'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Tax withholding ~~*Loonheffing*. Varies a lot depending on your situation~~',
                  '−€95.00'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Net before deductions',
                  '€490.00'
                ],
                kind: 'sub'
              },
              {
                cells: [
                  'Accommodation ~~Shared room arranged by the agency~~',
                  '−€110.00'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Health insurance ~~Compulsory. About €140/month~~',
                  '−€32.00'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Transport ~~Company van or bike~~',
                  '−€22.00'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'What goes into your account',
                  '€326.00'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        'In this specific example you end up with about **€1,400 a month** net. It’s only an example: depending on the agency, the job, the city, the hours and the accommodation, what goes into your account can vary **between €1,250 and €2,200 a month**, and nobody can guarantee it before the agency gives you the conditions in writing. And beware of the “€2,500 a month” you read about online: on the minimum wage, that’s the gross figure, before absolutely anything has been taken off.',
        { small: window.RumboNorteCifras.aviso },
        { h3: 'Reserves: money that’s yours but you don’t see every week' },
        'On top of all the above, every week **reserves build up** that are yours and are paid out separately:',
        {
          table: {
            caption: 'Accrued reserves · on the gross pay in the example',
            head: [
              'Item',
              'Approx.',
              'Week'
            ],
            rows: [
              {
                cells: [
                  'Holiday pay ~~*Vakantiegeld*~~',
                  '8.33%',
                  '€50.00'
                ]
              },
              {
                cells: [
                  'Holiday days ~~Accrued as a balance of hours~~',
                  '~10.9%',
                  '€65.00'
                ]
              },
              {
                cells: [
                  'Weekly accrual',
                  '—',
                  '€115.00'
                ],
                kind: 'total'
              }
            ],
            numeric: [1, 2]
          }
        },
        'They’re paid when you ask for them, when you take holiday or when the contract ends, depending on the collective agreement that applies to you. **Check them on every payslip.** If the reserves balance doesn’t go up week by week, ask why before a month has passed.',
        {
          note: {
            title: 'Two things that cost you money if you don’t know them',
            tone: 'stone',
            blocks: [
              '**1. The tax credit (*loonheffingskorting*) applies with one employer only.** If you work for two and tick it with both, you earn more each month but end up paying it back with your tax return. Tick it only with your main employer.',
              '**2. In the year you arrive, your tax return usually results in a refund.** Because you haven’t worked all twelve months. Many people don’t file it and lose several hundred euros. It’s done with DigiD on the *Belastingdienst* website.'
            ]
          }
        },
        {
          note: {
            title: 'How to read your *loonstrook* on day one',
            tone: 'sand',
            blocks: [
              'Look for these words and check that they add up: **gewerkte uren** (hours worked), **uurloon** (hourly rate), **bruto loon** (gross pay), **loonheffing** (withholding), **inhoudingen** (deductions: accommodation and insurance appear here), **reserveringen** (the reserves), **netto uitbetaald** (what is paid in).',
              'If the hours don’t match the ones you worked, complain that same week. The later you leave it, the harder it gets.'
            ]
          }
        }
      ]
    },
    {
      id: 'alojamiento',
      eyebrow: '03 · Huisvesting',
      title: [
        'Accommodation and how much',
        'they really deduct.'
      ],
      deck: 'It’s the chapter with the most small print and the one that causes the most grief. It’s also the one with the clearest legal limits, if you know what they are.',
      blocks: [
        { h3: 'What you’ll find' },
        'The usual thing is a **room shared with another person** in a bungalow, a converted former hotel or a block built for workers. Kitchen and bathroom shared with four to six other people. It’s usually furnished, with wifi and bed linen included. The price is **per person per week**, not per room.',
        'Approximate prices range **between €80 and €150 per week per person**, depending on the agency, the city and the type of accommodation. A single room, when there is one, is usually at the top end of that range.',
        { cifra: window.RumboNorteCifras.nota },
        { h3: 'The legal limit on the deduction' },
        'This is the important part and almost nobody knows it: the law allows accommodation to be deducted directly from your payslip, but **capped at 25% of the minimum wage** that applies to you, and only if **the accommodation is certified by SNF** (or an equivalent recognised scheme).',
        'In practice: on the full-time minimum wage, that 25% comes to **about €150 a week**. If they’re deducting more than that, or the accommodation doesn’t appear in the SNF register, there’s a problem and you have grounds to complain.',
        {
          note: {
            title: 'The three questions to ask, in writing',
            tone: 'sand',
            blocks: [
              '**1.** Exactly how much does it cost per week and how many people share a room?',
              '**2.** How far is it from the workplace and who pays for the travel?',
              '**3.** If I lose my job, how many days do I have to leave the room?',
              'The third one separates serious agencies from the rest. Ask on WhatsApp or by email, not verbally, and keep the answer.'
            ]
          }
        },
        { h3: 'The catch: home and contract are tied together' },
        'In most cases the accommodation depends on the employment contract. If the contract ends — and in phase A it can end very quickly, as we’ll see in section 5 — **you lose the job and the room at the same time**. That’s the real situation to keep in mind before getting on the plane, and it’s the main reason I insist so much on the €800–1,200 cushion.',
        'The sector’s collective agreements set a minimum notice period for moving out and require it to be given to you in writing. That period existing doesn’t save you from having to find somewhere in a few days in a country you don’t know.',
        { h3: 'Health insurance' },
        'As soon as you start working in the Netherlands **you are legally required to take out Dutch health insurance** (*zorgverzekering*), whether or not you have a European health insurance card. You have a short deadline to do it and there are fines if you don’t.',
        'The basic policy costs around **€140 a month** and many agencies have a cheaper collective deal that they deduct from your pay. There’s also a state allowance, the ***zorgtoeslag***, for low incomes: you apply with DigiD and for many workers it covers a good part of the premium. It isn’t automatic: **you have to apply for it**, and many people don’t.',
        { cifra: window.RumboNorteCifras.nota },
        {
          ul: [
            '[toeslagen.nl](https://www.toeslagen.nl) — *zorgtoeslag* application',
            '[normeringflexwonen.nl](https://www.normeringflexwonen.nl) — SNF register of accommodation'
          ]
        }
      ]
    },
    {
      id: 'coste-vida',
      eyebrow: '04 · Shopping',
      title: [
        'What it costs to live there',
        'each week.'
      ],
      deck: 'With accommodation already deducted from your pay, what you spend is basically food, your phone and whatever you do on Sundays.',
      blocks: [
        'The big supermarkets are **Albert Heijn** (the most expensive and most convenient), **Jumbo** (mid-range) and **Lidl** and **Aldi** (the cheap ones). The difference between shopping at one or the other is easily €20 a week, which over a month is almost a day’s work.',
        {
          table: {
            caption: 'Approximate weekly spending · one person',
            head: [
              'Item',
              'Per week'
            ],
            rows: [
              {
                cells: [
                  'Food shopping ~~Cooking at home, shopping at Lidl or Aldi~~',
                  '€45 – 70'
                ]
              },
              {
                cells: [
                  'Phone and data ~~Dutch prepaid SIM~~',
                  '€3 – 6'
                ]
              },
              {
                cells: [
                  'Toiletries and cleaning products',
                  '€5 – 10'
                ]
              },
              {
                cells: [
                  'Leisure and extras ~~A beer out, a train on Sunday~~',
                  '€15 – 40'
                ]
              },
              {
                cells: [
                  'Usual total',
                  '€70 – 125'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        { cifra: window.RumboNorteCifras.nota },
        'With the €326 from the payslip example, that would leave **between €200 and €255 in savings a week** if you manage your money. It’s an approximate calculation: your case will depend on what you earn and what’s deducted. That’s the point of going: not the gross pay, but what you manage to put aside each month.',
        {
          note: {
            title: 'Three tips that are worth real money',
            tone: 'stone',
            blocks: [
              '**The bike.** A second-hand one costs between €60 and €120 and saves you transport costs for good. It’s the first purchase to make.',
              '**The *statiegeld*.** Bottles and cans carry a deposit of between €0.15 and €0.25. You return them at the machine in the supermarket. It sounds trivial and it’s €5–10 a week.',
              '**Cooking together.** You share a flat: buying and cooking among four people cuts food spending almost in half.'
            ]
          }
        }
      ]
    },
    {
      id: 'contrato',
      eyebrow: '05 · Contracts',
      title: [
        'Every contract',
        'you might be offered.'
      ],
      deck: 'Through an agency and directly with a company. Which is which, what each one gives you and which one you really want to end up signing.',
      blocks: [
        {
          lede: 'In the Netherlands there are two ways of being employed, and mixing them up is the source of half the misunderstandings. Either you’re hired by a **temporary work agency** (*uitzendbureau*) that places you with a client company, or you’re hired **directly by the company** where you work. Almost everyone starts with the first, and the goal is to end up with the second.'
        },
        {
          note: {
            title: 'The difference in one sentence',
            tone: 'stone',
            blocks: [
              'With the agency, your boss and your employer **are not the same company**: you work for one and another pays you. With a direct contract, they are. Everything else — stability, pay, rights — follows from that.'
            ]
          }
        },
        { h3: 'A · If you’re hired by a temporary work agency' },
        'Here the sector’s collective agreement organises your seniority in **phases**. The more weeks you build up with the same agency, the more stability you have. You always start at the bottom, and a long break can make you start counting again.',
        {
          table: {
            caption: 'The phases of temporary work · general outline',
            head: [
              'Phase',
              'Approximate duration',
              'What it means for you'
            ],
            rows: [
              {
                cells: [
                  'Phase A',
                  'Around the first year worked',
                  'Maximum flexibility for the company. It usually has the agency clause: if the client no longer needs you, the contract ends. You’re paid for hours worked.'
                ]
              },
              {
                cells: [
                  'Phase B',
                  'The following years, with a limited number of contracts',
                  'Fixed-term contracts with an end date. They can no longer dismiss you overnight and you’re paid even if the client stops.'
                ]
              },
              {
                cells: [
                  'Phase C',
                  'After phase B',
                  'Permanent contract with the agency. Real stability: it’s the equivalent of a permanent job.'
                ],
                kind: 'total'
              }
            ]
          }
        },
        {
          small: 'The exact durations and number of contracts are set by the sector’s collective agreement, which is renegotiated every few years and has changed several times in the last decade. **Always ask in writing which phase you’re starting in and which collective agreement applies to you.** They’re two one-minute questions.'
        },
        { h4: 'The five types you might be offered' },
        'Within the agency world, not everything is the same, even if they describe it the same way:',
        {
          table: {
            caption: 'Arrangements through an intermediary',
            head: [
              'Type',
              'How it works',
              'Watch out for'
            ],
            rows: [
              {
                cells: [
                  '*Uitzendovereenkomst* with clause',
                  'The classic phase A contract. It ends automatically if the client no longer needs you.',
                  'It’s the most fragile of all. If the accommodation is tied to it as well, you lose both at once.'
                ]
              },
              {
                cells: [
                  '*Uitzendovereenkomst* without clause',
                  'Fixed-term contract with a start and end date. The agency pays you even if the client stops.',
                  'It usually comes in phase B. If they offer it earlier, it’s a good sign about the agency.'
                ]
              },
              {
                cells: [
                  '*Detachering*',
                  'Placement, but with a stable contract with the company that places you. Common for technical profiles.',
                  'Better conditions, but it usually requires experience or qualifications.'
                ]
              },
              {
                cells: [
                  '*Payrolling*',
                  'The company chooses you, but the one who pays you and appears as employer is an external payroll company.',
                  'By law you’re entitled to **the same conditions as the client’s own staff**. Check it, because it doesn’t always apply automatically.'
                ]
              },
              {
                cells: [
                  '*ZZP* (bogus self-employment)',
                  'They register you as self-employed and you invoice your hours instead of getting a payslip.',
                  '**It’s the biggest warning sign.** See the notice below.'
                ],
                kind: 'minus'
              }
            ]
          }
        },
        {
          note: {
            title: 'If they suggest you go self-employed (ZZP), be wary',
            tone: 'sand',
            blocks: [
              'For a warehouse, production or farm job with set hours and a boss, **being self-employed is almost never legal**: it’s what they call bogus self-employment there, and the Dutch tax authority has been seriously cracking down on it for some time.',
              'What you lose if you accept: **no unemployment benefit, no sick pay, no paid holidays or holiday pay, and you have to pay the taxes and insurance** out of money you thought was yours. And if the inspectors later decide it was a disguised employment relationship, the trouble splashes on you too.',
              'If someone presents it as a favour or a way to “earn more”, it’s exactly the other way round.'
            ]
          }
        },
        { h3: 'B · If you’re hired directly by the company' },
        'Here you’re under general employment law (*arbeidsovereenkomst*), the same as any Dutch person. These are the types that exist:',
        {
          table: {
            caption: 'Direct contracts with the employer',
            head: [
              'Type',
              'What it is',
              'What you need to know'
            ],
            rows: [
              {
                cells: [
                  'Fixed-term ~~*bepaalde tijd*~~',
                  'Contract with an end date.',
                  'There’s a legal limit on consecutive fixed-term contracts with the same company. Once it’s exceeded, the next one **becomes permanent by law**. Keep count yourself.'
                ]
              },
              {
                cells: [
                  'Permanent ~~*onbepaalde tijd*~~',
                  'No end date. The *vast contract*.',
                  'The goal. It’s what opens up decent rentals, credit and a mortgage.'
                ],
                kind: 'total'
              },
              {
                cells: [
                  'Zero hours ~~*nulurencontract*~~',
                  'You’re employed but with no guaranteed hours: they call you when there’s work.',
                  'They have to give you several days’ notice, and **if they cancel at shorter notice, you still get paid**. After a while, the company is obliged to offer you fixed hours based on your average.'
                ]
              },
              {
                cells: [
                  'Min-max ~~*min-maxcontract*~~',
                  'They guarantee you a minimum number of hours and you can do more up to a cap.',
                  'Better than zero hours. Check that the minimum is enough to live on.'
                ]
              },
              {
                cells: [
                  'Work-based training ~~*BBL*~~',
                  'You work and study at the same time, while being paid, and come out with an official qualification.',
                  'The company usually pays for it. It’s the fastest route to no longer being interchangeable labour.'
                ]
              },
              {
                cells: [
                  'Internship ~~*stage*~~',
                  'Linked to a course of study. It isn’t a normal employment contract.',
                  'The allowance is low and doesn’t give you the same rights. Be careful if they offer it when you’re not studying.'
                ]
              }
            ]
          }
        },
        { h3: 'C · The clauses that appear in both' },
        'Whoever hires you, these four concepts will be in your contract and it’s worth recognising them before you sign.',
        {
          table: {
            caption: 'Common small print',
            head: [
              'Concept',
              'What it means'
            ],
            rows: [
              {
                cells: [
                  'Probation period ~~*proeftijd*~~',
                  'During it, either side can end things the same day. Its maximum length depends on the length of the contract, and **in very short contracts it isn’t allowed at all**. If you see a long probation period in a contract of a few months, ask.'
                ]
              },
              {
                cells: [
                  'Notice period ~~*opzegtermijn*~~',
                  'The time you must give before leaving or being dismissed. For the worker it’s usually a month; for the company it increases with your years of service. Watch out: it usually counts **to the end of the month**, not from the day you give notice.'
                ]
              },
              {
                cells: [
                  'Severance pay ~~*transitievergoeding*~~',
                  'If the company ends the relationship, you’re entitled to compensation **from the first day worked**, in proportion to how long you’ve been there. Many people leave without claiming it because they don’t know it exists.'
                ]
              },
              {
                cells: [
                  'Non-compete ~~*concurrentiebeding*~~',
                  'It limits you from working for competitors when you leave. In fixed-term contracts it’s only valid if justified in writing. **No agency can stop you from accepting a direct job with the client company.**'
                ]
              }
            ]
          }
        },
        { h3: 'D · The clause to look at: the *uitzendbeding*' },
        'It’s the agency clause. In plain English: **while it’s active, the employment contract ends automatically when the client company decides it no longer needs you**. No long notice, no severance, no discussion.',
        'It also works the other way: you can leave with very little notice. That’s the good part, and for some people it’s worth it.',
        'What you need to be clear about is that **in phase A, with that clause, your situation is fragile**. If the accommodation is tied to the contract as well, one bad day at the factory can turn into losing your job and your home on the same Friday.',
        {
          pull: {
            text: 'In phase A you don’t have a stable job. You have a job. You notice the difference the day the client cuts shifts.'
          }
        },
        { h3: 'E · If you fall ill' },
        'With the *uitzendbeding* active, falling ill can end the contract. In that case you receive **sickness benefit from the public body (UWV)**, which is around 70% of your daily wage. That’s not the same as still getting your pay.',
        'Report it on the first day and do it through the channel they tell you (there’s usually a specific number). Reporting late is one of the few things that can cost you the whole benefit.',
        { h3: 'F · If you lose your job' },
        'To receive Dutch unemployment benefit (*WW*) you must have worked a minimum number of weeks within a reference period. At first almost nobody qualifies, and that’s exactly the moment of greatest risk.',
        'Two practical things: if you’ve been working in another EU country, ask for the **U1 form** before you leave, because it lets you add up the periods you paid contributions there. And keep **all your payslips and contracts** from day one: they’re the proof of the weeks you’ve worked.',
        {
          note: {
            title: 'Where this is heading',
            tone: 'ink',
            blocks: [
              'The full path is always the same: phase A with clause → fixed-term contract without clause → direct contract with the client company → permanent. Each step makes you less fragile and adds to your pay.',
              'How long each step takes, what it takes to make it and what unlocks at the top is on [the goals page](metas.html).'
            ]
          }
        },
        { h4: 'Official sources' },
        {
          ul: [
            '[uwv.nl](https://www.uwv.nl) — unemployment and sickness benefits',
            '[belastingdienst.nl](https://www.belastingdienst.nl) — Dutch tax authority',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao) — types of contract and collective agreements'
          ]
        }
      ]
    },
    {
      id: 'verificar',
      eyebrow: '06 · SNA and SNF',
      title: [
        'How to check an agency',
        'in two minutes.'
      ],
      deck: 'Free, from your phone and without signing up to anything. If there’s one thing in this guide worth doing, it’s this.',
      blocks: [
        { h3: 'The two registers' },
        '**SNA — Stichting Normering Arbeid.** It audits that the company pays its taxes and contributions correctly and complies with employment law. It’s the label that really matters: serious client companies only work with agencies that have it, because otherwise they’re liable for the debts.',
        'You can check it at [normeringarbeid.nl](https://www.normeringarbeid.nl), in the register’s search tool.',
        '**SNF — Stichting Normering Flexwonen.** It certifies that the accommodation meets minimum standards of space, safety and hygiene, and it’s inspected regularly. You can check it at [normeringflexwonen.nl](https://www.normeringflexwonen.nl).',
        { h3: 'How to do it, step by step' },
        {
          ol: [
            '**Ask for the exact legal name and the KvK number.** The KvK is the number in the Dutch commercial register. A legal agency gives it to you without batting an eyelid. Watch out: the trading name they write to you under and the legal name are sometimes different.',
            '**Look up that name in the SNA register.** It must appear with the certification *valid*, not expired or suspended.',
            '**Look up the accommodation in the SNF register.** Sometimes the accommodation is run by a different company: ask for that name too.',
            '**Check the KvK number** at [kvk.nl](https://www.kvk.nl). Look at how long the company has existed. A company set up three months ago that is already recruiting a hundred people deserves a second look.',
            '**Search the name on Google together with the words *ervaringen* or *klachten*** (experiences, complaints). In Dutch and Polish you’ll find far more than in English.'
          ]
        },
        {
          note: {
            title: 'Warning signs. If even one appears, stop.',
            tone: 'sand',
            blocks: [
              {
                ul: [
                  'They ask for **money upfront** for anything: registration, reserving a place, getting the BSN, translating papers, “admin fees”.',
                  'They ask for **photos of your ID or passport before you’ve spoken to anyone**, or through an odd channel.',
                  'They won’t give you the **legal name or the KvK number**, or get defensive when you ask.',
                  '**There’s no written contract**, or they tell you “it’s signed there” and you don’t need to see it beforehand.',
                  'They promise you a **net wage far above** what you’ve read here, or a “guaranteed job”.',
                  'They pressure you to **decide today** because “there are only two places left”.',
                  'They offer to pay you **part of it cash in hand**. That leaves you with no unemployment benefit, no sick pay, nothing.'
                ]
              }
            ]
          }
        },
        {
          note: {
            title: 'A change coming on 1 January 2027',
            tone: 'stone',
            blocks: [
              'The Netherlands has approved a **compulsory admission system** for temporary work agencies (*Wet toelating terbeschikkingstelling arbeidskrachten*). From 1 January 2027 being certified is no longer enough: to place workers, an official authorisation will be required. Agencies already operating have a transition period while their application is reviewed, and fines start in 2028.',
              'In the meantime, SNA and SNF remain the best tool you have. When the new register is up and running, I’ll add it to this guide.'
            ]
          }
        },
        { h4: 'Where to complain if something goes wrong' },
        {
          ul: [
            '[Dutch Labour Inspectorate](https://www.nlarbeidsinspectie.nl) — reports, including anonymous ones',
            '[FNV](https://www.fnv.nl) — the largest trade union, helps foreign workers',
            '[Work in NL](https://www.workinnl.nl) — official information points for European workers'
          ]
        }
      ]
    },
    {
      id: 'preguntas-firmar',
      eyebrow: '07 · The checklist',
      title: [
        'What to ask',
        'before you sign.'
      ],
      deck: 'Fourteen questions. Copy them, paste them into the chat with the agency and keep the answers. A serious agency answers all of them without getting uncomfortable.',
      blocks: [
        {
          cards: [
            {
              eyebrow: 'Contract',
              title: 'First things first',
              blocks: [
                '**1.** Which phase am I starting in and which collective agreement applies to me?\n**2.** Does it include the agency clause?\n**3.** Can I read the full contract before I travel?\n**4.** What language is it in and will you give me a translation?'
              ]
            },
            {
              eyebrow: 'Money',
              title: 'The numbers',
              blocks: [
                '**5.** What is the exact gross hourly rate?\n**6.** Am I entitled to equal pay with the client’s staff?\n**7.** How are night and weekend shift premiums paid?\n**8.** Is pay weekly or monthly, and on what day?'
              ]
            },
            {
              eyebrow: 'Home',
              title: 'The accommodation',
              blocks: [
                '**9.** How much is deducted per week and how many people per room?\n**10.** Is the accommodation in the SNF register? Under what name?\n**11.** If the work ends, how many days do I have to move out?'
              ]
            },
            {
              eyebrow: 'Travel',
              title: 'Getting there and around',
              blocks: [
                '**12.** How far away is the work and who pays for transport?\n**13.** Who pays for the outbound journey and on what conditions?'
              ]
            },
            {
              eyebrow: 'Paperwork',
              title: 'The formalities',
              blocks: [
                '**14.** Will you help me with the BSN appointment and health insurance, and does it cost me anything?'
              ]
            },
            {
              eyebrow: 'Golden rule',
              title: 'In writing',
              blocks: [
                'Ask all these questions **in writing** — WhatsApp or email — and keep the answers. It isn’t distrust: it’s what will serve as proof if something isn’t honoured.'
              ]
            }
          ]
        },
        {
          note: {
            title: 'And one last thing',
            tone: 'ink',
            blocks: [
              'If after reading all this you decide it isn’t worth it for you, you’ve still won. That’s what information is for: to decide with facts and not with a Facebook ad. I won’t push you.'
            ]
          }
        },
        {
          buttons: [
            { label: 'Send my application', href: './#candidatura' },
            { label: 'Ask a specific question', href: 'wa:' }
          ]
        }
      ]
    }
  ],
  toc: [
    { href: '#bsn', label: 'The BSN: without it you don’t exist on paper' },
    { href: '#nomina', label: 'The payslip, line by line' },
    { href: '#alojamiento', label: 'Accommodation and how much they really deduct' },
    { href: '#coste-vida', label: 'What it costs to live there each week' },
    { href: '#contrato', label: 'Every type of contract there is' },
    { href: '#verificar', label: 'How to check an agency in SNA and SNF' },
    { href: '#preguntas-firmar', label: 'What to ask before you sign' }
  ]
};
