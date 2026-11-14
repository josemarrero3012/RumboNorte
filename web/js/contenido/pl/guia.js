/* Praktyczny poradnik (polski). Ta sama struktura co contenido/guia.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.guia = {
  legalNote: 'Kwoty w tym poradniku są orientacyjne i nie stanowią porady prawnej ani podatkowej.',
  hero: {
    eyebrow: 'Praktyczny poradnik',
    title: [
      'Co musisz',
      'wiedzieć przed',
      'rozmową.'
    ],
    text: [
      'To samo, co wyjaśniam każdemu kandydatowi, zanim przedstawię go agencji, spisane i uporządkowane. Siedem części: BSN, pasek wypłaty linijka po linijce, zakwaterowanie, koszty życia na miejscu, umowy, jak sprawdzić agencję i pytania, które trzeba zadać przed podpisaniem.',
      'Wszystkie kwoty są orientacyjne i mają datę. Holenderski system zmienia się 1 stycznia i 1 lipca każdego roku: **zawsze sprawdź dane w oficjalnym źródle, które podlinkowuję**, zanim podejmiesz na ich podstawie decyzję.'
    ],
    accent: 2
  },
  sections: [
    {
      id: 'bsn',
      eyebrow: '01 · Burgerservicenummer',
      title: [
        'BSN: bez niego formalnie nie istniejesz'
      ],
      blocks: [
        {
          lede: 'BSN to twój numer identyfikacyjny obywatela w Holandii. Dziewięć cyfr. Bez niego nie można cię normalnie zatrudnić, nie wykupisz obowiązkowego ubezpieczenia zdrowotnego, nie otworzysz konta w większości banków i nie złożysz wniosku o żaden dodatek. To dosłownie pierwsza rzecz do zrobienia po przyjeździe, jeszcze przed rozpakowaniem walizki.'
        },
        { h3: 'Jak o niego wystąpić' },
        'Zależy to od tego, jak długo zostaniesz, a granicą są **cztery miesiące**:',
        {
          ul: [
            '**Krócej niż cztery miesiące.** Wpisujesz się do rejestru nierezydentów (*RNI*). Robi się to po umówieniu wizyty w jednym z wyznaczonych do tego urzędów gminy w całym kraju. Nie potrzebujesz stałego adresu.',
            '**Dłużej niż cztery miesiące.** Meldujesz się w urzędzie gminy, w której mieszkasz (*inschrijving* w rejestrze BRP). Tu potrzebujesz prawdziwego adresu i zgody osoby, która dysponuje lokalem.'
          ]
        },
        'W obu przypadkach idziesz z **ważnym paszportem lub dowodem osobistym** — dowód osobisty z kraju UE wystarczy — i, jeśli ją masz, z umową o pracę. Numer prawie zawsze dostajesz na tej samej wizycie, na papierze.',
        {
          note: {
            title: 'To jest bezpłatne',
            tone: 'sand',
            blocks: [
              'Ani wpis do RNI, ani zameldowanie nic cię nie kosztują. Jeśli ktoś proponuje ci „załatwienie BSN” za 50, 100 albo 200 €, to oszustwo. Zwykle agencja daje ci już zarezerwowaną wizytę, a czasem nawet cię zawozi.'
            ]
          }
        },
        { h3: 'Po BSN: DigiD' },
        'Kiedy masz już BSN i jesteś zameldowany, wystąp o **DigiD**. To cyfrowa tożsamość, za pomocą której załatwia się wszystko z holenderską administracją: zeznanie podatkowe, dodatek do ubezpieczenia zdrowotnego, zasiłek dla bezrobotnych. Wnioskuje się na [digid.nl](https://www.digid.nl), a kod przychodzi pocztą na twój adres, więc trwa to kilka dni.',
        { h4: 'Oficjalne źródła' },
        {
          ul: [
            '[Rząd Holandii — czym jest BSN](https://www.government.nl/topics/personal-data/citizen-service-number-bsn) (po angielsku)',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl) — główny portal państwa (po niderlandzku)'
          ]
        }
      ]
    },
    {
      id: 'nomina',
      eyebrow: '02 · Loonstrook',
      title: [
        'Pasek wypłaty,',
        'linijka po linijce.'
      ],
      deck: 'Tu rozpada się większość oczekiwań. Między tym, co ci mówią, że zarobisz, a tym, co wpływa na konto, jest długa droga i warto ją przejść, zanim wsiądziesz do samolotu.',
      blocks: [
        { h3: 'Najpierw: stawka godzinowa' },
        'Holandia ma **ustawową minimalną stawkę godzinową**, taką samą dla wszystkich branż, aktualizowaną **1 stycznia i 1 lipca** każdego roku. Dla osób od 21. roku życia wynosi **15,29 € brutto za godzinę od 1 stycznia 2027 r.** (do 31 grudnia 2026 r. 14,99 €) i rośnie przy każdej waloryzacji.',
        'Kiedy to czytasz, mogła się już zmienić. **Sprawdź sam, to trzydzieści sekund:** [rijksoverheid.nl — minimumloon](https://www.rijksoverheid.nl/onderwerpen/minimumloon).',
        'Ponad to minimum, jeśli firma-klient ma własny układ zbiorowy, często przysługuje ci **taka sama pensja jak stałemu pracownikowi tej firmy wykonującemu twoją pracę**. To tzw. wyrównanie wynagrodzeń i jest to prawo, a nie przysługa. Zawsze pytaj, czy dotyczy ciebie.',
        { h3: 'Pełny przykład jednego tygodnia' },
        'Czterdzieści godzin po 15,00 € brutto, z zakwaterowaniem i ubezpieczeniem potrąconymi przez agencję. Kwoty są **orientacyjne, nie ostateczne**: zaliczki na podatek zależą od twojej sytuacji osobistej, a pensja i zakwaterowanie od agencji, która cię zatrudni, miasta i rodzaju zakwaterowania.',
        {
          payslip: {
            caption: 'Przykład orientacyjny · 40 h po 15,00 €/h brutto · jeden tydzień',
            head: [
              'Pozycja',
              'Kwota'
            ],
            rows: [
              {
                cells: [
                  'Wynagrodzenie brutto ~~40 h × 15,00 €~~',
                  '600,00 €'
                ]
              },
              {
                cells: [
                  'Emerytura ~~Twoja część branżowego planu emerytalnego agencji~~',
                  '−15,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Zaliczka na podatek ~~*Loonheffing*. Bardzo zależy od twojej sytuacji~~',
                  '−95,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Netto przed potrąceniami',
                  '490,00 €'
                ],
                kind: 'sub'
              },
              {
                cells: [
                  'Zakwaterowanie ~~Wspólny pokój zapewniany przez agencję~~',
                  '−110,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Ubezpieczenie zdrowotne ~~Obowiązkowe. Około 140 €/mies.~~',
                  '−32,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Transport ~~Bus firmowy albo rower~~',
                  '−22,00 €'
                ],
                kind: 'minus'
              },
              {
                cells: [
                  'Co wpływa na twoje konto',
                  '326,00 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        'W tym konkretnym przykładzie wychodzi około **1400 € miesięcznie** na czysto. To tylko przykład: w zależności od agencji, stanowiska, miasta, godzin i zakwaterowania na konto może wpływać **od 1250 do 2200 € miesięcznie**, i nikt nie może ci tego zagwarantować, zanim agencja nie przedstawi warunków na piśmie. I uważaj na „2500 € miesięcznie”, o których czyta się w internecie: przy płacy minimalnej to kwota brutto, zanim cokolwiek zostanie potrącone.',
        { small: window.RumboNorteCifras.aviso },
        { h3: 'Rezerwy: twoje pieniądze, których nie widzisz co tydzień' },
        'Oprócz tego wszystkiego co tydzień **odkładają się rezerwy**, które są twoje i wypłacane osobno:',
        {
          table: {
            caption: 'Narastające rezerwy · od kwoty brutto z przykładu',
            head: [
              'Pozycja',
              'Ok.',
              'Tydzień'
            ],
            rows: [
              {
                cells: [
                  'Dodatek urlopowy ~~*Vakantiegeld*~~',
                  '8,33%',
                  '50,00 €'
                ]
              },
              {
                cells: [
                  'Dni urlopu ~~Odkładają się jako saldo godzin~~',
                  '~10,9%',
                  '65,00 €'
                ]
              },
              {
                cells: [
                  'Narasta tygodniowo',
                  '—',
                  '115,00 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1, 2]
          }
        },
        'Wypłaca się je, kiedy o nie poprosisz, kiedy bierzesz urlop albo po zakończeniu umowy, zależnie od układu zbiorowego, który cię obejmuje. **Sprawdzaj je na każdym pasku.** Jeśli saldo rezerw nie rośnie z tygodnia na tydzień, zapytaj dlaczego, zanim minie miesiąc.',
        {
          note: {
            title: 'Dwie rzeczy, które kosztują, jeśli o nich nie wiesz',
            tone: 'stone',
            blocks: [
              '**1. Ulga podatkowa (*loonheffingskorting*) stosuje się tylko u jednego pracodawcy.** Jeśli pracujesz dla dwóch i zaznaczysz ją u obu, co miesiąc dostajesz więcej, ale potem oddajesz to w zeznaniu podatkowym. Zaznacz ją tylko u głównego.',
              '**2. W roku przyjazdu zeznanie zwykle kończy się zwrotem podatku.** Bo nie przepracowałeś dwunastu miesięcy. Wiele osób go nie składa i traci kilkaset euro. Robi się to przez DigiD na stronie *Belastingdienst*.'
            ]
          }
        },
        {
          note: {
            title: 'Jak czytać swój *loonstrook* pierwszego dnia',
            tone: 'sand',
            blocks: [
              'Poszukaj tych słów i sprawdź, czy się zgadzają: **gewerkte uren** (przepracowane godziny), **uurloon** (stawka za godzinę), **bruto loon** (brutto), **loonheffing** (zaliczka na podatek), **inhoudingen** (potrącenia: tu są zakwaterowanie i ubezpieczenie), **reserveringen** (rezerwy), **netto uitbetaald** (kwota przelewu).',
              'Jeśli godziny nie zgadzają się z tymi, które przepracowałeś, zgłoś to w tym samym tygodniu. Im później, tym trudniej.'
            ]
          }
        }
      ]
    },
    {
      id: 'alojamiento',
      eyebrow: '03 · Huisvesting',
      title: [
        'Zakwaterowanie i ile',
        'naprawdę potrącają.'
      ],
      deck: 'To rozdział z największą ilością drobnego druku i ten, który przysparza najwięcej rozczarowań. Ma też najjaśniejsze limity prawne, jeśli wiesz, jakie są.',
      blocks: [
        { h3: 'Co zastaniesz' },
        'Zwykle jest to **pokój dzielony z drugą osobą** w domku letniskowym, przebudowanym dawnym hotelu albo budynku przeznaczonym dla pracowników. Kuchnia i łazienka wspólne z czterema do sześciu innymi osobami. Zwykle umeblowane, z wifi i pościelą. Cena jest **za osobę i za tydzień**, a nie za pokój.',
        'Orientacyjne ceny wynoszą **od 80 do 150 € tygodniowo za osobę**, w zależności od agencji, miasta i rodzaju zakwaterowania. Pokój jednoosobowy, jeśli jest dostępny, zwykle mieści się w górnej części tego przedziału.',
        { cifra: window.RumboNorteCifras.nota },
        { h3: 'Prawny limit potrącenia' },
        'To jest najważniejsze i prawie nikt o tym nie wie: prawo pozwala potrącać zakwaterowanie bezpośrednio z wypłaty, ale **maksymalnie do 25% płacy minimalnej**, która ci przysługuje, i tylko jeśli **zakwaterowanie ma certyfikat SNF** (lub równoważnego uznanego systemu).',
        'W praktyce: przy płacy minimalnej na pełny etat te 25% to **około 150 € tygodniowo**. Jeśli potrącają ci więcej albo zakwaterowania nie ma w rejestrze SNF, jest problem i masz podstawę do reklamacji.',
        {
          note: {
            title: 'Trzy pytania, które trzeba zadać na piśmie',
            tone: 'sand',
            blocks: [
              '**1.** Ile dokładnie kosztuje tygodniowo i ile osób jest w pokoju?',
              '**2.** Jak daleko jest do miejsca pracy i kto płaci za dojazd?',
              '**3.** Jeśli stracę pracę, ile dni mam na opuszczenie pokoju?',
              'To trzecie odróżnia poważne agencje od reszty. Zapytaj na WhatsAppie albo mailem, a nie ustnie, i zachowaj odpowiedź.'
            ]
          }
        },
        { h3: 'Sedno sprawy: dom i umowa są ze sobą powiązane' },
        'W większości przypadków zakwaterowanie zależy od umowy o pracę. Jeśli umowa się kończy — a w fazie A może skończyć się bardzo szybko, o czym w części 5 — **tracisz pracę i pokój jednocześnie**. To realna sytuacja, o której trzeba pamiętać przed wejściem do samolotu, i główny powód, dla którego tak bardzo nalegam na zapas 800–1200 €.',
        'Układy zbiorowe w branży określają minimalny termin na wyprowadzkę i nakazują przekazanie go na piśmie. To, że taki termin istnieje, nie chroni cię przed szukaniem czegoś w kilka dni w kraju, którego nie znasz.',
        { h3: 'Ubezpieczenie zdrowotne' },
        'Gdy tylko zaczynasz pracować w Holandii, **masz prawny obowiązek wykupić holenderskie ubezpieczenie zdrowotne** (*zorgverzekering*), niezależnie od tego, czy masz Europejską Kartę Ubezpieczenia Zdrowotnego. Masz na to krótki termin, a za jego niedotrzymanie są kary.',
        'Podstawowa polisa kosztuje około **140 € miesięcznie**, a wiele agencji ma tańszą umowę zbiorową, którą potrącają z wypłaty. Istnieje też dodatek państwowy, ***zorgtoeslag***, dla osób o niskich dochodach: wnioskuje się o niego przez DigiD i dla wielu pracowników pokrywa sporą część składki. Nie jest automatyczny: **trzeba złożyć wniosek**, a wiele osób tego nie robi.',
        { cifra: window.RumboNorteCifras.nota },
        {
          ul: [
            '[toeslagen.nl](https://www.toeslagen.nl) — wniosek o *zorgtoeslag*',
            '[normeringflexwonen.nl](https://www.normeringflexwonen.nl) — rejestr zakwaterowań SNF'
          ]
        }
      ]
    },
    {
      id: 'coste-vida',
      eyebrow: '04 · Zakupy',
      title: [
        'Ile kosztuje życie na miejscu',
        'co tydzień.'
      ],
      deck: 'Z zakwaterowaniem już potrąconym z wypłaty zostają ci wydatki głównie na jedzenie, telefon i to, co robisz w niedziele.',
      blocks: [
        'Duże supermarkety to **Albert Heijn** (najdroższy i najwygodniejszy), **Jumbo** (średni) oraz **Lidl** i **Aldi** (tanie). Różnica między zakupami w jednym a drugim to spokojnie 20 € tygodniowo, czyli w skali miesiąca prawie dzień pracy.',
        {
          table: {
            caption: 'Orientacyjne wydatki tygodniowe · jedna osoba',
            head: [
              'Pozycja',
              'Tygodniowo'
            ],
            rows: [
              {
                cells: [
                  'Jedzenie ~~Gotując w domu, kupując w Lidlu lub Aldi~~',
                  '45 – 70 €'
                ]
              },
              {
                cells: [
                  'Telefon i internet ~~Holenderska karta prepaid~~',
                  '3 – 6 €'
                ]
              },
              {
                cells: [
                  'Kosmetyki i środki czystości',
                  '5 – 10 €'
                ]
              },
              {
                cells: [
                  'Rozrywka i inne ~~Piwo na mieście, pociąg w niedzielę~~',
                  '15 – 40 €'
                ]
              },
              {
                cells: [
                  'Zwykle razem',
                  '70 – 125 €'
                ],
                kind: 'total'
              }
            ],
            numeric: [1]
          }
        },
        { cifra: window.RumboNorteCifras.nota },
        'Przy 326 € z przykładowego paska wypłaty zostawałoby **od 200 do 255 € oszczędności tygodniowo**, jeśli dobrze gospodarujesz pieniędzmi. To wyliczenie orientacyjne: twoja sytuacja będzie zależeć od tego, ile zarobisz i ile ci potrącą. W tym jest sens wyjazdu: nie w pensji brutto, ale w tym, ile uda ci się odłożyć co miesiąc.',
        {
          note: {
            title: 'Trzy sposoby, które są warte prawdziwych pieniędzy',
            tone: 'stone',
            blocks: [
              '**Rower.** Używany kosztuje od 60 do 120 € i raz na zawsze oszczędza ci koszty transportu. To pierwszy zakup, jaki trzeba zrobić.',
              '**Kaucja *statiegeld*.** Butelki i puszki mają kaucję od 0,15 do 0,25 €. Oddaje się je w automacie w supermarkecie. Brzmi jak drobiazg, a to 5–10 € tygodniowo.',
              '**Wspólne gotowanie.** Dzielicie mieszkanie: kupowanie i gotowanie we czworo obniża wydatki na jedzenie prawie o połowę.'
            ]
          }
        }
      ]
    },
    {
      id: 'contrato',
      eyebrow: '05 · Umowy',
      title: [
        'Wszystkie umowy,',
        'jakie mogą ci zaproponować.'
      ],
      deck: 'Przez agencję i bezpośrednio z firmą. Która jest która, co daje każda z nich i którą naprawdę chcesz w końcu podpisać.',
      blocks: [
        {
          lede: 'W Holandii są dwa sposoby bycia zatrudnionym, a mylenie ich to źródło połowy nieporozumień. Albo zatrudnia cię **agencja pracy tymczasowej** (*uitzendbureau*) i kieruje do firmy-klienta, albo zatrudnia cię **bezpośrednio firma**, w której pracujesz. Prawie każdy zaczyna od pierwszego, a celem jest dojść do drugiego.'
        },
        {
          note: {
            title: 'Różnica w jednym zdaniu',
            tone: 'stone',
            blocks: [
              'W agencji twój szef i twój pracodawca **to nie ta sama firma**: pracujesz dla jednej, a płaci ci druga. Przy umowie bezpośredniej to ta sama firma. Wszystko inne — stabilność, pensja, prawa — wynika z tego.'
            ]
          }
        },
        { h3: 'A · Jeśli zatrudnia cię agencja pracy tymczasowej' },
        'Tutaj układ zbiorowy branży dzieli twój staż na **fazy**. Im więcej tygodni przepracujesz w tej samej agencji, tym większą masz stabilność. Zawsze zaczyna się od dołu, a dłuższa przerwa może sprawić, że liczenie zacznie się od nowa.',
        {
          table: {
            caption: 'Fazy pracy tymczasowej · schemat ogólny',
            head: [
              'Faza',
              'Przybliżony czas trwania',
              'Co to dla ciebie oznacza'
            ],
            rows: [
              {
                cells: [
                  'Faza A',
                  'Mniej więcej pierwszy przepracowany rok',
                  'Maksymalna elastyczność dla firmy. Zwykle obejmuje klauzulę agencyjną: jeśli klient przestaje cię potrzebować, umowa się kończy. Płacą ci za przepracowane godziny.'
                ]
              },
              {
                cells: [
                  'Faza B',
                  'Kolejne lata, z ograniczoną liczbą umów',
                  'Umowy na czas określony z datą zakończenia. Nie mogą cię już zwolnić z dnia na dzień, a pensję dostajesz, nawet jeśli klient wstrzyma pracę.'
                ]
              },
              {
                cells: [
                  'Faza C',
                  'Po fazie B',
                  'Umowa na czas nieokreślony z agencją. Prawdziwa stabilność: to odpowiednik stałego etatu.'
                ],
                kind: 'total'
              }
            ]
          }
        },
        {
          small: 'Dokładny czas trwania i liczbę umów określa układ zbiorowy branży, który renegocjuje się co kilka lat i który w ostatniej dekadzie zmieniał się kilka razy. **Zawsze proś na piśmie o informację, w której fazie zaczynasz i jaki układ zbiorowy cię obejmuje.** To dwa pytania na minutę.'
        },
        { h4: 'Pięć rodzajów, jakie mogą ci podsunąć' },
        'W świecie agencji nie wszystko jest takie samo, nawet jeśli opowiadają o tym tak samo:',
        {
          table: {
            caption: 'Formy zatrudnienia przez pośrednika',
            head: [
              'Forma',
              'Jak działa',
              'Uważaj na'
            ],
            rows: [
              {
                cells: [
                  '*Uitzendovereenkomst* z klauzulą',
                  'Klasyka fazy A. Umowa kończy się automatycznie, jeśli klient z ciebie zrezygnuje.',
                  'Najbardziej krucha ze wszystkich. Jeśli jeszcze zakwaterowanie jest z nią powiązane, tracisz obie rzeczy naraz.'
                ]
              },
              {
                cells: [
                  '*Uitzendovereenkomst* bez klauzuli',
                  'Umowa na czas określony z datą rozpoczęcia i zakończenia. Agencja płaci ci, nawet jeśli klient wstrzyma pracę.',
                  'Zwykle pojawia się w fazie B. Jeśli proponują ją wcześniej, to dobry znak o agencji.'
                ]
              },
              {
                cells: [
                  '*Detachering*',
                  'Skierowanie do pracy, ale ze stabilną umową z firmą, która cię kieruje. Częste przy profilach technicznych.',
                  'Lepsze warunki, ale zwykle wymaga doświadczenia albo kwalifikacji.'
                ]
              },
              {
                cells: [
                  '*Payrolling*',
                  'Firma wybiera ciebie, ale płaci ci i figuruje jako pracodawca zewnętrzna firma kadrowa.',
                  'Zgodnie z prawem przysługują ci **takie same warunki jak własnym pracownikom** klienta. Sprawdź to, bo nie zawsze stosuje się to samo z siebie.'
                ]
              },
              {
                cells: [
                  '*ZZP* (fikcyjne samozatrudnienie)',
                  'Rejestrują cię jako osobę samozatrudnioną i wystawiasz faktury za godziny zamiast dostawać pasek wypłaty.',
                  '**To największy sygnał ostrzegawczy.** Zobacz uwagę poniżej.'
                ],
                kind: 'minus'
              }
            ]
          }
        },
        {
          note: {
            title: 'Jeśli proponują ci pracę jako samozatrudniony (ZZP), uważaj',
            tone: 'sand',
            blocks: [
              'Przy pracy w magazynie, produkcji czy rolnictwie z ustalonymi godzinami i szefem **samozatrudnienie prawie nigdy nie jest legalne**: to tzw. fikcyjne samozatrudnienie, a holenderski urząd skarbowy od dłuższego czasu poważnie je ściga.',
              'Co tracisz, jeśli się zgodzisz: **nie masz zasiłku dla bezrobotnych, zwolnienia chorobowego, płatnego urlopu ani dodatku urlopowego, a podatki i ubezpieczenie płacisz sam** z pieniędzy, które uważałeś za swoje. A jeśli potem inspekcja uzna, że był to ukryty stosunek pracy, kłopoty dotkną także ciebie.',
              'Jeśli ktoś przedstawia ci to jako przysługę albo sposób, żeby „zarobić więcej”, jest dokładnie odwrotnie.'
            ]
          }
        },
        { h3: 'B · Jeśli zatrudnia cię bezpośrednio firma' },
        'Tu podlegasz już ogólnemu prawu pracy (*arbeidsovereenkomst*), tak jak każdy Holender. Oto istniejące rodzaje:',
        {
          table: {
            caption: 'Umowy bezpośrednio z pracodawcą',
            head: [
              'Rodzaj',
              'Co to jest',
              'Co trzeba wiedzieć'
            ],
            rows: [
              {
                cells: [
                  'Na czas określony ~~*bepaalde tijd*~~',
                  'Umowa z datą zakończenia.',
                  'Istnieje prawny limit kolejnych umów na czas określony z tą samą firmą. Po jego przekroczeniu następna **z mocy prawa staje się umową na czas nieokreślony**. Licz je sam.'
                ]
              },
              {
                cells: [
                  'Na czas nieokreślony ~~*onbepaalde tijd*~~',
                  'Bez daty zakończenia. *Vast contract*.',
                  'Cel. To ona otwiera przyzwoite mieszkania, kredyt i hipotekę.'
                ],
                kind: 'total'
              },
              {
                cells: [
                  'Zero godzin ~~*nulurencontract*~~',
                  'Jesteś zatrudniony, ale bez gwarantowanych godzin: dzwonią, kiedy jest praca.',
                  'Muszą cię uprzedzić z kilkudniowym wyprzedzeniem, a **jeśli odwołają z krótszym, i tak dostajesz zapłatę**. Po pewnym czasie firma musi zaproponować ci stały wymiar godzin według twojej średniej.'
                ]
              },
              {
                cells: [
                  'Minimum-maksimum ~~*min-maxcontract*~~',
                  'Gwarantują ci minimalną liczbę godzin, a możesz pracować więcej do określonego limitu.',
                  'Lepsza niż umowa zero godzin. Sprawdź, czy minimum wystarcza na życie.'
                ]
              },
              {
                cells: [
                  'Kształcenie dualne ~~*BBL*~~',
                  'Pracujesz i jednocześnie się uczysz, dostając wynagrodzenie, i kończysz z oficjalnym dyplomem.',
                  'Zwykle płaci za to firma. To najszybsza droga, żeby przestać być wymienną siłą roboczą.'
                ]
              },
              {
                cells: [
                  'Praktyki ~~*stage*~~',
                  'Związane z nauką. To nie jest zwykła umowa o pracę.',
                  'Wynagrodzenie jest niskie i nie daje tych samych praw. Uważaj, jeśli proponują ci je, gdy się nie uczysz.'
                ]
              }
            ]
          }
        },
        { h3: 'C · Klauzule, które występują w obu przypadkach' },
        'Bez względu na to, kto cię zatrudnia, te cztery pojęcia znajdą się w twojej umowie i warto je rozpoznawać przed podpisaniem.',
        {
          table: {
            caption: 'Wspólny drobny druk',
            head: [
              'Pojęcie',
              'Co oznacza'
            ],
            rows: [
              {
                cells: [
                  'Okres próbny ~~*proeftijd*~~',
                  'W jego trakcie każda ze stron może zakończyć współpracę tego samego dnia. Jego maksymalna długość zależy od czasu trwania umowy, a **w bardzo krótkich umowach w ogóle nie można go wprowadzić**. Jeśli widzisz długi okres próbny w umowie na kilka miesięcy, zapytaj.'
                ]
              },
              {
                cells: [
                  'Okres wypowiedzenia ~~*opzegtermijn*~~',
                  'Czas, o jaki trzeba uprzedzić przed odejściem albo zwolnieniem. Dla pracownika to zwykle miesiąc; dla firmy rośnie wraz z twoim stażem. Uwaga: zwykle liczy się **do końca miesiąca**, a nie od dnia wypowiedzenia.'
                ]
              },
              {
                cells: [
                  'Odprawa ~~*transitievergoeding*~~',
                  'Jeśli to firma kończy współpracę, przysługuje ci rekompensata **od pierwszego przepracowanego dnia**, proporcjonalna do stażu. Wiele osób odchodzi bez niej, bo nie wie, że istnieje.'
                ]
              },
              {
                cells: [
                  'Zakaz konkurencji ~~*concurrentiebeding*~~',
                  'Ogranicza pracę dla konkurencji po zakończeniu umowy. W umowach na czas określony jest ważny tylko wtedy, gdy uzasadniono go na piśmie. **Żadna agencja nie może ci zabronić przyjęcia bezpośredniej pracy u firmy-klienta.**'
                ]
              }
            ]
          }
        },
        { h3: 'D · Klauzula, na którą trzeba patrzeć: *uitzendbeding*' },
        'To klauzula agencyjna. Mówiąc po ludzku: **dopóki obowiązuje, umowa o pracę kończy się automatycznie, gdy firma-klient uzna, że już cię nie potrzebuje**. Bez długiego wypowiedzenia, bez odprawy, bez dyskusji.',
        'Działa też w drugą stronę: możesz odejść z bardzo krótkim wypowiedzeniem. To dobra strona i dla niektórych osób się opłaca.',
        'Trzeba mieć jasność, że **w fazie A, z tą klauzulą, twoja sytuacja jest krucha**. Jeśli jeszcze zakwaterowanie jest powiązane z umową, jeden zły dzień w fabryce może oznaczać utratę pracy i mieszkania w ten sam piątek.',
        {
          pull: {
            text: 'W fazie A nie masz stabilnej pracy. Masz pracę. Różnicę czujesz w dniu, w którym klient tnie zmiany.'
          }
        },
        { h3: 'E · Jeśli zachorujesz' },
        'Przy aktywnym *uitzendbeding* choroba może spowodować zakończenie umowy. Wtedy otrzymujesz **zasiłek chorobowy z instytucji publicznej (UWV)**, który wynosi około 70% twojej dziennej stawki. To nie to samo co dalsze otrzymywanie pensji.',
        'Zgłoś to pierwszego dnia i zrób to kanałem, który ci wskażą (zwykle jest specjalny numer). Spóźnione zgłoszenie to jedna z niewielu rzeczy, które mogą cię kosztować cały zasiłek.',
        { h3: 'F · Jeśli stracisz pracę' },
        'Żeby dostać holenderski zasiłek dla bezrobotnych (*WW*), trzeba przepracować minimalną liczbę tygodni w okresie odniesienia. Na początku prawie nikt tego nie spełnia, a to właśnie moment największego ryzyka.',
        'Dwie praktyczne rzeczy: jeśli wcześniej pracowałeś w innym kraju UE, przed wyjazdem poproś o **formularz U1**, bo pozwala doliczyć okresy, za które płaciłeś tam składki. I zachowuj **wszystkie paski wypłaty i umowy** od pierwszego dnia: to dowód przepracowanych tygodni.',
        {
          note: {
            title: 'Dokąd to zmierza',
            tone: 'ink',
            blocks: [
              'Pełna droga jest zawsze taka sama: faza A z klauzulą → umowa na czas określony bez klauzuli → umowa bezpośrednio z firmą-klientem → umowa na czas nieokreślony. Każdy szczebel zmniejsza twoją kruchość i podnosi pensję.',
              'Ile trwa każdy krok, czego trzeba, żeby go zrobić, i co się odblokowuje na górze, znajdziesz na [stronie z celami](metas.html).'
            ]
          }
        },
        { h4: 'Oficjalne źródła' },
        {
          ul: [
            '[uwv.nl](https://www.uwv.nl) — zasiłki dla bezrobotnych i chorobowe',
            '[belastingdienst.nl](https://www.belastingdienst.nl) — holenderski urząd skarbowy',
            '[rijksoverheid.nl](https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao) — rodzaje umów i układy zbiorowe'
          ]
        }
      ]
    },
    {
      id: 'verificar',
      eyebrow: '06 · SNA i SNF',
      title: [
        'Jak sprawdzić agencję',
        'w dwie minuty.'
      ],
      deck: 'Bezpłatnie, na telefonie i bez rejestrowania się gdziekolwiek. Jeśli z tego poradnika warto zrobić tylko jedną rzecz, to właśnie tę.',
      blocks: [
        { h3: 'Dwa rejestry' },
        '**SNA — Stichting Normering Arbeid.** Kontroluje, czy firma prawidłowo rozlicza podatki i składki oraz przestrzega prawa pracy. To certyfikat, który naprawdę się liczy: poważne firmy-klienci współpracują tylko z agencjami, które go mają, bo inaczej same odpowiadają za długi.',
        'Sprawdza się go na [normeringarbeid.nl](https://www.normeringarbeid.nl), w wyszukiwarce rejestru.',
        '**SNF — Stichting Normering Flexwonen.** Certyfikuje, że zakwaterowanie spełnia minimalne standardy przestrzeni, bezpieczeństwa i higieny, i jest regularnie kontrolowane. Sprawdza się je na [normeringflexwonen.nl](https://www.normeringflexwonen.nl).',
        { h3: 'Jak to zrobić krok po kroku' },
        {
          ol: [
            '**Poproś o dokładną nazwę prawną i numer KvK.** KvK to numer w holenderskim rejestrze handlowym. Legalna agencja poda ci go bez mrugnięcia okiem. Uwaga: nazwa handlowa, pod którą do ciebie piszą, i nazwa prawna czasem się różnią.',
            '**Wyszukaj tę nazwę w rejestrze SNA.** Musi figurować z certyfikatem *ważnym*, a nie wygasłym ani zawieszonym.',
            '**Wyszukaj zakwaterowanie w rejestrze SNF.** Czasem zakwaterowaniem zarządza inna firma: poproś też o jej nazwę.',
            '**Sprawdź numer KvK** na [kvk.nl](https://www.kvk.nl). Zobacz, od kiedy firma istnieje. Spółka założona trzy miesiące temu, która już rekrutuje sto osób, zasługuje na drugie spojrzenie.',
            '**Wyszukaj nazwę w Google razem ze słowami *ervaringen* lub *klachten*** (opinie, skargi). Po niderlandzku i po polsku znajdziesz znacznie więcej niż po angielsku.'
          ]
        },
        {
          note: {
            title: 'Sygnały ostrzegawcze. Jeśli pojawi się choć jeden, zatrzymaj się.',
            tone: 'sand',
            blocks: [
              {
                ul: [
                  'Żądają **pieniędzy z góry** za cokolwiek: zapisy, rezerwację miejsca, załatwienie BSN, tłumaczenie dokumentów, „koszty obsługi”.',
                  'Proszą o **zdjęcia dowodu osobistego lub paszportu, zanim z kimkolwiek porozmawiałeś**, albo przez dziwny kanał.',
                  'Nie podają **nazwy prawnej ani numeru KvK** albo przyjmują postawę obronną, gdy o nie prosisz.',
                  '**Nie ma pisemnej umowy** albo mówią, że „podpisuje się na miejscu” i nie trzeba jej wcześniej oglądać.',
                  'Obiecują ci **pensję netto dużo wyższą** niż to, co tu przeczytałeś, albo „gwarantowaną pracę”.',
                  'Naciskają, żebyś **zdecydował dziś**, bo „zostały dwa miejsca”.',
                  'Proponują wypłatę **części pod stołem**. To zostawia cię bez zasiłku, bez chorobowego i bez niczego.'
                ]
              }
            ]
          }
        },
        {
          note: {
            title: 'Zmiana, która wchodzi 1 stycznia 2027 r.',
            tone: 'stone',
            blocks: [
              'Holandia przyjęła **obowiązkowy system dopuszczenia** dla agencji pracy tymczasowej (*Wet toelating terbeschikkingstelling arbeidskrachten*). Od 1 stycznia 2027 r. sam certyfikat już nie wystarczy: do kierowania pracowników potrzebne będzie oficjalne zezwolenie. Agencje, które już działają, mają okres przejściowy na czas rozpatrywania wniosku, a kary zaczną się w 2028 r.',
              'Do tego czasu SNA i SNF pozostają najlepszym narzędziem, jakie masz. Kiedy nowy rejestr zacznie działać, dodam go do tego poradnika.'
            ]
          }
        },
        { h4: 'Gdzie zgłosić, jeśli coś jest nie tak' },
        {
          ul: [
            '[Holenderska Inspekcja Pracy](https://www.nlarbeidsinspectie.nl) — zgłoszenia, także anonimowe',
            '[FNV](https://www.fnv.nl) — największy związek zawodowy, pomaga pracownikom z zagranicy',
            '[Work in NL](https://www.workinnl.nl) — oficjalne punkty informacyjne dla pracowników z Europy'
          ]
        }
      ]
    },
    {
      id: 'preguntas-firmar',
      eyebrow: '07 · Lista',
      title: [
        'O co zapytać',
        'przed podpisaniem.'
      ],
      deck: 'Czternaście pytań. Skopiuj je, wklej w czacie z agencją i zachowaj odpowiedzi. Poważna agencja odpowie na wszystkie bez skrępowania.',
      blocks: [
        {
          cards: [
            {
              eyebrow: 'Umowa',
              title: 'Na początek',
              blocks: [
                '**1.** W której fazie zaczynam i jaki układ zbiorowy mnie obejmuje?\n**2.** Czy umowa zawiera klauzulę agencyjną?\n**3.** Czy mogę przeczytać całą umowę przed wyjazdem?\n**4.** W jakim jest języku i czy dostanę tłumaczenie?'
              ]
            },
            {
              eyebrow: 'Pieniądze',
              title: 'Liczby',
              blocks: [
                '**5.** Jaka jest dokładna stawka godzinowa brutto?\n**6.** Czy przysługuje mi wyrównanie wynagrodzenia do pracowników klienta?\n**7.** Jak płacone są dodatki za zmiany nocne i weekendowe?\n**8.** Wypłata jest tygodniowa czy miesięczna i w który dzień?'
              ]
            },
            {
              eyebrow: 'Dom',
              title: 'Zakwaterowanie',
              blocks: [
                '**9.** Ile potrącacie tygodniowo i ile osób jest w pokoju?\n**10.** Czy zakwaterowanie jest w rejestrze SNF? Pod jaką nazwą?\n**11.** Jeśli praca się skończy, ile mam dni na wyprowadzkę?'
              ]
            },
            {
              eyebrow: 'Dojazdy',
              title: 'Przyjazd i poruszanie się',
              blocks: [
                '**12.** Jak daleko jest praca i kto płaci za transport?\n**13.** Kto płaci za podróż w jedną stronę i na jakich warunkach?'
              ]
            },
            {
              eyebrow: 'Dokumenty',
              title: 'Formalności',
              blocks: [
                '**14.** Czy pomożecie mi z wizytą w sprawie BSN i z ubezpieczeniem zdrowotnym, i czy coś mnie to kosztuje?'
              ]
            },
            {
              eyebrow: 'Złota zasada',
              title: 'Na piśmie',
              blocks: [
                'Zadaj wszystkie te pytania **na piśmie** — przez WhatsApp albo mailem — i zachowaj odpowiedzi. To nie brak zaufania: to twój dowód, jeśli coś nie zostanie dotrzymane.'
              ]
            }
          ]
        },
        {
          note: {
            title: 'I ostatnia rzecz',
            tone: 'ink',
            blocks: [
              'Jeśli po przeczytaniu tego wszystkiego uznasz, że ci się nie opłaca, i tak wygrałeś. Do tego służą informacje: żeby decydować na podstawie faktów, a nie ogłoszenia na Facebooku. Nie będę cię namawiać.'
            ]
          }
        },
        {
          buttons: [
            { label: 'Wyślij zgłoszenie', href: './#candidatura' },
            { label: 'Zadaj konkretne pytanie', href: 'wa:' }
          ]
        }
      ]
    }
  ],
  toc: [
    { href: '#bsn', label: 'BSN: bez niego formalnie nie istniejesz' },
    { href: '#nomina', label: 'Pasek wypłaty, linijka po linijce' },
    { href: '#alojamiento', label: 'Zakwaterowanie i ile naprawdę potrącają' },
    { href: '#coste-vida', label: 'Ile kosztuje życie na miejscu co tydzień' },
    { href: '#contrato', label: 'Wszystkie rodzaje umów' },
    { href: '#verificar', label: 'Jak sprawdzić agencję w SNA i SNF' },
    { href: '#preguntas-firmar', label: 'O co zapytać przed podpisaniem' }
  ]
};
