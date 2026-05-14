import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, PlusIcon } from "@/lib/icons";
import { RevealH2, Reveal, HeroFade, HeroStagger, Stagger, StaggerItem } from "@/lib/motion";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Swiss Grid",
  description: "Wariant 9 — Swiss / International Style. Strict grid, sans-serif, zero ozdobników.",
};

export default function Example9() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-white text-black font-[IBM_Plex_Sans,Helvetica,Arial,sans-serif]">
      {/* Top bar — sticky */}
      <header className="sticky top-0 z-50 border-b border-black bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 md:px-10">
          <Link href="/" className="col-span-6 flex items-center gap-3 text-base font-semibold tracking-tight sm:col-span-3 md:col-span-2">
            <span className="grid size-8 place-items-center border border-black text-xs font-bold">M</span>
            MOA
          </Link>
          <nav className="col-span-6 flex items-center justify-end gap-3 text-xs font-medium uppercase tracking-[0.15em] sm:col-span-9 sm:flex-wrap sm:gap-x-6 sm:gap-y-1 sm:tracking-[0.18em] md:col-span-10">
            <div className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-1 sm:flex">
              {c.nav.primary.map((l) => (
                <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>
              ))}
            </div>
            <Link href={c.nav.cta.href} className="bg-[#FF3B30] px-3 py-2 text-white sm:px-4">
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

          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 pb-12 pt-8 sm:gap-4 sm:px-6 sm:pb-14 sm:pt-10 md:px-10 md:pb-16 md:pt-12">
            <div className="col-span-12 mb-5 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-black/60 sm:mb-6 sm:text-xs">
              <span>01 / Hero</span>
              <span className="hidden md:inline">{c.hero.eyebrow}</span>
              <span>2026</span>
            </div>

            <HeroStagger className="col-span-12 md:col-span-8">
              <HeroFade>
                <h1 className="text-balance text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
                  Unikatowe stoiska targowe, <span className="text-[#FF3B30]">które zostają w pamięci.</span>
                </h1>
              </HeroFade>
              <HeroFade delay={0.15}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-black/80 sm:mt-8 md:text-lg">{c.hero.subheadline}</p>
              </HeroFade>
              <HeroFade delay={0.25}>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                  <Link href={c.hero.primaryCta.href} className="inline-flex items-center gap-2 bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white sm:gap-3 sm:px-7 sm:text-sm sm:tracking-[0.15em]">
                    {c.hero.primaryCta.label} <ArrowRightIcon className="size-4" />
                  </Link>
                  <a href={c.hero.secondaryCta.href} className="border border-black bg-white px-4 py-3 text-xs uppercase tracking-[0.12em] hover:bg-black hover:text-white sm:px-6 sm:text-sm sm:tracking-[0.15em]">{c.hero.secondaryCta.label}</a>
                </div>
              </HeroFade>
            </HeroStagger>

            {/* Award column */}
            <HeroFade delay={0.4} className="col-span-12 mt-8 md:col-span-4 md:mt-16">
              <Stagger stagger={0.07} delay={0.5} className="grid grid-cols-2 gap-px bg-black">
                {c.hero.trustBar.badges.map((b, i) => (
                  <StaggerItem key={b.name} className={`p-3 sm:p-4 ${i % 2 === 0 ? "bg-black text-white" : "bg-white"}`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Award</p>
                    <p className="mt-2 text-xs font-semibold leading-tight sm:text-sm">{b.name}</p>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="mt-4 text-right text-[11px] uppercase tracking-[0.2em] text-black/60">↳ Grupa Azoty · realizacja MOA</p>
            </HeroFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-16 sm:gap-4 sm:px-6 sm:py-20 md:px-10">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            <span>02 / O nas</span>
            <span>—</span>
            <span>{c.about.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:mt-8 sm:text-4xl md:col-span-8 md:text-6xl">{c.about.headline}</RevealH2>
          <Reveal delay={0.15} className="col-span-12 mt-6 space-y-4 text-base leading-relaxed text-black/80 sm:mt-8 md:col-span-7 md:col-start-1">
            <p className="text-base sm:text-lg">{c.about.lead}</p>
            {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Stagger className="col-span-12 mt-6 grid grid-cols-2 gap-px self-start bg-black sm:mt-8 md:col-span-5 md:col-start-8">
            {c.about.stats.map((s) => (
              <StaggerItem key={s.label} className="bg-white p-5 sm:p-6">
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/60">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Awards */}
      <section id="nagrody" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-16 sm:gap-4 sm:px-6 sm:py-20 md:px-10">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            <span>03 / Nagrody</span>
            <span>—</span>
            <span>{c.awards.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:mt-8 sm:text-4xl md:text-6xl">{c.awards.headline}</RevealH2>
          <Stagger className="col-span-12 mt-10 grid grid-cols-12 gap-6 sm:mt-12 sm:gap-4">
            {c.awards.items.map((a) => (
              <StaggerItem key={a.name} className="col-span-12 border-t-4 border-black pt-4 md:col-span-3">
                <p className="text-5xl font-bold leading-none sm:text-6xl md:text-7xl">{a.year}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#FF3B30] sm:mt-6">{a.level}</p>
                <h3 className="mt-1 text-xl font-semibold leading-tight">{a.name}</h3>
                <p className="mt-3 text-xs text-black/70">{a.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/80">{a.highlight}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-16 sm:gap-4 sm:px-6 sm:py-20 md:px-10">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            <span>04 / Usługi</span>
            <span>—</span>
            <span>{c.services.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:mt-8 sm:text-4xl md:col-span-8 md:text-6xl">{c.services.headline}</RevealH2>
          <Reveal delay={0.15} className="col-span-12 mt-6 text-base text-black/70 md:col-span-7">
            {c.services.subheadline}
          </Reveal>
          <Stagger className="col-span-12 mt-10 grid grid-cols-1 gap-px bg-black sm:mt-12 md:grid-cols-3">
            {c.services.items.map((s, i) => (
              <StaggerItem key={s.id} className="bg-white p-6 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <ServiceIcon name={s.icon} className="size-7 text-black" />
                  <p className="text-xs uppercase tracking-[0.18em] text-black/50">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-tight sm:mt-8 sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{s.description}</p>
                <ul className="mt-5 space-y-1 border-t border-black/20 pt-5 text-xs text-black/80">
                  {s.features.map((f) => <li key={f}>— {f}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="border-b border-black bg-black text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-16 sm:gap-4 sm:px-6 sm:py-20 md:px-10">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span>05 / Proces</span>
            <span>—</span>
            <span>{c.process.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:mt-8 sm:text-4xl md:col-span-9 md:text-6xl">{c.process.headline}</RevealH2>
          <Stagger className="col-span-12 mt-10 grid grid-cols-1 gap-px bg-white/20 sm:mt-12 md:grid-cols-5">
            {c.process.steps.map((s) => (
              <StaggerItem key={s.number} className="bg-black p-5 sm:p-6">
                <p className="text-4xl font-bold leading-none sm:text-5xl">{s.number}</p>
                <h3 className="mt-5 text-base font-semibold leading-tight sm:mt-6">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#FF3B30]">{s.duration}</p>
                <p className="mt-4 text-xs leading-relaxed text-white/70">{s.description}</p>
                <ul className="mt-4 space-y-0.5 text-[11px] text-white/60">
                  {s.deliverables.map((d) => <li key={d}>— {d}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-black">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-16 sm:gap-4 sm:px-6 sm:py-20 md:px-10">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            <span>06 / FAQ</span>
            <span>—</span>
            <span>{c.faq.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:col-span-5 md:text-5xl">{c.faq.headline}</RevealH2>
          <Reveal delay={0.15} className="col-span-12 mt-6 text-base text-black/70 md:col-span-4 md:col-start-1">
            {c.faq.subheadline}
          </Reveal>
          <Stagger stagger={0.05} className="col-span-12 mt-4 divide-y divide-black border-y border-black md:col-span-7 md:col-start-6 md:row-start-2 md:mt-0">
            {c.faq.items.map((q, i) => (
              <StaggerItem key={q.question}>
                <details className="group py-4 sm:py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 sm:gap-6">
                    <p className="flex items-baseline gap-2 sm:gap-3">
                      <span className="text-xs font-mono text-black/50">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base font-semibold leading-tight sm:text-lg">{q.question}</span>
                    </p>
                    <PlusIcon className="mt-1 size-5 shrink-0 transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 max-w-2xl pl-7 text-sm leading-relaxed text-black/80 sm:pl-8 sm:text-base">{q.answer}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="border-b border-black bg-[#FF3B30] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-20 sm:gap-4 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <Reveal className="col-span-12 flex items-baseline justify-between text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs">
            <span>07 / Kontakt</span>
            <span>—</span>
            <span>{c.cta.primary.eyebrow}</span>
          </Reveal>
          <RevealH2 className="col-span-12 mt-6 text-balance text-4xl font-bold leading-[1.02] tracking-tight sm:mt-8 sm:text-5xl md:col-span-8 md:text-7xl lg:text-8xl">{c.cta.primary.headline}</RevealH2>
          <Reveal delay={0.2} className="col-span-12 mt-6 max-w-xl text-base leading-relaxed sm:mt-8 sm:text-lg md:col-span-8">
            {c.cta.primary.subheadline}
          </Reveal>
          <Reveal delay={0.3} className="col-span-12 mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4 md:col-span-8">
            <Link href={c.cta.primary.primaryButton.href} className="inline-flex items-center gap-2 bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white sm:gap-3 sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.15em]">
              {c.cta.primary.primaryButton.label} <ArrowRightIcon className="size-4" />
            </Link>
            <a href={c.cta.primary.secondaryButton.href} className="border border-white px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.15em]">
              {c.cta.primary.secondaryButton.label}
            </a>
          </Reveal>
          <Stagger className="col-span-12 mt-8 grid grid-cols-1 gap-px bg-white/30 sm:mt-10 md:col-span-4 md:col-start-9 md:row-start-3">
            {c.contact.channels.map((ch) => (
              <StaggerItem key={ch.value}>
                <a href={ch.href} className="block bg-[#FF3B30] p-5 transition hover:bg-[#cc2e25]">
                  <p className="text-xs uppercase tracking-[0.18em] opacity-80">{ch.label}</p>
                  <p className="mt-1 break-all text-xl font-bold sm:text-2xl">{ch.value}</p>
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="bg-[#FF3B30] p-5">
                <p className="text-xs uppercase tracking-[0.18em] opacity-80">{c.contact.address.label}</p>
                <p className="mt-1 text-base">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-3 px-4 py-10 sm:gap-4 sm:px-6 sm:py-12 md:px-10">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xl font-bold tracking-tight sm:text-2xl">MOA Masters of Arts</p>
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
          <div className="col-span-12 mt-10 flex flex-col gap-2 border-t border-black pt-6 text-[11px] text-black/60 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
