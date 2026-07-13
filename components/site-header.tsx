import { GitFork } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, repositoryUrl } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#080c12]/85">
      <div className="site-container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200/60 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-teal-400/50 hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-teal-300"
            aria-label="Repositório da InfoBio no GitHub"
          >
            <GitFork size={16} />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav
        className="site-container flex gap-1 overflow-x-auto pb-2 md:hidden"
        aria-label="Navegação principal para dispositivos móveis"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
