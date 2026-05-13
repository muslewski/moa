import Link from "next/link";

const examples = [
  { num: 1, name: "Minimalism", desc: "Skandynawska cisza. Dużo światła, jeden akcent, czcionka prowadzi opowieść.", palette: ["#FAFAFA", "#0A0A0A", "#E2231A"] },
  { num: 2, name: "Brutalism", desc: "Surowy, hałaśliwy, bez kompromisów. Czerń, czerwień, ostre cienie.", palette: ["#FFFF00", "#000000", "#E2231A"] },
  { num: 3, name: "Glassmorphism", desc: "Szkło, blur i fotorealizm. Premium dla marek high-end.", palette: ["#1E3A8A", "#FFFFFF", "#60A5FA"] },
  { num: 4, name: "Bento Grid", desc: "Asymetryczne kafle jak na keynote'cie Apple'a. Każda informacja w swojej skrzynce.", palette: ["#F5F5F4", "#1C1917", "#EA580C"] },
  { num: 5, name: "Dark Mode", desc: "Wyrafinowany ciemny motyw, neonowe akcenty. Kino premium.", palette: ["#0B0B0F", "#FACC15", "#E2231A"] },
  { num: 6, name: "Claymorphism", desc: "Miękkie pastelowe formy 3D, przyjazne, optymistyczne.", palette: ["#FCE7F3", "#C4B5FD", "#FBBF24"] },
  { num: 7, name: "Neumorphism", desc: "Tłoczone, monochromatyczne, taktylne. Zen dla designerskiego oka.", palette: ["#E6E9EF", "#94A3B8", "#0F172A"] },
  { num: 8, name: "Editorial / Magazine", desc: "Duża typografia, asymetria, layout jak w katalogu galerii.", palette: ["#FBF9F2", "#1A1A1A", "#9B2C2C"] },
  { num: 9, name: "Swiss Grid", desc: "Strict modernist grid, Helvetica DNA, zero ozdobników.", palette: ["#FFFFFF", "#000000", "#FF3B30"] },
  { num: 10, name: "Art-Deco", desc: "Geometria, złoto, symetria. Stoisko jak teatr lat 20.", palette: ["#0E1118", "#D4AF37", "#F9E79F"] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">MOA Masters of Arts</p>
            <h1 className="mt-1 font-[Inter] text-2xl font-semibold tracking-tight md:text-3xl">
              10 koncepcji homepage
            </h1>
          </div>
          <p className="hidden text-sm text-neutral-500 md:block">localhost:4321/example-1 … /example-10</p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm text-neutral-500">
            Każdy przykład używa tych samych treści z <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs">./content/*.json</code>.
            Różnice są wyłącznie w warstwie wizualnej — typografia, kolor, układ, motion. Wszystkie po polsku.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <li key={ex.num}>
              <Link
                href={`/example-${ex.num}`}
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:ring-neutral-900"
              >
                <div className="flex h-32 items-stretch">
                  {ex.palette.map((c) => (
                    <div key={c} className="flex-1" style={{ backgroundColor: c }} aria-hidden />
                  ))}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                      Example {String(ex.num).padStart(2, "0")}
                    </p>
                    <span className="text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-900">→</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">{ex.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{ex.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-neutral-200 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-xs text-neutral-500 md:flex-row md:items-center">
          <p>© 2026 MOA Masters of Arts sp. z o.o. — wszystkie koncepcje są demonstracyjne.</p>
          <p>Built with Next.js 16 · Tailwind v4 · realne zdjęcia z Google Maps + picsum.photos</p>
        </div>
      </footer>
    </main>
  );
}
