import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, PlusIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Soft Clay (warm earth)",
  description: "Wariant 6 — Soft Clay. Miękkie 3D w paletcie ciepłej ziemi: piasek, terakota, oliwka, espresso.",
};

export default function Example6() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-[#F2EBDE] text-stone-900 font-[Inter,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="sticky top-4 z-40 mx-4 md:mx-8">
        <div className="clay mx-auto flex max-w-7xl items-center justify-between bg-[#F5EFE3] px-5 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="clay grid size-10 place-items-center bg-stone-900 text-base font-black text-[#F2EBDE]">M</span>
            <span className="text-lg font-semibold tracking-tight">MOA</span>
          </Link>
          <nav className="hidden gap-1 lg:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="rounded-2xl px-3 py-1.5 text-sm font-medium text-stone-600 transition hover:bg-stone-200/60 hover:text-stone-900">{l.label}</a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="clay bg-[#7C3F20] px-5 py-2.5 text-sm font-semibold text-[#F5EFE3]">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="clay inline-flex items-center gap-2 bg-[#F5EFE3] px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-stone-700">
              ● {c.hero.eyebrow}
            </span>
            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-7xl">
              Unikatowe stoiska targowe,
              <br />
              <span className="text-[#7C3F20]">które zostają w pamięci.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-700">{c.hero.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={c.hero.primaryCta.href} className="clay inline-flex items-center gap-3 bg-stone-900 px-7 py-4 text-sm font-semibold text-[#F2EBDE] transition hover:scale-[1.02]">
                {c.hero.primaryCta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="clay bg-[#F5EFE3] px-7 py-4 text-sm font-semibold text-stone-800">
                {c.hero.secondaryCta.label}
              </a>
            </div>

            {/* Stats inline */}
            <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {c.about.stats.map((s) => (
                <div key={s.label} className="clay bg-[#F5EFE3] p-4 text-center">
                  <dt className="text-3xl font-bold tracking-tight text-stone-900">{s.value}</dt>
                  <dd className="mt-2 text-[10px] uppercase tracking-[0.15em] text-stone-600">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="clay overflow-hidden bg-[#F5EFE3] p-3">
              <Image src={moaPhotos[1]} alt="MOA realizacja" width={800} height={1000} className="aspect-[4/5] rounded-3xl object-cover" priority />
            </div>
            <div className="clay mt-5 bg-[#7C3F20] p-6 text-[#F5EFE3]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">Pierwsza polska firma</p>
              <p className="mt-2 text-base font-semibold leading-snug">w 60-letniej historii Red Dot w kategorii Fair Stands.</p>
            </div>
          </div>
        </div>

        {/* Trust bar — earth toned */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {c.hero.trustBar.badges.map((b, i) => {
            const tones = ["bg-[#D9C6A5]", "bg-[#C8A77F]", "bg-[#B07A55]", "bg-[#6B7B3F]"];
            return (
              <div key={b.name} className={`clay p-5 ${tones[i]}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-900/85">Award</p>
                <p className="mt-2 text-base font-semibold text-stone-900">{b.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7C3F20]">{c.about.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.about.headline}</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-700">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="space-y-5 md:col-span-5">
            <div className="clay overflow-hidden bg-[#F5EFE3] p-3">
              <Image src={moaPhotos[3]} alt="Realizacja MOA" width={800} height={600} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {c.about.values.slice(0, 2).map((v, i) => (
                <div key={v.title} className={`clay p-5 ${i === 0 ? "bg-[#F5EFE3]" : "bg-[#6B7B3F] text-[#F2EBDE]"}`}>
                  <p className="text-sm font-semibold">{v.title}</p>
                  <p className="mt-2 text-xs leading-relaxed opacity-85">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#7C3F20]">{c.awards.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.awards.headline}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.awards.items.map((a, i) => {
            const tones = ["bg-[#D9C6A5]", "bg-[#C8A77F]", "bg-[#B07A55] text-[#F2EBDE]", "bg-[#6B7B3F] text-[#F2EBDE]"];
            return (
              <div key={a.name} className={`clay p-7 ${tones[i]}`}>
                <p className="text-5xl font-bold leading-none tracking-tight">{a.year}</p>
                <p className="mt-6 text-base font-semibold">{a.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] opacity-80">{a.level}</p>
                <p className="mt-4 text-sm leading-relaxed opacity-90">{a.highlight}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7C3F20]">{c.services.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.services.headline}</h2>
          <p className="mt-6 text-lg text-stone-700">{c.services.subheadline}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.services.items.map((s, i) => {
            const tones = ["bg-[#F5EFE3]", "bg-[#EAD8B6]", "bg-[#D9C6A5]", "bg-[#F5EFE3]", "bg-[#EAD8B6]", "bg-[#D9C6A5]"];
            return (
              <article key={s.id} className={`clay p-7 ${tones[i]}`}>
                <div className="clay grid size-14 place-items-center bg-stone-900">
                  <ServiceIcon name={s.icon} className="size-6 text-[#F2EBDE]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-stone-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{s.description}</p>
                <ul className="mt-5 space-y-1.5 text-xs text-stone-700">
                  {s.features.map((f) => <li key={f}>• {f}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured photo */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="clay overflow-hidden bg-[#F5EFE3] p-3">
          <Image src={moaPhotos[2]} alt="Realizacja MOA" width={2400} height={1000} className="aspect-[21/9] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#7C3F20]">{c.process.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.process.headline}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {c.process.steps.map((s, i) => {
            const tones = ["bg-[#D9C6A5]", "bg-[#C8A77F]", "bg-[#B07A55] text-[#F2EBDE]", "bg-[#6B7B3F] text-[#F2EBDE]", "bg-[#7C3F20] text-[#F2EBDE]"];
            return (
              <div key={s.number} className={`clay p-6 ${tones[i]}`}>
                <div className="clay grid size-12 place-items-center bg-[#F5EFE3]">
                  <p className="text-base font-bold text-stone-900">{s.number}</p>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] opacity-80">⏱ {s.duration}</p>
                <p className="mt-4 text-sm leading-relaxed opacity-90">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[moaPhotos[5], moaPhotos[6], moaPhotos[4], moaPhotos[7]].map((src, i) => (
            <div key={i} className="clay overflow-hidden bg-[#F5EFE3] p-3">
              <Image src={src} alt="MOA realizacja" width={600} height={750} className="aspect-[4/5] w-full rounded-2xl object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7C3F20]">{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{c.faq.headline}</h2>
            <p className="mt-6 text-base leading-relaxed text-stone-700">{c.faq.subheadline}</p>
            <div className="clay mt-8 bg-[#7C3F20] p-6 text-[#F5EFE3]">
              <p className="text-xs uppercase tracking-[0.18em] opacity-80">Nie znalazłeś?</p>
              <a href="tel:+48501027234" className="mt-2 block text-2xl font-bold">+48 501 027 234</a>
            </div>
          </div>
          <div className="space-y-3 md:col-span-8">
            {c.faq.items.map((q) => (
              <details key={q.question} className="clay group bg-[#F5EFE3] p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <h3 className="text-lg font-semibold text-stone-900">{q.question}</h3>
                  <span className="clay grid size-10 shrink-0 place-items-center bg-stone-900 text-[#F2EBDE] transition group-open:rotate-45">
                    <PlusIcon className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-stone-700">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="clay bg-stone-900 p-10 text-[#F2EBDE] md:p-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D9C6A5]">{c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-6 max-w-xl text-lg opacity-90">{c.cta.primary.subheadline}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="clay inline-flex items-center gap-3 bg-[#D9C6A5] px-7 py-4 text-sm font-semibold text-stone-900">
                  {c.cta.primary.primaryButton.label}
                  <ArrowRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="clay-dark px-6 py-4 text-sm font-semibold text-[#F2EBDE]">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-4 md:col-span-5">
              {c.contact.channels.map((ch) => (
                <a key={ch.value} href={ch.href} className="clay block bg-[#F5EFE3] p-5 text-stone-900">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{ch.label}</p>
                  <p className="mt-1 text-xl font-bold">{ch.value}</p>
                </a>
              ))}
              <div className="clay-dark p-5 text-[#F2EBDE]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#D9C6A5]">{c.contact.address.label}</p>
                <p className="mt-1 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="clay bg-[#F5EFE3] p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-2xl font-bold tracking-tight text-stone-900">MOA Masters of Arts</p>
              <p className="mt-3 text-sm text-stone-700">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#7C3F20]">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-stone-700">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-stone-900">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-stone-300 pt-6 text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
