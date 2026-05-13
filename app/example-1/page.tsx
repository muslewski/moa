import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, PlusIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Unikatowe stoiska targowe (Minimalism)",
  description: "Wariant 1 — Minimalizm. Dużo światła, jeden akcent, czcionka prowadzi opowieść.",
};

export default function Example1() {
  const c = loadAll();
  const accent = "#E2231A";

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-neutral-900 font-[Inter,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-[#FAFAF7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-lg font-medium tracking-[0.3em]">MOA</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:inline">Masters of Arts</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="text-neutral-600 transition hover:text-neutral-900">
                {l.label}
              </a>
            ))}
          </nav>
          <Link
            href={c.nav.cta.href}
            className="rounded-full border border-neutral-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white"
          >
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-12 md:py-32">
          <div className="md:col-span-7">
            <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
              <span className="h-px w-8 bg-neutral-400" />
              {c.hero.eyebrow}
            </p>
            <h1 className="text-5xl font-light leading-[1.05] tracking-[-0.02em] md:text-7xl lg:text-8xl">
              Unikatowe<br />
              stoiska targowe,<br />
              które<br />
              <span style={{ color: accent }} className="font-normal italic">zostają w pamięci.</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-neutral-600">
              {c.hero.subheadline}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={c.hero.primaryCta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {c.hero.primaryCta.label}
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="inline-flex items-center gap-2 px-2 text-sm text-neutral-700 underline-offset-4 hover:underline">
                {c.hero.secondaryCta.label} →
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={moaPhotos[1]}
                alt="Realizacja stoiska MOA"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Stoisko Grupa Azoty — realizacja MOA
            </p>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-6 text-[11px] uppercase tracking-[0.25em] text-neutral-500 md:gap-12 md:px-12">
            <span>{c.hero.trustBar.label}</span>
            {c.hero.trustBar.badges.map((b) => (
              <span key={b.name} className="text-neutral-900">{b.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.about.eyebrow}</p>
            <div className="mt-12 grid grid-cols-2 gap-y-8">
              {c.about.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-light tracking-tight">{s.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
              {c.about.headline}
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.awards.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-4xl">
            {c.awards.headline}
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {c.awards.items.map((a) => (
              <div key={a.name} className="border-t border-neutral-900 pt-6">
                <p className="text-5xl font-light tracking-tight">{a.year}</p>
                <p className="mt-4 text-sm font-medium">{a.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-neutral-500">{a.level}</p>
                <p className="mt-4 text-xs leading-relaxed text-neutral-600">{a.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.services.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-5xl">{c.services.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">{c.services.subheadline}</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-3">
          {c.services.items.map((s) => (
            <article key={s.id} className="group bg-[#FAFAF7] p-8 transition hover:bg-white md:p-10">
              <ServiceIcon name={s.icon} className="size-7 text-neutral-900" />
              <h3 className="mt-8 text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.description}</p>
              <ul className="mt-6 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-neutral-900" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.process.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
            {c.process.headline}
          </h2>
          <div className="mt-20 space-y-12">
            {c.process.steps.map((s, i) => (
              <div key={s.number} className="grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-12">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 md:col-span-1">{s.number}</p>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-light tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">{s.duration}</p>
                </div>
                <p className="text-base leading-relaxed text-neutral-600 md:col-span-4">{s.description}</p>
                <ul className="space-y-1 text-sm text-neutral-700 md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                </ul>
                {i === 1 && (
                  <div className="md:col-span-12">
                    <div className="aspect-[21/9] overflow-hidden">
                      <Image src={moaPhotos[2]} alt="Realizacja MOA" width={2100} height={900} className="h-full w-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.industries.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-2xl font-light tracking-tight md:text-3xl">{c.industries.headline}</h2>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-neutral-700">
          {c.industries.items.map((i) => (
            <li key={i.name} className="border-b border-neutral-300 pb-1">{i.name}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">{c.faq.headline}</h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600">{c.faq.subheadline}</p>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
              {c.faq.items.map((q) => (
                <li key={q.question}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <h3 className="text-lg font-normal leading-snug">{q.question}</h3>
                      <PlusIcon className="mt-1 size-5 shrink-0 text-neutral-500 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">{q.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 text-4xl font-light leading-tight tracking-tight md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-8 max-w-xl text-lg text-neutral-300">{c.cta.primary.subheadline}</p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={c.cta.primary.primaryButton.href}
                  style={{ backgroundColor: accent }}
                  className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {c.cta.primary.primaryButton.label}
                  <ArrowRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="text-sm text-neutral-300 underline-offset-4 hover:underline">
                  {c.cta.primary.secondaryButton.label} →
                </a>
              </div>
            </div>
            <div className="space-y-6 text-sm md:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Kontakt bezpośredni</p>
              {c.contact.channels.map((ch) => (
                <a key={ch.value} href={ch.href} className="block border-b border-neutral-800 pb-4 transition hover:border-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{ch.label}</p>
                  <p className="mt-1 text-xl">{ch.value}</p>
                </a>
              ))}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{c.contact.address.label}</p>
                <p className="mt-2 text-base text-neutral-300">
                  {c.contact.address.street}<br />
                  {c.contact.address.postalCode} {c.contact.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <p className="text-lg font-medium tracking-[0.3em] text-white">MOA</p>
            <p className="mt-4 text-sm">{c.footer.tagline}</p>
          </div>
          {c.footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{col.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition hover:text-white">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-900">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between md:px-12">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS: {c.footer.legal.krs} · NIP: {c.footer.legal.nip} · REGON: {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
