"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./hb.module.css";
import { IconBag, IconClock, IconCup, IconPin, IconToast } from "./icons";

const links = [
  ["", "Home"],
  ["/menu", "Menu"],
  ["/visit", "Visit"],
  ["/catering", "Catering"],
] as const;

export function HarbourShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <aside className={styles.spine}>
        <Link href="/samples/harbour-batch" className={styles.spineBrand}>
          Harbour Batch
        </Link>
        <nav className={styles.spineLinks}>
          {links.map(([href, label]) => {
            const to = `/samples/harbour-batch${href}`;
            return (
              <Link key={label} href={to} data-active={path === to ? "true" : "false"}>
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <Link href="/samples/harbour-batch" className={styles.brand}>
            Harbour Batch
          </Link>
          <button type="button" className={styles.menuBtn} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open ? (
          <nav className={styles.drawer}>
            {links.map(([href, label]) => (
              <Link key={label} href={`/samples/harbour-batch${href}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        ) : null}
        {children}
        <footer className={styles.foot}>
          Howard Smith Wharves, Brisbane · Showcase concept · Not a real cafe
        </footer>
      </div>
    </div>
  );
}

export const menu = {
  coffee: [
    { name: "Batch brew", price: 4.5, note: "Ask what’s on. We will not do six milks.", tone: "#b5522a" },
    { name: "Milk coffee", price: 5, note: "Small or regular. Oat is the only extra.", tone: "#6b3a28" },
    { name: "Long black", price: 4.8, note: "Two shots, water, no theatre.", tone: "#3f5c4c" },
    { name: "Filter pour-over", price: 6.5, note: "When the bar isn’t slammed.", tone: "#d4a05a" },
  ],
  plates: [
    { name: "Egg on fold", price: 12, note: "Soft egg, pickle, butter that tastes like butter.", tone: "#c45c2a" },
    { name: "Tomato toast", price: 11, note: "Only when the tomatoes are worth it.", tone: "#9a3b28" },
    { name: "Birch granola", price: 14, note: "Oats, yoghurt, whatever fruit made it.", tone: "#7a5a32" },
    { name: "Greens and cheese", price: 16, note: "Leaves, a sharp cheddar, olive oil.", tone: "#3f5c4c" },
  ],
  weekend: [
    { name: "Potato hash", price: 18, note: "Saturday and Sunday until it runs out.", tone: "#b5522a" },
    { name: "Banana bread", price: 7, note: "Thick slice, salted butter.", tone: "#6b3a28" },
    { name: "Kids egg", price: 8, note: "One egg, toast, no cucumber garnish.", tone: "#d4a05a" },
  ],
};

type Tab = keyof typeof menu;

export function MenuBoard({ tray, onAdd }: { tray?: boolean; onAdd?: (name: string) => void }) {
  const [tab, setTab] = useState<Tab>("coffee");
  const items = menu[tab];

  return (
    <div className={styles.sheet}>
      <p className={styles.hand}>Today’s sheet — we stop when the bread’s gone</p>
      <div className={styles.tabs} role="tablist" aria-label="Menu sections">
        {(
          [
            ["coffee", "Coffee"],
            ["plates", "Plates"],
            ["weekend", "Weekend"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={tab === id}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        {items.map((item) => (
          <div className={styles.menuItem} key={item.name}>
            <div className={styles.thumb} style={{ background: item.tone, color: "#f7edd6" }}>
              {tab === "coffee" ? <IconCup /> : tab === "plates" ? <IconToast /> : <IconBag />}
            </div>
            <div>
              <strong>{item.name}</strong>
              <p>{item.note}</p>
              {onAdd ? (
                <button type="button" className={styles.add} onClick={() => onAdd(item.name)}>
                  Add to tray
                </button>
              ) : null}
            </div>
            <span className={styles.price}>{item.price.toFixed(1)}</span>
          </div>
        ))}
      </div>
      {tray ? (
        <p className={styles.hand} style={{ marginTop: "0.8rem" }}>
          Prices in AUD. Showcase tray — no payment taken.
        </p>
      ) : null}
    </div>
  );
}

export function HoursWidget() {
  const status = useMemo(() => {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Brisbane",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
    const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
    const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
    const mins = hour * 60 + minute;
    const openMins = 6 * 60 + 30;
    const closeMins = 14 * 60;
    const closedDays = weekday === "Mon";
    const sundayMaybe = weekday === "Sun";
    const open = !closedDays && !sundayMaybe && mins >= openMins && mins < closeMins;
    return { weekday, open, sundayMaybe, closedDays };
  }, []);

  return (
    <div className={styles.card}>
      <p className={styles.iconRow}>
        <IconClock />
        <strong>Hours</strong>
      </p>
      <p className={styles.badge} style={{ margin: "0.6rem 0 0.8rem" }}>
        {status.closedDays
          ? "Monday — we rest"
          : status.sundayMaybe
            ? "Sunday — only if the machine behaves. Ring first."
            : status.open
              ? "Open now in Brisbane time"
              : "Closed right now · Tue–Sat 6:30am–2pm"}
      </p>
      <ul className={styles.hours}>
        <li>
          <span>Monday</span>
          <span>Closed</span>
        </li>
        <li>
          <span>Tue–Sat</span>
          <span>6:30am–2pm</span>
        </li>
        <li>
          <span>Sunday</span>
          <span>If the machine behaves</span>
        </li>
      </ul>
    </div>
  );
}

export function HarbourFaq() {
  const items = [
    {
      q: "Do you take bookings for coffee?",
      a: "No. Two seats on the water are first come. If you need a reserved table, this is the wrong room.",
    },
    {
      q: "Are dogs allowed?",
      a: "On the deck, on a lead. Not inside next to the machine.",
    },
    {
      q: "Do you have oat milk?",
      a: "Yes. That’s the extra. We are not a milk bar.",
    },
    {
      q: "Can I work on a laptop for two hours?",
      a: "You can sit. We won’t hide the power points, and we won’t pretend this is a coworking loft.",
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.faq}>
      {items.map((item, i) => (
        <div key={item.q}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
          </button>
          {open === i ? <p>{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function TrayBar() {
  const [items, setItems] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.ok}>
        Noted on the showcase tray: {items.join(", ") || "nothing yet"}. A real cafe would ping the kitchen. This one
        does not take money.
      </div>
    );
  }

  return (
    <>
      <MenuBoard tray onAdd={(name) => setItems((list) => [...list, name])} />
      <div className={styles.tray}>
        <span>
          <IconBag style={{ width: 18, height: 18, verticalAlign: "middle", marginRight: 8 }} />
          Tray · {items.length} {items.length === 1 ? "item" : "items"}
          {items.length ? ` · ${items.slice(-3).join(", ")}` : ""}
        </span>
        <button type="button" className={styles.btn} style={{ marginTop: 0 }} onClick={() => setSent(true)} disabled={!items.length}>
          Ask the kitchen
        </button>
      </div>
    </>
  );
}

export function CateringForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.ok}>
        Showcase only — nothing was sent. For a real site like this, email justinbusiness124@gmail.com or call
        0494300150.
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Name
        <input required className={styles.field} name="name" />
      </label>
      <label>
        Work email
        <input required type="email" className={styles.field} name="email" />
      </label>
      <label>
        Headcount
        <input required className={styles.field} name="heads" placeholder="12 minimum" />
      </label>
      <label>
        When
        <input required className={styles.field} name="when" placeholder="Date and time" />
      </label>
      <label>
        Notes
        <textarea required className={styles.field} name="notes" rows={4} />
      </label>
      <button type="submit" className={styles.btn}>
        Request boxes
      </button>
      <p className={styles.hand}>Office boxes, 12 heads minimum, 48 hours’ notice. Showcase form — it stays on this page.</p>
    </form>
  );
}

export function VisitMap() {
  return (
    <div className={styles.map} aria-hidden>
      <span className={styles.pin}>
        <IconPin style={{ width: 16, height: 16, marginRight: 6, verticalAlign: "middle" }} />
        Wharves
      </span>
    </div>
  );
}
