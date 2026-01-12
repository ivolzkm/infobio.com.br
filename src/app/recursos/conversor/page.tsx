"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function ConversorPage() {
  const [sequence, setSequence] = useState('');
  const [inFormat, setInFormat] = useState('FASTA');
  const [outFormat, setOutFormat] = useState('GenBank');
  const [result, setResult] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Lógica de Upload de Arquivo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (re) => {
        const content = re.target?.result as string;
        setSequence(content);
      };
      reader.readAsText(file);
    }
  };

  // 2. Parser Simples e Lógica de Conversão (Mockup de conversão)
  const handleConvert = () => {
    if (!sequence.trim()) return alert("Por favor, insira uma sequência.");

    // Exemplo de lógica: Se for FASTA, limpa o cabeçalho para processar
    let processedSeq = sequence;
    if (inFormat === 'FASTA' && sequence.startsWith('>')) {
      const lines = sequence.split('\n');
      processedSeq = lines.slice(1).join('').replace(/\s/g, '');
    }

    // Simulação de conversão para fins de demonstração do MVP
    const timestamp = new Date().toISOString();
    const mockOutput = `LOCUS       Exported                ${processedSeq.length} bp    DNA     linear   PLN ${timestamp.split('T')[0]}
DEFINITION  Sequence converted via InfoBio.com.br
ACCESSION   INFOBIO_${Math.floor(Math.random() * 1000)}
ORIGIN      
      1 ${processedSeq.toLowerCase().match(/.{1,10}/g)?.join(' ') || processedSeq}
//`;
    
    setResult(outFormat === 'GenBank' ? mockOutput : sequence);
  };

  // 3. Função de Copiar para o Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4 sm:p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-8 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Conversor de Sequências
        </h1>

        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-800">
          
          {/* Área de Input */}
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <label htmlFor="sequence-input" className="text-lg font-medium text-sky-400">
                Entrada de Dados
              </label>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 py-1 px-3 rounded-md border border-slate-700 transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Upload .fasta / .gbk
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".fasta,.gbk,.txt"/>
            </div>
            
            <textarea 
              id="sequence-input" 
              rows={8} 
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              placeholder="Cole sua sequência aqui (ex: >ID...)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-mono text-sm text-emerald-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
            ></textarea>
          </div>

          {/* Seletores de Formato */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">De:</label>
              <select 
                value={inFormat}
                onChange={(e) => setInFormat(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none"
              >
                <option value="FASTA">FASTA</option>
                <option value="GenBank">GenBank</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Para:</label>
              <select 
                value={outFormat}
                onChange={(e) => setOutFormat(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 outline-none"
              >
                <option value="GenBank">GenBank</option>
                <option value="FASTA">FASTA</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleConvert}
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] active:scale-[0.98]"
          >
            Executar Conversão
          </button>
        </div>

        {/* Área de Resultado (Renderização Condicional) */}
        {result && (
          <div className="mt-8 bg-slate-900 p-6 rounded-2xl border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-emerald-400">Resultado:</h2>
              <button 
                onClick={copyToClipboard}
                className={`text-sm flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isCopied ? 'bg-emerald-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
              >
                {isCopied ? 'Copiado!' : 'Copiar Sequência'}
              </button>
            </div>
            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-xs font-mono text-slate-300 border border-slate-800 max-h-60">
              {result}
            </pre>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/recursos" className="text-slate-500 hover:text-sky-400 transition-colors flex items-center justify-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Voltar para Recursos
          </Link>
        </div>
      </div>
    </main>
  );
}
