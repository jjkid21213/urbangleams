import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconVault(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9.2v.8M12 14v.8M9.2 12h.8M14 12h.8" />
    </svg>
  );
}

export function IconKeys(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="8" cy="10" r="3" />
      <path d="M11 10h9l-1.5 2L20 14h-3" />
    </svg>
  );
}

export function IconLedger(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="11" width="12" height="9" rx="1" />
      <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" />
    </svg>
  );
}

export function IconCsv(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 5h8l4 4v10H6z" />
      <path d="M14 5v4h4M8 13h8M8 16h5" />
    </svg>
  );
}

export function IconDesk(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h16v10H4z" />
      <path d="M4 12h16M9 8V5h6v3" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 7.2-7 8.8-4.2-1.6-7-4.6-7-8.8V6.5L12 3.5Z" />
      <path d="M9.5 12.2 11.2 14l3.5-4" />
    </svg>
  );
}
