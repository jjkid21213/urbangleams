import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { ShowcaseBar } from "@/components/ShowcaseBar";
import styles from "./as.module.css";

const display = Cormorant_Garamond({
  variable: "--font-as-display",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const body = Jost({
  variable: "--font-as-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Atelier Sloane (showcase)",
  description: "Showcase womenswear concept by Urban Gleams. Not a real label.",
  robots: { index: false, follow: true },
};

const links = [
  ["", "Home"],
  ["/collections", "Collections"],
  ["/making", "Making"],
  ["/visit", "The studio"],
];

export default function SloaneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${styles.wrap}`}>
      <ShowcaseBar name="Atelier Sloane" />
      <nav className={styles.nav}>
        <Link href="/samples/atelier-sloane" className={styles.brand}>
          Sloane
        </Link>
        <div className={styles.links}>
          {links.map(([href, label]) => (
            <Link key={label} href={`/samples/atelier-sloane${href}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className={styles.foot}>Fitzroy · Showcase concept · Not a real label</footer>
    </div>
  );
}
