"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./as.module.css";
import { IconCoat, IconDress, IconShirt } from "./icons";

const links = [
  ["", "Home"],
  ["/collections", "Collections"],
  ["/making", "Making"],
  ["/visit", "The studio"],
] as const;

export function SloaneNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.top}>
        <Link href="/samples/atelier-sloane" className={styles.brand}>
          Sloane
        </Link>
        <button type="button" className={styles.menuBtn} aria-expanded={open} onClick={() => setOpen(true)}>
          Index
        </button>
      </header>
      {open ? (
        <div className={styles.overlay} role="dialog" aria-label="Menu">
          <button type="button" className={styles.overlayClose} onClick={() => setOpen(false)}>
            Close
          </button>
          {links.map(([href, label]) => (
            <Link key={label} href={`/samples/atelier-sloane${href}`} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

const looks = {
  coat: {
    name: "The coat",
    cloth: "Unlined wool",
    note: "Pockets for a book. Weight for Melbourne wind, not for a costume.",
    price: "1,240",
    Icon: IconCoat,
  },
  dress: {
    name: "The dress",
    cloth: "One length, two colours",
    note: "Stone or ink. Sit, walk, go to dinner. No slit for the camera.",
    price: "780",
    Icon: IconDress,
  },
  shirt: {
    name: "The shirt",
    cloth: "Heavy linen",
    note: "Don’t panic-wash it. Hang it. It will look like itself again.",
    price: "320",
    Icon: IconShirt,
  },
};

type LookId = keyof typeof looks;

export function Lookbook({ hold }: { hold?: boolean }) {
  const [tab, setTab] = useState<LookId>("coat");
  const [held, setHeld] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const look = looks[tab];
  const Icon = look.Icon;

  if (sent) {
    return (
      <div className={styles.ok}>
        Hold noted for this browser session: {held.join(", ") || "nothing"}. Atelier Sloane is a showcase — nothing was
        reserved or charged. For a site like this: justinbusiness124@gmail.com · 0494300150
      </div>
    );
  }

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="This season">
        {(Object.keys(looks) as LookId[]).map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={tab === id}
            onClick={() => setTab(id)}
          >
            {looks[id].name}
          </button>
        ))}
      </div>
      <div className={styles.look} role="tabpanel">
        <div className={styles.lookArt}>
          <Icon />
        </div>
        <div>
          <h2>{look.name}</h2>
          <div className={styles.meta}>
            <span>{look.cloth}</span>
            <span>AUD {look.price}</span>
          </div>
          <p className={styles.note}>{look.note}</p>
          {hold ? (
            <button
              type="button"
              className={styles.btn}
              onClick={() => setHeld((list) => (list.includes(look.name) ? list : [...list, look.name]))}
            >
              Hold this piece
            </button>
          ) : null}
        </div>
      </div>
      {hold ? (
        <div className={styles.hold}>
          <span>Hold list · {held.length}</span>
          <button type="button" disabled={!held.length} onClick={() => setSent(true)}>
            Request the studio
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function SloaneFaq() {
  const items = [
    {
      q: "Do you ship?",
      a: "A real label would. This showcase does not take orders. Come to the room on Thursday or Friday if you want to see how a studio visit reads.",
    },
    {
      q: "Can I return it?",
      a: "On a live shop: yes, in seven days, unworn, with the note. Here: nothing is sold.",
    },
    {
      q: "Why so few pieces?",
      a: "One collection a season. If you want a drop every Friday, this is the wrong shop.",
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

export function VisitForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.ok}>
        Showcase only — no appointment was booked. Email justinbusiness124@gmail.com or call 0494300150 if you want a
        site that works like this.
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
        Email
        <input required type="email" className={styles.field} name="email" />
      </label>
      <label>
        Thursday or Friday
        <input required className={styles.field} name="day" placeholder="A weekday afternoon" />
      </label>
      <button type="submit" className={styles.btn}>
        Ask for a time
      </button>
    </form>
  );
}
