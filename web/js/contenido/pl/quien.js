/* O mnie (polski). Ta sama struktura co contenido/quien.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.quien = {
  hero: {
    eyebrow: 'O mnie',
    title: [
      'Jestem rekruterem.',
      'Kiedyś byłem',
      'kandydatem.'
    ],
    text: [
      'Nazywam się **Iván Guerra**. Jestem Hiszpanem, mieszkam w Kleve, tuż przy granicy z Holandią, i zajmuję się wybieraniem kandydatów w Hiszpanii dla certyfikowanych holenderskich agencji pracy tymczasowej.',
      'Znam ten proces z obu stron: od strony kogoś, kto przyjeżdża z walizką i ofertą, która dobrze brzmi, i od strony kogoś, kto szuka ludzi na stanowiska. Ta strona to rozmowa, którą odbywam z każdym kandydatem, zanim przedstawię go komukolwiek.'
    ],
    accent: 2
  },
  historia: {
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    tag: 'Rumbo Norte / Niezależna rekrutacja',
    name: 'Iván Guerra Arroyo',
    tagline: 'Kiedyś byłem kandydatem.\nDziś pomagam ci zrozumieć tę drogę.',
    title: 'Skąd to wszystko się wzięło',
    blocks: [
      'Ja też zacząłem pracować przez holenderską agencję. Jak prawie wszyscy, z niewielką wiedzą i przekonaniem, że wszystkiego dowiem się po drodze. Dowiedziałem się, ale niektórych rzeczy za późno.',
      'Kiedy tam byłem, agencja uruchomiła program poleceń i zacząłem ściągać ludzi z Hiszpanii: przyjaciół, znajomych, znajomych znajomych. Było to dwanaście osób, dopóki program się nie skończył. Zobaczyłem wtedy dwie rzeczy. Że w Hiszpanii jest wielu ludzi, którzy chcą pracować, ale nie wiedzą, od czego zacząć. I że różnica między tymi, którzy zostają, a tymi, którzy wracają, prawie zawsze tkwi w informacjach, z jakimi przyjeżdżają.',
      'Dziś zajmuję się tym jako niezależny rekruter: wybieram kandydatów dla certyfikowanych agencji i z góry mówię im o dobrych i złych stronach. Nie cała branża to oszustwo, wręcz przeciwnie. Są agencje, które działają dobrze, i ludzie, którzy zarabiają pieniądze, jakich w Hiszpanii by nie zarobili. Ale są też pośrednicy, którzy żyją z tego, że nie wiesz wystarczająco dużo, a ja wolę, żebyś wiedział.',
      {
        pull: {
          text: 'Wolę, żeby pięć osób dobrze to przemyślało, niż żeby dwadzieścia wsiadło do samolotu, nie wiedząc, co je czeka.',
          by: 'Iván'
        }
      },
      {
        note: {
          title: 'Kim nie jestem',
          tone: 'ink',
          blocks: [
            'Nie jestem agencją ani twoim pracodawcą. Nie jestem też prawnikiem, księgowym ani doradcą podatkowym. To, co tu znajdziesz, to doświadczenie z pierwszej ręki i podlinkowane oficjalne dokumenty, żebyś mógł je sam sprawdzić. Przy poważnej decyzji prawnej lub podatkowej porozmawiaj z wykwalifikowanym specjalistą.'
          ]
        }
      }
    ]
  },
  limites: {
    id: 'no-hago',
    eyebrow: 'Granice',
    title: [
      'Czego nie robię',
      'i dlaczego.'
    ],
    text: 'Niektórych z tych rzeczy nie robię z własnego wyboru. Innych po prostu nie da się zrobić.',
    items: [
      {
        eyebrow: 'Zakazane przez prawo',
        title: 'Pobieranie od ciebie opłat',
        blocks: [
          'Nic nie płacisz. Ani składki, ani prowizji, ani potrącenia z wypłaty. Ani przed, ani w trakcie, ani po.',
          'Holenderskie przepisy zakazują agencjom pracy tymczasowej pobierania od pracownika opłat za znalezienie mu pracy. To nie jest moja obietnica handlowa: to prawo. Jeśli ktoś żąda od ciebie pieniędzy, nie jest legalną agencją.'
        ]
      },
      {
        eyebrow: 'To nie moja rola',
        title: 'Bycie twoim pracodawcą',
        blocks: [
          'Ja wybieram i przedstawiam. Zatrudnia cię, wypłaca pensję i odpowiada za umowę agencja. Dzięki temu zawsze wiesz, do kogo zwrócić się w danej sprawie.'
        ]
      },
      {
        eyebrow: 'Niemożliwe do dotrzymania',
        title: 'Gwarantowanie ci pracy',
        blocks: [
          'To zależy od sezonu, branży, twojego profilu i decyzji firm, na które nie mam wpływu. Każdy, kto gwarantuje ci stanowisko, okłamuje cię albo nie wie, jak to działa.'
        ]
      },
      {
        eyebrow: 'Moja decyzja',
        title: 'Przedstawianie cię w ciemno',
        blocks: [
          'Kiedy przydzielę ci ofertę, będziesz wiedzieć, która to agencja: wyszukaj jej oficjalną nazwę w rejestrze i sprawdź ją sam, nie tylko ja.'
        ]
      },
      {
        eyebrow: 'Moja decyzja',
        title: 'Nękanie cię',
        blocks: [
          'Bez telefonów sprzedażowych, bez automatycznego newslettera, bez „piszę jeszcze raz na wszelki wypadek”. Pytasz, o co potrzebujesz, a jeśli zdecydujesz, że nie, na tym się kończy.'
        ]
      },
      {
        eyebrow: 'Moja decyzja',
        title: 'Sprzedawanie twoich danych',
        blocks: [
          'Twoje dane trafiają tylko do certyfikowanych agencji pracy tymczasowej, za zgodą, której udzielasz, zaznaczając pole w formularzu, i do niczego więcej. Żadnych list, żadnych osób trzecich, żadnej reklamy. Szczegóły znajdziesz w [polityce prywatności](privacidad.html).'
        ]
      }
    ],
    note: {
      title: 'Jeśli wydaje ci się, że jak na rekrutera to mało nachalne, masz rację',
      tone: 'sand',
      blocks: [
        'Zwykła strona rekrutacyjna pokazałaby ci już cztery oferty z wielką kwotą brutto, zdjęcie uśmiechniętych ludzi w magazynie i licznik wolnych miejsc. Tutaj nie znajdziesz niczego takiego.'
      ]
    }
  },
  cta: {
    eyebrow: 'Porozmawiajmy',
    title: [
      'Zapytaj mnie',
      'o cokolwiek.'
    ],
    text: [
      'Odpowiadam osobiście. Możesz zapytać na WhatsAppie bez podawania żadnych danych osobowych i bez żadnych zobowiązań.',
      'Jeśli wolisz, żebym ocenił twój profil i napisał do ciebie z liczbami dla twojej sytuacji, zostaw zgłoszenie w formularzu na stronie głównej.'
    ],
    actions: [
      { label: 'Napisz na WhatsAppie', href: 'wa:' },
      { label: 'Wyślij zgłoszenie', href: './#candidatura' }
    ],
    foot: 'Zanim napiszesz, może warto przeczytać [poradnik](guia.html).'
  }
};
