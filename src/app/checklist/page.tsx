import type { Metadata } from "next";
import { EmailCapture } from "@/components/EmailCapture";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website prep checklist",
  description: "Printable checklist before a custom website job with Urban Gleams.",
  alternates: { canonical: "/checklist" },
};

const items = [
  "Business name as it should appear",
  "What you sell, in one sentence",
  "Who it is for",
  "The one action you want (call, book, email)",
  "Hours, suburbs, or service list",
  "Three photos you actually like",
  "Logo file, if you have one",
  "Current site URL, if any",
  "Domain login location (do not email the password)",
  "Who approves copy",
];

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Website prep checklist</h1>
      <p className="mt-4 text-mute">
        Print this page. Bring it to the call. You do not need it all done — it just makes the job faster.
      </p>
      <ol className="mt-8 list-decimal space-y-3 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-mute">
        {site.email} · {site.phone}
      </p>
      <div className="mt-8 print:hidden">
        <p className="mb-3 text-sm">Want it in your inbox too?</p>
        <EmailCapture />
      </div>
    </div>
  );
}
