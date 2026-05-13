import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, PlusIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Swiss Grid",
  description: "Wariant 9 — Swiss / International Style. Strict grid, sans-serif, zero ozdobników.",
};

export default function Example9() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-white text-black font-[IBM_Plex_Sans,Helvetica,Arial,sans-serif]">
      {/* Top bar */}
      <header className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-4 md:px-10">
          <Link href="/" className="col-span-3 flex items-center gap-3 text-base font-semibold tracking-tight md:col-span-2">
            <span className="grid size-8 place-items-center border border-black text-xs font-bold">M</span>
            MOA
          </Link>
          <nav className="col-span-9 flex flex-wrap items-center justify-end gap-x-6 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] md:col-span-10">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>
            ))}
            <Link href={c.nav.cta.href} className="bg-[#FF3B30] px-4 py-2 text-white">
              {c.nav.cta.label}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero — full-bleed photo + grid overlay */}
      <section className="relative border-b border-black">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image src={moaPhotos[1]} alt="Stoisko MOA" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
          </div>

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 pb-14 pt-10 md:px-10 md:pb-16 md:pt-12">
            <div className="col-span-12 mb-6 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
              <span>01 / Hero</span>
              <span className="hidden md:inline">{c.hero.eyebrow}</span>
              <span>2026</span>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h1 className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
                Unikatowe stoiska targowe, <span className="text-[#FF3B30]">które zostają w pamięci.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-black/80 md:text-lg">{c.hero.subheadline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={c.hero.primaryCta.href} className="inline-flex items-center gap-3 bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white">
                  {c.hero.primaryCta.label} <ArrowRightIcon className="size-4" />
                </Link>
                <a href={c.hero.secondaryCta.href} className="border border-black bg-white px-6 py-3 text-sm uppercase tracking-[0.15em] hover:bg-black hover:text-white">{c.hero.secondaryCta.label}</a>
              </div>
            </div>

            {/* Award column */}
            <aside className="col-span-12 mt-8 md:col-span-4 md:mt-16">
              <div className="grid grid-cols-2 gap-px bg-black">
                {c.hero.trustBar.badges.map((b, i) => (
                  <div key={b.name} className={`p-4 ${i % 2 === 0 ? "bg-black text-white" : "bg-white"}`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Award</p>
                    <p className="mt-2 text-sm font-semibold leading-tight">{b.name}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-right text-[11px] uppercase tracking-[0.2em] text-black/60">↳ Grupa Azoty · realizacja MOA</p>
            </aside>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-20 md:px-10">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
            <span>02 / O nas</span>
            <span>—</span>
            <span>{c.about.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-4xl font-bold leading-[1.02] tracking-[-0.02em] md:col-span-8 md:text-6xl">{c.about.headline}</h2>
          <div className="col-span-12 mt-8 space-y-4 text-base leading-relaxed text-black/80 md:col-span-7 md:col-start-1">
            <p className="text-lg">{c.about.lead}</p>
            {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="col-span-12 mt-8 grid grid-cols-2 gap-px self-start bg-black md:col-span-5 md:col-start-8 md:mt-8">
            {c.about.stats.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <p className="text-5xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-20 md:px-10">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
            <span>03 / Nagrody</span>
            <span>—</span>
            <span>{c.awards.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-4xl font-bold leading-[1.02] tracking-[-0.02em] md:text-6xl">{c.awards.headline}</h2>
          <div className="col-span-12 mt-12 grid grid-cols-12 gap-4">
            {c.awards.items.map((a) => (
              <article key={a.name} className="col-span-12 border-t-4 border-black pt-4 md:col-span-3">
                <p className="text-7xl font-bold leading-none">{a.year}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#FF3B30]">{a.level}</p>
                <h3 className="mt-1 text-xl font-semibold leading-tight">{a.name}</h3>
                <p className="mt-3 text-xs text-black/70">{a.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/80">{a.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-20 md:px-10">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
            <span>04 / Usługi</span>
            <span>—</span>
            <span>{c.services.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-4xl font-bold leading-[1.02] tracking-[-0.02em] md:col-span-8 md:text-6xl">{c.services.headline}</h2>
          <p className="col-span-12 mt-6 text-base text-black/70 md:col-span-7">{c.services.subheadline}</p>
          <ul className="col-span-12 mt-12 grid grid-cols-1 gap-px bg-black md:grid-cols-3">
            {c.services.items.map((s, i) => (
              <li key={s.id} className="bg-white p-8">
                <div className="flex items-baseline justify-between">
                  <ServiceIcon name={s.icon} className="size-7 text-black" />
                  <p className="text-xs uppercase tracking-[0.18em] text-black/50">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <h3 className="mt-8 text-2xl font-bold leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{s.description}</p>
                <ul className="mt-5 space-y-1 border-t border-black/20 pt-5 text-xs text-black/80">
                  {s.features.map((f) => <li key={f}>— {f}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-b border-black bg-black text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-20 md:px-10">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-white/60">
            <span>05 / Proces</span>
            <span>—</span>
            <span>{c.process.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-4xl font-bold leading-[1.02] tracking-[-0.02em] md:col-span-9 md:text-6xl">{c.process.headline}</h2>
          <ol className="col-span-12 mt-12 grid grid-cols-1 gap-px bg-white/20 md:grid-cols-5">
            {c.process.steps.map((s) => (
              <li key={s.number} className="bg-black p-6">
                <p className="text-5xl font-bold leading-none">{s.number}</p>
                <h3 className="mt-6 text-base font-semibold leading-tight">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#FF3B30]">{s.duration}</p>
                <p className="mt-4 text-xs leading-relaxed text-white/70">{s.description}</p>
                <ul className="mt-4 space-y-0.5 text-[11px] text-white/60">
                  {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-20 md:px-10">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
            <span>06 / FAQ</span>
            <span>—</span>
            <span>{c.faq.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-4xl font-bold leading-tight md:col-span-5 md:text-5xl">{c.faq.headline}</h2>
          <p className="col-span-12 mt-6 text-base text-black/70 md:col-span-4 md:col-start-1">{c.faq.subheadline}</p>
          <div className="col-span-12 md:col-span-7 md:col-start-6 md:row-start-2">
            <ul className="divide-y divide-black border-y border-black">
              {c.faq.items.map((q, i) => (
                <li key={q.question}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <p className="flex items-baseline gap-3">
                        <span className="text-xs font-mono text-black/50">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-lg font-semibold leading-tight">{q.question}</span>
                      </p>
                      <PlusIcon className="mt-1 size-5 shrink-0 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-4 max-w-2xl pl-8 text-base leading-relaxed text-black/80">{q.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="border-b border-black bg-[#FF3B30] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-24 md:px-10 md:py-32">
          <div className="col-span-12 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-white/80">
            <span>07 / Kontakt</span>
            <span>—</span>
            <span>{c.cta.primary.eyebrow}</span>
          </div>
          <h2 className="col-span-12 mt-8 text-balance text-5xl font-bold leading-[1.02] tracking-tight md:col-span-8 md:text-8xl">{c.cta.primary.headline}</h2>
          <p className="col-span-12 mt-8 max-w-xl text-lg leading-relaxed md:col-span-8">{c.cta.primary.subheadline}</p>
          <div className="col-span-12 mt-10 flex flex-wrap items-center gap-4 md:col-span-8">
            <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-3 bg-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              {c.cta.primary.primaryButton.label} <ArrowRightIcon className="size-4" />
            </Link>
            <a href={c.cta.primary.secondaryButton.href} className="border border-white px-6 py-4 text-sm font-medium uppercase tracking-[0.15em]">
              {c.cta.primary.secondaryButton.label}
            </a>
          </div>
          <div className="col-span-12 mt-10 grid grid-cols-1 gap-px bg-white/30 md:col-span-4 md:col-start-9 md:row-start-3">
            {c.contact.channels.map((ch) => (
              <a key={ch.value} href={ch.href} className="block bg-[#FF3B30] p-5 transition hover:bg-[#cc2e25]">
                <p className="text-xs uppercase tracking-[0.18em] opacity-80">{ch.label}</p>
                <p className="mt-1 text-2xl font-bold">{ch.value}</p>
              </a>
            ))}
            <div className="bg-[#FF3B30] p-5">
              <p className="text-xs uppercase tracking-[0.18em] opacity-80">{c.contact.address.label}</p>
              <p className="mt-1 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-6 py-12 md:px-10">
          <div className="col-span-12 md:col-span-4">
            <p className="text-2xl font-bold tracking-tight">MOA Masters of Arts</p>
            <p className="mt-3 text-sm text-black/70">{c.footer.tagline}</p>
          </div>
          {c.footer.columns.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-black/60">{col.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:underline">{l.label}</a></li>)}
              </ul>
            </div>
          ))}
          <div className="col-span-12 mt-10 flex flex-col gap-2 border-t border-black pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
