import Link from "next/link";
import { SampleRibbon } from "@/components/SampleRibbon";
import styles from "./sloane.module.css";

const links = [
  { href: "/samples/atelier-sloane", label: "Atelier" },
  { href: "/samples/atelier-sloane/collections", label: "Collections" },
  { href: "/samples/atelier-sloane/making", label: "Making" },
  { href: "/samples/atelier-sloane/visit", label: "Visit" },
];

export function SloaneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrap}>
      <SampleRibbon name="Atelier Sloane" />
      <nav className={styles.nav}>
        <Link href="/samples/atelier-sloane" className={styles.brand}>
          Atelier Sloane
        </Link>
        <div className={styles.links}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className={styles.foot}>Collingwood · one collection a season · showcase label</footer>
    </div>
  );
}
