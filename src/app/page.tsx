export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="text-center animate-fadeIn">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl border border-slate-700 max-w-2xl">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-[6rem]">
            <span className="text-sky-400">InfoBio</span>.com.br
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-slate-300">
            A futura plataforma da Informática Biomédica no Brasil.
          </p>
          <button className="mt-10 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Saiba Mais
          </button>
        </div>
      </div>
    </main>
  );
}
