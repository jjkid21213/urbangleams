export function SampleFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#2a2622] p-2 shadow-lg">
      <div className="mb-2 flex gap-1 px-1">
        <span className="h-2 w-2 rounded-full bg-[#6b645c]" />
        <span className="h-2 w-2 rounded-full bg-[#6b645c]" />
        <span className="h-2 w-2 rounded-full bg-[#6b645c]" />
        <span className="ml-2 truncate text-[10px] text-[#9a9288]">{src}</span>
      </div>
      <iframe
        title={title}
        src={src}
        className="h-[340px] w-full bg-white md:h-[400px]"
      />
    </div>
  );
}
