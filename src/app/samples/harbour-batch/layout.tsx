import type { Metadata } from "next";
import { Caveat, Fraunces, Source_Serif_4 } from "next/font/google";
import { ShowcaseBar } from "@/components/ShowcaseBar";
import styles from "./hb.module.css";
import { HarbourShell } from "./ui";

const display = Fraunces({
  variable: "--font-hb-display",
  subsets: ["latin"],
});

const body = Source_Serif_4({
  variable: "--font-hb-body",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hb-hand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Harbour Batch (showcase)",
  description: "Showcase cafe concept by Urban Gleams. Not a real business.",
  robots: { index: false, follow: true },
};

export default function HarbourLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${hand.variable} ${styles.wrap}`}>
      <ShowcaseBar name="Harbour Batch" />
      <HarbourShell>{children}</HarbourShell>
    </div>
  );
}
