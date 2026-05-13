# MOA Masters of Arts — Content Pack

Polskie treści gotowe do podpięcia pod homepage MOA Masters of Arts sp. z o.o.

## Struktura

Każda sekcja strony to osobny plik JSON. Pliki są niezależne — można je ładować pojedynczo, podpiąć pod CMS lub zaimportować jako moduł w Next.js / Astro / Nuxt.

```
content/
├── sections.json       # mapa wszystkich sekcji + priorytety (easy wins)
├── site.json           # metadane, SEO, marka
├── nav.json            # górna nawigacja + CTA
├── hero.json           # sekcja powitalna
├── about.json          # O nas + wartości + liczby
├── services.json       # 6 usług
├── awards.json         # 4 międzynarodowe nagrody
├── process.json        # 5 kroków design thinking
├── industries.json     # branże, w których działamy
├── portfolio.json      # struktura realizacji (do uzupełnienia)
├── team.json           # zespół (do uzupełnienia zdjęciami)
├── testimonials.json   # opinie klientów (do zebrania)
├── faq.json            # 10 pytań i odpowiedzi
├── cta.json            # CTA main / inline / sticky / newsletter
├── contact.json        # kontakt + formularz briefu
└── footer.json         # stopka + dane firmy
```

## Easy wins na start

Sekcje, w których treści są kompletne i mogą iść na produkcję od razu — bez czekania na klienta:

1. **Hero** — mocny komunikat + trust bar z 4 nagrodami
2. **Nagrody** — Red Dot 2017, iF 2018, A'Design 2019 Platinum, German Design 2020
3. **Usługi** — 6 obszarów z bullet pointami
4. **Proces** — 5 kroków z czasem trwania i deliverables
5. **O nas** — historia + wartości + statystyki
6. **Branże** — 8 sektorów
7. **FAQ** — 10 typowych pytań klientów
8. **CTA + Kontakt + Stopka** — komplet danych firmowych

Pełny porządek priorytetów: `sections.json`.

## Do uzupełnienia przez klienta

- **Portfolio** — zdjęcia i opisy realizacji (struktura gotowa)
- **Zespół** — fotografie i krótkie bio członków
- **Opinie** — autentyczne cytaty + zgody klientów

## Dane firmy (źródło)

- Nazwa: MOA Masters of Arts sp. z o.o.
- Adres: ul. Krzysztofa Kolumba 2, 86-032 Niemcz
- KRS: 0000667795 · NIP: 9721126345 · REGON: 300209736
- Tel: +48 501 027 234
- E-mail: office@moa.pl
- Założono: 2006
- Facebook: https://www.facebook.com/p/MOA-Masters-of-Arts-100054668850384/
- PDF firmowy (źródłowy): http://share.moa.pl/moa_label_2023.pdf

## Konwencje

- Język: polski (`pl-PL`)
- Ścieżki obrazów względne od `/public/images/...` (do dostosowania pod framework)
- W `nav` i `cta` linki używają kotwic `#sekcja` — łatwe do zamiany na podstrony
- Formularz kontaktowy gotowy do podpięcia pod dowolny backend (Resend, Formspree, custom API)

## Następne kroki

1. Wstępna akceptacja treści przez klienta (1 runda poprawek)
2. Skompletowanie zdjęć (portfolio + zespół)
3. Zebranie 3–5 opinii klientów (z zgodami)
4. Publikacja Polityki prywatności i Regulaminu (linki w `footer.json`)
