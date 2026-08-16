import type { WorkTheme } from "@/lib/work";

const themes: Record<
  WorkTheme,
  {
    bg: string;
    ink: string;
    accent: string;
    muted: string;
    title: string;
    kicker: string;
    lines: string[];
    cta: string;
  }
> = {
  cafe: {
    bg: "#f6efe3",
    ink: "#2a2118",
    accent: "#8a5a2b",
    muted: "#7a6d5c",
    title: "Batch & Birch",
    kicker: "Brunswick East",
    lines: ["Open today 7–3", "Sourdough, eggs, filter"],
    cta: "Catering",
  },
  salon: {
    bg: "#f4ecea",
    ink: "#2b1c1c",
    accent: "#9a4a4a",
    muted: "#7d6a68",
    title: "The Cut Room",
    kicker: "Surry Hills",
    lines: ["Cut · colour · gloss", "Book from your phone"],
    cta: "Book",
  },
  clinic: {
    bg: "#eef2ef",
    ink: "#1c2420",
    accent: "#3d6b58",
    muted: "#66756e",
    title: "River Physio",
    kicker: "West End",
    lines: ["New patients welcome", "First visit: 45 minutes"],
    cta: "Request a time",
  },
  trade: {
    bg: "#eceff3",
    ink: "#1a2030",
    accent: "#2b4c7e",
    muted: "#5c6678",
    title: "Kerr Electrical",
    kicker: "Licensed · Adelaide",
    lines: ["Inner south + CBD", "Call or SMS"],
    cta: "Call now",
  },
};

export function SiteMock({
  theme,
  title,
}: {
  theme: WorkTheme;
  title?: string;
}) {
  const t = themes[theme];
  const name = title ?? t.title;

  return (
    <div className="relative">
      <div className="device-desk" aria-hidden>
        <div className="device-desk-bar">
          <i />
          <i />
          <i />
          <span className="ml-2 truncate text-[10px] text-[#9a9288]">{name.toLowerCase().replace(/\s+/g, "")}.example</span>
        </div>
        <div className="device-desk-screen px-5 py-6" style={{ background: t.bg, color: t.ink }}>
          <div className="flex items-center justify-between text-[10px] font-medium">
            <span>{name}</span>
            <span style={{ color: t.accent }}>{t.cta}</span>
          </div>
          <p className="mt-7 font-display text-2xl font-semibold leading-tight md:text-[1.7rem]">
            {t.lines[0]}
          </p>
          <p className="mt-3 text-xs" style={{ color: t.muted }}>
            {t.kicker} · {t.lines[1]}
          </p>
          <div className="mt-8 flex gap-2">
            <span className="px-2 py-1 text-[10px] text-white" style={{ background: t.ink }}>
              {t.cta}
            </span>
            <span className="px-2 py-1 text-[10px]" style={{ border: `1px solid ${t.ink}` }}>
              See more
            </span>
          </div>
        </div>
      </div>
      <div className="device-phone absolute -bottom-4 -right-1 hidden sm:block" aria-hidden>
        <div className="device-phone-notch" />
        <div className="device-phone-screen px-2 py-3" style={{ background: t.bg, color: t.ink }}>
          <p className="text-[8px] font-semibold">{name}</p>
          <p className="mt-3 font-display text-[11px] font-semibold leading-tight">{t.lines[0]}</p>
          <p className="mt-6 px-1 py-1 text-center text-[8px] text-white" style={{ background: t.ink }}>
            {t.cta}
          </p>
        </div>
      </div>
    </div>
  );
}
