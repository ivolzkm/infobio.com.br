export default function ConversorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-8">
          Conversor de Formatos de Sequência
        </h1>
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700">
          <div className="mb-6">
            <label htmlFor="sequence-input" className="block text-lg font-medium text-sky-400 mb-2">Cole sua sequência ou faça upload do arquivo:</label>
            <textarea id="sequence-input" rows={10} className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"></textarea>
            <div className="mt-4 text-center">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Upload de Arquivo
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="input-format" className="block text-lg font-medium text-sky-400 mb-2">Formato de Entrada:</label>
              <select id="input-format" className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition">
                <option>FASTA</option>
                <option>GenBank</option>
                <option>PHYLIP</option>
                {/* Adicionar mais formatos conforme necessário */}
              </select>
            </div>
            <div>
              <label htmlFor="output-format" className="block text-lg font-medium text-sky-400 mb-2">Formato de Saída:</label>
              <select id="output-format" className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition">
                <option>FASTA</option>
                <option>GenBank</option>
                <option>PHYLIP</option>
                {/* Adicionar mais formatos conforme necessário */}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md text-xl transition-colors">
              Converter
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/ferramentas" className="text-sky-400 hover:text-sky-300 transition-colors">Voltar para Ferramentas</a>
        </div>
      </div>
    </main>
  );
}
