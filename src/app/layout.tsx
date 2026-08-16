import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { StudioShell } from "@/components/StudioShell";
import { site } from "@/lib/site";
import "./globals.css";

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const themeBoot = `(function(){try{var t=localStorage.getItem("ug-theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark");}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Custom websites for local businesses`,
    template: `%s — ${site.name}`,
  },
  description:
    "Custom websites for cafes, salons, clinics, and trades in Australia. Starter $299, Business $499, Growth from $799. justinbusiness124@gmail.com · 0494300150.",
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
    <html
      lang="en-AU"
      data-theme="dark"
      suppressHydrationWarning
      className={`${body.variable} ${display.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <JsonLd />
        <StudioShell>{children}</StudioShell>
      </body>
    </html>
  );
}
