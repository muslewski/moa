import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowUpRightIcon, PlusIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Editorial Magazine",
  description: "Wariant 8 — Editorial. Duża typografia, asymetria, layout jak w katalogu galerii.",
};

export default function Example8() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-[#F4EFE6] text-stone-900 font-[Fraunces,Georgia,serif]">
      {/* Masthead */}
      <header className="border-b-2 border-stone-900">
        <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 md:px-10 md:py-4">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.25em]">
            <p>Vol. 18 · 2026</p>
            <p className="hidden sm:inline">Numer specjalny — Bydgoszcz / Niemcz</p>
            <p>Polska / EU</p>
          </div>
        </div>
        <div className="border-y-2 border-stone-900">
          <div className="mx-auto max-w-screen-xl px-4 py-5 text-center sm:px-6 sm:py-6 md:px-10">
            <h1 className="font-[DM_Serif_Display,serif] text-3xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">MOA · Masters of Arts</h1>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">Unikatowe stoiska targowe · Pracownia projektowa od 2006</p>
          </div>
        </div>
        <nav className="border-b-2 border-stone-900">
          <ul className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-3 text-[10px] uppercase tracking-[0.2em] sm:gap-x-8 sm:px-6 sm:text-xs sm:tracking-[0.25em] md:px-10">
            {c.nav.primary.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:underline">{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero — magazine cover */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">№ 01 · {c.hero.eyebrow}</p>
            <h2 className="mt-5 font-[DM_Serif_Display,serif] text-[clamp(36px,8vw,108px)] leading-[0.95] tracking-tight sm:mt-6 sm:leading-[0.92]">
              Unikatowe stoiska targowe, które <em className="font-[Fraunces] italic text-[#9B2C2C]">zostają w pamięci.</em>
            </h2>
            <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
              <p className="font-[Inter] text-base leading-relaxed text-stone-700">
                <span className="float-left mr-2 font-[DM_Serif_Display] text-5xl leading-[0.85] text-stone-900 sm:text-6xl">M</span>
                OA Masters of Arts to interdyscyplinarne biuro projektowe założone w 2006 roku. {c.hero.subheadline}
              </p>
              <div className="font-[Inter] text-sm leading-relaxed text-stone-600">
                <p className="border-l-2 border-stone-900 pl-4 italic">
                  „Po raz pierwszy w ponad 60-letniej historii Red Dot polska firma otrzymuje nagrodę w kategorii Fair Stands."
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">— Sztuka Wnętrza, 2017</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
              <Link href={c.hero.primaryCta.href} className="inline-flex items-center gap-2 border-2 border-stone-900 bg-stone-900 px-5 py-3 font-[Inter] text-xs font-semibold uppercase tracking-wider text-[#F4EFE6] sm:gap-3 sm:px-7 sm:text-sm">
                {c.hero.primaryCta.label} <ArrowUpRightIcon className="size-4" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="font-[Inter] text-xs uppercase tracking-wider underline-offset-4 hover:underline sm:text-sm">{c.hero.secondaryCta.label} →</a>
            </div>
          </div>
          <figure className="md:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image src={moaPhotos[2]} alt="MOA realizacja" fill className="object-cover" priority />
            </div>
            <figcaption className="mt-3 font-[Inter] text-[10px] uppercase tracking-[0.2em] text-stone-600 sm:text-xs">
              Fotografia · stoisko zaprojektowane i zrealizowane przez MOA
            </figcaption>
          </figure>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="border-y-2 border-stone-900 bg-[#EAE3D2]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 md:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">Rozdział I · {c.about.eyebrow}</p>
          <h3 className="mt-4 max-w-4xl font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-5xl sm:leading-[0.95] md:text-7xl">{c.about.headline}</h3>
          <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12 md:grid-cols-3">
            <div className="space-y-5 font-[Inter] text-base leading-relaxed text-stone-700 md:col-span-2 md:columns-2 md:gap-12 [&_p]:break-inside-avoid">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="border-t-2 border-stone-900 pt-6">
              <p className="font-[Inter] text-xs uppercase tracking-[0.25em] text-stone-600">W liczbach</p>
              <dl className="mt-6 space-y-5 sm:space-y-6">
                {c.about.stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-4 border-b border-stone-400 pb-4">
                    <dt className="font-[DM_Serif_Display] text-4xl leading-none sm:text-5xl">{s.value}</dt>
                    <dd className="font-[Inter] text-xs uppercase tracking-[0.18em] text-stone-700">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="mx-auto max-w-screen-xl border-b-2 border-stone-900 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">Rozdział II · {c.awards.eyebrow}</p>
        <h3 className="mt-4 max-w-3xl font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-5xl sm:leading-[0.95] md:text-7xl">{c.awards.headline}</h3>
        <p className="mt-6 max-w-2xl font-[Inter] text-base text-stone-700">{c.awards.subheadline}</p>
        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {c.awards.items.map((a) => (
            <article key={a.name} className="border-t-2 border-stone-900 pt-5">
              <p className="font-[DM_Serif_Display] text-5xl leading-none sm:text-6xl">{a.year}</p>
              <p className="mt-5 font-[Inter] text-xs uppercase tracking-[0.2em] text-[#9B2C2C]">{a.level}</p>
              <h4 className="mt-1 font-[DM_Serif_Display] text-2xl leading-tight">{a.name}</h4>
              <p className="mt-4 font-[Inter] text-sm leading-relaxed text-stone-700">{a.category}</p>
              <p className="mt-3 font-[Inter] text-xs italic leading-relaxed text-stone-500">{a.highlight}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="mx-auto max-w-screen-xl border-b-2 border-stone-900 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">Rozdział III · {c.services.eyebrow}</p>
        <h3 className="mt-4 max-w-3xl font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-5xl sm:leading-[0.95] md:text-7xl">{c.services.headline}</h3>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:mt-12 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {c.services.items.map((s, i) => (
            <article key={s.id} className="border-t-2 border-stone-900 pt-5">
              <div className="flex items-baseline justify-between">
                <ServiceIcon name={s.icon} className="size-7 text-stone-900 sm:size-8" />
                <p className="font-[DM_Serif_Display] text-2xl">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <h4 className="mt-5 font-[DM_Serif_Display] text-2xl leading-tight sm:mt-6 sm:text-3xl">{s.title}</h4>
              <p className="mt-3 font-[Inter] text-sm leading-relaxed text-stone-700">{s.description}</p>
              <ul className="mt-5 space-y-1.5 font-[Inter] text-xs text-stone-600">
                {s.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[#9B2C2C]">▸</span>{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="bg-[#9B2C2C] text-[#F4EFE6]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 md:px-10">
          <p className="font-[Inter] text-[10px] uppercase tracking-[0.3em] opacity-80 sm:text-xs sm:tracking-[0.35em]">Rozdział IV · {c.process.eyebrow}</p>
          <h3 className="mt-4 max-w-4xl font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-5xl sm:leading-[0.95] md:text-7xl">{c.process.headline}</h3>
          <ol className="mt-12 divide-y divide-[#F4EFE6]/30 border-y border-[#F4EFE6]/30 sm:mt-14">
            {c.process.steps.map((s) => (
              <li key={s.number} className="grid gap-5 py-7 sm:gap-6 sm:py-8 md:grid-cols-12">
                <p className="font-[DM_Serif_Display] text-5xl leading-none sm:text-6xl md:col-span-2 md:text-7xl">{s.number}</p>
                <div className="md:col-span-4">
                  <h4 className="font-[DM_Serif_Display] text-2xl leading-tight sm:text-3xl">{s.title}</h4>
                  <p className="mt-2 font-[Inter] text-xs uppercase tracking-[0.2em] opacity-80">{s.duration}</p>
                </div>
                <p className="font-[Inter] text-base leading-relaxed md:col-span-3">{s.description}</p>
                <ul className="space-y-1 font-[Inter] text-sm md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-screen-xl border-b-2 border-stone-900 px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 sm:text-xs sm:tracking-[0.35em]">Rozdział V · {c.faq.eyebrow}</p>
            <h3 className="mt-4 font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-4xl sm:leading-[0.95] md:text-6xl">{c.faq.headline}</h3>
            <p className="mt-6 font-[Inter] text-base leading-relaxed text-stone-700">{c.faq.subheadline}</p>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y-2 divide-stone-900 border-y-2 border-stone-900">
              {c.faq.items.map((q) => (
                <li key={q.question}>
                  <details className="group py-5 sm:py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 sm:gap-6">
                      <h4 className="font-[DM_Serif_Display] text-xl leading-tight sm:text-2xl">{q.question}</h4>
                      <PlusIcon className="mt-2 size-5 shrink-0 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-4 max-w-2xl font-[Inter] text-base leading-relaxed text-stone-700">{q.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="bg-stone-900 text-[#F4EFE6]">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="font-[Inter] text-[10px] uppercase tracking-[0.3em] opacity-70 sm:text-xs sm:tracking-[0.35em]">Rozdział VI · {c.cta.primary.eyebrow}</p>
              <h3 className="mt-6 font-[DM_Serif_Display] text-3xl leading-[1.02] sm:text-5xl sm:leading-[0.95] md:text-7xl">{c.cta.primary.headline}</h3>
              <p className="mt-6 max-w-xl font-[Inter] text-base leading-relaxed sm:text-lg">{c.cta.primary.subheadline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-2 bg-[#9B2C2C] px-5 py-3 font-[Inter] text-xs font-semibold uppercase tracking-wider text-white sm:gap-3 sm:px-7 sm:py-4 sm:text-sm">
                  {c.cta.primary.primaryButton.label} <ArrowUpRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="font-[Inter] text-xs uppercase tracking-wider underline underline-offset-4 sm:text-sm">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-5 font-[Inter] sm:space-y-6 md:col-span-5">
              {c.contact.channels.map((ch) => (
                <a key={ch.value} href={ch.href} className="block border-b border-[#F4EFE6]/30 pb-4 transition hover:border-[#F4EFE6]">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-70">{ch.label}</p>
                  <p className="mt-1 break-all font-[DM_Serif_Display] text-2xl sm:text-3xl">{ch.value}</p>
                </a>
              ))}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-70">{c.contact.address.label}</p>
                <p className="mt-2 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-stone-900 bg-[#F4EFE6]">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-10">
            <div className="sm:col-span-2 md:col-span-4">
              <p className="font-[DM_Serif_Display] text-4xl">MOA</p>
              <p className="mt-3 font-[Inter] text-sm text-stone-700">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="font-[Inter] text-xs uppercase tracking-[0.2em] text-stone-600">{col.title}</p>
                <ul className="mt-4 space-y-2 font-[Inter] text-sm text-stone-700">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:underline">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-stone-400 pt-6 font-[Inter] text-[11px] text-stone-600 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
