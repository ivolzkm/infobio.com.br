// src/components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Lado Esquerdo: Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="text-sky-400 hover:text-sky-300">
            InfoBio
          </Link>
        </div>

        {/* Lado Direito: Links de Navegação */}
        <div className="hidden md:flex space-x-6">
          <Link href="/blog" className="hover:text-sky-400">
            Blog
          </Link>
          <Link href="/comunidade" className="hover:text-sky-400">
            Comunidade
          </Link>
          <Link href="/oportunidades" className="hover:text-sky-400">
            Oportunidades
          </Link>
          <Link href="/sobre" className="hover:text-sky-400">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}
