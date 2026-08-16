import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";
import { ShowcaseBar } from "@/components/ShowcaseBar";
import styles from "./ch.module.css";

const sans = IBM_Plex_Sans({
  variable: "--font-ch",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clearhold (showcase)",
  description: "Showcase treasury product concept by Urban Gleams. Not a real company.",
  robots: { index: false, follow: true },
};

const links = [
  ["", "Overview"],
  ["/product", "Product"],
  ["/security", "Security"],
  ["/contact", "Contact"],
];

export default function ClearholdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${sans.variable} ${styles.wrap}`}>
      <ShowcaseBar name="Clearhold" />
      <nav className={styles.nav}>
        <Link href="/samples/clearhold" className={styles.brand}>
          CLEARHOLD
        </Link>
        <div className={styles.links}>
          {links.map(([href, label]) => (
            <Link key={label} href={`/samples/clearhold${href}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className={styles.foot}>
        Sydney · Showcase concept · Not a licensed financial product
      </footer>
    </div>
  );
}
