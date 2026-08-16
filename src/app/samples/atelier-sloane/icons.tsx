import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconCoat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c4 6 8 7 12 7s8-1 12-7" />
      <path d="M20 10 14 58h12l6-22 6 22h12L44 10" />
      <path d="M32 17v19" />
    </svg>
  );
}

export function IconDress(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M26 8h12" />
      <path d="M28 8 24 20 16 56h32L40 20 36 8" />
      <path d="M24 20h16" />
    </svg>
  );
}

export function IconShirt(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14 32 8l12 6 8 6v8l-8-4v26H20V30l-8 4v-8l8-6Z" />
      <path d="M32 8v12" />
    </svg>
  );
}

export function IconScissors(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <path d="M8 8.5 20 18M8 15.5 20 6" />
    </svg>
  );
}

export function IconHanger(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <path d="M12 4a2 2 0 0 1 2 2c0 1.2-2 2-2 3" />
      <path d="M12 9 4 16h16L12 9Z" />
    </svg>
  );
}

export function IconNeedle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <path d="M14 4 5 20" />
      <path d="M16.5 6.5c1.4-1.4 3.6-1.4 5 0" />
    </svg>
  );
}

export function IconWindow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <rect x="5" y="4" width="14" height="16" />
      <path d="M12 4v16M5 12h14" />
    </svg>
  );
}
