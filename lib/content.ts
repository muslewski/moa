import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function loadContent<T = unknown>(name: string): T {
  const file = path.join(CONTENT_DIR, `${name}.json`);
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as T;
}

export interface SiteContent {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  language: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface NavContent {
  primary: Array<{ label: string; href: string }>;
  cta: { label: string; href: string; variant: string };
  phone: { label: string; href: string };
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustBar: {
    label: string;
    badges: Array<{ name: string; type: string }>;
  };
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  lead: string;
  paragraphs: string[];
  values: Array<{ title: string; description: string }>;
  stats: Array<{ value: string; label: string }>;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  items: Array<{
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    icon: string;
    features: string[];
  }>;
}

export interface AwardsContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  items: Array<{
    name: string;
    year: number;
    category: string;
    level: string;
    highlight: string;
  }>;
}

export interface ProcessContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  steps: Array<{
    number: string;
    title: string;
    duration: string;
    description: string;
    deliverables: string[];
  }>;
}

export interface FaqContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  items: Array<{ question: string; answer: string }>;
}

export interface CtaContent {
  primary: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };
  inline: {
    headline: string;
    subheadline: string;
    button: { label: string; href: string };
  };
  newsletter: {
    headline: string;
    subheadline: string;
    placeholder: string;
    buttonLabel: string;
  };
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  channels: Array<{ type: string; label: string; value: string; href: string; primary: boolean }>;
  address: {
    label: string;
    street: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
    mapUrl: string;
  };
  hours: Array<{ days: string; hours: string }>;
}

export interface FooterContent {
  tagline: string;
  columns: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }>;
  legal: {
    companyName: string;
    address: string;
    krs: string;
    nip: string;
    regon: string;
    copyright: string;
  };
  links: Array<{ label: string; href: string }>;
}

export interface IndustriesContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  items: Array<{ name: string; icon: string }>;
}

export function loadAll() {
  return {
    site: loadContent<SiteContent>("site"),
    nav: loadContent<NavContent>("nav"),
    hero: loadContent<HeroContent>("hero"),
    about: loadContent<AboutContent>("about"),
    services: loadContent<ServicesContent>("services"),
    awards: loadContent<AwardsContent>("awards"),
    process: loadContent<ProcessContent>("process"),
    industries: loadContent<IndustriesContent>("industries"),
    faq: loadContent<FaqContent>("faq"),
    cta: loadContent<CtaContent>("cta"),
    contact: loadContent<ContactContent>("contact"),
    footer: loadContent<FooterContent>("footer"),
  };
}

// Image pool — real MOA photos (scraped) + curated fallbacks
export const moaPhotos = [
  "/images/scraped/moa-1.jpg",
  "/images/scraped/moa-2.jpg",
  "/images/scraped/moa-3.jpg",
  "/images/scraped/moa-4.jpg",
  "/images/scraped/moa-5.jpg",
  "/images/scraped/moa-6.jpg",
  "/images/scraped/moa-7.jpg",
  "/images/scraped/moa-8.jpg",
  "/images/scraped/moa-9.jpg",
];

// Pixabay images (fetched via API 43433757-9d4cd68005e14a4833fb02ffe)
export const pixabayPhotos = [
  "/images/pixabay/stock-1.jpg",
  "/images/pixabay/stock-2.jpg",
  "/images/pixabay/stock-3.jpg",
  "/images/pixabay/stock-4.jpg",
  "/images/pixabay/stock-5.jpg",
];

// Mixed pool — alternates real MOA work with stock for variety
export const mixedPhotos = [
  moaPhotos[1], // Grupa Azoty
  moaPhotos[2],
  pixabayPhotos[0],
  moaPhotos[3],
  pixabayPhotos[1],
  moaPhotos[4],
  moaPhotos[5],
];

// Picsum.photos for filler backgrounds
export const stock = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
