import Link from "next/link";
import { SampleRibbon } from "@/components/SampleRibbon";
import styles from "./batch.module.css";

const links = [
  { href: "/samples/harbour-batch", label: "Home" },
  { href: "/samples/harbour-batch/menu", label: "Menu" },
  { href: "/samples/harbour-batch/visit", label: "Visit" },
  { href: "/samples/harbour-batch/catering", label: "Catering" },
];

export function BatchShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrap}>
      <SampleRibbon name="Harbour Batch" />
      <nav className={styles.nav}>
        <Link href="/samples/harbour-batch" className={styles.brand}>
          Harbour Batch
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
      <footer className={styles.foot}>
        South Bank, Brisbane · open 7–2 most days · showcase cafe, not a real kitchen
      </footer>
    </div>
  );
}
