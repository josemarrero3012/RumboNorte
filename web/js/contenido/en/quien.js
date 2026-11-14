/* About me (English). Same structure as contenido/quien.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.quien = {
  hero: {
    eyebrow: 'About me',
    title: [
      'I’m a recruiter.',
      'I used to be',
      'a candidate.'
    ],
    text: [
      'My name is **Iván Guerra**. I’m Spanish, I live in Kleve, a stone’s throw from the Dutch border, and I select candidates in Spain for certified Dutch temporary work agencies.',
      'I know the process from both sides: that of someone who arrives with a suitcase and an offer that sounds good, and that of someone looking for people to fill jobs. This website is the conversation I have with every candidate before I put them forward to anyone.'
    ],
    accent: 2
  },
  historia: {
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    tag: 'Rumbo Norte / Independent recruitment',
    name: 'Iván Guerra Arroyo',
    tagline: 'I used to be a candidate.\nToday I help you understand the path.',
    title: 'Where all this comes from',
    blocks: [
      'I also started working through a Dutch agency. Like almost everyone, with little information and the idea that I’d figure it out as I went along. I did, but I learned some things too late.',
      'While I was there, the agency launched a referral programme and I started bringing people from Spain: friends, acquaintances, friends of friends. Twelve people in all, until the programme ended. That showed me two things. That in Spain there are lots of people keen to work who don’t know where to start. And that the difference between those who stay and those who go back almost always comes down to the information they arrive with.',
      'Today I do this as an independent recruiter: I select candidates for certified agencies and tell them the good and the bad beforehand. Not the whole sector is a scam, far from it. There are agencies that work well and people who earn money they wouldn’t earn in Spain. But there are also middlemen who make a living from you not knowing enough, and I’d rather you knew.',
      {
        pull: {
          text: 'I’d rather five people think it through properly than twenty get on a plane without knowing what’s waiting for them.',
          by: 'Iván'
        }
      },
      {
        note: {
          title: 'What I’m not',
          tone: 'ink',
          blocks: [
            'I’m not the agency or your employer. Nor am I a lawyer, an accountant or a tax adviser. What you’ll find here is field experience and linked official documentation so you can check it yourself. For a serious legal or tax decision, talk to a qualified professional.'
          ]
        }
      }
    ]
  },
  limites: {
    id: 'no-hago',
    eyebrow: 'The limits',
    title: [
      'What I don’t do,',
      'and why not.'
    ],
    text: 'Some of these things I don’t do by choice. Others simply can’t be done.',
    items: [
      {
        eyebrow: 'Prohibited by law',
        title: 'Charging you',
        blocks: [
          'You pay nothing. No fee, no commission, no deduction from your pay. Not before, not during, not after.',
          'Dutch law prohibits a temporary work agency from charging workers for finding them a job. It isn’t a sales promise of mine: it’s the law. If someone asks you for money, it isn’t a legal agency.'
        ]
      },
      {
        eyebrow: 'Not my role',
        title: 'Being your employer',
        blocks: [
          'I select and introduce. The agency is who hires you, pays your wages and is responsible for the contract. That way you always know who to turn to for each thing.'
        ]
      },
      {
        eyebrow: 'Impossible to keep',
        title: 'Guaranteeing you a job',
        blocks: [
          'It depends on the season, the sector, your profile and decisions by companies that I don’t control. Anyone who guarantees you a job is lying to you or doesn’t know how this works.'
        ]
      },
      {
        eyebrow: 'My own decision',
        title: 'Putting you forward blindly',
        blocks: [
          'When I assign you a vacancy you’ll know which agency it is: look up its legal name in the register and check it yourself, not just me.'
        ]
      },
      {
        eyebrow: 'My own decision',
        title: 'Chasing you',
        blocks: [
          'No sales calls, no automatic newsletter, no “just writing again in case”. You ask whatever you need and, if you decide not to go ahead, that’s the end of it.'
        ]
      },
      {
        eyebrow: 'My own decision',
        title: 'Selling your data',
        blocks: [
          'Your data only goes to certified temporary work agencies, with the consent you give by ticking the box on the form, and for nothing else. No lists, no third parties, no advertising. It’s set out in the [privacy policy](privacidad.html).'
        ]
      }
    ],
    note: {
      title: 'If this seems not very pushy for a recruiter, you’re right',
      tone: 'sand',
      blocks: [
        'A typical recruitment website would already have shown you four offers with the gross salary in big numbers, a photo of people smiling in a warehouse and a counter of places left. You won’t find any of that here.'
      ]
    }
  },
  cta: {
    eyebrow: 'Let’s talk',
    title: [
      'Ask me',
      'anything.'
    ],
    text: [
      'I answer myself. You can ask on WhatsApp without giving any personal details and with no commitment at all.',
      'If you’d like me to assess your profile and write to you with the numbers for your case, leave your application in the form on the home page.'
    ],
    actions: [
      { label: 'Message on WhatsApp', href: 'wa:' },
      { label: 'Send my application', href: './#candidatura' }
    ],
    foot: 'Before you write, it might be worth reading [the guide](guia.html).'
  }
};
