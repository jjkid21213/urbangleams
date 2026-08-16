import type { Metadata } from "next";
import { CalendarSlot } from "@/components/CalendarSlot";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a 15-minute call or send an enquiry to Urban Gleams.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-gleam">Contact</p>
      <h1 className="mt-4 max-w-2xl font-serif text-5xl italic md:text-6xl">
        Fifteen minutes. Then we know.
      </h1>
      <p className="mt-5 max-w-xl text-mute">
        Book a call or send a note. {site.city}. Direct to{" "}
        <a className="text-gleam underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Send an enquiry</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Book a call</h2>
          <div className="mt-6">
            <CalendarSlot />
          </div>
        </div>
      </div>
    </div>
  );
}
