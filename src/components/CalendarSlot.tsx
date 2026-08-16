export function CalendarSlot() {
  const url = process.env.NEXT_PUBLIC_CAL_URL;

  if (!url) {
    return (
      <div className="border border-dashed border-line bg-panel p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-gleam">Calendar</p>
        <p className="mt-3 text-paper">Paste your Cal.com or Calendly link to embed it here.</p>
        <p className="mt-2 text-sm text-mute">
          Add <code className="text-gleam">NEXT_PUBLIC_CAL_URL</code> in{" "}
          <code className="text-gleam">.env.local</code>, then redeploy.
        </p>
        <a href="mailto:hello@urbangleams.com" className="mt-5 inline-block text-sm text-gleam underline-offset-4 hover:underline">
          Or email to pick a time
        </a>
      </div>
    );
  }

  return (
    <iframe
      title="Book a call"
      src={url}
      className="h-[720px] w-full border border-line bg-panel"
    />
  );
}
