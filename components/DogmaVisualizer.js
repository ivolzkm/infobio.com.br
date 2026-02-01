/**
 * @file Componente principal e interativo para o Laboratório Digital.
 * Gerencia o estado e a visualização da simulação do Dogma Central (DNA -> RNA -> Proteína).
 */
import { useState } from 'react';
import { transcribe, translate } from '../lib/bioUtils';

// Paleta de cores para as bases e aminoácidos
const Bcolors = {
  A: 'bg-green-500', T: 'bg-red-500', C: 'bg-blue-500', G: 'bg-yellow-500', U: 'bg-indigo-500',
  Default: 'bg-gray-700',
};
const Pcolors = [
  'bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-600', 'bg-indigo-600',
  'bg-pink-600', 'bg-purple-600', 'bg-orange-600'
];

// Componente para renderizar uma única base/aminoácido
const SequenceUnit = ({ unit, type = 'dna' }) => {
  const color = Bcolors[unit] || Bcolors.Default;
  return (
    <div className={`w-8 h-8 flex items-center justify-center rounded-md font-bold text-white shadow-md transition-transform transform hover:scale-110 ${color}`}>
      {unit}
    </div>
  );
};

// Componente para a visualização de uma sequência inteira
const SequenceChain = ({ sequence, type = 'dna', label }) => {
  if (!sequence || sequence.length === 0) return null;
  
  const seqArray = Array.isArray(sequence) ? sequence : sequence.split('');

  return (
    <div className="mb-8 p-4 bg-gray-800/50 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-3">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {seqArray.map((unit, index) => (
          <SequenceUnit key={`${type}-${index}`} unit={unit} type={type} />
        ))}
      </div>
    </div>
  );
};


export default function DogmaVisualizer() {
  const [dna, setDna] = useState('');
  const [rna, setRna] = useState('');
  const [protein, setProtein] = useState([]);
  const [error, setError] = useState('');
  const [step, setStep] = useState(0); // 0: input, 1: transcribed, 2: translated

  const exampleDna = 'ATGTTCGGTGAAC'; // DNA que codifica para Met-Fen-Gli-STOP

  const handleTranscribe = () => {
    try {
      setError('');
      const rnaSequence = transcribe(dna);
      setRna(rnaSequence);
      setStep(1);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleTranslate = () => {
    try {
      setError('');
      const proteinSequence = translate(rna);
      setProtein(proteinSequence);
      setStep(2);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleReset = () => {
    setDna('');
    setRna('');
    setProtein([]);
    setError('');
    setStep(0);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
      
      {/* Input e Controles */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Entrada de DNA</h2>
        <textarea
          className="w-full p-2 bg-gray-900 text-gray-200 rounded-md font-mono border border-gray-600 focus:ring-2 focus:ring-blue-500"
          rows="3"
          value={dna}
          onChange={(e) => setDna(e.target.value)}
          placeholder="Insira sua sequência de DNA aqui... (ex: ATGC...)"
          disabled={step > 0}
        />
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button onClick={() => setDna(exampleDna)} disabled={step > 0} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed">
            Usar Exemplo
          </button>
          <button onClick={handleTranscribe} disabled={!dna || step > 0} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed">
            1. Transcrever
          </button>
          <button onClick={handleTranslate} disabled={step < 1} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-500 disabled:cursor-not-allowed">
            2. Traduzir
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Resetar
          </button>
        </div>
        {error && <p className="text-red-400 mt-3">{error}</p>}
      </div>

      {/* Visualização */}
      <div>
        <SequenceChain sequence={dna} type="dna" label="Fita de DNA" />
        {step >= 1 && <SequenceChain sequence={rna} type="rna" label="Fita de RNA Mensageiro (mRNA)" />}
        {step >= 2 && <SequenceChain sequence={protein} type="protein" label="Cadeia de Proteínas (Aminoácidos)" />}
      </div>
    </div>
  );
}
