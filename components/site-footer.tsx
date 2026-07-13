import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { navigation, repositoryUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08]">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
            Ferramentas abertas para quem constrói a infraestrutura digital da saúde.
            Código verificável, processamento local sempre que possível e documentação
            técnica sem ruído.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navegação</p>
          <div className="mt-4 flex flex-col items-start gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Código aberto</p>
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
          >
            Ver no GitHub <ExternalLink size={14} />
          </a>
          <p className="mt-6 font-mono text-xs text-slate-500">
            MIT · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
