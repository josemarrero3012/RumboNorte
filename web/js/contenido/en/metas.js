/* Goals (English). Same structure as contenido/metas.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.metas = {
  hero: {
    eyebrow: 'Goals',
    title: [
      'Going to work',
      'isn’t the goal.',
      'It’s the first step.'
    ],
    text: [
      'The guide tells you what you’re getting into. This page tells you **where you can get to**: moving out of agency housing, having a car, renting your own place, getting a direct contract with the company and ending up with a permanent one.',
      'It isn’t cheap motivation. It’s eight goals with what each one costs and the real time it takes to achieve them. It’s the path taken by people who stay. It isn’t quick or pretty, but it can be done.'
    ],
    accent: 1
  },
  aviso: {
    title: 'Before you read on',
    tone: 'ink',
    blocks: [
      'This **isn’t a promise and it doesn’t happen to everyone**. Some people go back after two months, some get stuck on the first step for years and some see it go wrong for reasons beyond their control.',
      'What is true is that **the path exists and it’s marked out**. The people who follow it aren’t the smartest or the luckiest: they’re the ones who get through the first months, don’t blow what they earn and use their downtime to learn something. There’s no shortcut, and anyone selling you one is selling you something.'
    ]
  },
  mapa: {
    id: 'mapa',
    eyebrow: 'The map',
    title: [
      'How long each thing',
      'really takes.'
    ],
    deck: 'Timeframes for people who are serious and work full time. If you’re going at half speed, double them.',
    blocks: [
      {
        table: {
          caption: 'Typical path · approximate',
          head: [
            'When',
            'Where you are',
            'What you achieve'
          ],
          rows: [
            {
              cells: [
                'Weeks 1–4',
                'Phase A, agency housing',
                'BSN, health insurance, bank account, bike. You spend more than you earn.'
              ]
            },
            {
              cells: [
                'Months 2–6',
                'Phase A, settled into a rhythm',
                'First real savings. You recover the cushion you brought and start building up.'
              ]
            },
            {
              cells: [
                'Months 6–12',
                'End of phase A',
                'Certificates (forklift, VCA), basic Dutch, a car if you need one.'
              ]
            },
            {
              cells: [
                'Years 1–2',
                'Phase B or direct contract',
                'You move out of agency housing. Your own rental. A contract with the client company.'
              ]
            },
            {
              cells: [
                'Years 2–4',
                'Temporary contract with the company',
                'You move up. You chain contracts until the permanent one.'
              ],
              kind: 'sub'
            },
            {
              cells: [
                'Years 3–5',
                'Permanent contract',
                'Everything opens up: good rentals, credit, a mortgage. Real independence.'
              ],
              kind: 'total'
            }
          ]
        }
      },
      {
        small: 'The steps aren’t automatic or guaranteed. They depend on the company, the sector, the season and, above all, on you doing your part. But none of these steps is unusual: it’s the normal path of those who stay.'
      }
    ]
  },
  metas: {
    id: 'metas',
    eyebrow: 'One by one',
    title: [
      'The eight goals,',
      'with their price and timeframe.'
    ],
    deck: 'In order. Each one builds on the previous one: skipping steps is the fastest way to end up going back.',
    goals: [
      {
        when: 'Month 1 to month 6',
        title: 'Saving for real, not “whatever’s left”',
        blocks: [
          'This is the mother goal. If this one fails, none of the next seven happen. And most people who fail in the Netherlands don’t fail because of the work: they fail here.',
          'The method that works is boring: **on payday, you set money aside first and live on what’s left**. Not the other way round. Open a second account (at any Dutch bank it takes five minutes on your phone) and put the fixed amount there as soon as your pay comes in. What you don’t see, you don’t spend.',
          {
            stats: [
              { value: '€200–255', label: 'Saveable per week with the payslip from the guide’s example' },
              { value: '€600–800', label: 'Realistic monthly target without living badly' },
              { value: '€7,000–9,500', label: 'In twelve months, if you keep up the pace' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'The three holes people’s money disappears through, in order: **weekends** (one bad night is €80, four a month is a car a year), **uncontrolled money sent home** — send it, but set a fixed amount and stick to it — and **ready-made food**. Cooking together with your housemates is the biggest and easiest saving.',
          {
            note: {
              title: 'Rule of thumb',
              tone: 'stone',
              blocks: [
                'For the first six months, don’t buy anything you can’t carry on your bike. It sounds silly and it works: it forces you to tell what you need from what you fancy while you still have no margin.'
              ]
            }
          }
        ]
      },
      {
        when: 'First week',
        title: 'The bike',
        blocks: [
          'It’s the first purchase to make and the one that pays for itself best on the whole list. Between **€60 and €120 second-hand**, and from then on you no longer depend on the company van’s timetable for everything other than going to work.',
          'Buy it from a *fietsenwinkel* with a guarantee or on Marktplaats, the country’s second-hand marketplace. Two warnings: **don’t buy a bike on the street from someone offering it to you out of the blue** — they’re almost always stolen and buying them is a crime — and **spend €20 on a good lock**, because bike theft there is a national sport.',
          'With a bike everything changes: you shop at the cheap supermarket instead of the expensive one next door, you go to the town hall without asking for favours and you get out of the accommodation on Sundays without depending on anyone.'
        ]
      },
      {
        when: 'Month 6 to month 12',
        title: 'The papers that are worth money',
        blocks: [
          'Before spending on a car, spend on yourself. Dutch certificates are cheap, take days to get and **raise the price of your hour immediately**. It’s the investment with the best return on the whole list.',
          {
            ul: [
              '**Forklift (*heftruck*) and reach truck (*reachtruck*).** A one- or two-day course. Many agencies pay for it if you’ve been there a few months and ask. Ask.',
              '**VCA.** It’s the basic occupational safety certificate. It costs little, you pass it by studying a couple of evenings and in some sectors they simply won’t hire you without it.',
              '**Dutch.** This is the real lever. You don’t need to speak it well: just understanding instructions and being able to answer sets you apart from 90% of the foreigners on your shift, and you’re the first to be promoted. Start with a free app on your commutes and ask whether the company pays for lessons: many do.'
            ]
          },
          {
            note: {
              title: 'Why this comes before the car',
              tone: 'sand',
              blocks: [
                'A car costs you money every month. A certificate pays you back every month. With the same effort, the order matters.'
              ]
            }
          }
        ]
      },
      {
        when: 'Month 8 to month 18',
        title: 'The car',
        blocks: [
          'It isn’t essential, but it changes your life if work is far away, if you do night shifts or if you want to be able to change jobs without depending on the new company providing transport.',
          'A decent used car costs around **€2,000–4,000**. What matters isn’t that number, but what it costs just to keep it:',
          {
            stats: [
              { value: '€40–70/month', label: 'Compulsory insurance (*WA-verzekering*)' },
              { value: '€30–70/month', label: 'Road tax (*wegenbelasting*), depending on weight and province' },
              { value: '~€50/year', label: 'The *APK*, the local roadworthiness test' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Add petrol, which is expensive. Count on **€150–250 a month** in real cost before you even move it. If that eats your monthly savings, it isn’t time yet.',
          {
            note: {
              title: 'Two things people find out too late',
              tone: 'stone',
              blocks: [
                '**An EU driving licence is valid** in the Netherlands without any paperwork while it’s in date.',
                '**Bringing your car from home has a catch.** If you register as a resident there, there’s a deadline to register it in the Netherlands, and that means paying a registration tax (the *BPM*) that in many cases costs more than the car itself. Before driving over with your own plates, check with the [Belastingdienst](https://www.belastingdienst.nl). For almost everyone it works out cheaper to buy there.'
              ]
            }
          }
        ]
      },
      {
        when: 'Year 1 to year 2',
        title: 'Moving out of agency housing',
        blocks: [
          'This is the step you notice most. You stop sharing a room, your home stops depending on your contract and you start living like a person instead of like a posted worker.',
          'What landlords ask for, and why it’s hard at first:',
          {
            ul: [
              '**An employment contract**, the more stable the better. With phase A and the agency clause they’ll say no to you a lot.',
              '**Income of three to four times the rent.** It’s the standard filter and it’s the real reason they don’t take you, not your accent.',
              '**Registration** with the municipality and bank statements from recent months.',
              '**Deposit** (*borg*) of one or two months, sometimes plus letting agency fees.'
            ]
          },
          {
            stats: [
              { value: '€400–600/month', label: 'Room in a shared flat, outside the big cities' },
              { value: '€800–1,200/month', label: 'Studio or small flat in a medium-sized city' },
              { value: '€1,500+', label: 'The same in Amsterdam, Utrecht or The Hague' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Two things almost nobody takes advantage of: there is a **state rent allowance** (*huurtoeslag*) for low incomes when the rent doesn’t exceed a certain cap; you apply with DigiD at [toeslagen.nl](https://www.toeslagen.nl) and it isn’t automatic. And there is **social housing** (*sociale huurwoning*), much cheaper, with waiting lists of years: that’s why you should sign up in your first year even if you don’t need it yet. Time on the list is what counts.',
          { h4: 'Living in Germany and working in the Netherlands' },
          'Many people who work near the border end up renting in Germany, in North Rhine-Westphalia, because **for the same money you live quite a bit better**. It’s legal and it’s common. But find out first, because you become a cross-border worker (*grensarbeider*) and that changes two important things: **where you pay tax** and **how your health insurance works** (you’ll need the S1 form to see a doctor in Germany with Dutch insurance). It isn’t complicated, but it has to be done right from the start.'
        ]
      },
      {
        when: 'Year 1 to year 2',
        title: 'Being hired directly by the company',
        blocks: [
          'While you’re with the agency, the company where you work pays quite a bit more for you than you earn. The agency keeps the difference. When you move to a direct contract, **part of that difference goes into your pocket**, and you no longer have a middleman between you and your employer.',
          'How it happens in practice: you spend months at the same company, they get to know you, you deliver, and there comes a point where it’s better value for them to hire you than to keep paying the agency. That moment exists, and it only comes if you make it come.',
          'What really counts when they decide who to keep:',
          {
            ul: [
              '**Not missing shifts and being on time.** It sounds basic. It’s literally the first filter and it eliminates a lot of people.',
              '**Understanding and making yourself understood.** Even in broken English. The one who communicates is the one who can coordinate.',
              '**Learning more than one job.** Someone who can cover three positions isn’t easily replaced.',
              '**Saying so.** Talk to your direct supervisor and tell them clearly that you want to stay at the company. Many promotions and contracts never come because nobody knew you wanted them.'
            ]
          },
          {
            note: {
              title: 'A contractual detail worth knowing',
              tone: 'sand',
              blocks: [
                'Agencies usually have agreements with the client company about transfers: for a period, hiring you directly costs them a fee, and after that period it doesn’t. That’s why the answer is sometimes “not now, in a few months”. **Ask when**, and write the date down. No legal agency can stop you from accepting a direct job.'
              ]
            }
          }
        ]
      },
      {
        when: 'Year 2 to year 4',
        title: 'Moving up',
        blocks: [
          'In warehousing and production the ladder is quite clear and you climb faster than people think, because turnover is huge and those who stay stand out on their own.',
          {
            table: {
              caption: 'Typical ladder in logistics and production',
              head: [
                'Job',
                'What it takes'
              ],
              rows: [
                {
                  cells: [
                    'Operative / *orderpicker*',
                    'The entry point. Nothing more than turning up.'
                  ]
                },
                {
                  cells: [
                    'Forklift / *reachtruck* driver',
                    'Dutch certificate. An immediate pay rise.'
                  ]
                },
                {
                  cells: [
                    'Specialist or quality control',
                    'Experience in the process and working English.'
                  ]
                },
                {
                  cells: [
                    '*Voorman* / team leader',
                    'Basic Dutch is now a must. And that they trust you.'
                  ]
                },
                {
                  cells: [
                    '*Teamleider* / supervisor',
                    'Dutch, a direct contract and years inside.'
                  ],
                  kind: 'sub'
                }
              ]
            }
          },
          'And there’s a route almost no newcomer knows about: **work-based training** (*BBL*). You work four days and study one, while being paid, and you come out with an official Dutch vocational qualification. **The company usually pays for it.** It’s the quickest way to stop being interchangeable labour, so ask about it as soon as you have a direct contract.'
        ]
      },
      {
        when: 'Year 3 to year 5',
        title: 'The permanent contract',
        blocks: [
          'The *vast contract*. It’s the goal that crowns all the others, not because of the pay — which rises only a little — but **because of what it unlocks**.',
          'There are two ways to get there, explained in detail in [the contracts section of the guide](guia.html#contrato): chaining temporary contracts with the same company until by law the next one has to be permanent, or reaching the last phase within the agency.',
          'What changes on the day you sign it:',
          {
            ul: [
              '**Landlords pick up the phone.** You go from being automatically rejected to being a normal applicant.',
              '**You can apply for a mortgage.** In the Netherlands you can buy a home with a permanent contract, and in many cases the monthly payment is lower than what you were paying in rent. Talk to a mortgage adviser (*hypotheekadviseur*): the first consultation is usually free.',
              '**You stop living with your suitcase half packed.** This isn’t measured in euros and it’s what you notice most.'
            ]
          },
          'Almost everyone who gets this far has made a mistake on one of the earlier steps. This page is written so that it takes you less time.'
        ]
      }
    ]
  },
  final: {
    id: 'independencia',
    eyebrow: 'The end of the road',
    title: [
      'The goal isn’t money.',
      'It’s not having to think about it.'
    ],
    deck: 'Independence is being able to say no. To a shift, to a boss, to a bad flat, to going back too early.',
    blocks: [
      {
        lede: 'When people imagine success abroad, they imagine a number in their account. Over the years you realise it isn’t about that. It’s about reaching a point where **one bad week doesn’t throw your life off course**: your car breaks down and you fix it, something unexpected comes up at home and you cover it, and you don’t have to ask anyone for money or accept a shift you don’t want.'
      },
      'That’s what many people didn’t have back home, and not for lack of willingness to work. It’s the difference between always being a month away from a problem and not being so. It’s called peace of mind and it can’t be bought: it’s built over a few years, with lots of boring weeks in a row.',
      {
        pull: {
          text: 'There’s no trick. You get there by working, not blowing what you earn and keeping your mind on growing as a person and as a professional.',
          by: 'Iván · Rumbo Norte'
        }
      },
      { h3: 'The three things that separate those who make it from those who go back' },
      '**Getting through the first three months.** They’re by far the worst: the language, the cold, the shared room, the strange food and the feeling that you’ve made a mistake. Almost everyone who goes back does so in that stretch. Those who get past it stay.',
      '**Not spending what you earn.** Earning well and saving are two different things and they don’t come together. Two people can earn the same for three years and one ends up with their own home while the other is borrowing money in January.',
      '**Learning something every year.** A certificate, the language, a new job. Someone doing exactly the same work in year five as in year one earns almost the same as in year one, and is five years older on top of that.',
      {
        note: {
          title: 'And one last honest word',
          tone: 'ink',
          blocks: [
            'None of this is worth it for everyone. You’re far from your people, you miss birthdays and Christmases, and there are Sundays in November when the rain comes in sideways and you wonder what you’re doing there. That’s part of the deal too and nobody tells you.',
            'If what you want is quick money and then to go home, there are easier ways. This page is for people thinking about building something.'
          ]
        }
      }
    ]
  },
  cta: {
    eyebrow: 'Get started',
    title: [
      'The first step',
      'is starting off on the right foot.',
      'That’s where I come in.'
    ],
    text: [
      'The next seven depend on you. The first, arriving knowing what you’re getting into and at a legal agency, is exactly my job.',
      'Tell me about your situation and I’ll tell you which profiles you fit, what the numbers would look like for you, what cushion you need and what to look at before signing anything.'
    ],
    actions: [
      { label: 'Message on WhatsApp', href: 'wa:' },
      { label: 'Send my application', href: './#candidatura' }
    ],
    foot: 'Before that, read [the guide](guia.html). It’s what saves you from the expensive mistakes.'
  },
  legalNote: 'The figures and timeframes on this page are approximate and do not constitute a promise of results.'
};
