"use client";

import { usePathname } from "next/navigation";
import { ExitIntent } from "./ExitIntent";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { StickyCta } from "./StickyCta";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const sample = path.startsWith("/samples");

  if (sample) {
    return <div className="flex min-h-full flex-col">{children}</div>;
  }

  return (
    <div className="flex min-h-full flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCta />
      <ExitIntent />
    </div>
  );
}
