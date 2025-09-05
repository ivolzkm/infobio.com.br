// src/app/newsletter/page.tsx

export default function Newsletter() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
          Newsletter em <span className="text-sky-400">Construção</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400">
          Inscreva-se em nossa newsletter para receber as últimas notícias e atualizações. Volte em breve!
        </p>
      </div>
    </main>
  );
}
