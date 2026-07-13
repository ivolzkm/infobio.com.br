import { ArrowUpRight, CircleDot } from "lucide-react";
import Link from "next/link";

import type { Tool, ToolStatus } from "@/lib/site";

const statusStyles: Record<ToolStatus, string> = {
  Disponível:
    "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "Em desenvolvimento":
    "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Planejado: "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:text-slate-400",
};

export function ToolCard({ tool }: { tool: Tool }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-teal-600 dark:text-teal-300">
            {tool.category}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
            {tool.name}
          </h3>
        </div>
        {tool.href ? (
          <ArrowUpRight className="mt-1 text-slate-400 transition group-hover:text-teal-500" size={18} />
        ) : (
          <CircleDot className="mt-1 text-slate-400" size={16} />
        )}
      </div>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {tool.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 px-2 py-1 font-mono text-[10px] text-slate-500 dark:border-white/10 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`mt-5 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[tool.status]}`}
      >
        {tool.status}
      </span>
    </>
  );

  const className =
    "group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:shadow-glow dark:border-white/[0.08] dark:bg-white/[0.025]";

  return tool.href ? (
    <Link href={tool.href} className={className}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
}
