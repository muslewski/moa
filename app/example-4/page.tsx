import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadAll, moaPhotos } from "@/lib/content";
import { ServiceIcon, ArrowRightIcon, ArrowUpRightIcon, PlusIcon, PhoneIcon, MailIcon, MapPinIcon, StarIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — Bento Grid",
  description: "Wariant 4 — Bento. Asymetryczne kafle, każda informacja w swojej skrzynce.",
};

export default function Example4() {
  const c = loadAll();
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-stone-900 font-[Inter,system-ui,sans-serif]">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-[#F5F5F2]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-stone-900 text-sm font-black text-white">M</span>
            <span className="text-lg font-semibold tracking-tight">MOA</span>
          </Link>
          <nav className="hidden gap-1 md:flex">
            {c.nav.primary.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-200/60">{l.label}</a>
            ))}
          </nav>
          <Link href={c.nav.cta.href} className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white">
            {c.nav.cta.label}
          </Link>
        </div>
      </header>

      {/* Hero — bento */}
      <section className="mx-auto max-w-7xl px-4 pt-6 md:px-8">
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          {/* Big headline */}
          <div className="col-span-6 rounded-3xl bg-stone-900 p-8 text-white md:col-span-4 md:row-span-2 md:p-12">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">{c.hero.eyebrow}</p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Unikatowe stoiska targowe, które <span className="rounded-2xl bg-orange-500 px-3 py-1">zostają w pamięci.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone-300">{c.hero.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href={c.hero.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100">
                {c.hero.primaryCta.label} <ArrowRightIcon className="size-4" />
              </Link>
              <a href={c.hero.secondaryCta.href} className="rounded-full px-5 py-3 text-sm text-stone-200 ring-1 ring-stone-700 hover:bg-stone-800">
                {c.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Hero photo */}
          <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl bg-stone-200 md:col-span-2">
            <Image src={moaPhotos[1]} alt="MOA realizacja" width={800} height={1000} className="h-full w-full object-cover" priority />
          </div>

          {/* Stat tile 1 */}
          <div className="col-span-3 rounded-3xl bg-orange-500 p-6 text-white md:col-span-2">
            <p className="text-7xl font-bold leading-none tracking-tight">18+</p>
            <p className="mt-2 text-sm font-medium">lat doświadczenia</p>
          </div>
          {/* Stat tile 2 */}
          <div className="col-span-3 rounded-3xl bg-white p-6 ring-1 ring-stone-200 md:col-span-2">
            <p className="text-7xl font-bold leading-none tracking-tight">4×</p>
            <p className="mt-2 text-sm">międzynarodowe nagrody designu</p>
          </div>

          {/* Awards bento */}
          <div className="col-span-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {c.hero.trustBar.badges.map((b, i) => (
              <div key={b.name} className={`rounded-2xl p-5 ${["bg-amber-100", "bg-rose-100", "bg-violet-100", "bg-emerald-100"][i]}`}>
                <StarIcon className="size-5 text-stone-900" />
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-stone-600">Award</p>
                <p className="mt-1 text-base font-semibold leading-tight">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About bento */}
      <section id="o-nas" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-white p-8 ring-1 ring-stone-200 md:col-span-4 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{c.about.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{c.about.headline}</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">{c.about.lead}</p>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-stone-600">
              {c.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-2 gap-3 md:col-span-2 md:gap-4">
            {c.about.values.map((v, i) => (
              <div key={v.title} className={`rounded-3xl p-6 ${["bg-stone-900 text-white", "bg-amber-100", "bg-rose-100", "bg-emerald-100"][i]}`}>
                <p className="text-base font-semibold leading-tight">{v.title}</p>
                <p className="mt-2 text-xs leading-relaxed opacity-80">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards bento */}
      <section id="nagrody" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{c.awards.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.awards.headline}</h2>
        <div className="mt-10 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-rose-600 p-8 text-white md:col-span-3 md:row-span-2 md:p-10">
            <StarIcon className="size-8" />
            <p className="mt-6 text-7xl font-bold leading-none">2017</p>
            <p className="mt-6 text-2xl font-semibold">Red Dot Award</p>
            <p className="mt-2 text-sm opacity-90">Communication Design — Fair Stands</p>
            <p className="mt-8 max-w-md text-sm">Pierwsza polska firma w 60-letniej historii Red Dot w tej kategorii.</p>
          </div>
          {c.awards.items.slice(1).map((a, i) => (
            <div key={a.name} className={`col-span-3 rounded-3xl p-7 ${["bg-stone-900 text-white", "bg-amber-100", "bg-white ring-1 ring-stone-200"][i]}`}>
              <p className="text-5xl font-bold leading-none tracking-tight">{a.year}</p>
              <p className="mt-4 text-base font-semibold">{a.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] opacity-70">{a.level}</p>
              <p className="mt-4 text-sm opacity-80">{a.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services bento */}
      <section id="uslugi" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{c.services.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.services.headline}</h2>
        <div className="mt-10 grid grid-cols-6 gap-3 md:gap-4">
          {c.services.items.map((s, i) => {
            const layouts = [
              "col-span-6 md:col-span-4 bg-stone-900 text-white",
              "col-span-6 md:col-span-2 bg-orange-500 text-white",
              "col-span-6 md:col-span-2 bg-white ring-1 ring-stone-200",
              "col-span-6 md:col-span-2 bg-amber-100",
              "col-span-6 md:col-span-2 bg-rose-100",
              "col-span-6 md:col-span-6 bg-emerald-100",
            ];
            return (
              <article key={s.id} className={`rounded-3xl p-7 ${layouts[i]} md:p-8`}>
                <div className="flex items-start justify-between">
                  <ServiceIcon name={s.icon} className="size-8" />
                  <p className="text-xs uppercase tracking-[0.15em] opacity-60">0{i + 1}</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{s.description}</p>
                {(i === 0 || i === 5) && (
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-xs opacity-90">
                    {s.features.map((f) => <li key={f}>→ {f}</li>)}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Process bento */}
      <section id="proces" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{c.process.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{c.process.headline}</h2>
        <div className="mt-10 grid grid-cols-5 gap-3 md:gap-4">
          {c.process.steps.map((s, i) => (
            <div key={s.number} className={`col-span-5 rounded-3xl p-6 md:col-span-1 md:p-5 ${["bg-stone-900 text-white", "bg-amber-100", "bg-rose-100", "bg-emerald-100", "bg-orange-500 text-white"][i]}`}>
              <p className="text-3xl font-bold leading-none">{s.number}</p>
              <h3 className="mt-6 text-lg font-semibold leading-tight">{s.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] opacity-70">{s.duration}</p>
              <p className="mt-4 text-xs leading-relaxed opacity-85">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ bento */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-stone-900 p-8 text-white md:col-span-2 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{c.faq.headline}</h2>
            <p className="mt-6 text-sm leading-relaxed text-stone-300">{c.faq.subheadline}</p>
          </div>
          <div className="col-span-6 space-y-3 md:col-span-4">
            {c.faq.items.map((q, i) => (
              <details key={q.question} className={`group rounded-2xl p-6 ${i % 2 === 0 ? "bg-white ring-1 ring-stone-200" : "bg-amber-50"}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-base font-semibold md:text-lg">{q.question}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-stone-900 text-white transition group-open:bg-orange-500">
                    <PlusIcon className="size-4 transition group-open:rotate-45" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-stone-700">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA above footer */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-orange-500 p-10 text-white md:col-span-4 md:p-14">
            <p className="text-xs uppercase tracking-[0.25em] text-white/80">{c.cta.primary.eyebrow}</p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{c.cta.primary.headline}</h2>
            <p className="mt-6 max-w-xl text-lg">{c.cta.primary.subheadline}</p>
            <Link href={c.cta.primary.primaryButton.href} className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-stone-900">
              {c.cta.primary.primaryButton.label} <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
          <a href="tel:+48501027234" className="col-span-3 rounded-3xl bg-stone-900 p-6 text-white md:col-span-2">
            <PhoneIcon className="size-6" />
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-stone-400">Telefon</p>
            <p className="mt-1 text-2xl font-semibold">+48 501 027 234</p>
          </a>
          <a href="mailto:office@moa.pl" className="col-span-3 rounded-3xl bg-amber-100 p-6 md:col-span-2">
            <MailIcon className="size-6" />
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-stone-500">E-mail</p>
            <p className="mt-1 text-2xl font-semibold">office@moa.pl</p>
          </a>
          <a href={c.contact.address.mapUrl} className="col-span-6 rounded-3xl bg-rose-100 p-6 md:col-span-2">
            <MapPinIcon className="size-6" />
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-stone-500">{c.contact.address.label}</p>
            <p className="mt-1 text-base font-semibold">{c.contact.address.street}<br />{c.contact.address.postalCode} {c.contact.address.city}</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="rounded-3xl bg-stone-900 p-10 text-white">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-2xl font-semibold tracking-tight">MOA Masters of Arts</p>
              <p className="mt-3 text-sm text-stone-300">{c.footer.tagline}</p>
            </div>
            {c.footer.columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{col.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-stone-300">
                  {col.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-stone-800 pt-6 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
            <p>{c.footer.legal.copyright}</p>
            <p>KRS {c.footer.legal.krs} · NIP {c.footer.legal.nip} · REGON {c.footer.legal.regon}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
