// src/components/layout/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/50 backdrop-blur-sm p-4 border-b border-slate-700">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo do Site */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors duration-300">
          InfoBio
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/blog" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
            Blog
          </Link>
          <Link href="/comunidade" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
            Comunidade
          </Link>
          <Link href="/oportunidades" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
            Oportunidades
          </Link>
          <Link href="/sobre" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
