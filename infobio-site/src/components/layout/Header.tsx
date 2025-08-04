// src/components/layout/Header.tsx

export default function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Lado Esquerdo: Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="text-sky-400 hover:text-sky-300">
            InfoBio
          </a>
        </div>

        {/* Lado Direito: Links de Navegação */}
        <div className="hidden md:flex space-x-6">
          <a href="/blog" className="hover:text-sky-400">Blog</a>
          <a href="/comunidade" className="hover:text-sky-400">Comunidade</a>
          <a href="/oportunidades" className="hover:text-sky-400">Oportunidades</a>
          <a href="/sobre" className="hover:text-sky-400">Sobre</a>
        </div>
      </nav>
    </header>
  );
}
