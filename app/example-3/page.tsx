import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, ArrowUpRightIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Glassmorphism",
  description: "Wariant 3 — Glassmorphism. Premium liquid glass nad fotografią realizacji.",
};

export default function Example3() {
  const c = loadAll();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0A0F1C] text-white font-[Inter,system-ui,sans-serif]">
      {/* Top bar — full-width frosted strip + floating pill */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          aria-hidden
          className="absolute inset-0 border-b border-white/10 bg-[#0A0F1C]/40"
          style={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-white/15 text-[11px] font-black ring-1 ring-white/30">M</span>
            MOA <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/55 md:inline">Masters of Arts</span>
          </Link>
          <nav className="hidden gap-1 lg:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0F1C] transition hover:bg-white/90">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* HERO — full-bleed photo with glass overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={moaPhotos[1]} alt="Stoisko MOA" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-[#0A0F1C]/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-28 md:grid-cols-12 md:gap-8 md:px-6 md:pb-28 md:pt-36 lg:pt-40">
          <div className="md:col-span-8">
            <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/85">
              <span className="size-1.5 rounded-full bg-emerald-300" /> {c.hero.eyebrow}
            </div>
            <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem]">
              Unikatowe stoiska targowe,{" "}
              <span className="italic text-white/75">które zostają w pamięci.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{c.hero.subheadline}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={c.hero.primaryCta.href} className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0A0F1C] transition hover:scale-[1.02]">
                {c.hero.primaryCta.label}
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium hover:bg-white/15">
                {c.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Floating award card */}
          <div className="glass self-end rounded-3xl p-6 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">4 międzynarodowe nagrody</p>
            <ul className="mt-5 divide-y divide-white/10">
              {c.hero.trustBar.badges.map((b) => (
                <li key={b.name} className="flex items-baseline justify-between py-3">
                  <span className="text-sm font-medium">{b.name.replace(/\s\d{4}.*$/, "").replace(/Award$/, "").trim()}</span>
                  <span className="text-base font-semibold tracking-tight text-white/80">{b.name.split(" ").pop()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo caption */}
          <p className="md:col-span-12 text-[11px] uppercase tracking-[0.3em] text-white/60">
            ↳ Stoisko Grupa Azoty — projekt i realizacja MOA
          </p>
        </div>
      </section>

      {/* About — 2 photos + glass text card */}
      <section id="o-nas" className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src={moaPhotos[3]} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-[#0A0F1C]/85" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="glass rounded-3xl p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{c.about.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{c.about.headline}</h2>
                <p className="mt-8 text-lg leading-relaxed text-white/85">{c.about.lead}</p>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-white/70">
                  {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </div>
              </div>
            </div>
            <div className="space-y-5 md:col-span-5">
              <div className="glass overflow-hidden rounded-3xl p-2">
                <Image src={moaPhotos[4]} alt="MOA realizacja" width={800} height={1000} className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {c.about.stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-5">
                    <p className="text-4xl font-semibold tracking-tight">{s.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values row */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {c.about.values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6">
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards — photo background, glass cards */}
      <section id="nagrody" className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src={moaPhotos[2]} alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/60 to-[#0A0F1C]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{c.awards.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{c.awards.headline}</h2>
            <p className="mt-6 text-lg text-white/80">{c.awards.subheadline}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.awards.items.map((a) => (
              <div key={a.name} className="glass rounded-3xl p-7">
                <p className="text-5xl font-semibold tracking-tight">{a.year}</p>
                <p className="mt-6 text-base font-semibold">{a.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">{a.level}</p>
                <p className="mt-4 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/75">{a.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — glass cards over photo strip */}
      <section id="uslugi" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">{c.services.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{c.services.headline}</h2>
          <p className="mt-6 text-lg text-white/80">{c.services.subheadline}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.services.items.map((s) => (
            <article key={s.id} className="glass group rounded-3xl p-7 transition hover:bg-white/15">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <ServiceIcon name={s.icon} className="size-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{s.description}</p>
              <ul className="mt-5 space-y-2 border-t border-white/15 pt-5 text-xs text-white/80">
                {s.features.map((f) => <li key={f} className="flex gap-2"><span className="text-white/50">›</span>{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process — alternating image + glass */}
      <section id="proces" className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src={moaPhotos[5]} alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0A0F1C]/90" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{c.process.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{c.process.headline}</h2>
            <p className="mt-6 text-lg text-white/80">{c.process.subheadline}</p>
          </div>
          <ol className="mt-14 space-y-5">
            {c.process.steps.map((s) => (
              <li key={s.number} className="glass grid gap-6 rounded-3xl p-8 md:grid-cols-12">
                <p className="text-6xl font-semibold tracking-tight md:col-span-2">{s.number}</p>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{s.duration}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/85 md:col-span-3">{s.description}</p>
                <ul className="space-y-1 text-xs text-white/70 md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>• {d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[moaPhotos[6], moaPhotos[7], moaPhotos[8], moaPhotos[0]].map((src, i) => (
            <div key={i} className="glass overflow-hidden rounded-2xl p-2">
              <Image src={src} alt="MOA realizacja" width={500} height={400} className="aspect-[5/4] w-full rounded-xl object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{c.faq.headline}</h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">{c.faq.subheadline}</p>
            <div className="glass mt-8 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Bezpośrednio</p>
              <a href="tel:+48501027234" className="mt-2 block text-xl font-semibold">+48 501 027 234</a>
              <a href="mailto:office@moa.pl" className="mt-1 block text-sm text-white/80 hover:text-white">office@moa.pl</a>
            </div>
          </div>
          <div className="space-y-3 md:col-span-8">
            {c.faq.items.map((q) => (
              <details key={q.question} className="glass group rounded-2xl p-6 open:bg-white/12">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-lg font-medium">{q.question}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 transition group-open:bg-white group-open:text-[#0A0F1C]">
                    <PlusIcon className="size-4 transition group-open:rotate-45" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-white/80">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="relative px-4 py-24 md:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0">
            <Image src={moaPhotos[1]} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/95 via-[#0A0F1C]/80 to-[#0A0F1C]/60" />
          </div>
          <div className="relative grid gap-10 p-10 md:grid-cols-12 md:p-16">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-6 max-w-xl text-lg text-white/85">{c.cta.primary.subheadline}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0A0F1C]">
                  {c.cta.primary.primaryButton.label}
                  <ArrowUpRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="glass rounded-full px-6 py-4 text-sm font-medium">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-3 md:col-span-5">
              <a href="tel:+48501027234" className="glass flex items-center gap-4 rounded-2xl p-5">
                <PhoneIcon className="size-5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Telefon</p>
                  <p className="mt-1 text-xl font-semibold">+48 501 027 234</p>
                </div>
              </a>
              <a href="mailto:office@moa.pl" className="glass flex items-center gap-4 rounded-2xl p-5">
                <MailIcon className="size-5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">E-mail</p>
                  <p className="mt-1 text-xl font-semibold">office@moa.pl</p>
                </div>
              </a>
              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <MapPinIcon className="size-5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{c.contact.address.label}</p>
                  <p className="mt-1 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-10 md:px-6">
        <div className="glass mx-auto max-w-7xl rounded-3xl p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-2xl font-semibold tracking-tight">MOA Masters of Arts</p>
              <p className="mt-3 text-sm text-white/70">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
