// Co wie asystent (polski): krótkie karty wzięte z samej strony. Ta sama struktura i te same id co
// js/asistente-datos.js. Każda karta ma słowa kluczowe, pytanie na przycisku, odpowiedź i link do
// pełnej treści. Znaczniki w tekście: **pogrubienie** i [link](adres); «wa:» otwiera WhatsApp.

// Słowa, które nie pomagają znaleźć karty (pomija się je przy wyszukiwaniu). Bez polskich znaków,
// bo wyszukiwarka i tak je usuwa.
export const STOP = 'a i w we z ze na do od o u po za przy dla bez nad pod przez czy jak jaki jaka jakie co to ten ta te tego tej jest sa byc byl bedzie mam masz ma mamy maja moge mozna musze trzeba chce chcialbym chcialabym prosze sie mi mnie ja ty ci cie on ona my wy oni ich jego jej nie tak ale lub albo tez juz jeszcze bardzo tylko ile gdzie kiedy dlaczego czym czego jesli wiedziec powiedz';

export const SALUDO = 'Cześć, jestem kompasem Rumbo Norte. Odpowiadam na podstawie tego, co jest na stronie Ivána: pensja, zakwaterowanie, wymagania, BSN, agencje… Pytaj, o co chcesz.';

export const NO_SE = 'Tego nie ma na stronie, a wolę niczego nie wymyślać. Zapytaj Ivána na WhatsAppie: odpowie ci osobiście.';

export const PENSANDO = ['Szukam kierunku', 'Przeglądam poradnik', 'Sprawdzam pytania'];

export const SUGERENCIAS = ['gratis', 'neto', 'alojamiento', 'agencia'];

export const REQUISITOS = {
  start: 'Czy spełniam wymagania?',
  steps: [
    { q: 'Czy masz ukończone 21 lat?', si: 'Tak, mam 21 lat lub więcej', no: 'Jeszcze nie' },
    { q: 'Czy masz obywatelstwo lub paszport Unii Europejskiej?', si: 'Tak, z UE', no: 'Nie' },
    { q: 'Czy twój angielski jest co najmniej na poziomie B1, czyli pozwala prowadzić rozmowę?', si: 'Tak, B1 lub wyżej', no: 'Poniżej B1' }
  ],
  ok: '**Spełniasz wszystkie trzy wymagania.** Następny krok to rozmowa z Ivánem: potwierdzi twoje dane, zapyta o doświadczenie i zada ci kilka pytań po angielsku. Wiadomość jest już napisana.',
  okMessage: 'Cześć Iván. Zrobiłem test na stronie: mam 21 lat lub więcej, paszport UE i angielski B1. Interesuje mnie praca na północy Europy.',
  no: 'Z tego, co mówisz, **nie jest spełnione: {fallo}**. Wszystkie trzy wymagania są niezbędne i nie ma od nich wyjątków, więc teraz Iván nie mógłby przedstawić cię do swoich ofert. Jeśli twoja sytuacja się zmieni, ta strona tu będzie.',
  fallos: ['ukończone 21 lat', 'obywatelstwo lub paszport UE', 'angielski B1 komunikatywny'],
  whatsapp: 'Napisz do Ivána',
  form: 'Wolę formularz'
};

export const FICHAS = [
  {
    id: 'hola',
    keys: 'czesc hej witam dzien dobry pomoc pomocy',
    text: 'Cześć! Zapytaj mnie o pensję, zakwaterowanie, wymagania, BSN albo o to, jak sprawdzić agencję. Jeśli wolisz, sprawdź w minutę, czy spełniasz wymagania.',
    saludo: true
  },
  {
    id: 'gratis',
    label: 'Czy to coś kosztuje?',
    keys: 'placic placenie oplata oplaty koszt kosztuje darmowe bezplatne prowizja cena euro pieniadze',
    text: '**Nie. Ani euro, w żadnym momencie.** Ani Ivánowi, ani agencji: żadnej opłaty, prowizji ani potrącenia z wypłaty. W Holandii prawo zabrania agencjom pobierania od pracownika opłat za znalezienie mu pracy. Jeśli ktoś żąda od ciebie pieniędzy, nie jest legalną agencją.',
    href: 'quienes-somos.html',
    link: 'Czego Iván nie robi'
  },
  {
    id: 'requisitos',
    label: 'Jakie są wymagania?',
    keys: 'wymagania wymaganie warunki wiek lat obywatelstwo paszport europejski ue pasuje spelniam',
    text: 'Są trzy, **niezbędne i bez wyjątków**: ukończone **21 lat**, **obywatelstwo lub paszport Unii Europejskiej** i co najmniej **angielski B1 komunikatywny**. Pomaga prawo jazdy kat. B (najlepiej z samochodem), możliwość szybkiego wyjazdu i chęć zostania na prawdziwy sezon.',
    href: './#perfiles',
    link: 'Zobacz profile',
    flow: true
  },
  {
    id: 'neto',
    label: 'Ile się zarabia?',
    keys: 'godziny zmiany zarabia zarobki zarobic pensja wynagrodzenie wyplata netto brutto pasek miesiac miesiecznie stawka minimalna',
    text: 'Przy 40 godzinach tygodniowo i po odliczeniu zakwaterowania na konto wpływa zwykle **od 1250 do 2200 € miesięcznie**. To nie jest stała ani gwarantowana kwota: zależy od agencji, stanowiska, miasta, nadgodzin i zakwaterowania. Na stanowiskach bez kwalifikacji płaci się płacę minimalną: w Holandii dla osób od 21. roku życia **15,29 € brutto za godzinę od 1 stycznia 2027 r.** (14,99 € do 31 grudnia 2026 r.).',
    href: 'guia.html#nomina',
    link: 'Pasek wypłaty, linijka po linijce'
  },
  {
    id: 'vakantiegeld',
    label: 'Co to jest vakantiegeld?',
    keys: 'vakantiegeld urlop urlopowy wakacje dodatek rezerwy maj',
    text: 'To dodatek urlopowy: **8,33% kwoty brutto**. Nie widzisz go co tydzień, bo odkłada się osobno, razem z rezerwami urlopowymi, i dostajesz go, kiedy o niego poprosisz, albo w maju. Jest twój.',
    href: 'guia.html#nomina',
    link: 'Zobacz pasek wypłaty w poradniku'
  },
  {
    id: 'alojamiento',
    label: 'Ile kosztuje zakwaterowanie?',
    keys: 'zakwaterowanie mieszkanie mieszkac dom pokoj pokoje nocleg spanie wspolny domek potracaja tydzien snf czynsz',
    text: 'Orientacyjnie **od 80 do 150 € tygodniowo za osobę**, prawie zawsze we wspólnym pokoju. Jest limit prawny: potrącenie **nie może przekroczyć 25% płacy minimalnej** i można je odliczać z wypłaty tylko wtedy, gdy zakwaterowanie ma certyfikat **SNF**. Zapytaj na piśmie, ile kosztuje, ile osób jest w pokoju i jak daleko jest do pracy.',
    href: 'guia.html#alojamiento',
    link: 'Zakwaterowanie w poradniku'
  },
  {
    id: 'sin-casa',
    label: 'Jeśli stracę pracę, czy stracę mieszkanie?',
    keys: 'strace stracic zwolnienie zwolnia zwolnili wyrzuca bez dachu mieszkania dom konczy koniec umowy ulica',
    text: 'Szczera odpowiedź: **w wielu przypadkach tak**, bo zakwaterowanie jest powiązane z umową. W fazie A, jeśli firma przestaje cię potrzebować, umowa może się skończyć prawie z dnia na dzień. Przed podpisaniem **zapytaj na piśmie, ile dni masz na opuszczenie pokoju**. Poważna agencja odpowie bez problemu.',
    href: 'guia.html#contrato',
    link: 'Umowy wyjaśnione'
  },
  {
    id: 'contrato',
    label: 'Jaką umowę dostanę?',
    keys: 'umowa umowy faza fazy uitzendbeding nieokreslony okreslony staly bezposrednia agencja podpisac',
    text: 'W agencji są trzy fazy. **Faza A**, mniej więcej pierwszy rok: maksymalna elastyczność dla firmy i zwykle klauzula agencyjna (*uitzendbeding*). **Faza B**: umowy na czas określony z datą zakończenia, nie mogą cię już zwolnić z dnia na dzień. **Faza C**: umowa na czas nieokreślony z agencją, odpowiednik stałego etatu.',
    href: 'guia.html#contrato',
    link: 'Wszystkie umowy w poradniku'
  },
  {
    id: 'colchon',
    label: 'Ile pieniędzy potrzebuję na start?',
    keys: 'pieniadze start poczatek oszczednosci zapas pierwsza wyplata podroz wydatki kaucja tygodnie koszty zycia',
    text: 'Licz **od 800 do 1200 €** zapasu: podróż, jedzenie przez pierwsze tygodnie, kaucja, jeśli jej wymagają, i pierwsze wydatki. Zwykle **wypłata jest tygodniowa**, a pierwsze pieniądze przychodzą po dwóch tygodniach od rozpoczęcia pracy. Wyjazd bez zapasu to najdroższy błąd.',
    href: 'guia.html#coste-vida',
    link: 'Koszty życia'
  },
  {
    id: 'viaje',
    label: 'Kto płaci za lot?',
    keys: 'lot samolot bilet podroz wyjazd lotnisko odbior transfer transport dojazd przyjazd bus',
    text: '**Lot i dojazd do biura agencji lub do zakwaterowania opłacasz sam.** Niektóre agencje odbierają z lotniska, ale nie wszystkie. Na miejscu zakwaterowanie i transport do pracy organizuje agencja, a ich koszt jest potrącany z pensji.',
    href: './#proceso',
    link: 'Proces krok po kroku'
  },
  {
    id: 'idiomas',
    label: 'Czy muszę mówić po angielsku?',
    keys: 'angielski jezyk jezyki niderlandzki holenderski mowic poziom b1 b2 niemiecki francuski',
    text: '**Po angielsku tak: B1 komunikatywny jest obowiązkowy przy każdej ofercie.** Iván sprawdza go podczas rozmowy, zadając kilka pytań po angielsku. Potrzebujesz go do instrukcji bezpieczeństwa, zmian i rozmów z przełożonymi. Niderlandzkiego prawie nikt na początku nie wymaga, ale to on robi różnicę, jeśli zostaniesz.',
    href: './#preguntas',
    link: 'Więcej częstych pytań'
  },
  {
    id: 'carnet',
    label: 'Czy potrzebne jest prawo jazdy?',
    keys: 'prawo jazdy samochod auto kategoria b c d kod 95 ciezarowka autobus wozek widlowy heftruck',
    text: 'Nie jest obowiązkowe, ale **sporo zmienia**: wiele zakwaterowań jest w strefach przemysłowych albo w małych miejscowościach. Prawo jazdy z UE jest ważne w Holandii bez formalności. Dla **kierowców ciężarówek i autobusów** zawodowe prawo jazdy (C, C+E lub D) i kod 95 są obowiązkowe.',
    href: './#preguntas',
    link: 'Więcej częstych pytań'
  },
  {
    id: 'bsn',
    label: 'Co to jest BSN?',
    keys: 'bsn burgerservicenummer numer identyfikacyjny gemeente urzad gminy rni meldunek rejestracja dokumenty',
    text: '**BSN** to holenderski numer identyfikacyjny obywatela: bez niego nie dostaniesz normalnie wypłaty ani ubezpieczenia zdrowotnego. Wnioskuje się o niego po umówieniu wizyty w urzędzie gminy (*gemeente*) albo w biurze RNI, jeśli zostajesz krócej niż cztery miesiące. **Jest bezpłatny: nikt nie może pobierać od ciebie opłat za jego załatwienie.**',
    href: 'guia.html#bsn',
    link: 'BSN krok po kroku'
  },
  {
    id: 'agencia',
    label: 'Skąd wiem, czy agencja jest legalna?',
    keys: 'agencja legalna wiarygodna oszustwo powazna sprawdzic weryfikacja rejestr sna snf naciagacze certyfikowana',
    text: 'W Holandii sprawdza się to bezpłatnie w dwóch publicznych rejestrach: **SNA** ([normeringarbeid.nl](https://www.normeringarbeid.nl)), który kontroluje podatki i składki, oraz **SNF** ([normeringflexwonen.nl](https://www.normeringflexwonen.nl)), który certyfikuje zakwaterowanie. Wyszukaj dokładną nazwę prawną agencji: jeśli jej nie ma, zatrzymaj się.',
    href: 'guia.html#verificar',
    link: 'Jak sprawdzić agencję'
  },
  {
    id: 'puestos',
    label: 'Jakie są prace?',
    keys: 'kierowca szofer stanowiska praca prace oferty zatrudnienie branza branze profile magazyn logistyka szklarnie sprzatanie spozywcza produkcja budowa metal',
    text: 'Najczęściej poszukiwane profile: **logistyka i magazyn**, **kierowcy ciężarówek i autobusów**, **produkcja spożywcza**, **rolnictwo i szklarnie** (bardzo sezonowo) oraz **sprzątanie przemysłowe**. Budownictwo i metal wymagają udokumentowanego doświadczenia. Co jest otwarte teraz, powie ci Iván na WhatsAppie, bo zmienia się co tydzień.',
    href: './#perfiles',
    link: 'Zobacz profile'
  },
  {
    id: 'pais',
    label: 'Który kraj jest dla mnie?',
    keys: 'kraj kraje holandia niderlandy belgia niemcy lepszy najlepszy kierunek dokad',
    text: '**W większości przypadków Holandia:** tam jest prawie cała oferta i tam system jest najbardziej sprawdzony. Belgia jest bardzo podobna, a jeśli mówisz po francusku, to plus. **Niemcy dobrze płacą za doświadczenie w przemyśle i metalu**, ale niemiecki liczy się bardziej. We wszystkich trzech krajach angielski B1 jest obowiązkowy.',
    href: './#destinos',
    link: 'Zobacz kierunki'
  },
  {
    id: 'pareja',
    label: 'Czy mogę jechać z partnerem albo z przyjacielem?',
    keys: 'partner partnerka przyjaciel przyjaciolka chlopak dziewczyna zona maz razem para rodzina brat siostra',
    text: 'Tak, i jest łatwiej. Ale **to, że zatrudnią was w tym samym czasie, nie gwarantuje, że zakwaterują was razem ani że będziecie mieć tę samą zmianę**. Jeśli to dla was warunek, powiedz o tym Ivánowi w pierwszej wiadomości: tak przedstawi to agencji i poprosi o potwierdzenie na piśmie.',
    href: './#preguntas',
    link: 'Więcej częstych pytań'
  },
  {
    id: 'entrevista',
    label: 'O co pytają na rozmowie?',
    keys: 'rozmowa kwalifikacyjna pierwsza pytaja pytania telefon dowod dokumenty',
    text: 'Najpierw trzy wymagania: wiek, obywatelstwo i angielski. Potem twoje doświadczenie, czy masz prawo jazdy, od kiedy możesz wyjechać i czy jedziesz sam, czy z kimś. Na koniec kilka pytań po angielsku. **W tej pierwszej rozmowie nikt nie prosi o dowód osobisty ani o żaden dokument.**',
    href: './#proceso',
    link: 'Cały proces'
  },
  {
    id: 'plazos',
    label: 'Ile to wszystko trwa?',
    keys: 'trwa czas termin terminy szybko wkrotce tygodnie proces kroki',
    text: 'Zależy od sezonu i twojego profilu, więc konkretna liczba byłaby kłamstwem. Prawdziwa kolejność: wymagania i rozmowa; jeśli przejdziesz, rejestrujesz się na platformie dla kandydatów z CV po angielsku i dostajesz **trzy oferty**. Od tego momentu decyduje agencja.',
    href: './#proceso',
    link: 'Proces krok po kroku'
  },
  {
    id: 'ivan',
    label: 'Kim jest Iván?',
    keys: 'ivan kim jestes rekruter osoba kto stoi firma',
    text: 'Iván Guerra Arroyo jest niezależnym rekruterem: wybiera kandydatów w Hiszpanii i za twoją zgodą przedstawia ich certyfikowanym agencjom pracy tymczasowej w Holandii, Belgii i Niemczech. Nie jest agencją ani twoim pracodawcą i nie gwarantuje zatrudnienia.',
    href: 'quienes-somos.html',
    link: 'Jego historia'
  },
  {
    id: 'metas',
    label: 'Co można tam osiągnąć?',
    keys: 'cele osiagnac oszczedzac oszczednosci przyszlosc zostac samochod wynajem wlasne dlugoterminowo',
    text: 'Oszczędzanie, wyprowadzka z zakwaterowania agencji, zakup samochodu, wynajem własnego mieszkania, umowa bezpośrednio z firmą i umowa na czas nieokreślony. Wszystko jest w Celach, z prawdziwymi kwotami i terminami.',
    href: 'metas.html',
    link: 'Zobacz Cele'
  },
  {
    id: 'contacto',
    label: 'Jak się zgłosić?',
    keys: 'zglosic zgloszenie zapisac zapisy aplikowac kontakt napisac whatsapp telefon email formularz wyslac cv',
    text: 'Najszybciej przez **WhatsApp**: Iván odpisuje osobiście i w dziesięć minut wiecie, czy jest coś dla ciebie. Jeśli wolisz zostawić to na piśmie, wypełnij formularz zgłoszeniowy, a on do ciebie napisze. Bez telefonów sprzedażowych i bez newslettera.',
    href: './#candidatura',
    link: 'Przejdź do formularza',
    whatsapp: true
  }
];
