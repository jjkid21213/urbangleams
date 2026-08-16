import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ShowcaseBar } from "@/components/ShowcaseBar";
import styles from "./ch.module.css";
import { ClearholdShell } from "./ui";

const sans = IBM_Plex_Sans({
  variable: "--font-ch",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-ch-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Clearhold (showcase)",
  description: "Showcase treasury product concept by Urban Gleams. Not a real company.",
  robots: { index: false, follow: true },
};

export default function ClearholdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${sans.variable} ${mono.variable} ${styles.wrap}`}>
      <ShowcaseBar name="Clearhold" />
      <ClearholdShell>{children}</ClearholdShell>
    </div>
  );
}
