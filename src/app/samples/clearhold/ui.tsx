"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./ch.module.css";
import { IconCsv, IconDesk, IconKeys, IconLedger, IconLock, IconShield, IconVault } from "./icons";

const links = [
  ["", "Overview", IconDesk],
  ["/product", "Product", IconLedger],
  ["/security", "Security", IconShield],
  ["/contact", "Contact", IconKeys],
] as const;

export function ClearholdShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const clock = useMemo(
    () =>
      new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        weekday: "short",
      }).format(new Date()),
    [],
  );

  return (
    <div className={styles.shell}>
      <aside className={styles.rail}>
        <Link href="/samples/clearhold" className={styles.brand}>
          CLEARHOLD
        </Link>
        <div>
          <p className={styles.railLabel}>Desk</p>
          {links.map(([href, label, Icon]) => {
            const to = `/samples/clearhold${href}`;
            return (
              <Link key={label} href={to} data-active={path === to ? "true" : "false"}>
                <Icon />
                {label}
              </Link>
            );
          })}
        </div>
        <div className={styles.status}>
          <span className={styles.dot} />
          SYD {clock}
          <br />
          Sample desk · not live
        </div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <Link href="/samples/clearhold" className={styles.brand}>
            CLEARHOLD
          </Link>
          <span>AU OTC · showcase</span>
          <button type="button" className={styles.menuBtn} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? "Close" : "Nav"}
          </button>
        </div>
        {open ? (
          <nav className={styles.drawer}>
            {links.map(([href, label]) => (
              <Link key={label} href={`/samples/clearhold${href}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        ) : null}
        {children}
        <footer className={styles.foot}>Sydney · Showcase concept · Not a licensed financial product</footer>
      </div>
    </div>
  );
}

const books = {
  settle: [
    ["BTC", "Spot", "T+0", "Named account"],
    ["ETH", "Spot", "T+0", "Named account"],
    ["AUD", "Fiat rail", "T+1", "AU ADI"],
    ["USD", "Fiat rail", "T+1", "Correspondent"],
  ],
  policy: [
    ["Maker", "Quote", "One person"],
    ["Checker", "Release", "Second key"],
    ["CFO pack", "CSV", "End of day"],
    ["Board", "Memo", "On request"],
  ],
  hours: [
    ["Desk", "09:00–16:00", "Australia/Sydney"],
    ["Fixing", "On request", "Inside desk hours"],
    ["After hours", "No", "Use $140/hr on a real job — not this sample"],
  ],
};

type Book = keyof typeof books;

export function ProductTabs() {
  const [tab, setTab] = useState<Book>("settle");
  const headers =
    tab === "settle"
      ? ["Asset", "Type", "Cycle", "Destination"]
      : tab === "policy"
        ? ["Role", "Action", "Rule"]
        : ["Window", "When", "Note"];

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Product views">
        {(
          [
            ["settle", "Settlement"],
            ["policy", "Approvals"],
            ["hours", "Desk hours"],
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
      <div className={styles.tableWrap} role="tabpanel">
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {books[tab].map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.lede} style={{ marginTop: "0.8rem" }}>
        Sample blotter. Figures and rails are layout, not a live book and not an offer.
      </p>
    </div>
  );
}

export function QuoteTicket() {
  const [sent, setSent] = useState(false);
  const [ticket, setTicket] = useState("CH-0000");

  if (sent) {
    return (
      <div className={styles.ok}>
        Ticket {ticket} logged on this page only. Clearhold is a showcase — nothing was quoted, held, or sent. Want a
        product site like this? justinbusiness124@gmail.com · 0494300150
      </div>
    );
  }

  return (
    <form
      className={styles.panel}
      onSubmit={(e) => {
        e.preventDefault();
        setTicket(`CH-${Math.floor(1000 + Math.random() * 9000)}`);
        setSent(true);
      }}
    >
      <p className={styles.kicker}>Request a sample quote</p>
      <label>
        Work email
        <input required type="email" className={styles.field} name="email" />
      </label>
      <label>
        Asset
        <input required className={styles.field} name="asset" placeholder="BTC / ETH / AUD" />
      </label>
      <label>
        Notional (AUD)
        <input required className={styles.field} name="size" placeholder="Layout only" />
      </label>
      <label>
        Settlement
        <input required className={styles.field} name="settle" placeholder="T+0 named accounts" />
      </label>
      <button type="submit" className={styles.btn}>
        Log ticket
      </button>
    </form>
  );
}

export function ClearholdFaq() {
  const items = [
    {
      q: "Is this a real desk?",
      a: "No. It’s a showcase concept so you can click a product site. It is not a licensed financial product and it does not take orders.",
    },
    {
      q: "Would a live version name the custodian?",
      a: "Yes. This sample does not invent one. Security copy stays plain on purpose.",
    },
    {
      q: "Who is the contact on a real build?",
      a: "Work emails only, with two people on a send. This page collects nothing.",
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

export function Blotter() {
  return (
    <div className={`${styles.panel} ${styles.blotter}`}>
      <p>
        <b>09:01</b> desk open · AU hours
      </p>
      <p>
        <b>09:14</b> sample quote window · not a live spread
      </p>
      <p>
        <b>11:40</b> two-key check · layout only
      </p>
      <p>
        <b>15:52</b> CSV pack · would land with a CFO
      </p>
      <p>
        <IconCsv style={{ width: 14, height: 14, marginRight: 6, verticalAlign: "middle" }} />
        End-of-day file is the romance.
      </p>
    </div>
  );
}

export { IconVault, IconLock, IconKeys };
