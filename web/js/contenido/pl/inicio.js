/* Strona główna (polski). Ta sama struktura co contenido/inicio.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.inicio = {
  hero: {
    countries: ['Holandii'],
    also: 'Oferty także w Belgii i Niemczech.',
    subtitle: 'Zanim się spakujesz, wyjaśniam ci na orientacyjnych liczbach, ile zwykle się zarabia, ile kosztuje pokój i ile może ci zostać na czysto. Jeśli przejdziesz rozmowę, przydzielam ci oferty od certyfikowanych agencji.',
    note: 'Prosto, jak człowiek z człowiekiem, i bez kosztów dla ciebie.',
    primaryCta: { label: 'Wyślij zgłoszenie', href: '#candidatura' },
    secondaryCta: { label: 'Jak to działa', href: '#proceso' },
    ring: 'Z Hiszpanii na północ Europy',
    promises: [
      'Zawsze bezpłatnie dla kandydata',
      'Certyfikowane agencje pracy tymczasowej',
      'Informacje z oficjalnych źródeł',
      'Wymagania: 21+ · paszport UE · angielski B1'
    ],
    person: { name: 'Jestem Iván', role: 'Twój rekruter w Rumbo Norte' },
    photoSrc: 'assets/fotos/ivan-retrato.webp',
    map: {
      src: 'assets/mapa/europa.svg',
      width: 1000,
      height: 1073,
      origin: [177, 843],
      places: [
        { name: 'Holandii', id: 'nl', pin: [458, 443] },
        { name: 'Niemczech', id: 'de', pin: [561, 490] },
        { name: 'Belgii', id: 'be', pin: [432, 502] }
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
    eyebrow: 'Jedna osoba, jasne zasady',
    arrowSrc: 'assets/logos/rumbo-norte-arrow.webp',
    title: [
      'Zanim',
      'się spakujesz,',
      'porozmawiajmy',
      'o tym, co ważne.'
    ],
    cta: { label: 'Poznaj Ivána', href: 'quienes-somos.html' },
    intro: 'Nazywam się Iván i jestem rekruterem.',
    paragraphs: [
      'W Hiszpanii szukam ludzi, którzy chcą pracować w Holandii, gdzie jest zdecydowana większość moich ofert, a także w Belgii i Niemczech. Przedstawiam ich certyfikowanym agencjom pracy tymczasowej z tych krajów, bo to one zatrudniają.',
      'Zanim przedstawię cię komukolwiek, mówię ci to, czego prawie żadne ogłoszenie nie mówi: ile zostaje ci na czysto po potrąceniach, ile biorą za pokój i jak sprawdzić, czy agencja działa legalnie. Jeśli z tą wiedzą nadal jesteś zainteresowany, idziemy dalej.'
    ],
    note: {
      title: 'Dla ciebie jest to bezpłatne, teraz i później.',
      text: 'Wybieram i przedstawiam kandydatów, ale nie zatrudniam: ostatnie słowo należy do agencji i nie obiecam ci stanowiska. Każda informacja ma swoje oficjalne źródło, żebyś mógł ją sam sprawdzić.'
    }
  },
  topics: {
    id: 'como-funciona',
    items: [
      {
        eyebrow: 'Wypłata',
        title: 'Ile naprawdę trafia na twoje konto.',
        src: 'assets/ilustraciones/ilustracion-nomina.webp',
        width: 840,
        height: 456,
        figure: '1250–2200 €',
        unit: 'miesięcznie na twoje konto',
        figureNote: 'Kwota orientacyjna: zależy od agencji, miasta i zakwaterowania.',
        text: 'Przy 40 godzinach tygodniowo i po odliczeniu zakwaterowania. Pasek wypłaty, linijka po linijce, w poradniku.',
        href: 'guia.html#nomina',
        linkHint: 'Zrozum pasek wypłaty'
      },
      {
        eyebrow: 'Zakwaterowanie',
        title: 'Gdzie mieszkasz i za ile.',
        src: 'assets/ilustraciones/ilustracion-alojamiento.webp',
        width: 840,
        height: 450,
        figure: '80–150 €',
        unit: 'tygodniowo za pokój',
        figureNote: 'Kwota orientacyjna: zależy od agencji, miasta i zakwaterowania.',
        text: 'Prawie zawsze wspólne i powiązane z umową. O co zapytać przed podpisaniem.',
        href: 'guia.html#alojamiento',
        linkHint: 'Poznaj warunki'
      },
      {
        eyebrow: 'Rejestry',
        title: 'Wiedz, z kim podpisujesz umowę.',
        src: 'assets/ilustraciones/ilustracion-registros.webp',
        width: 840,
        height: 453,
        figure: '2 rejestry',
        unit: 'publiczne i bezpłatne',
        text: 'SNA i SNF w Holandii: dwie minuty na telefonie, żeby sprawdzić agencję.',
        href: 'guia.html#verificar',
        linkHint: 'Sprawdź agencję'
      }
    ]
  },
  destinos: {
    eyebrow: 'Kierunki',
    title: [
      'Najpierw Holandia.',
      'Belgia i Niemcy też.'
    ],
    text: 'Prawie wszystkie moje oferty są w Holandii. W Belgii i Niemczech też się zdarzają, ale rzadziej i doraźnie. Po przekroczeniu granicy zmieniają się zasady: kto certyfikuje agencję, jaki numer jest potrzebny po przyjeździe i jaki język się liczy. Oto podstawy dla każdego kraju; twoją sytuację omówimy osobno.',
    id: 'destinos',
    hint: 'Jeden kurs, trzy kierunki. Wybierz kraj na makiecie.',
    placeLabel: 'Zobacz opis',
    sceneUrl: 'js/paises-3d.js',
    defaultId: 'paises-bajos',
    posterSrc: 'assets/3d/paises-poster.webp',
    posterTallSrc: 'assets/3d/paises-poster-movil.webp',
    items: [
      {
        id: 'paises-bajos',
        name: 'Holandia',
        main: true,
        tag: 'Główny kierunek · najwięcej ofert',
        spot: [50, 69.8],
        spotTall: [44.9, 29.5],
        intro: 'Najbardziej sprawdzony kierunek: dużo logistyki, szklarni i produkcji, a zakwaterowanie prawie zawsze organizuje agencja.',
        facts: [
          { label: 'Najczęściej poszukiwani', value: 'Magazyn, wózek widłowy, branża spożywcza, szklarnie' },
          { label: 'Jak sprawdzić agencję', value: 'Rejestr SNA, a dla zakwaterowania SNF' },
          { label: 'Twój numer po przyjeździe', value: 'BSN, w urzędzie gminy (*gemeente*)' },
          { label: 'Język', value: 'Angielski B1 komunikatywny, obowiązkowo. Niderlandzkiego na początku się nie wymaga.' }
        ],
        action: { label: 'Pełny poradnik o Holandii', href: 'guia.html' }
      },
      {
        id: 'belgica',
        name: 'Belgia',
        tag: 'Pojedyncze oferty',
        spot: [17.5, 80.6],
        spotTall: [47, 92.4],
        intro: 'Blisko, z pensjami waloryzowanymi o inflację i krajem podzielonym na dwa języki. To, gdzie trafisz, bardzo zmienia codzienność.',
        facts: [
          { label: 'Najczęściej poszukiwani', value: 'Logistyka, branża spożywcza, produkcja' },
          { label: 'Jak sprawdzić agencję', value: 'Akredytacja jej regionu: Flandrii, Walonii lub Brukseli' },
          { label: 'Twój numer po przyjeździe', value: 'Belgijski numer ubezpieczenia społecznego (INSZ / NISS)' },
          { label: 'Język', value: 'Angielski B1 komunikatywny, obowiązkowo. We Flandrii pomaga niderlandzki, a w Walonii francuski.' }
        ],
        action: {
          label: 'Zapytaj mnie o Belgię',
          href: 'wa:Cześć Iván. Interesuje mnie praca w Belgii, możesz mi powiedzieć, jak to działa?'
        }
      },
      {
        id: 'alemania',
        name: 'Niemcy',
        tag: 'Pojedyncze oferty',
        spot: [82.9, 82.4],
        spotTall: [52.8, 60.8],
        intro: 'Największy rynek: przemysł, motoryzacja i ogromne centra logistyczne. Więcej formalności i lepiej mają ci, którzy radzą sobie po niemiecku.',
        facts: [
          { label: 'Najczęściej poszukiwani', value: 'Logistyka, produkcja, metal i motoryzacja' },
          {
            label: 'Jak sprawdzić agencję',
            value: 'Zezwolenie na pracę tymczasową wydane przez Bundesagentur für Arbeit'
          },
          { label: 'Twój numer po przyjeździe', value: 'Zameldowanie (*Anmeldung*), numer podatkowy i numer ubezpieczenia społecznego' },
          { label: 'Język', value: 'Angielski B1 komunikatywny, obowiązkowo. Niemiecki liczy się dużo bardziej niż w pozostałych dwóch krajach.' }
        ],
        action: {
          label: 'Zapytaj mnie o Niemcy',
          href: 'wa:Cześć Iván. Interesuje mnie praca w Niemczech, możesz mi powiedzieć, jak to działa?'
        }
      }
    ]
  },
  servicios: {
    eyebrow: 'Na początek',
    title: [
      'Co dokładnie robię,',
      'a czego nie.'
    ],
    text: 'W tej branży jest wielu pośredników, którzy nie mówią, kim są. Ja jestem rekruterem, piszę to od razu na pierwszym ekranie, a tutaj masz, co to dla ciebie oznacza.',
    id: 'que-hago',
    columns: [
      {
        title: 'Co robię',
        items: [
          {
            title: 'Rozmawiam z tobą i oceniam twój profil',
            blocks: [
              'Krótka rozmowa na WhatsAppie lub przez telefon: doświadczenie, języki, prawo jazdy i kiedy możesz wyjechać. To wystarczy, żebym wiedział, do jakich stanowisk pasujesz.'
            ]
          },
          {
            title: 'Wyjaśniam liczby w twojej sytuacji',
            blocks: [
              'Wypłata, potrącenia, zakwaterowanie, umowa w fazie A, ubezpieczenie zdrowotne, BSN. Jasno i na orientacyjnych liczbach.'
            ]
          },
          {
            title: 'Przydzielam ci oferty certyfikowanych agencji',
            blocks: [
              'Jeśli spełniasz wymagania i przejdziesz rozmowę, daję ci dostęp do platformy dla kandydatów i przydzielam oferty od certyfikowanych agencji pracy tymczasowej, głównie z Holandii.'
            ]
          },
          {
            title: 'Przygotowuję cię do rozmowy i do umowy',
            blocks: [
              'O co cię zapytają, o co ty musisz zapytać i na co zwrócić uwagę w umowie przed jej podpisaniem.'
            ]
          }
        ]
      },
      {
        title: 'Czego nie robię',
        items: [
          {
            title: 'Nie jestem twoim pracodawcą',
            blocks: [
              'Zatrudnia cię, płaci ci i podpisuje z tobą umowę agencja. Moja praca to selekcja i przedstawienie kandydata.'
            ]
          },
          {
            title: 'Nie biorę od ciebie pieniędzy',
            blocks: [
              'Ani za zapisy, ani za obsługę, ani za „rezerwację miejsca”, ani za tłumaczenie dokumentów. Nic. Jeśli ktoś prosi cię o pieniądze w moim imieniu, to nie ja.'
            ]
          },
          {
            title: 'Nie gwarantuję pracy',
            blocks: [
              'Mogę ci powiedzieć, czy twój profil pasuje, i przedstawić cię. O zatrudnieniu decyduje agencja, a to zależy od sezonu i stanowiska.'
            ]
          }
        ]
      }
    ],
    note: {
      title: 'Ważna informacja',
      tone: 'sand',
      blocks: [
        'Legalna agencja pracy tymczasowej nie może pobierać od ciebie opłat za znalezienie pracy. W Holandii zakazuje tego ustawa *Waadi* (art. 9), a w Belgii i Niemczech agencje też nie mogą pobierać opłat od pracownika za skierowanie do pracy. Jeśli żądają pieniędzy z góry za „rezerwację miejsca”, „załatwienie BSN” albo „wpisanie na listę”, to oszustwo. Dotyczy to mnie i każdego innego.'
      ]
    }
  },
  perfiles: {
    eyebrow: 'Kogo się szuka',
    title: [
      'Profile, o które',
      'proszą mnie najczęściej.'
    ],
    text: 'To nie są konkretne oferty. To jest to, czego agencje, dla których prowadzę rekrutację, głównie w Holandii, szukają prawie zawsze. Co jest otwarte w danym momencie, powiem ci, kiedy porozmawiamy, bo zmienia się co tydzień.',
    id: 'perfiles',
    items: [
      {
        eyebrow: 'Logistyka',
        id: 'almacen',
        photo: 'assets/perfiles/almacen',
        focus: [41, 45],
        short: 'Magazyn',
        title: 'Magazyn i kompletacja zamówień',
        text: 'Kompletacja zamówień (*orderpicking*), załadunek i rozładunek, skanowanie towaru. To najczęstszy start. Doświadczenie nie jest potrzebne; trzeba za to wytrzymać zmiany i wiele godzin na nogach.'
      },
      {
        eyebrow: 'Logistyka',
        id: 'carretilla',
        photo: 'assets/perfiles/carretilla',
        focus: [34, 40],
        short: 'Wózek widłowy',
        title: 'Operatorzy wózków widłowych i reachtrucków',
        text: 'Najbardziej poszukiwany profil w magazynie i jeden z najlepiej płatnych. Jeśli jeździłeś wózkiem widłowym albo *reachtruckiem*, powiedz mi o tym od razu. Na miejscu zwykle wymagają holenderskiego certyfikatu, a wiele agencji za niego płaci.'
      },
      {
        eyebrow: 'Transport',
        id: 'camion',
        photo: 'assets/perfiles/camion',
        focus: [60, 35],
        short: 'Ciężarówka',
        title: 'Kierowcy ciężarówek',
        text: 'Trasy krajowe i międzynarodowe, dystrybucja i rozwożenie. To jeden z profili z największą liczbą ofert. Wymagane jest ważne prawo jazdy kat. C lub C+E, kwalifikacja zawodowa (kod 95) i karta kierowcy do tachografu. Ile doświadczenia wymagają, zależy od agencji i stanowiska.'
      },
      {
        eyebrow: 'Transport',
        id: 'autobus',
        photo: 'assets/perfiles/autobus',
        focus: [32, 32],
        short: 'Autobus',
        title: 'Kierowcy autobusów',
        text: 'Transport miejski, międzymiastowy i pracowniczy. To jeden z profili z największą liczbą ofert. Wymagane jest ważne prawo jazdy kat. D i kwalifikacja zawodowa (kod 95). Dokładne wymagania zależą od agencji i stanowiska.'
      },
      {
        eyebrow: 'Przemysł',
        id: 'alimentacion',
        photo: 'assets/perfiles/alimentacion',
        focus: [31, 45],
        short: 'Spożywka',
        title: 'Produkcja spożywcza',
        text: 'Linie pakujące, kontrola produktu i mycie linii. Praca zmianowa, często w chłodzie, a ruch jest przez cały rok.'
      },
      {
        eyebrow: 'Rolnictwo',
        id: 'invernaderos',
        photo: 'assets/perfiles/invernaderos',
        focus: [45, 45],
        short: 'Szklarnie',
        title: 'Rolnictwo i szklarnie',
        text: 'Zbiory, sadzenie i sortowanie. Bardzo sezonowo, z wyraźnymi szczytami i słabszymi miesiącami, więc warto znać terminy, zanim kupisz bilet.'
      },
      {
        eyebrow: 'Usługi',
        id: 'limpieza',
        photo: 'assets/perfiles/limpieza',
        focus: [38, 45],
        short: 'Sprzątanie',
        title: 'Sprzątanie przemysłowe',
        text: 'Sprzątanie fabryk, hal i zakładów produkcyjnych. Dużo zmian nocnych i weekendowych.'
      },
      {
        eyebrow: 'Fach',
        id: 'construccion',
        photo: 'assets/perfiles/construccion',
        focus: [68, 40],
        short: 'Budowa',
        title: 'Budownictwo i metal',
        text: 'Spawacze, monterzy, elektrycy. Tutaj wymagają doświadczenia, które da się udokumentować, a czasem certyfikatów, takich jak VCA z zakresu BHP.'
      }
    ],
    requisitos: {
      title: 'Wymagania obowiązkowe przy każdej ofercie',
      items: [
        'Ukończone 21 lat.',
        'Obywatelstwo lub paszport Unii Europejskiej.',
        'Angielski co najmniej na poziomie B1 komunikatywnym.'
      ],
      text: 'Są niezbędne i nie ma od nich wyjątków. Jeśli nie spełniasz któregoś z trzech, nie mogę przedstawić cię do żadnej z moich ofert.'
    },
    note: {
      title: 'Co pomaga w każdym profilu',
      tone: 'sand',
      blocks: [
        'Prawo jazdy kat. B, a jeszcze lepiej własny samochód. Możliwość szybkiego wyjazdu. I zamiar zostania na prawdziwy sezon, a nie na trzy tygodnie.',
        'Jeśli spełniasz trzy wymagania, napisz do mnie i zobaczymy, które oferty pasują do twojego profilu.'
      ]
    }
  },
  proceso: {
    eyebrow: 'Proces',
    title: [
      'Jak wygląda rekrutacja,',
      'krok po kroku.'
    ],
    text: 'Sześć kroków. Kroki od 2 do 4 to rozmowa ze mną.',
    id: 'proceso',
    steps: [
      {
        when: 'Dzień 1',
        title: 'Piszesz do mnie albo wysyłasz zgłoszenie',
        text: 'Na WhatsAppie albo przez formularz. Opowiedz mi o swojej sytuacji: języki, czy masz prawo jazdy, kiedy możesz wyjechać i co cię martwi. Nie musisz mieć wszystkiego postanowionego.'
      },
      {
        when: 'Rozmowa',
        title: 'Sprawdzam, czy spełniasz wymagania',
        text: 'Najpierw sprawdzam trzy wymagania obowiązkowe przy każdej ofercie: ukończone 21 lat, obywatelstwo lub paszport Unii Europejskiej i angielski co najmniej na poziomie B1 komunikatywnym. Jeśli czegoś brakuje, mówię ci to od razu i nie idziemy dalej.'
      },
      {
        when: 'Rozmowa',
        title: 'Rozmawiamy o twoim doświadczeniu',
        text: 'Omawiamy, gdzie pracowałeś, na jakich stanowiskach i jak długo, czy masz prawo jazdy albo jakiś certyfikat (wózek widłowy, kod 95…) i od kiedy możesz wyjechać. Na tej podstawie widzę, które oferty do ciebie pasują.'
      },
      {
        when: 'Rozmowa po angielsku',
        title: 'Kilka pytań po angielsku',
        text: 'Zadaję ci kilka pytań po angielsku, żeby sprawdzić twój poziom. To nie jest egzamin z gramatyki: chodzi o to, czy potrafisz prowadzić rozmowę, bo tego będą od ciebie wymagać w pracy.'
      },
      {
        when: 'Jeśli przejdziesz rozmowę',
        title: 'Rejestrujesz się na platformie dla kandydatów',
        blocks: [
          'Żeby uzyskać dostęp do naszych ofert, wysyłam ci link dostępu dla kandydatów. Tam się rejestrujesz i wgrywasz wszystkie potrzebne dokumenty.',
          {
            ul: [
              'Najważniejsze jest **CV**. Musi być aktualne, z datami każdej pracy (miesiąc i rok), aktualnymi danymi i w całości po angielsku.',
              'Pamiętaj też, że niektóre z naszych agencji wymagają **zaświadczenia o niekaralności**, nie starszego niż 6 miesięcy.'
            ]
          },
          'Kiedy będziesz zarejestrowany, przydzielam ci **trzy oferty** dopasowane do twojego profilu.'
        ]
      },
      {
        when: 'Przed wyjazdem',
        title: 'Warunki pracy',
        blocks: [
          {
            ul: [
              '**Pensja:** na stanowiskach bez kwalifikacji płaci się płacę minimalną. W Holandii dla osób od 21. roku życia wynosi ona 15,29 € brutto za godzinę od 1 stycznia 2027 r. (do 31 grudnia 2026 r. 14,99 €).',
              '**Zakwaterowanie i transport:** organizuje je agencja, która zatrudnia cię jako pracownika, i oba są potrącane z pensji. Zwykle dom i pokój są wspólne, choć zależy to od agencji i zakwaterowania.',
              '**Zmiany:** mogą być poranne, popołudniowe lub nocne.',
              '**Podróż:** lot i dojazd do biura agencji lub do zakwaterowania opłacasz sam. Niektóre agencje odbierają z lotniska, ale nie wszystkie.',
              '**Pieniądze na start:** radzę mieć zapas na jedzenie i dojazdy do pierwszej wypłaty, która zwykle przychodzi po dwóch tygodniach.'
            ]
          },
          { small: 'Wszystkie kwoty na tej stronie są orientacyjne i nie są obietnicą. To, ile zarobisz i ile ci potrącą, ustala agencja, która zatrudni cię jako pracownika, i zależy to od miasta, stanowiska, godzin, zmian oraz zakwaterowania i jego rodzaju. Prawdziwe warunki poznasz dopiero wtedy, gdy agencja przekaże ci je na piśmie.' },
          'Zanim podpiszesz, przejrzyj [listę pytań z poradnika](guia.html#preguntas-firmar).'
        ]
      }
    ],
    actions: [
      { label: 'Zacznij od kroku 1', href: '#candidatura' },
      { label: 'Najpierw przeczytaj cały poradnik', href: 'guia.html' }
    ]
  },
  preguntas: {
    eyebrow: 'Bez owijania w bawełnę',
    title: [
      'Pytania, które',
      'zadaje mi każdy.'
    ],
    text: 'Najczęstsze pytania, pogrupowane tematycznie. Znajdziesz tu to, co musisz wiedzieć o warunkach, podróży i rekrutacji.',
    id: 'preguntas',
    groups: [
      {
        title: 'Pensja i zakwaterowanie',
        items: [
          {
            q: 'Ile naprawdę się zarabia po wszystkich potrąceniach?',
            blocks: [
              'Przy 40 godzinach tygodniowo i po odliczeniu zakwaterowania na konto może wpływać kwota z szerokiego przedziału, **od 1250 do 2200 € miesięcznie**. To nie jest stała ani gwarantowana kwota: zależy od agencji, która cię zatrudni, stanowiska, miasta, nadgodzin i zmian oraz od zakwaterowania i jego rodzaju. Kwota brutto jest sporo wyższa: różnicę pochłaniają zaliczka na podatek, zakwaterowanie, ubezpieczenie zdrowotne i transport.',
              'Jest też część, której nie widzisz co tydzień, ale która jest twoja: *rezerwy* urlopowe i dodatek urlopowy (*vakantiegeld*, 8,33% kwoty brutto). Odkładają się osobno i dostajesz je, kiedy o nie poprosisz, albo w maju.',
              'Rozbicie paska wypłaty linijka po linijce znajdziesz w [poradniku](guia.html#nomina).',
              { small: window.RumboNorteCifras.aviso }
            ]
          },
          {
            q: 'Ile potrącają za zakwaterowanie?',
            blocks: [
              'Orientacyjnie **od 80 do 150 € tygodniowo za osobę**, w zależności od agencji, miasta i rodzaju zakwaterowania. Prawie zawsze w pokoju dzielonym z drugą osobą, w domku letniskowym, dawnym hotelu albo przebudowanym budynku.',
              'Jest limit prawny: potrącenie za zakwaterowanie **nie może przekroczyć 25% płacy minimalnej**, która ci przysługuje. I może być potrącane bezpośrednio z wypłaty tylko wtedy, gdy zakwaterowanie spełnia normę **SNF**. Jeśli potrącają więcej albo zakwaterowanie nie ma certyfikatu, coś jest nie tak.',
              'Zanim przedstawię cię agencji, pytam o trzy rzeczy i radzę, żebyś też miał je na piśmie: ile kosztuje tygodniowo, ile osób jest w pokoju i jak daleko jest do pracy.'
            ]
          },
          {
            q: 'Jeśli stracę pracę, czy stracę też mieszkanie?',
            blocks: [
              'To jest najważniejsze pytanie i prawie nikt na nie nie odpowiada. Szczera odpowiedź: **w wielu przypadkach tak, bo zakwaterowanie jest powiązane z umową o pracę**.',
              'W **fazie A** umowy zwykle obowiązuje tzw. klauzula agencyjna (*uitzendbeding*): jeśli firma, u której pracujesz, przestaje cię potrzebować, umowa kończy się praktycznie z dnia na dzień. A jeśli zakwaterowanie zależy od umowy, kończy się razem z nią.',
              'Co możesz zrobić: **zapytać na piśmie, przed podpisaniem, ile dni masz na opuszczenie pokoju**, jeśli stracisz pracę. Ja zawsze o to pytam, zanim kogoś przedstawię. Poważna agencja odpowiada bez problemu, a taka, która denerwuje się na to pytanie, już dużo ci mówi.'
            ]
          },
          {
            q: 'Ile pieniędzy potrzebuję na start?',
            blocks: [
              'Orientacyjnie licz **od 800 do 1200 €** zapasu. Pójdą na podróż, na jedzenie przez pierwsze dwa lub trzy tygodnie do pierwszej wypłaty, na kaucję za zakwaterowanie, jeśli jej wymagają, i na pierwsze drobne wydatki.',
              { cifra: window.RumboNorteCifras.nota },
              'W tej branży normą jest **wypłata tygodniowa**, więc pierwsze pieniądze przychodzą zwykle po dwóch tygodniach od rozpoczęcia pracy. Tę lukę trzeba pokryć. Wyjazd bez zapasu to najdroższy błąd, jaki widzę.'
            ]
          },
          {
            q: 'Czy muszę płacić coś tobie albo agencji?',
            blocks: [
              '**Nie. Ani euro, w żadnym momencie.** Ani mnie, ani agencji.',
              'Agencje pracy tymczasowej nie mogą pobierać od pracownika opłat za znalezienie mu pracy; w Holandii prawo wyraźnie tego zakazuje.'
            ]
          }
        ]
      },
      {
        title: 'Przygotowanie wyjazdu',
        items: [
          {
            q: 'Czy muszę mówić po angielsku albo po niderlandzku?',
            blocks: [
              '**Po angielsku tak: poziom co najmniej B1 komunikatywny jest obowiązkowy przy każdej z moich ofert, bez wyjątków.** Sprawdzam go sam podczas rozmowy, zadając kilka pytań po angielsku.',
              'Potrzebujesz go, żeby rozumieć instrukcje bezpieczeństwa, zmiany i liczby oraz rozmawiać z przełożonymi. Przy wyższym poziomie otwierają się stanowiska z większą odpowiedzialnością. Niderlandzkiego prawie nikt na początku nie wymaga, ale to on robi różnicę, jeśli zostaniesz.'
            ]
          },
          {
            q: 'Czy potrzebne jest prawo jazdy?',
            blocks: [
              'Nie jest obowiązkowe, ale **sporo zmienia**. Wiele zakwaterowań znajduje się w strefach przemysłowych albo w małych miejscowościach, a transport organizuje agencja busami o stałych godzinach.',
              'Z prawem jazdy kat. B (a zwłaszcza jeśli nie boisz się tam jeździć) masz większą swobodę, więcej stanowisk do wyboru i mniej zależysz od innych. Prawo jazdy wydane w UE jest ważne w Holandii bez żadnych formalności.',
              'Jeśli jesteś operatorem wózka widłowego, to prawdziwy plus: praca na *heftrucku* jest lepiej płatna. Na miejscu zwykle wymagają holenderskiego certyfikatu, a wiele agencji za niego płaci, kiedy już u nich pracujesz.',
              'Do pracy jako **kierowca ciężarówki lub autobusu** zawodowe prawo jazdy (C, C+E lub D) i kod 95 są obowiązkowe.'
            ]
          },
          {
            q: 'Czym jest BSN i jak go zdobyć?',
            blocks: [
              '**BSN** (*burgerservicenummer*) to holenderski numer identyfikacyjny obywatela. Bez niego nie dostaniesz normalnie wypłaty, nie będziesz mieć ubezpieczenia zdrowotnego ani prawie niczego. To pierwsza rzecz, którą się załatwia po przyjeździe.',
              'Wnioskuje się o niego po umówieniu wizyty w urzędzie gminy (*gemeente*). Jeśli zostajesz krócej niż cztery miesiące, rejestrujesz się jako nierezydent w jednym z biur RNI; jeśli dłużej, meldujesz się i potrzebujesz adresu. Zwykle agencja idzie z tobą albo umawia wizytę.',
              '**Nikt nie może pobierać od ciebie opłat za załatwienie BSN.** Jest bezpłatny. Wyjaśniamy to krok po kroku w [poradniku](guia.html#bsn).'
            ]
          },
          {
            q: 'Czy mogę jechać z partnerem albo z przyjacielem?',
            blocks: [
              'Tak, a nawet jest łatwiej. Ale warto wiedzieć jedno: **to, że zatrudnią was w tym samym czasie, nie gwarantuje, że zakwaterują was razem ani że będziecie pracować na tej samej zmianie**. Zakwaterowanie przydziela się według tego, co jest wolne.',
              'Jeśli bycie razem jest dla was warunkiem, powiedz mi o tym w pierwszej wiadomości: tak przedstawię to agencji i poproszę o potwierdzenie na piśmie. Lepiej poczekać dwa tygodnie dłużej, niż przyjechać i odkryć, że dzieli was czterdzieści kilometrów.'
            ]
          },
          {
            q: 'Który kraj jest dla mnie najlepszy?',
            blocks: [
              '**W większości przypadków Holandia:** tam jest prawie całość moich ofert i tam system jest najbardziej sprawdzony. Belgia jest bardzo podobna, a jeśli mówisz też po francusku, Walonia i Bruksela są na plus. **Niemcy dobrze płacą za doświadczenie w przemyśle i metalu**, ale niemiecki liczy się bardziej i po przyjeździe jest więcej formalności. We wszystkich trzech krajach angielski B1 jest obowiązkowy.',
              'Omówimy to w pierwszej rozmowie, mając przed sobą twój profil. Nie wyślę cię do kraju, który do ciebie nie pasuje, tylko dlatego, że są tam miejsca.'
            ]
          }
        ]
      },
      {
        title: 'Rekrutacja i agencje',
        items: [
          {
            q: 'Skąd mam wiedzieć, czy agencja jest legalna?',
            blocks: [
              'W Holandii sprawdza się to w dwóch publicznych rejestrach, bezpłatnie, w dwie minuty i na telefonie:',
              {
                ul: [
                  '**SNA** — [normeringarbeid.nl](https://www.normeringarbeid.nl). Kontroluje, czy firma płaci podatki i składki tak, jak powinna.',
                  '**SNF** — [normeringflexwonen.nl](https://www.normeringflexwonen.nl). Certyfikuje, że zakwaterowanie spełnia minimalne standardy.'
                ]
              },
              'W Belgii agencja musi mieć akredytację swojego regionu, a w Niemczech potrzebuje zezwolenia na pracę tymczasową od Bundesagentur für Arbeit. Kiedy przydzielę ci ofertę, będziesz wiedzieć, która to agencja: wyszukaj jej oficjalną nazwę w rejestrze i sprawdź ją sam, nie tylko ja. Jeśli dokładnej nazwy nie ma w rejestrze, zatrzymaj się. W [poradniku](guia.html#verificar) masz instrukcję krok po kroku i sygnały ostrzegawcze.'
            ]
          },
          {
            q: 'Jakie stanowiska masz w tej chwili?',
            blocks: [
              'Profile, o które proszą mnie najczęściej, masz [wyżej](#perfiles): **logistyka i magazyn** (cały kraj działa jak magazyn Europy), **kierowcy ciężarówek i autobusów**, **produkcja spożywcza**, **rolnictwo i szklarnie**, bardzo sezonowe, oraz **sprzątanie przemysłowe**. Budownictwo i metal wymagają więcej udokumentowanego doświadczenia.',
              'Co dokładnie jest otwarte, powiem ci na WhatsAppie, bo zmienia się z tygodnia na tydzień, a wolę nie wieszać na stronie czegoś, czego jutro już nie będzie. Tam też wyjaśnię ci, jak każda branża działa od środka, jakie są zmiany i ile się płaci.'
            ]
          },
          {
            q: 'O co zapytasz mnie w pierwszej rozmowie?',
            blocks: [
              'Najpierw sprawdzam trzy wymagania: wiek, obywatelstwo i poziom angielskiego. Potem jakie masz doświadczenie, czy masz prawo jazdy, od kiedy możesz wyjechać i czy jedziesz sam, czy z kimś. Na koniec zadaję ci kilka pytań po angielsku, żeby sprawdzić twój poziom.',
              '**W tej pierwszej rozmowie nie proszę o dowód osobisty ani o żaden dokument.** Jeśli ktoś prosi cię o nie, zanim w ogóle z tobą porozmawia, bądź ostrożny.'
            ]
          },
          {
            q: 'Ile to wszystko trwa od momentu, gdy do ciebie napiszę?',
            blocks: [
              'Zależy to głównie od sezonu i twojego profilu, więc każda konkretna liczba byłaby kłamstwem. Mogę ci za to podać prawdziwą kolejność: najpierw sprawdzam wymagania i robimy rozmowę; jeśli ją przejdziesz, rejestrujesz się na platformie dla kandydatów, wgrywasz dokumenty, a ja przydzielam ci trzy oferty pasujące do twojego profilu.',
              'Od momentu przydzielenia ofert decyzja nie należy już do mnie i nie będę udawać, że jest inaczej. Cały proces, krok po kroku, znajdziesz [w części o procesie](#proceso).'
            ]
          }
        ]
      }
    ]
  },
  aviso: {
    eyebrow: 'Praktyczny poradnik',
    title: [
      'Jedź z odpowiedziami',
      'na swoje pytania.'
    ],
    text: 'BSN, pasek wypłaty, zakwaterowanie, umowy i koszty życia. Wszystkie informacje, żeby przygotować przyjazd do Holandii, z oficjalnymi źródłami.',
    cta: { label: 'Przeczytaj cały poradnik', href: 'guia.html' }
  },
  candidatura: {
    id: 'candidatura',
    eyebrow: 'Twoje zgłoszenie',
    title: [
      'Opowiedz mi o sobie,',
      'a zobaczymy, czy pasujesz.'
    ],
    paragraphs: [
      'Najszybciej przez WhatsApp: odpisuję osobiście i w dziesięć minut wiemy, czy jest coś dla ciebie. Jeśli wolisz zostawić to na piśmie, wypełnij formularz, a ja do ciebie napiszę.',
      'Bez telefonów sprzedażowych, bez newslettera i bez nikogo, kto będzie cię nękał po trzech dniach.'
    ],
    whatsapp: { label: 'Otwórz WhatsApp', note: 'Wiadomość jest już napisana. Wystarczy kliknąć „wyślij”.' },
    form: {
      name: 'candidatura',
      action: 'gracias.html',
      subject: 'Nueva candidatura desde proyectoholanda.com (PL)',
      trap: 'Nie wypełniaj tego pola',
      heading: 'Formularz zgłoszeniowy',
      required: 'Pola oznaczone * są obowiązkowe.',
      submit: 'Wyślij zgłoszenie',
      failure: 'Nie udało się wysłać. Sprawdź połączenie albo [napisz do mnie na WhatsAppie](wa:).',
      consentValue: 'Sí, consiente que se valore su candidatura y se ceda a agencias de Países Bajos, Bélgica o Alemania',
      prefijos: [
      '+48 PL',
      '+31 NL',
      '+34 ES',
      '+351 PT',
      '+33 FR',
      '+49 DE',
      '+32 BE',
      '+39 IT',
      '+40 RO',
      '+44 UK',
      '+52 MX',
      '+54 AR',
      '+57 CO',
      '+58 VE',
      '+593 EC',
      '+51 PE',
      '+56 CL',
      'Inny'
    ],
    edadHint: 'Minimum 21 lat',
    nacionalidad: {
      label: 'Czy masz obywatelstwo lub paszport Unii Europejskiej?',
      options: ['Wybierz opcję', { value: 'Sí', label: 'Tak' }, { value: 'No', label: 'Nie' }]
    },
    ingles: [
      'Wybierz opcję',
      { value: 'Menos de B1', label: 'Poniżej B1' },
      { value: 'B1 (conversacional)', label: 'B1 (komunikatywny)' },
      { value: 'B2 o superior', label: 'B2 lub wyżej' }
    ],
    destinos: [
      { value: 'Países Bajos', label: 'Holandia', note: '(najwięcej ofert)' },
      { value: 'Bélgica', label: 'Belgia' },
      { value: 'Alemania', label: 'Niemcy' },
      { value: 'Me da igual', label: 'Wszystko jedno' }
    ],
    idiomas: [
      { value: 'Español', label: 'Hiszpański' },
      { value: 'Neerlandés', label: 'Niderlandzki' },
      { value: 'Francés', label: 'Francuski' },
      { value: 'Alemán', label: 'Niemiecki' },
      { value: 'Polaco', label: 'Polski' },
      { value: 'Portugués', label: 'Portugalski' },
      { value: 'Otro', label: 'Inny' }
    ],
    carnet: [
      { value: 'Carnet B', label: 'Prawo jazdy kat. B' },
      { value: 'Coche propio', label: 'Własny samochód' },
      { value: 'Carnet C o C+E (camión)', label: 'Prawo jazdy kat. C lub C+E (ciężarówka)' },
      { value: 'Carnet D (autobús)', label: 'Prawo jazdy kat. D (autobus)' },
      { value: 'CAP (código 95)', label: 'Kwalifikacja zawodowa (kod 95)' },
      { value: 'Certificado de carretillero', label: 'Uprawnienia na wózek widłowy' },
      { value: 'No tengo carnet', label: 'Nie mam prawa jazdy' }
    ],
    sector: [
      'Wybierz opcję',
      { value: 'Logística y almacén', label: 'Logistyka i magazyn' },
      { value: 'Carretillero / reachtruck', label: 'Operator wózka widłowego / reachtrucka' },
      { value: 'Conductor de camión (C / C+E)', label: 'Kierowca ciężarówki (C / C+E)' },
      { value: 'Conductor de autobús (D)', label: 'Kierowca autobusu (D)' },
      { value: 'Producción y alimentación', label: 'Produkcja i branża spożywcza' },
      { value: 'Agricultura e invernaderos', label: 'Rolnictwo i szklarnie' },
      { value: 'Limpieza industrial', label: 'Sprzątanie przemysłowe' },
      { value: 'Construcción o metal', label: 'Budownictwo lub metal' },
      { value: 'Automoción e industria', label: 'Motoryzacja i przemysł' },
      { value: 'Hostelería', label: 'Hotelarstwo i gastronomia' },
      { value: 'Me da igual, lo que salga', label: 'Wszystko jedno, co się trafi' },
      { value: 'Todavía no lo sé', label: 'Jeszcze nie wiem' }
    ],
    consent: 'Przeczytałem(-am) [politykę prywatności](privacidad.html) i zgadzam się, aby **Rumbo Norte (Iván Guerra Arroyo) wykorzystało te dane do oceny mojego zgłoszenia i, jeśli pasuję, przekazało je certyfikowanym agencjom pracy tymczasowej w Holandii, Belgii lub Niemczech**, aby mogły się ze mną skontaktować. Wiem, że jest to przekazanie danych innej firmie w Unii Europejskiej i że mogę w każdej chwili wycofać tę zgodę, pisząc na adres [ivan@proyectoholanda.com](mailto:ivan@proyectoholanda.com).',
      foot: 'Nic nie kosztuje, ani teraz, ani później. Nie zadzwonię do ciebie, nie uprzedzając cię wcześniej na WhatsAppie.'
    }
  }
};
