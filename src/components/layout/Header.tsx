// src/components/layout/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-sky-700 p-4 border-b border-sky-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo do Site */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-sky-100 transition-colors duration-300">
          InfoBio
        </Link>

        {/* Menu de Navegação */}
       <nav className="hidden md:flex items-center space-x-6">
  <Link href="/comunidade" className="text-white hover:text-sky-100 transition-colors">
    Comunidade
  </Link>
  <Link href="/recursos" className="text-white hover:text-sky-100 transition-colors">
    Recursos
  </Link>
  <Link href="/oportunidades" className="text-white hover:text-sky-100 transition-colors">
    Oportunidades
  </Link>
  <Link href="/newsletter" className="text-white hover:text-sky-100 transition-colors">
    Newsletter
  </Link>
  <Link href="/sobre" className="text-white hover:text-sky-100 transition-colors">
    Sobre
  </Link>
</nav>
      </div>
    </header>
  );
}