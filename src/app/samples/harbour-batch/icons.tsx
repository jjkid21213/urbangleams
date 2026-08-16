import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconCup(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 8h10v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z" />
      <path d="M15 9h2.2A2.8 2.8 0 0 1 20 11.8V12a2.8 2.8 0 0 1-2.8 2.8H15" />
      <path d="M8 4.5c.4.8.4 1.6 0 2.4M11 4.2c.4.8.4 1.7 0 2.6" />
      <path d="M6 20h8" />
    </svg>
  );
}

export function IconRiver(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8c3 2 5-2 8 0s5-2 10 0" />
      <path d="M3 13c3 2 5-2 8 0s5-2 10 0" />
      <path d="M3 18c3 2 5-2 8 0s5-2 10 0" />
    </svg>
  );
}

export function IconToast(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8.5c0-2 1.7-3.5 4-3.5h4c2.3 0 4 1.5 4 3.5V18H6V8.5Z" />
      <path d="M9 11.5h6M9 14.5h4" />
    </svg>
  );
}

export function IconBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 9h10l-.8 10H7.8L7 9Z" />
      <path d="M9 9V7.5A3 3 0 0 1 12 4.5 3 3 0 0 1 15 7.5V9" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2L15 15" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="1.8" />
    </svg>
  );
}

export function IconBike(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6.5" cy="16" r="3" />
      <circle cx="17.5" cy="16" r="3" />
      <path d="M6.5 16 10 9h5l2.5 7M10 9l2 7M12.2 6.5h3" />
    </svg>
  );
}

export function IconSteam(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 18h14" />
      <path d="M7 18V9h10v9" />
      <path d="M9 9V6.5M12 9V5.5M15 9V6.5" />
    </svg>
  );
}

export function IconBoard(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 6h14v12H5z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}
