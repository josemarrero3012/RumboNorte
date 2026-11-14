/* Elementy powtarzane na każdej stronie: menu i stopka (polski). */
window.RumboNorteContenido = window.RumboNorteContenido || {};
window.RumboNorteContenido.comun = {
  header: {
    markSrc: 'assets/logos/rumbo-norte-mark-reversed.webp',
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    homeHref: './',
    links: [
      { label: 'Start', href: './' },
      { label: 'Kierunki', href: './#destinos' },
      { label: 'Poradnik', href: 'guia.html' },
      { label: 'Cele', href: 'metas.html' },
      { label: 'O mnie', href: 'quienes-somos.html' }
    ],
    cta: { label: 'WhatsApp', href: 'wa:', icon: 'whatsapp' }
  },
  footer: {
    logoSrc: 'assets/logos/rumbo-norte-wordmark-reversed.webp',
    tagline: 'Rekrutacja bez obietnic',
    text: 'Rumbo Norte to niezależna usługa rekrutacyjna Ivána Guerry Arroyo. Wybiera kandydatów i za ich zgodą przedstawia ich certyfikowanym agencjom pracy tymczasowej w Holandii, Belgii i Niemczech. Nie jest agencją pracy tymczasowej ani pracodawcą kandydata i nie gwarantuje zatrudnienia. Dla kandydata jest zawsze bezpłatna.',
    columns: [
      {
        title: 'Sekcje',
        links: [
          { label: 'Start', href: './' },
          { label: 'Praktyczny poradnik', href: 'guia.html' },
          { label: 'Profile, których szukam', href: './#perfiles' },
          { label: 'Cele', href: 'metas.html' },
          { label: 'O mnie', href: 'quienes-somos.html' },
          { label: 'Wyślij zgłoszenie', href: './#candidatura' }
        ]
      },
      {
        title: 'Sprawdź i skontaktuj się',
        links: [
          { label: 'Rejestr SNA', href: 'https://www.normeringarbeid.nl' },
          { label: 'Rejestr SNF', href: 'https://www.normeringflexwonen.nl' },
          { label: 'ivan@proyectoholanda.com', href: 'mailto:ivan@proyectoholanda.com' },
          { label: 'WhatsApp', href: 'wa:' }
        ]
      }
    ],
    copy: '© 2026 Rumbo Norte',
    legal: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Polityka prywatności', href: 'privacidad.html' },
      { label: 'Cookies', href: 'privacidad.html#cookies' }
    ]
  }
};

window.RumboNorteCifras = {
  nota: 'Kwota orientacyjna, nie ostateczna. Zależy od agencji, która cię zatrudni, miasta, stanowiska i zakwaterowania.',
  aviso: 'Wszystkie kwoty na tej stronie są orientacyjne i nie są obietnicą. To, ile zarobisz i ile ci potrącą, ustala agencja, która zatrudni cię jako pracownika, i zależy to od miasta, stanowiska, godzin, zmian oraz zakwaterowania i jego rodzaju. Prawdziwe warunki poznasz dopiero wtedy, gdy agencja przekaże ci je na piśmie, i mogą one różnić się od tego przykładu.'
};
