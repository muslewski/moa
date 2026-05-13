import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, ArrowUpRightIcon, PlusIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA — UNIKATOWE STOISKA TARGOWE [BRUTALIST]",
  description: "Wariant 2 — Brutalism. Surowy, hałaśliwy, bez kompromisów.",
};

export default function Example2() {
  const c = loadAll();

  return (
    <main className="min-h-screen bg-[#FFFF00] text-black font-[Space_Grotesk,system-ui,sans-serif]">
      {/* Top bar */}
      <header className="border-b-4 border-black">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center bg-black text-2xl font-black text-[#FFFF00]">M</div>
            <div>
              <p className="text-xl font-black uppercase leading-none tracking-tight">MOA</p>
              <p className="text-[10px] font-bold uppercase">Masters of Arts</p>
            </div>
          </div>
          <nav className="hidden gap-1 lg:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="border-2 border-transparent px-3 py-1.5 text-sm font-bold uppercase tracking-tight hover:border-black hover:bg-black hover:text-[#FFFF00]">
                {l.label}
              </a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="brut-shadow bg-black px-5 py-3 text-sm font-black uppercase text-[#FFFF00] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            {c.nav.cta.label} →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-screen-2xl px-4 py-10 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="brut-shadow inline-block border-2 border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider">
                ★ OD 2006 ★ {c.hero.eyebrow}
              </div>
              <h1 className="mt-6 font-[Bebas_Neue,Impact,sans-serif] text-[clamp(56px,12vw,196px)] font-normal leading-[0.95] tracking-tight">
                <span className="block">UNIKATOWE</span>
                <span className="my-2 inline-block bg-black px-4 py-1 leading-[0.85] text-[#FFFF00]">STOISKA</span>
                <span className="block">TARGOWE.</span>
              </h1>
              <p className="mt-8 max-w-2xl border-l-8 border-black bg-white p-5 text-base font-medium leading-relaxed md:text-lg">
                {c.hero.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={c.hero.primaryCta.href} className="brut-shadow inline-flex items-center gap-3 bg-black px-7 py-5 text-base font-black uppercase text-[#FFFF00] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  {c.hero.primaryCta.label} <ArrowRightIcon className="size-5" />
                </Link>
                <a href={c.hero.secondaryCta.href} className="border-4 border-black bg-white px-6 py-4 text-sm font-black uppercase tracking-tight hover:bg-black hover:text-[#FFFF00]">
                  {c.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="brut-shadow border-4 border-black">
                <Image src={moaPhotos[3]} alt="Stoisko MOA" width={800} height={1000} className="aspect-[4/5] w-full object-cover" priority />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="brut-shadow-red border-4 border-black bg-[#E2231A] p-3 text-white">
                  <p className="text-[10px] font-black uppercase">Red Dot</p>
                  <p className="font-[Bebas_Neue] text-3xl leading-none">2017</p>
                </div>
                <div className="brut-shadow border-4 border-black bg-white p-3">
                  <p className="text-[10px] font-black uppercase">iF Design</p>
                  <p className="font-[Bebas_Neue] text-3xl leading-none">2018</p>
                </div>
                <div className="brut-shadow border-4 border-black bg-black p-3 text-[#FFFF00]">
                  <p className="text-[10px] font-black uppercase">A'Design</p>
                  <p className="font-[Bebas_Neue] text-3xl leading-none">2019</p>
                </div>
                <div className="brut-shadow border-4 border-black bg-[#FFFF00] p-3">
                  <p className="text-[10px] font-black uppercase">German DA</p>
                  <p className="font-[Bebas_Neue] text-3xl leading-none">2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee strip */}
          <div className="mt-12 overflow-hidden border-y-4 border-black bg-black py-3">
            <div className="flex animate-pulse gap-8 whitespace-nowrap px-4 font-[Bebas_Neue] text-2xl text-[#FFFF00]">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="contents">
                  <span>★ RED DOT WINNER 2017</span>
                  <span>★ iF DESIGN AWARD 2018</span>
                  <span>★ A'DESIGN PLATINUM 2019</span>
                  <span>★ GERMAN DESIGN AWARD 2020</span>
                  <span>★ PIERWSZA POLSKA FIRMA W KAT. FAIR STANDS</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-black uppercase tracking-widest">★ {c.about.eyebrow}</p>
              <h2 className="mt-4 font-[Bebas_Neue] text-6xl leading-[0.9] md:text-7xl">{c.about.headline}</h2>
            </div>
            <div className="space-y-4 text-base font-medium leading-relaxed md:col-span-7">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {c.about.stats.map((s, i) => (
              <div key={s.label} className={`brut-shadow border-4 border-black p-6 ${["bg-[#FFFF00]", "bg-white", "bg-[#E2231A] text-white", "bg-black text-[#FFFF00]"][i % 4]}`}>
                <p className="font-[Bebas_Neue] text-6xl leading-none">{s.value}</p>
                <p className="mt-2 text-xs font-black uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-b-4 border-black bg-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8">
          <p className="text-xs font-black uppercase tracking-widest">★ {c.awards.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-[Bebas_Neue] text-6xl leading-[0.9] md:text-7xl">{c.awards.headline}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.awards.items.map((a, i) => (
              <div key={a.name} className={`brut-shadow border-4 border-black ${i % 2 === 0 ? "bg-white" : "bg-black text-[#FFFF00]"} p-8`}>
                <div className="flex items-baseline justify-between">
                  <p className="font-[Bebas_Neue] text-7xl leading-none">{a.year}</p>
                  <p className="text-sm font-black uppercase">{a.level}</p>
                </div>
                <p className="mt-6 text-2xl font-black uppercase">{a.name}</p>
                <p className="mt-2 text-sm font-bold">{a.category}</p>
                <p className="mt-6 border-t-2 border-current pt-4 text-sm font-medium">{a.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8">
          <p className="text-xs font-black uppercase tracking-widest">★ {c.services.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-[Bebas_Neue] text-6xl leading-[0.9] md:text-7xl">{c.services.headline}</h2>
          <p className="mt-6 max-w-2xl text-lg font-medium">{c.services.subheadline}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s, i) => (
              <article key={s.id} className={`brut-shadow border-4 border-black p-7 ${[
                "bg-[#FFFF00]",
                "bg-white",
                "bg-[#E2231A] text-white",
                "bg-black text-[#FFFF00]",
                "bg-white",
                "bg-[#FFFF00]",
              ][i]}`}>
                <div className="flex items-center justify-between">
                  <ServiceIcon name={s.icon} className="size-10" />
                  <p className="font-[Bebas_Neue] text-3xl">0{i + 1}</p>
                </div>
                <h3 className="mt-8 text-2xl font-black uppercase leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-1 border-t-2 border-current pt-4 text-xs font-bold">
                  {s.features.map((f) => <li key={f}>→ {f}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-b-4 border-black bg-black text-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8">
          <p className="text-xs font-black uppercase tracking-widest">★ {c.process.eyebrow}</p>
          <h2 className="mt-4 max-w-4xl font-[Bebas_Neue] text-6xl leading-[0.9] md:text-7xl">{c.process.headline}</h2>
          <div className="mt-12 divide-y-4 divide-[#FFFF00] border-y-4 border-[#FFFF00]">
            {c.process.steps.map((s, i) => (
              <div key={s.number} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                <p className="font-[Bebas_Neue] text-7xl leading-none md:col-span-1 md:text-6xl">{s.number}</p>
                <div className="md:col-span-4">
                  <h3 className="text-3xl font-black uppercase leading-tight">{s.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase">⌚ {s.duration}</p>
                </div>
                <p className="text-base font-medium md:col-span-4">{s.description}</p>
                <ul className="space-y-1 text-sm font-bold md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>★ {d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-black uppercase tracking-widest">★ {c.faq.eyebrow}</p>
              <h2 className="mt-4 font-[Bebas_Neue] text-6xl leading-[0.9]">{c.faq.headline}</h2>
              <p className="mt-6 text-base font-medium">{c.faq.subheadline}</p>
              <div className="brut-shadow mt-8 inline-block border-4 border-black bg-[#FFFF00] p-4">
                <p className="text-xs font-black uppercase">Bezpośrednio:</p>
                <a href="tel:+48501027234" className="font-[Bebas_Neue] text-3xl">+48 501 027 234</a>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y-4 divide-black border-y-4 border-black">
                {c.faq.items.map((q) => (
                  <li key={q.question}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                        <h3 className="text-lg font-black uppercase leading-tight md:text-xl">{q.question}</h3>
                        <div className="brut-shadow grid size-12 shrink-0 place-items-center border-4 border-black bg-[#FFFF00] transition group-open:bg-[#E2231A] group-open:text-white">
                          <PlusIcon className="size-5 transition group-open:rotate-45" />
                        </div>
                      </summary>
                      <p className="pb-5 text-base font-medium leading-relaxed">{q.answer}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="border-b-4 border-black bg-[#E2231A] text-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs font-black uppercase tracking-widest">★ {c.cta.primary.eyebrow}</p>
              <h2 className="mt-6 font-[Bebas_Neue] text-7xl leading-[0.85] md:text-9xl">{c.cta.primary.headline}</h2>
              <p className="mt-8 max-w-xl text-lg font-medium">{c.cta.primary.subheadline}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={c.cta.primary.primaryButton.href} className="brut-shadow inline-flex items-center gap-3 border-4 border-black bg-[#FFFF00] px-8 py-5 text-lg font-black uppercase text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  {c.cta.primary.primaryButton.label} <ArrowUpRightIcon className="size-6" />
                </Link>
                <a href={c.cta.primary.secondaryButton.href} className="border-4 border-white px-6 py-4 font-black uppercase text-white">
                  {c.cta.primary.secondaryButton.label}
                </a>
              </div>
            </div>
            <div className="space-y-4 md:col-span-5">
              {c.contact.channels.map((ch) => (
                <a key={ch.value} href={ch.href} className="brut-shadow block border-4 border-black bg-white p-6 text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <p className="text-xs font-black uppercase">{ch.label}</p>
                  <p className="mt-2 font-[Bebas_Neue] text-3xl leading-none">{ch.value}</p>
                </a>
              ))}
              <div className="brut-shadow border-4 border-black bg-black p-6 text-[#FFFF00]">
                <p className="text-xs font-black uppercase">{c.contact.address.label}</p>
                <p className="mt-2 text-base font-bold">
                  {c.contact.address.street}<br />
                  {c.contact.address.postalCode} {c.contact.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-[Bebas_Neue] text-6xl leading-none">MOA</p>
              <p className="mt-3 text-sm font-bold">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs font-black uppercase">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm font-bold">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:underline">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t-4 border-[#FFFF00] pt-6 text-xs font-bold uppercase">
            <p>{c.footer.legal.copyright}</p>
            <p className="mt-1 text-[#FFFF00]/60">KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
