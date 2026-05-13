import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const CompassIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m14.5 9.5-5 1.5 1.5 5 5-1.5z" />
  </svg>
);

export const HammerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m15 12-8.5 8.5a1.5 1.5 0 0 1-2.1 0l-.4-.4a1.5 1.5 0 0 1 0-2.1L12.5 9.5" />
    <path d="m17.6 6.4-1.1 1.1 3 3 1.1-1.1a1.5 1.5 0 0 0 0-2.1l-.9-.9a1.5 1.5 0 0 0-2.1 0Z" />
    <path d="m9 12 6-6 4 4-6 6z" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const TruckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 7h11v9H3z" />
    <path d="M14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const LayoutIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export const ArmchairIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 11V8a3 3 0 0 1 6 0v3" />
    <path d="M13 11V8a3 3 0 0 1 6 0v3" />
    <path d="M4 11h16v4H4z" />
    <path d="M6 15v4M18 15v4" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    <path d="M9 21v-4h6v4" />
  </svg>
);

export const CarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 11h14l-1.5-4.5A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.5L5 11z" />
    <path d="M3 16v-3h18v3l-2 1H5z" />
    <circle cx="7" cy="17" r="1.5" />
    <circle cx="17" cy="17" r="1.5" />
  </svg>
);

export const GemIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M6 3l4 6h4l4-6M2 9h20M12 21V9" />
  </svg>
);

export const UtensilsIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 3v8a3 3 0 0 0 3 3v7" />
    <path d="M6 3v8M9 3v8a3 3 0 0 1-3 3" />
    <path d="M15 21V3c3 0 4 2 4 5v6h-4" />
  </svg>
);

export const CpuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
  </svg>
);

export const FactoryIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21V10l5 4v-4l5 4V8l8 4v9z" />
    <path d="M9 16v2M13 16v2M17 16v2" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const TrophyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 4h12v4a6 6 0 0 1-12 0z" />
    <path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3" />
    <path d="M10 14h4v3h-4zM8 21h8M10 17v4M14 17v4" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>
);

export const ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  compass: CompassIcon,
  hammer: HammerIcon,
  sparkle: SparkleIcon,
  truck: TruckIcon,
  grid: GridIcon,
  layout: LayoutIcon,
  armchair: ArmchairIcon,
  building: BuildingIcon,
  car: CarIcon,
  gem: GemIcon,
  utensils: UtensilsIcon,
  cpu: CpuIcon,
  factory: FactoryIcon,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? CompassIcon;
  return <Icon className={className} />;
}
