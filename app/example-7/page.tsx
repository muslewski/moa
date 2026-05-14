import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Neumorphism",
  description: "Wariant 7 — Neumorphism. Tłoczone, monochromatyczne, taktylne.",
};

export default function Example7() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-[#E6E9EF] text-slate-700 font-[Inter,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="px-4 pt-4 md:px-8">
        <div className="neu mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="neu-inset grid size-10 place-items-center text-base font-black text-slate-700">M</span>
            <span className="text-lg font-semibold tracking-tight text-slate-800">MOA</span>
          </Link>
          <nav className="hidden gap-1 md:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="rounded-2xl px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">{l.label}</a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="neu px-5 py-2.5 text-sm font-semibold text-slate-800 transition active:shadow-none">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-8 md:pt-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <span className="neu-inset inline-block px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-500">{c.hero.eyebrow}</span>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-slate-800 sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Unikatowe stoiska targowe,{" "}
              <span className="text-slate-500">które zostają w pamięci.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-8 sm:text-lg">{c.hero.subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
              <Link href={c.hero.primaryCta.href} className="neu inline-flex items-center gap-3 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition active:shadow-none sm:px-7 sm:py-4" style={{ background: "linear-gradient(145deg, #2c3e50, #1a252f)" }}>
                {c.hero.primaryCta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="neu px-5 py-3 text-sm font-semibold text-slate-700 transition active:shadow-none sm:px-6 sm:py-4">
                {c.hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="neu overflow-hidden p-3 sm:p-4">
              <Image src={moaPhotos[6]} alt="MOA realizacja" width={800} height={1000} className="aspect-[4/5] rounded-2xl object-cover" priority />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4">
          {c.hero.trustBar.badges.map((b) => (
            <div key={b.name} className="neu px-4 py-4 sm:px-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Award</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">{b.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.about.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl md:text-5xl">{c.about.headline}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:mt-8 sm:text-lg">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start sm:gap-4 md:col-span-5">
            {c.about.stats.map((s) => (
              <div key={s.label} className="neu p-5 sm:p-6">
                <p className="text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:text-5xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards + photo strip */}
      <section id="nagrody" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.awards.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl md:text-5xl">{c.awards.headline}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{c.awards.subheadline}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:col-span-7">
            {[moaPhotos[0], moaPhotos[3], moaPhotos[1], moaPhotos[4]].map((src, idx) => (
              <div key={idx} className="neu overflow-hidden p-2 sm:p-3">
                <Image src={src} alt="MOA realizacja" width={600} height={450} className="aspect-[4/3] w-full rounded-xl object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.awards.items.map((a) => (
            <div key={a.name} className="neu p-5 sm:p-7">
              <div className="neu-inset grid size-14 place-items-center sm:size-16">
                <p className="text-lg font-bold text-slate-700 sm:text-xl">{a.year}</p>
              </div>
              <p className="mt-5 text-base font-semibold text-slate-800 sm:mt-6">{a.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">{a.level}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{a.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.services.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl md:text-5xl">{c.services.headline}</h2>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">{c.services.subheadline}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.services.items.map((s) => (
            <article key={s.id} className="neu p-5 sm:p-7">
              <div className="neu-inset grid size-12 place-items-center sm:size-14">
                <ServiceIcon name={s.icon} className="size-5 text-slate-700 sm:size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-800 sm:mt-6 sm:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
              <ul className="mt-5 space-y-1.5 text-xs text-slate-600">
                {s.features.map((f) => <li key={f}>— {f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.process.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl md:text-5xl">{c.process.headline}</h2>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-5">
          {c.process.steps.map((s) => (
            <div key={s.number} className="neu p-5 sm:p-6">
              <div className="neu-inset grid size-12 place-items-center">
                <p className="text-sm font-bold text-slate-700">{s.number}</p>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-tight text-slate-800">{s.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">⏱ {s.duration}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 neu overflow-hidden p-2 sm:p-3">
          <Image src={moaPhotos[2]} alt="MOA realizacja" width={2400} height={1000} className="aspect-[16/10] w-full rounded-2xl object-cover sm:aspect-[21/9]" />
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[moaPhotos[5], moaPhotos[6], moaPhotos[7], moaPhotos[8]].map((src, idx) => (
            <div key={idx} className="neu overflow-hidden p-2 sm:p-3">
              <Image src={src} alt="MOA realizacja" width={600} height={750} className="aspect-[4/5] w-full rounded-xl object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-800 sm:text-3xl md:text-4xl">{c.faq.headline}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{c.faq.subheadline}</p>
          </div>
          <div className="space-y-3 md:col-span-8">
            {c.faq.items.map((q) => (
              <details key={q.question} className="neu group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 sm:gap-6">
                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">{q.question}</h3>
                  <span className="neu grid size-9 shrink-0 place-items-center text-slate-700 transition group-open:rotate-45 sm:size-10">
                    <PlusIcon className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="neu p-6 sm:p-10 md:p-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-slate-800 sm:text-4xl md:text-6xl">{c.cta.primary.headline}</h2>
              <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">{c.cta.primary.subheadline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="neu inline-flex items-center gap-3 px-5 py-3 text-sm font-semibold text-slate-800 sm:px-7 sm:py-4">
                  {c.cta.primary.primaryButton.label}
                  <ArrowRightIcon className="size-4" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="neu-inset px-5 py-3 text-sm font-semibold text-slate-700 sm:px-6 sm:py-4">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-4 md:col-span-5">
              <a href="tel:+48501027234" className="neu flex items-center gap-4 p-5">
                <div className="neu-inset grid size-12 shrink-0 place-items-center"><PhoneIcon className="size-5 text-slate-700" /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Telefon</p>
                  <p className="text-lg font-semibold text-slate-800 sm:text-xl">+48 501 027 234</p>
                </div>
              </a>
              <a href="mailto:office@moa.pl" className="neu flex items-center gap-4 p-5">
                <div className="neu-inset grid size-12 shrink-0 place-items-center"><MailIcon className="size-5 text-slate-700" /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">E-mail</p>
                  <p className="break-all text-lg font-semibold text-slate-800 sm:text-xl">office@moa.pl</p>
                </div>
              </a>
              <div className="neu flex items-start gap-4 p-5">
                <div className="neu-inset grid size-12 shrink-0 place-items-center"><MapPinIcon className="size-5 text-slate-700" /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{c.contact.address.label}</p>
                  <p className="text-base text-slate-800">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="neu p-6 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-10">
            <div className="sm:col-span-2 md:col-span-4">
              <p className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">MOA Masters of Arts</p>
              <p className="mt-3 text-sm text-slate-600">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-slate-900">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-slate-300/50 pt-6 text-[11px] text-slate-500 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
