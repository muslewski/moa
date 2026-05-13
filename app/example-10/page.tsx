import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowUpRightIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Luxury Editorial",
  description: "Wariant 10 — Luksusowy editorial. Czerń, złoto, duża typografia serif i pełnoekranowa fotografia.",
};

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 8" className={className} aria-hidden>
      <defs>
        <linearGradient id="gold" x1="0" x2="1">
          <stop offset="0" stopColor="#8a6d2c" />
          <stop offset="0.5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#8a6d2c" />
        </linearGradient>
      </defs>
      <line x1="0" y1="4" x2="200" y2="4" stroke="url(#gold)" strokeWidth="1" />
    </svg>
  );
}

export default function Example10() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-[#EFE6D3] font-[Inter,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-[#0B0B0C]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-[Fraunces,serif] text-2xl font-medium tracking-tight text-[#D4AF37]">MOA</span>
            <span className="hidden text-[10px] uppercase tracking-[0.35em] text-[#EFE6D3]/60 md:inline">Masters of Arts · est. 2006</span>
          </Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.28em] lg:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="text-[#EFE6D3]/75 transition hover:text-[#D4AF37]">{l.label}</a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="inline-flex items-center gap-2 border border-[#D4AF37] px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0C]">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* HERO — full-bleed photo */}
      <section className="relative h-[88vh] min-h-[640px] overflow-hidden">
        <Image src={moaPhotos[1]} alt="Realizacja MOA — Grupa Azoty" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/40" />

        <div className="absolute inset-0">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-12 gap-4 px-6 md:px-10">
            <div className="col-span-12 flex h-full flex-col justify-between py-10 md:col-span-8 md:py-14">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">
                <span>— Anno 2006 —</span>
                <span className="hidden md:inline">No. 01 · Hero</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">{c.hero.eyebrow}</p>
                <h1 className="mt-6 font-[Fraunces,Cormorant_Garamond,serif] text-balance text-5xl font-light leading-[0.98] tracking-[-0.01em] text-[#F4ECD3] md:text-7xl lg:text-[6.5rem]">
                  Unikatowe stoiska targowe, <em className="text-[#D4AF37] not-italic">które zostają w pamięci.</em>
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-[#EFE6D3]/85 md:text-lg">{c.hero.subheadline}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href={c.hero.primaryCta.href} className="inline-flex items-center gap-3 bg-[#D4AF37] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B0B0C] transition hover:bg-[#E5C25C]">
                    {c.hero.primaryCta.label} <ArrowUpRightIcon className="size-4" />
                  </Link>
                  <a href={c.hero.secondaryCta.href} className="border border-[#D4AF37]/60 px-7 py-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                    {c.hero.secondaryCta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom award strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#D4AF37]/30 bg-[#0B0B0C]/85 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#D4AF37]/20 md:grid-cols-4">
            {c.hero.trustBar.badges.map((b) => (
              <div key={b.name} className="bg-[#0B0B0C] px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">Award</p>
                <p className="mt-1 font-[Fraunces,serif] text-base text-[#EFE6D3]">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + photo */}
      <section id="o-nas" className="border-b border-[#D4AF37]/15 bg-[#101013]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.about.eyebrow} —</p>
              <h2 className="mt-4 font-[Fraunces,serif] text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-6xl">{c.about.headline}</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#EFE6D3]/80">
                <p>{c.about.lead}</p>
                {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden">
                <Image src={moaPhotos[4]} alt="Realizacja MOA" width={800} height={1000} className="aspect-[4/5] w-full object-cover" />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]/70">↳ Wybrane realizacje studia</p>
            </div>
          </div>
          <GoldRule className="mx-auto mt-16 w-full max-w-md" />
          <div className="mt-10 grid grid-cols-2 gap-px bg-[#D4AF37]/20 md:grid-cols-4">
            {c.about.stats.map((s) => (
              <div key={s.label} className="bg-[#101013] p-8 text-center">
                <p className="font-[Fraunces,serif] text-5xl font-light text-[#D4AF37]">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#EFE6D3]/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards — editorial cards */}
      <section id="nagrody" className="border-b border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.awards.eyebrow} —</p>
            <h2 className="mt-4 font-[Fraunces,serif] text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-6xl">{c.awards.headline}</h2>
            <p className="mt-6 text-lg text-[#EFE6D3]/80">{c.awards.subheadline}</p>
          </div>
          <div className="mt-14 grid gap-px bg-[#D4AF37]/20 md:grid-cols-4">
            {c.awards.items.map((a) => (
              <article key={a.name} className="bg-[#0B0B0C] p-8">
                <p className="font-[Fraunces,serif] text-6xl font-light text-[#D4AF37]">{a.year}</p>
                <p className="mt-6 font-[Fraunces,serif] text-2xl">{a.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/75">{a.level}</p>
                <p className="mt-5 border-t border-[#D4AF37]/20 pt-5 text-sm leading-relaxed text-[#EFE6D3]/75">{a.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured stand — full-bleed photo */}
      <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
        <Image src={moaPhotos[2]} alt="OKA — Red Dot 2017" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— Case study · 2017 —</p>
            <h3 className="mt-3 max-w-2xl font-[Fraunces,serif] text-5xl font-light leading-tight text-[#F4ECD3] md:text-6xl">
              OKA — pierwsze polskie Red Dot w kategorii Fair Stands.
            </h3>
            <p className="mt-4 max-w-md text-base text-[#EFE6D3]/85">
              Transparentna fasada z drewnianymi belkami symbolizująca proces myśli projektowej. Wnętrze otwiera się tunelem do zielonej ściany.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="border-b border-[#D4AF37]/15 bg-[#101013]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.services.eyebrow} —</p>
              <h2 className="mt-4 font-[Fraunces,serif] text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-6xl">{c.services.headline}</h2>
              <p className="mt-6 text-lg text-[#EFE6D3]/80">{c.services.subheadline}</p>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden">
                <Image src={moaPhotos[5]} alt="Realizacja MOA" width={1200} height={700} className="aspect-[16/10] w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-[#D4AF37]/20 md:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s, i) => (
              <article key={s.id} className="bg-[#101013] p-8">
                <div className="flex items-baseline justify-between">
                  <div className="grid size-12 place-items-center rounded-full border border-[#D4AF37]/60">
                    <ServiceIcon name={s.icon} className="size-5 text-[#D4AF37]" />
                  </div>
                  <p className="font-[Fraunces,serif] text-2xl text-[#D4AF37]/60">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <h3 className="mt-6 font-[Fraunces,serif] text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#EFE6D3]/75">{s.description}</p>
                <ul className="mt-5 space-y-1.5 border-t border-[#D4AF37]/15 pt-5 text-xs text-[#EFE6D3]/65">
                  {s.features.map((f) => <li key={f}>· {f}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-b border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.process.eyebrow} —</p>
            <h2 className="mt-4 font-[Fraunces,serif] text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-6xl">{c.process.headline}</h2>
          </div>
          <ol className="mt-14 divide-y divide-[#D4AF37]/15 border-y border-[#D4AF37]/15">
            {c.process.steps.map((s) => (
              <li key={s.number} className="grid gap-6 py-8 md:grid-cols-12">
                <p className="font-[Fraunces,serif] text-6xl font-light text-[#D4AF37] md:col-span-2">{s.number}</p>
                <div className="md:col-span-4">
                  <h3 className="font-[Fraunces,serif] text-2xl">{s.title}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/80">{s.duration}</p>
                </div>
                <p className="text-base leading-relaxed text-[#EFE6D3]/80 md:col-span-3">{s.description}</p>
                <ul className="space-y-1 text-sm text-[#EFE6D3]/70 md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery — luxury grid */}
      <section className="border-b border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— Portfolio —</p>
          <h3 className="mt-4 font-[Fraunces,serif] text-3xl font-light leading-tight text-[#F4ECD3] md:text-5xl">Wybrane realizacje.</h3>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[moaPhotos[6], moaPhotos[7], moaPhotos[3], moaPhotos[8], moaPhotos[0], moaPhotos[4], moaPhotos[5], moaPhotos[1]].map((src, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={src} alt="Realizacja MOA" fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#101013]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.faq.eyebrow} —</p>
              <h2 className="mt-4 font-[Fraunces,serif] text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-5xl">{c.faq.headline}</h2>
              <p className="mt-6 text-base leading-relaxed text-[#EFE6D3]/75">{c.faq.subheadline}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-[#D4AF37]/15 border-y border-[#D4AF37]/15">
                {c.faq.items.map((q) => (
                  <li key={q.question}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                        <h3 className="font-[Fraunces,serif] text-xl leading-tight text-[#F4ECD3] md:text-2xl">{q.question}</h3>
                        <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-[#D4AF37]/60 text-[#D4AF37] transition group-open:bg-[#D4AF37] group-open:text-[#0B0B0C]">
                          <PlusIcon className="size-4 transition group-open:rotate-45" />
                        </span>
                      </summary>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#EFE6D3]/80">{q.answer}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="relative overflow-hidden border-b border-[#D4AF37]/15">
        <div className="absolute inset-0">
          <Image src={moaPhotos[1]} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0B0B0C]/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">— {c.cta.primary.eyebrow} —</p>
              <h2 className="mt-6 font-[Fraunces,serif] text-balance text-4xl font-light leading-[1.05] text-[#F4ECD3] md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#EFE6D3]/85">{c.cta.primary.subheadline}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-3 bg-[#D4AF37] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B0B0C]">
                  {c.cta.primary.primaryButton.label} <ArrowUpRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="border border-[#D4AF37]/60 px-7 py-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-3 md:col-span-5">
              <a href="tel:+48501027234" className="flex items-center gap-4 border border-[#D4AF37]/30 bg-[#0B0B0C] p-5 transition hover:border-[#D4AF37]">
                <PhoneIcon className="size-5 shrink-0 text-[#D4AF37]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">Telefon</p>
                  <p className="mt-1 font-[Fraunces,serif] text-xl">+48 501 027 234</p>
                </div>
              </a>
              <a href="mailto:office@moa.pl" className="flex items-center gap-4 border border-[#D4AF37]/30 bg-[#0B0B0C] p-5 transition hover:border-[#D4AF37]">
                <MailIcon className="size-5 shrink-0 text-[#D4AF37]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">E-mail</p>
                  <p className="mt-1 font-[Fraunces,serif] text-xl">office@moa.pl</p>
                </div>
              </a>
              <div className="flex items-start gap-4 border border-[#D4AF37]/30 bg-[#0B0B0C] p-5">
                <MapPinIcon className="size-5 shrink-0 text-[#D4AF37]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">{c.contact.address.label}</p>
                  <p className="mt-1 text-base text-[#EFE6D3]">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0B]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-[Fraunces,serif] text-3xl text-[#D4AF37]">MOA Masters of Arts</p>
              <p className="mt-3 text-sm text-[#EFE6D3]/70">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#EFE6D3]/75">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-[#D4AF37]">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-[#D4AF37]/20 pt-6 text-xs text-[#EFE6D3]/60 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
