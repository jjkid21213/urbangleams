import Link from "next/link";
import { SampleRibbon } from "@/components/SampleRibbon";
import styles from "./clear.module.css";

const links = [
  { href: "/samples/clearhold", label: "Overview" },
  { href: "/samples/clearhold/product", label: "Product" },
  { href: "/samples/clearhold/security", label: "Security" },
  { href: "/samples/clearhold/contact", label: "Contact" },
];

export function ClearShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrap}>
      <SampleRibbon name="Clearhold" />
      <nav className={styles.nav}>
        <Link href="/samples/clearhold" className={styles.brand}>
          Clearhold
        </Link>
        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className={styles.foot}>
        Sydney · showcase treasury product · not an exchange, not financial advice, not a live company
      </footer>
    </div>
  );
}
