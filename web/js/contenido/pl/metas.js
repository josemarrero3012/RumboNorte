/* Cele (polski). Ta sama struktura co contenido/metas.js. */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.metas = {
  hero: {
    eyebrow: 'Cele',
    title: [
      'Wyjazd do pracy',
      'to nie jest cel.',
      'To pierwszy krok.'
    ],
    text: [
      'Poradnik mówi ci, w co się pakujesz. Ta strona mówi, **dokąd można dojść**: wyprowadzić się z zakwaterowania agencji, mieć samochód, wynająć coś swojego, przejść na umowę bezpośrednio z firmą i dojść do umowy na czas nieokreślony.',
      'To nie jest tania motywacja. To osiem celów z tym, ile każdy kosztuje i w jakim realnym czasie się go osiąga. To droga, którą przechodzą ludzie, którzy zostają. Nie jest szybka ani ładna, ale da się ją przejść.'
    ],
    accent: 1
  },
  aviso: {
    title: 'Zanim zaczniesz czytać dalej',
    tone: 'ink',
    blocks: [
      'To **nie jest obietnica i nie każdemu się udaje**. Są ludzie, którzy wracają po dwóch miesiącach, ludzie, którzy latami tkwią na pierwszym szczeblu, i ludzie, którym nie wychodzi z powodów, na które nie mają wpływu.',
      'Prawdą jest natomiast, że **ta droga istnieje i jest wytyczona**. Ten, kto nią idzie, nie jest najmądrzejszy ani nie ma najwięcej szczęścia: to ten, kto wytrzyma pierwsze miesiące, nie przepuszcza tego, co zarobi, i wykorzystuje wolny czas, żeby się czegoś nauczyć. Nie ma skrótu, a kto ci go sprzedaje, coś ci wciska.'
    ]
  },
  mapa: {
    id: 'mapa',
    eyebrow: 'Mapa',
    title: [
      'Ile naprawdę',
      'trwa każda rzecz.'
    ],
    deck: 'Terminy dla ludzi, którzy traktują to poważnie i pracują na pełny etat. Jeśli idziesz na pół gwizdka, pomnóż przez dwa.',
    blocks: [
      {
        table: {
          caption: 'Typowa droga · orientacyjnie',
          head: [
            'Kiedy',
            'Gdzie jesteś',
            'Co osiągasz'
          ],
          rows: [
            {
              cells: [
                'Tydzień 1–4',
                'Faza A, zakwaterowanie agencji',
                'BSN, ubezpieczenie zdrowotne, konto bankowe, rower. Wydajesz więcej, niż zarabiasz.'
              ]
            },
            {
              cells: [
                'Miesiąc 2–6',
                'Faza A, już w rytmie',
                'Pierwsze prawdziwe oszczędności. Odzyskujesz zapas, który przywiozłeś, i zaczynasz odkładać.'
              ]
            },
            {
              cells: [
                'Miesiąc 6–12',
                'Koniec fazy A',
                'Certyfikaty (wózek widłowy, VCA), podstawowy niderlandzki, samochód, jeśli go potrzebujesz.'
              ]
            },
            {
              cells: [
                'Rok 1–2',
                'Faza B lub umowa bezpośrednia',
                'Wyprowadzasz się z zakwaterowania agencji. Własny najem. Umowa z firmą, u której pracujesz.'
              ]
            },
            {
              cells: [
                'Rok 2–4',
                'Umowa na czas określony w firmie',
                'Awansujesz. Przedłużasz kolejne umowy aż do umowy na czas nieokreślony.'
              ],
              kind: 'sub'
            },
            {
              cells: [
                'Rok 3–5',
                'Umowa na czas nieokreślony',
                'Otwiera się wszystko: dobre mieszkania, kredyt, hipoteka. Prawdziwa niezależność.'
              ],
              kind: 'total'
            }
          ]
        }
      },
      {
        small: 'Kolejne kroki nie są automatyczne ani gwarantowane. Zależą od firmy, branży, sezonu, a przede wszystkim od tego, czy zrobisz swoją część. Ale żaden z tych szczebli nie jest rzadkością: to normalna droga tych, którzy zostają.'
      }
    ]
  },
  metas: {
    id: 'metas',
    eyebrow: 'Jeden po drugim',
    title: [
      'Osiem celów',
      'z ich ceną i terminem.'
    ],
    deck: 'Po kolei. Każdy opiera się na poprzednim: przeskakiwanie szczebli to najszybszy sposób, żeby skończyć powrotem.',
    goals: [
      {
        when: 'Miesiąc 1 do miesiąca 6',
        title: 'Oszczędzać naprawdę, a nie „to, co zostanie”',
        blocks: [
          'To cel nadrzędny. Jeśli ten zawiedzie, nie będzie żadnego z kolejnych siedmiu. A większość ludzi, którym nie wychodzi w Holandii, nie przegrywa przez pracę: przegrywa tutaj.',
          'Metoda, która działa, jest nudna: **w dniu wypłaty najpierw odkładasz, a żyjesz z tego, co zostaje**. Nie odwrotnie. Otwórz drugie konto (w każdym holenderskim banku zajmuje to pięć minut na telefonie) i wpłacaj tam stałą kwotę, gdy tylko wpłynie pensja. Czego nie widzisz, tego nie wydajesz.',
          {
            stats: [
              { value: '200–255 €', label: 'Do odłożenia tygodniowo przy pensji z przykładu w poradniku' },
              { value: '600–800 €', label: 'Realistyczny cel miesięczny bez życia w biedzie' },
              { value: '7000–9500 €', label: 'W dwanaście miesięcy, jeśli utrzymasz tempo' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Trzy dziury, którymi uciekają ludziom pieniądze, po kolei: **weekendy** (jedna zła noc to 80 €, cztery w miesiącu to samochód w rok), **wysyłanie pieniędzy do domu bez kontroli** — wysyłaj, ale ustal stałą kwotę i jej nie ruszaj — i **gotowe jedzenie**. Wspólne gotowanie ze współlokatorami to największa i najłatwiejsza oszczędność.',
          {
            note: {
              title: 'Praktyczna zasada',
              tone: 'stone',
              blocks: [
                'Przez pierwsze sześć miesięcy nie kupuj niczego, czego nie da się przewieźć rowerem. Brzmi głupio, ale działa: zmusza cię do odróżniania tego, czego potrzebujesz, od tego, na co masz ochotę, kiedy jeszcze nie masz zapasu.'
              ]
            }
          }
        ]
      },
      {
        when: 'Pierwszy tydzień',
        title: 'Rower',
        blocks: [
          'To pierwszy zakup, jaki trzeba zrobić, i ten, który najlepiej się zwraca z całej listy. Od **60 do 120 € z drugiej ręki**, i od tego momentu przestajesz zależeć od rozkładu busa firmy we wszystkim, co nie jest dojazdem do pracy.',
          'Kup go w *fietsenwinkel* z gwarancją albo na Marktplaats, czyli portalu z rzeczami używanymi w całym kraju. Dwie uwagi: **nie kupuj roweru na ulicy od kogoś, kto ci go tak po prostu proponuje** — prawie zawsze są kradzione, a ich kupno jest przestępstwem — i **wydaj 20 € na dobrą kłódkę**, bo kradzież rowerów to tam sport narodowy.',
          'Z rowerem zmienia się wszystko: robisz zakupy w tanim supermarkecie zamiast w drogim obok, jedziesz do urzędu gminy bez proszenia o przysługę i w niedzielę wychodzisz z zakwaterowania, nie zależąc od nikogo.'
        ]
      },
      {
        when: 'Miesiąc 6 do miesiąca 12',
        title: 'Papiery, które są warte pieniędzy',
        blocks: [
          'Zanim wydasz na samochód, zainwestuj w siebie. Holenderskie certyfikaty są tanie, zdobywa się je w kilka dni i **od razu podnoszą stawkę za twoją godzinę**. To inwestycja z najlepszym zwrotem z całej listy.',
          {
            ul: [
              '**Wózek widłowy (*heftruck*) i wózek wysokiego składowania (*reachtruck*).** Kurs jedno- lub dwudniowy. Wiele agencji za niego płaci, jeśli pracujesz kilka miesięcy i o to poprosisz. Poproś.',
              '**VCA.** To podstawowy certyfikat bezpieczeństwa pracy. Kosztuje niewiele, zdaje się go po kilku popołudniach nauki, a w niektórych branżach bez niego po prostu nie zatrudniają.',
              '**Niderlandzki.** Tu jest prawdziwa dźwignia. Nie trzeba mówić dobrze: wystarczy rozumieć polecenia i umieć odpowiedzieć, żeby odróżnić się od 90% obcokrajowców na twojej zmianie i być pierwszym do awansu. Zacznij od darmowej aplikacji w drodze do pracy i zapytaj, czy firma płaci za lekcje: wiele to robi.'
            ]
          },
          {
            note: {
              title: 'Dlaczego to jest przed samochodem',
              tone: 'sand',
              blocks: [
                'Samochód kosztuje cię pieniądze co miesiąc. Certyfikat oddaje ci je co miesiąc. Przy tym samym wysiłku kolejność ma znaczenie.'
              ]
            }
          }
        ]
      },
      {
        when: 'Miesiąc 8 do miesiąca 18',
        title: 'Samochód',
        blocks: [
          'Nie jest niezbędny, ale zmienia życie, jeśli praca jest daleko, jeśli pracujesz na nocne zmiany albo jeśli chcesz móc zmienić pracę bez zależności od tego, czy nowa firma zapewnia transport.',
          'Przyzwoity używany samochód kosztuje około **2000–4000 €**. Ważna nie jest ta liczba, tylko to, ile kosztuje jego utrzymanie, nawet gdy stoi:',
          {
            stats: [
              { value: '40–70 €/mies.', label: 'Obowiązkowe ubezpieczenie (*WA-verzekering*)' },
              { value: '30–70 €/mies.', label: 'Podatek drogowy (*wegenbelasting*), zależnie od masy i prowincji' },
              { value: '~50 €/rok', label: '*APK*, czyli tamtejszy przegląd techniczny' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Dolicz paliwo, które jest drogie. Licz się z realnym kosztem **150–250 € miesięcznie**, zanim w ogóle ruszysz. Jeśli to zjada twoje miesięczne oszczędności, to jeszcze nie czas.',
          {
            note: {
              title: 'Dwie rzeczy, o których ludzie dowiadują się za późno',
              tone: 'stone',
              blocks: [
                '**Prawo jazdy wydane w UE jest ważne** w Holandii bez żadnych formalności, dopóki jest ważne.',
                '**Przywiezienie samochodu z kraju ma haczyk.** Jeśli się tam zameldujesz, masz określony termin na zarejestrowanie go w Holandii, a to oznacza zapłatę podatku rejestracyjnego (*BPM*), który w wielu przypadkach kosztuje więcej niż sam samochód. Zanim przyjedziesz na swoich tablicach, sprawdź to w [Belastingdienst](https://www.belastingdienst.nl). Prawie każdemu taniej wychodzi kupno na miejscu.'
              ]
            }
          }
        ]
      },
      {
        when: 'Rok 1 do roku 2',
        title: 'Wyprowadzka z zakwaterowania agencji',
        blocks: [
          'To szczebel, który najbardziej czuć. Przestajesz dzielić pokój, twój dom przestaje zależeć od twojej umowy i zaczynasz żyć jak człowiek, a nie jak pracownik delegowany.',
          'Czego wymagają wynajmujący i dlaczego na początku jest trudno:',
          {
            ul: [
              '**Umowy o pracę**, im stabilniejszej, tym lepiej. Przy fazie A i klauzuli agencyjnej wiele razy usłyszysz „nie”.',
              '**Dochodu trzy- lub czterokrotnie wyższego niż czynsz.** To standardowy filtr i prawdziwy powód, dla którego cię nie biorą, a nie twój akcent.',
              '**Zameldowania** w gminie i wyciągów bankowych z ostatnich miesięcy.',
              '**Kaucji** (*borg*) w wysokości jednego lub dwóch czynszów, czasem plus opłaty dla agencji nieruchomości.'
            ]
          },
          {
            stats: [
              { value: '400–600 €/mies.', label: 'Pokój we wspólnym mieszkaniu, poza dużymi miastami' },
              { value: '800–1200 €/mies.', label: 'Kawalerka lub małe mieszkanie w średnim mieście' },
              { value: '1500 €+', label: 'To samo w Amsterdamie, Utrechcie lub Hadze' }
            ]
          },
          { cifra: window.RumboNorteCifras.nota },
          'Dwie rzeczy, z których prawie nikt nie korzysta: istnieje **państwowy dodatek mieszkaniowy** (*huurtoeslag*) dla osób o niskich dochodach, gdy czynsz nie przekracza określonego limitu; wnioskuje się o niego przez DigiD na [toeslagen.nl](https://www.toeslagen.nl) i nie jest przyznawany automatycznie. Są też **mieszkania socjalne** (*sociale huurwoning*), dużo tańsze, z kolejkami na lata: dlatego trzeba się zapisać już w pierwszym roku, nawet jeśli jeszcze ich nie potrzebujesz. Liczy się czas na liście.',
          { h4: 'Mieszkać w Niemczech i pracować w Holandii' },
          'Wiele osób pracujących przy granicy wynajmuje w końcu mieszkanie w Niemczech, w Nadrenii Północnej-Westfalii, bo **za te same pieniądze żyje się dużo lepiej**. To legalne i powszechne. Ale dowiedz się wcześniej, bo stajesz się pracownikiem przygranicznym (*grensarbeider*), a to zmienia dwie ważne rzeczy: **gdzie płacisz podatki** i **jak działa twoje ubezpieczenie zdrowotne** (potrzebny będzie formularz S1, żeby chodzić do lekarza w Niemczech z holenderskim ubezpieczeniem). To nic trudnego, ale trzeba to zrobić dobrze od początku.'
        ]
      },
      {
        when: 'Rok 1 do roku 2',
        title: 'Żeby zatrudniła cię bezpośrednio firma',
        blocks: [
          'Kiedy jesteś w agencji, firma, w której pracujesz, płaci za ciebie sporo więcej, niż ty dostajesz. Różnicę zatrzymuje agencja. Kiedy przechodzisz na umowę bezpośrednią, **część tej różnicy trafia do twojej kieszeni**, a do tego nie masz już pośrednika między sobą a pracodawcą.',
          'Jak to wygląda w praktyce: spędzasz miesiące w tej samej firmie, znają cię, sprawdzasz się i przychodzi moment, w którym bardziej opłaca im się zatrudnić cię niż dalej płacić agencji. Ten moment istnieje i przychodzi tylko wtedy, gdy sam do niego doprowadzisz.',
          'Co naprawdę się liczy, gdy decydują, kogo zostawić:',
          {
            ul: [
              '**Żebyś nie opuszczał zmian i przychodził na czas.** Brzmi banalnie. To dosłownie pierwszy filtr i odpada na nim wiele osób.',
              '**Żebyś rozumiał i był rozumiany.** Nawet łamanym angielskim. Kto się komunikuje, ten może koordynować.',
              '**Żebyś nauczył się więcej niż jednego stanowiska.** Kogoś, kto potrafi obsadzić trzy stanowiska, nie zastępuje się łatwo.',
              '**Żebyś to powiedział.** Porozmawiaj z bezpośrednim przełożonym i powiedz jasno, że chcesz zostać w firmie. Wiele awansów i umów nie przychodzi, bo nikt nie wiedział, że ich chcesz.'
            ]
          },
          {
            note: {
              title: 'Szczegół umowy, który warto znać',
              tone: 'sand',
              blocks: [
                'Agencje mają zwykle umowy z firmą-klientem dotyczące przejęcia pracownika: przez pewien czas zatrudnienie cię bezpośrednio kosztuje firmę rekompensatę, a po tym okresie już nie. Dlatego czasem odpowiedź brzmi „nie teraz, za kilka miesięcy”. **Zapytaj kiedy** i zapisz datę. Żadna legalna agencja nie może ci zabronić przyjęcia bezpośredniej oferty pracy.'
              ]
            }
          }
        ]
      },
      {
        when: 'Rok 2 do roku 4',
        title: 'Awans',
        blocks: [
          'W magazynie i produkcji drabina jest dość jasna i wspina się po niej szybciej, niż ludzie myślą, bo rotacja jest ogromna, a ci, którzy zostają, sami się wyróżniają.',
          {
            table: {
              caption: 'Typowa ścieżka w logistyce i produkcji',
              head: [
                'Stanowisko',
                'Czego trzeba'
              ],
              rows: [
                {
                  cells: [
                    'Pracownik / *orderpicker*',
                    'Punkt wejścia. Wystarczy się pojawić.'
                  ]
                },
                {
                  cells: [
                    'Operator wózka widłowego / *reachtrucka*',
                    'Holenderski certyfikat. Natychmiastowa podwyżka.'
                  ]
                },
                {
                  cells: [
                    'Specjalista lub kontrola jakości',
                    'Doświadczenie w procesie i angielski na poziomie roboczym.'
                  ]
                },
                {
                  cells: [
                    '*Voorman* / brygadzista',
                    'Tu już podstawowy niderlandzki. I zaufanie przełożonych.'
                  ]
                },
                {
                  cells: [
                    '*Teamleider* / kierownik zmiany',
                    'Niderlandzki, umowa bezpośrednia i lata w firmie.'
                  ],
                  kind: 'sub'
                }
              ]
            }
          },
          'Jest też droga, o której prawie żaden przyjezdny nie wie: **kształcenie dualne** (*BBL*). Pracujesz cztery dni, a jeden się uczysz, dostając wynagrodzenie, i kończysz z oficjalnym holenderskim dyplomem zawodowym. **Zwykle płaci za to firma.** To najszybszy sposób, żeby przestać być wymienną siłą roboczą, więc zapytaj o to, gdy tylko będziesz mieć umowę bezpośrednią.'
        ]
      },
      {
        when: 'Rok 3 do roku 5',
        title: 'Umowa na czas nieokreślony',
        blocks: [
          '*Vast contract*. To cel, który zamyka wszystkie pozostałe, i to nie ze względu na pensję — która rośnie niewiele — ale **ze względu na to, co odblokowuje**.',
          'Dochodzi się do niej dwiema drogami, opisanymi szczegółowo w [części poradnika o umowach](guia.html#contrato): przedłużając kolejne umowy na czas określony w tej samej firmie, aż zgodnie z prawem następna musi być na czas nieokreślony, albo dochodząc do ostatniej fazy w agencji.',
          'Co się zmienia w dniu, w którym ją podpisujesz:',
          {
            ul: [
              '**Wynajmujący odbierają telefon.** Z automatycznie odrzucanego stajesz się zwykłym kandydatem.',
              '**Możesz wziąć kredyt hipoteczny.** W Holandii można kupić mieszkanie na umowie na czas nieokreślony, a w wielu przypadkach miesięczna rata wychodzi niżej niż czynsz, który płaciłeś. Porozmawiaj z doradcą hipotecznym (*hypotheekadviseur*): pierwsza konsultacja jest zwykle bezpłatna.',
              '**Przestajesz żyć na wpół spakowany.** Tego nie mierzy się w euro, a to czuć najbardziej.'
            ]
          },
          'Prawie każdy, kto dochodzi aż tutaj, pomylił się na którymś z wcześniejszych szczebli. Ta strona jest napisana po to, żeby tobie zajęło to mniej czasu.'
        ]
      }
    ]
  },
  final: {
    id: 'independencia',
    eyebrow: 'Koniec drogi',
    title: [
      'Celem nie są pieniądze.',
      'Celem jest nie musieć o nich myśleć.'
    ],
    deck: 'Niezależność to możliwość powiedzenia „nie”. Zmianie, szefowi, złemu mieszkaniu, przedwczesnemu powrotowi.',
    blocks: [
      {
        lede: 'Kiedy ludzie wyobrażają sobie sukces za granicą, wyobrażają sobie kwotę na koncie. Z latami zdajesz sobie sprawę, że nie o to chodzi. Chodzi o dojście do punktu, w którym **jeden zły tydzień nie wywraca ci życia**: psuje ci się samochód i go naprawiasz, w domu wyskakuje coś nieprzewidzianego i to pokrywasz, i nie musisz nikogo prosić o pieniądze ani brać zmiany, której nie chcesz.'
      },
      'Tego wielu ludzi nie miało w swoim kraju, i to nie z braku chęci do pracy. To różnica między byciem zawsze o miesiąc od kłopotów a niebyciem. Nazywa się to spokojem i nie da się go kupić: buduje się go przez kilka lat, przez wiele nudnych tygodni z rzędu.',
      {
        pull: {
          text: 'Nie ma żadnej sztuczki. Osiąga się to pracą, nieprzepuszczaniem tego, co się zarabia, i skupieniem na tym, żeby rozwijać się jako człowiek i jako fachowiec.',
          by: 'Iván · Rumbo Norte'
        }
      },
      { h3: 'Trzy rzeczy, które odróżniają tych, którym się udaje, od tych, którzy wracają' },
      '**Wytrzymać pierwsze trzy miesiące.** Są zdecydowanie najgorsze: język, zimno, wspólny pokój, dziwne jedzenie i poczucie, że popełniłeś błąd. Prawie każdy, kto wraca, wraca w tym okresie. Ci, którzy go przetrwają, zostają.',
      '**Nie wydawać tego, co się zarabia.** Dobrze zarabiać i oszczędzać to dwie różne rzeczy i nie idą w parze. Dwie osoby mogą zarabiać tyle samo przez trzy lata, a jedna skończy z własnym mieszkaniem, a druga z pożyczką w styczniu.',
      '**Uczyć się czegoś co roku.** Certyfikat, język, nowe stanowisko. Kto w piątym roku robi dokładnie to samo co w pierwszym, zarabia prawie tyle samo co w pierwszym, a do tego jest pięć lat starszy.',
      {
        note: {
          title: 'I ostatnia szczera uwaga',
          tone: 'ink',
          blocks: [
            'Nie każdemu to się opłaca. Jesteś daleko od swoich, omijają cię urodziny i święta, a w listopadzie są niedziele, kiedy deszcz pada poziomo i zastanawiasz się, co ty tam robisz. To też jest część umowy, a nikt o tym nie mówi.',
            'Jeśli chcesz szybkich pieniędzy i wracać, są łatwiejsze sposoby. Ta strona jest dla tych, którzy myślą o zbudowaniu czegoś.'
          ]
        }
      }
    ]
  },
  cta: {
    eyebrow: 'Zacznij',
    title: [
      'Pierwszy szczebel',
      'to dobry start.',
      'Tu wchodzę ja.'
    ],
    text: [
      'Kolejne siedem zależy od ciebie. Pierwszy, czyli przyjazd ze świadomością, w co się pakujesz, i do legalnej agencji, to właśnie moja praca.',
      'Opowiedz mi o swojej sytuacji, a powiem ci, do jakich profili pasujesz, jak wyglądałyby u ciebie liczby, jakiego zapasu potrzebujesz i na co zwrócić uwagę przed podpisaniem czegokolwiek.'
    ],
    actions: [
      { label: 'Napisz na WhatsAppie', href: 'wa:' },
      { label: 'Wyślij zgłoszenie', href: './#candidatura' }
    ],
    foot: 'Najpierw przeczytaj [poradnik](guia.html). To on chroni cię przed kosztownymi błędami.'
  },
  legalNote: 'Kwoty i terminy na tej stronie są orientacyjne i nie stanowią obietnicy rezultatu.'
};
