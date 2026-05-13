import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, ArrowUpRightIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Dark Mode",
  description: "Wariant 5 — Dark cinema. Wyrafinowany ciemny motyw, dużo fotografii, akcent amber.",
};

export default function Example5() {
  const c = loadAll();

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-zinc-100 font-[Inter,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0B0B0F]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-amber-400 text-xs font-black text-zinc-900">M</span>
            <span className="text-base font-semibold tracking-tight">MOA <span className="hidden text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:inline">Masters of Arts</span></span>
          </Link>
          <nav className="hidden gap-1 lg:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-amber-400">
                {l.label}
              </a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* HERO — split: photo collage + text */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-amber-300">
              <span className="size-1.5 animate-pulse rounded-full bg-amber-400" /> {c.hero.eyebrow}
            </p>
            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-7xl lg:text-[5.5rem]">
              Unikatowe stoiska targowe,<br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">które zostają w pamięci.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">{c.hero.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={c.hero.primaryCta.href} className="group inline-flex items-center gap-3 rounded-lg bg-amber-400 px-7 py-4 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300">
                {c.hero.primaryCta.label}
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="rounded-lg border border-zinc-700 px-6 py-4 text-sm text-zinc-200 transition hover:border-amber-400 hover:text-amber-400">
                {c.hero.secondaryCta.label}
              </a>
            </div>

            {/* Awards inline */}
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-zinc-800 md:grid-cols-4">
              {c.hero.trustBar.badges.map((b) => (
                <li key={b.name} className="bg-zinc-950 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80">Award</p>
                  <p className="mt-2 text-sm font-semibold leading-tight">{b.name}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <Image src={moaPhotos[1]} alt="MOA realizacja" width={900} height={700} className="aspect-[4/3] w-full object-cover" priority />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src={moaPhotos[3]} alt="MOA realizacja" width={500} height={600} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src={moaPhotos[4]} alt="MOA realizacja" width={500} height={600} className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured stand — cinematic full-bleed */}
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <Image src={moaPhotos[2]} alt="Realizacja MOA — OKA Red Dot 2017" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10 md:pb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">Realizacja · 2017</p>
            <h3 className="mt-3 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              OKA — laureat Red Dot Award
            </h3>
            <p className="mt-4 max-w-md text-base text-zinc-300">
              Pierwsze stoisko polskiej firmy w 60-letniej historii Red Dot w kategorii Fair Stands.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{c.about.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.about.headline}</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="space-y-5 md:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <Image src={moaPhotos[5]} alt="MOA realizacja" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-px self-start bg-zinc-800">
              {c.about.stats.slice(0, 4).map((s) => (
                <div key={s.label} className="bg-[#0B0B0F] p-6">
                  <p className="text-4xl font-semibold tracking-tight text-amber-400">{s.value}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-y border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{c.awards.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.awards.headline}</h2>
              <p className="mt-6 text-base text-zinc-400">{c.awards.subheadline}</p>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl">
                <Image src={moaPhotos[6]} alt="Realizacja MOA" width={1200} height={700} className="aspect-[16/10] w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-px bg-zinc-800 md:grid-cols-4">
            {c.awards.items.map((a) => (
              <div key={a.name} className="group relative overflow-hidden bg-zinc-950 p-8 transition hover:bg-zinc-900">
                <p className="text-6xl font-semibold leading-none tracking-tight text-amber-400">{a.year}</p>
                <p className="mt-6 text-base font-semibold">{a.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-500">{a.level}</p>
                <p className="mt-4 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">{a.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{c.services.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.services.headline}</h2>
            <p className="mt-6 text-lg text-zinc-400">{c.services.subheadline}</p>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl">
              <Image src={moaPhotos[7]} alt="MOA realizacja" width={1200} height={700} className="aspect-[16/10] w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {c.services.items.map((s, i) => (
            <article key={s.id} className="group bg-zinc-950 p-8 transition hover:bg-zinc-900">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-lg bg-amber-400/10 ring-1 ring-amber-400/30">
                  <ServiceIcon name={s.icon} className="size-6 text-amber-400" />
                </div>
                <p className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.description}</p>
              <ul className="mt-5 space-y-1.5 border-t border-zinc-800 pt-5 text-xs text-zinc-500">
                {s.features.map((f) => <li key={f}>— {f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="border-y border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">Realizacje</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Wybrane projekty z portfolio.</h3>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[moaPhotos[8], moaPhotos[0], moaPhotos[5], moaPhotos[4], moaPhotos[6], moaPhotos[3], moaPhotos[7], moaPhotos[1]].map((src, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image src={src} alt="MOA realizacja" fill className="object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{c.process.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.process.headline}</h2>
        <ol className="mt-16 space-y-0">
          {c.process.steps.map((s, i) => (
            <li key={s.number} className="relative grid gap-6 border-l border-amber-400/30 py-8 pl-10 md:grid-cols-12 md:pl-16">
              <span className="absolute left-0 top-12 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-amber-400 font-mono text-xs font-bold text-zinc-900">
                {i + 1}
              </span>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-400">{s.duration}</p>
              </div>
              <p className="text-base leading-relaxed text-zinc-400 md:col-span-4">{s.description}</p>
              <ul className="space-y-1 text-sm text-zinc-300 md:col-span-4">
                {s.deliverables.map((d) => <li key={d}>• {d}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{c.faq.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{c.faq.headline}</h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">{c.faq.subheadline}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
                {c.faq.items.map((q) => (
                  <li key={q.question}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                        <h3 className="text-lg font-medium text-zinc-200 transition group-open:text-amber-400">{q.question}</h3>
                        <PlusIcon className="mt-1 size-5 shrink-0 text-amber-400 transition group-open:rotate-45" />
                      </summary>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{q.answer}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={moaPhotos[1]} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/95 via-amber-400/80 to-amber-300/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-amber-400/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-zinc-900 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-900/70">{c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-6 max-w-xl text-lg">{c.cta.primary.subheadline}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-3 rounded-lg bg-zinc-900 px-7 py-4 text-sm font-semibold text-amber-400 transition hover:bg-zinc-800">
                  {c.cta.primary.primaryButton.label}
                  <ArrowUpRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="rounded-lg border border-zinc-900 px-6 py-4 text-sm font-medium">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-4 md:col-span-5">
              <a href="tel:+48501027234" className="flex items-start gap-4 rounded-lg bg-zinc-900 p-5 text-white">
                <PhoneIcon className="size-6 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Telefon</p>
                  <p className="mt-1 text-xl font-semibold">+48 501 027 234</p>
                </div>
              </a>
              <a href="mailto:office@moa.pl" className="flex items-start gap-4 rounded-lg bg-zinc-900 p-5 text-white">
                <MailIcon className="size-6 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">E-mail</p>
                  <p className="mt-1 text-xl font-semibold">office@moa.pl</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-lg bg-zinc-900 p-5 text-white">
                <MapPinIcon className="size-6 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{c.contact.address.label}</p>
                  <p className="mt-1 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-2xl font-semibold tracking-tight">MOA <span className="text-amber-400">Masters of Arts</span></p>
              <p className="mt-3 text-sm text-zinc-500">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-400">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="transition hover:text-amber-400">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
