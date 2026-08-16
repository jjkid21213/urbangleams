import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { StudioShell } from "@/components/StudioShell";
import { site } from "@/lib/site";
import "./globals.css";

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Custom websites for local businesses`,
    template: `%s — ${site.name}`,
  },
  description:
    "Custom websites for cafes, salons, clinics, and trades in Australia. justinbusiness124@gmail.com · 0494300150.",
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${body.variable} ${display.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd />
        <StudioShell>{children}</StudioShell>
      </body>
    </html>
  );
}
