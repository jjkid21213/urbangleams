import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Source_Serif_4 } from "next/font/google";
import { ShowcaseBar } from "@/components/ShowcaseBar";
import styles from "./hb.module.css";

const display = Fraunces({
  variable: "--font-hb-display",
  subsets: ["latin"],
});

const body = Source_Serif_4({
  variable: "--font-hb-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harbour Batch (showcase)",
  description: "Showcase cafe concept by Urban Gleams. Not a real business.",
  robots: { index: false, follow: true },
};

const links = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/visit", "Visit"],
  ["/catering", "Catering"],
] as const;

export default function HarbourLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${styles.wrap}`}>
      <ShowcaseBar name="Harbour Batch" />
      <nav className={styles.nav}>
        <Link href="/samples/harbour-batch" className={styles.brand}>
          Harbour Batch
        </Link>
        <div className={styles.links}>
          {links.map(([href, label]) => (
            <Link key={href} href={`/samples/harbour-batch${href === "/" ? "" : href}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className={styles.foot}>
        Howard Smith Wharves, Brisbane · Showcase concept · Not a real cafe
      </footer>
    </div>
  );
}
