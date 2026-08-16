import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmailCapture } from "@/components/EmailCapture";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${site.email} or call ${site.phone}. Australia.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cal = process.env.NEXT_PUBLIC_CAL_URL;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">
        Email or call. Then we know.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-mute">
        I reply on weekdays. If it is not a fit, I will say so before you pay.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-lg">
        <a className="btn" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="btn-line" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold">Send a note</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Book a time</h2>
          {cal ? (
            <iframe title="Book a call" src={cal} className="mt-6 h-[640px] w-full border border-line" />
          ) : (
            <p className="mt-4 text-mute">
              No calendar embed yet — that is on purpose. Email or call and we pick a time. I will not
              put a broken booking box on this page.
            </p>
          )}
          <h2 className="mt-10 font-display text-2xl font-semibold">Not ready?</h2>
          <p className="mt-2 text-sm text-mute">
            Grab the{" "}
            <a className="btn-line" href="/checklist">
              website prep checklist
            </a>
            . Or leave an email.
          </p>
          <div className="mt-4">
            <EmailCapture />
          </div>
        </div>
      </div>
    </div>
  );
}
