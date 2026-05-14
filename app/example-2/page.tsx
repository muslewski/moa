import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, ArrowUpRightIcon, PlusIcon } from "@/lib/icons";
import { RevealH2, Reveal, HeroFade, HeroStagger, Stagger, StaggerItem, Marquee } from "@/lib/motion";

export const metadata: Metadata = {
  title: "MOA — UNIKATOWE STOISKA TARGOWE [BRUTALIST]",
  description: "Wariant 2 — Brutalism. Surowy, hałaśliwy, bez kompromisów.",
};

export default function Example2() {
  const c = loadAll();

  return (
    <main className="min-h-screen bg-[#FFFF00] text-black font-[Space_Grotesk,system-ui,sans-serif]">
      {/* Top bar — sticky */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-[#FFFF00]">
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
            <HeroStagger className="md:col-span-8">
              <HeroFade>
                <div className="brut-shadow inline-block border-2 border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider">
                  ★ OD 2006 ★ {c.hero.eyebrow}
                </div>
              </HeroFade>
              <HeroFade delay={0.1}>
                <h1 className="mt-6 font-[Bebas_Neue,Impact,sans-serif] text-[clamp(44px,11vw,196px)] font-normal leading-[0.95] tracking-tight">
                  <span className="block">UNIKATOWE</span>
                  <span className="my-2 inline-block bg-black px-3 py-1 leading-[0.85] text-[#FFFF00] sm:px-4">STOISKA</span>
                  <span className="block">TARGOWE.</span>
                </h1>
              </HeroFade>
              <HeroFade delay={0.2}>
                <p className="mt-8 max-w-2xl border-l-4 border-black bg-white p-4 text-sm font-medium leading-relaxed sm:border-l-8 sm:p-5 sm:text-base md:text-lg">
                  {c.hero.subheadline}
                </p>
              </HeroFade>
              <HeroFade delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link href={c.hero.primaryCta.href} className="brut-shadow inline-flex items-center gap-2 bg-black px-5 py-4 text-sm font-black uppercase text-[#FFFF00] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:gap-3 sm:px-7 sm:py-5 sm:text-base">
                    {c.hero.primaryCta.label} <ArrowRightIcon className="size-4 sm:size-5" />
                  </Link>
                  <a href={c.hero.secondaryCta.href} className="border-4 border-black bg-white px-4 py-3 text-xs font-black uppercase tracking-tight hover:bg-black hover:text-[#FFFF00] sm:px-6 sm:py-4 sm:text-sm">
                    {c.hero.secondaryCta.label}
                  </a>
                </div>
              </HeroFade>
            </HeroStagger>

            <HeroFade delay={0.15} className="md:col-span-4">
              <div className="brut-shadow border-4 border-black">
                <Image src={moaPhotos[3]} alt="Stoisko MOA" width={800} height={1000} className="aspect-[4/5] w-full object-cover" priority />
              </div>
              <HeroStagger stagger={0.07} delay={0.35} className="mt-4 grid grid-cols-2 gap-3">
                <HeroFade y={12}>
                  <div className="brut-shadow-red border-4 border-black bg-[#E2231A] p-3 text-white">
                    <p className="text-[10px] font-black uppercase">Red Dot</p>
                    <p className="font-[Bebas_Neue] text-3xl leading-none">2017</p>
                  </div>
                </HeroFade>
                <HeroFade y={12}>
                  <div className="brut-shadow border-4 border-black bg-white p-3">
                    <p className="text-[10px] font-black uppercase">iF Design</p>
                    <p className="font-[Bebas_Neue] text-3xl leading-none">2018</p>
                  </div>
                </HeroFade>
                <HeroFade y={12}>
                  <div className="brut-shadow border-4 border-black bg-black p-3 text-[#FFFF00]">
                    <p className="text-[10px] font-black uppercase">A'Design</p>
                    <p className="font-[Bebas_Neue] text-3xl leading-none">2019</p>
                  </div>
                </HeroFade>
                <HeroFade y={12}>
                  <div className="brut-shadow border-4 border-black bg-[#FFFF00] p-3">
                    <p className="text-[10px] font-black uppercase">German DA</p>
                    <p className="font-[Bebas_Neue] text-3xl leading-none">2020</p>
                  </div>
                </HeroFade>
              </HeroStagger>
            </HeroFade>
          </div>

          {/* Marquee strip — infinite ticker */}
          <Marquee duration={32} className="mt-10 border-y-4 border-black bg-black py-3 sm:mt-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-6 whitespace-nowrap px-3 font-[Bebas_Neue] text-lg text-[#FFFF00] sm:gap-8 sm:px-4 sm:text-2xl">
                <span>★ RED DOT WINNER 2017</span>
                <span>★ iF DESIGN AWARD 2018</span>
                <span>★ A'DESIGN PLATINUM 2019</span>
                <span>★ GERMAN DESIGN AWARD 2020</span>
                <span>★ PIERWSZA POLSKA FIRMA W KAT. FAIR STANDS</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="text-xs font-black uppercase tracking-widest">★ {c.about.eyebrow}</p>
              </Reveal>
              <RevealH2 className="mt-4 font-[Bebas_Neue] text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">{c.about.headline}</RevealH2>
            </div>
            <Reveal delay={0.15} className="space-y-4 text-base font-medium leading-relaxed md:col-span-7">
              <p>{c.about.lead}</p>
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:grid-cols-4">
            {c.about.stats.map((s, i) => (
              <StaggerItem key={s.label} className={`brut-shadow border-4 border-black p-4 sm:p-6 ${["bg-[#FFFF00]", "bg-white", "bg-[#E2231A] text-white", "bg-black text-[#FFFF00]"][i % 4]}`}>
                <p className="font-[Bebas_Neue] text-4xl leading-none sm:text-5xl md:text-6xl">{s.value}</p>
                <p className="mt-2 text-[10px] font-black uppercase sm:text-xs">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-b-4 border-black bg-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest">★ {c.awards.eyebrow}</p>
          </Reveal>
          <RevealH2 className="mt-4 max-w-3xl font-[Bebas_Neue] text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">{c.awards.headline}</RevealH2>
          <Stagger className="mt-10 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-2">
            {c.awards.items.map((a, i) => (
              <StaggerItem key={a.name} className={`brut-shadow border-4 border-black ${i % 2 === 0 ? "bg-white" : "bg-black text-[#FFFF00]"} p-5 sm:p-8`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-[Bebas_Neue] text-5xl leading-none sm:text-6xl md:text-7xl">{a.year}</p>
                  <p className="text-xs font-black uppercase sm:text-sm">{a.level}</p>
                </div>
                <p className="mt-5 text-xl font-black uppercase sm:text-2xl">{a.name}</p>
                <p className="mt-2 text-xs font-bold sm:text-sm">{a.category}</p>
                <p className="mt-5 border-t-2 border-current pt-4 text-sm font-medium">{a.highlight}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest">★ {c.services.eyebrow}</p>
          </Reveal>
          <RevealH2 className="mt-4 max-w-3xl font-[Bebas_Neue] text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">{c.services.headline}</RevealH2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base font-medium sm:text-lg">{c.services.subheadline}</p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s, i) => (
              <StaggerItem key={s.id} className={`brut-shadow border-4 border-black p-5 sm:p-7 ${[
                "bg-[#FFFF00]",
                "bg-white",
                "bg-[#E2231A] text-white",
                "bg-black text-[#FFFF00]",
                "bg-white",
                "bg-[#FFFF00]",
              ][i]}`}>
                <div className="flex items-center justify-between">
                  <ServiceIcon name={s.icon} className="size-9 sm:size-10" />
                  <p className="font-[Bebas_Neue] text-3xl">0{i + 1}</p>
                </div>
                <h3 className="mt-6 text-xl font-black uppercase leading-tight sm:mt-8 sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-1 border-t-2 border-current pt-4 text-xs font-bold">
                  {s.features.map((f) => <li key={f}>→ {f}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-b-4 border-black bg-black text-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest">★ {c.process.eyebrow}</p>
          </Reveal>
          <RevealH2 className="mt-4 max-w-4xl font-[Bebas_Neue] text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl">{c.process.headline}</RevealH2>
          <Stagger stagger={0.1} className="mt-10 divide-y-4 divide-[#FFFF00] border-y-4 border-[#FFFF00] md:mt-12">
            {c.process.steps.map((s) => (
              <StaggerItem key={s.number} className="grid gap-4 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <p className="font-[Bebas_Neue] text-5xl leading-none sm:text-6xl md:col-span-1 md:text-6xl">{s.number}</p>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase">⌚ {s.duration}</p>
                </div>
                <p className="text-base font-medium md:col-span-4">{s.description}</p>
                <ul className="space-y-1 text-sm font-bold md:col-span-3">
                  {s.deliverables.map((d) => <li key={d}>★ {d}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="text-xs font-black uppercase tracking-widest">★ {c.faq.eyebrow}</p>
              </Reveal>
              <RevealH2 className="mt-4 font-[Bebas_Neue] text-4xl leading-[0.9] sm:text-5xl md:text-6xl">{c.faq.headline}</RevealH2>
              <Reveal delay={0.15}>
                <p className="mt-6 text-base font-medium">{c.faq.subheadline}</p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="brut-shadow mt-8 inline-block max-w-full border-4 border-black bg-[#FFFF00] p-4">
                  <p className="text-xs font-black uppercase">Bezpośrednio:</p>
                  <a href="tel:+48501027234" className="font-[Bebas_Neue] text-2xl sm:text-3xl">+48 501 027 234</a>
                </div>
              </Reveal>
            </div>
            <Stagger stagger={0.06} className="divide-y-4 divide-black border-y-4 border-black md:col-span-8">
              {c.faq.items.map((q) => (
                <StaggerItem key={q.question}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 sm:gap-6 sm:py-5">
                      <h3 className="text-base font-black uppercase leading-tight sm:text-lg md:text-xl">{q.question}</h3>
                      <div className="brut-shadow grid size-10 shrink-0 place-items-center border-4 border-black bg-[#FFFF00] transition group-open:bg-[#E2231A] group-open:text-white sm:size-12">
                        <PlusIcon className="size-4 transition group-open:rotate-45 sm:size-5" />
                      </div>
                    </summary>
                    <p className="pb-5 text-sm font-medium leading-relaxed sm:text-base">{q.answer}</p>
                  </details>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="border-b-4 border-black bg-[#E2231A] text-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-xs font-black uppercase tracking-widest">★ {c.cta.primary.eyebrow}</p>
              </Reveal>
              <RevealH2 className="mt-6 font-[Bebas_Neue] text-5xl leading-[0.85] sm:text-6xl md:text-8xl lg:text-9xl">{c.cta.primary.headline}</RevealH2>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-base font-medium sm:mt-8 sm:text-lg">{c.cta.primary.subheadline}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-10">
                  <Link href={c.cta.primary.primaryButton.href} className="brut-shadow inline-flex items-center gap-2 border-4 border-black bg-[#FFFF00] px-5 py-4 text-base font-black uppercase text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:gap-3 sm:px-8 sm:py-5 sm:text-lg">
                    {c.cta.primary.primaryButton.label} <ArrowUpRightIcon className="size-5 sm:size-6" />
                  </Link>
                  <a href={c.cta.primary.secondaryButton.href} className="border-4 border-white px-4 py-3 text-sm font-black uppercase text-white sm:px-6 sm:py-4 sm:text-base">
                    {c.cta.primary.secondaryButton.label}
                  </a>
                </div>
              </Reveal>
            </div>
            <Stagger className="space-y-4 md:col-span-5">
              {c.contact.channels.map((ch) => (
                <StaggerItem key={ch.value}>
                  <a href={ch.href} className="brut-shadow block border-4 border-black bg-white p-5 text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:p-6">
                    <p className="text-xs font-black uppercase">{ch.label}</p>
                    <p className="mt-2 break-all font-[Bebas_Neue] text-2xl leading-none sm:text-3xl">{ch.value}</p>
                  </a>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="brut-shadow border-4 border-black bg-black p-5 text-[#FFFF00] sm:p-6">
                  <p className="text-xs font-black uppercase">{c.contact.address.label}</p>
                  <p className="mt-2 text-base font-bold">
                    {c.contact.address.street}<br />
                    {c.contact.address.postalCode} {c.contact.address.city}
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-[#FFFF00]">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-10">
            <div className="sm:col-span-2 md:col-span-4">
              <p className="font-[Bebas_Neue] text-5xl leading-none sm:text-6xl">MOA</p>
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
          <div className="mt-12 border-t-4 border-[#FFFF00] pt-6 text-[10px] font-bold uppercase sm:text-xs">
            <p>{c.footer.legal.copyright}</p>
            <p className="mt-1 text-[#FFFF00]/60">KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
