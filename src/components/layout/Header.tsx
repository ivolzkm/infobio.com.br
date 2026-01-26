// src/components/layout/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo do Site */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors duration-300">
          Info<span className="text-sky-400">Bio</span>
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/comunidade" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            Comunidade
          </Link>
          <Link href="/recursos" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            Recursos
          </Link>
          <Link href="/oportunidades" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            Oportunidades
          </Link>
          <Link href="/newsletter" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            Newsletter
          </Link>
          <Link href="/sobre" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            Sobre
          </Link>
        </nav>

        {/* Botão Mobile (Placeholder) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
