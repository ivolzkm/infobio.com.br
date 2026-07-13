import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
      aria-label="InfoBio — página inicial"
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-teal-400/30 bg-teal-400/10 font-mono text-sm font-semibold text-teal-300">
        <span className="absolute inset-x-1 top-1/2 h-px -translate-y-1/2 bg-teal-300/30" />
        <span className="relative">IB</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
          InfoBio
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          health tech commons
        </span>
      </span>
    </Link>
  );
}
