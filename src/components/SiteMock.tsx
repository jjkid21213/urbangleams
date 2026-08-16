import type { WorkTheme } from "@/lib/work";

const themes: Record<
  WorkTheme,
  { bg: string; ink: string; accent: string; title: string; lines: string[] }
> = {
  salon: {
    bg: "#1a1214",
    ink: "#f3e6e4",
    accent: "#e8b4a8",
    title: "Vellum",
    lines: ["Colour · Cut · Gloss", "Book from the tram", "Fitzroy"],
  },
  cafe: {
    bg: "#16130e",
    ink: "#f0e6d4",
    accent: "#c9a36a",
    title: "Harbour Batch",
    lines: ["Hours on the first screen", "Menu you can read", "Catering"],
  },
  trade: {
    bg: "#10141a",
    ink: "#e8eef4",
    accent: "#7eb0d4",
    title: "Northline",
    lines: ["Licensed · Insured", "Inner west", "Call or SMS"],
  },
};

export function SiteMock({ theme }: { theme: WorkTheme }) {
  const t = themes[theme];

  return (
    <div className="site-mock">
      <div className="site-mock-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="site-mock-body" style={{ background: t.bg, color: t.ink }}>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] opacity-70">
          <span>{t.title}</span>
          <span style={{ color: t.accent }}>Book</span>
        </div>
        <p className="mt-8 font-serif text-2xl italic leading-tight md:text-3xl">
          {t.lines[0]}
        </p>
        <ul className="mt-8 space-y-2 text-xs opacity-80">
          {t.lines.slice(1).map((line) => (
            <li key={line} className="flex gap-2">
              <span style={{ color: t.accent }}>—</span>
              {line}
            </li>
          ))}
        </ul>
        <div
          className="mt-10 h-px w-16"
          style={{ background: t.accent }}
        />
      </div>
    </div>
  );
}
