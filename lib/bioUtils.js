/**
 * @file Contém as funções lógicas de bioinformática para o Laboratório Digital.
 * Inclui a tabela de códons, transcrição de DNA para RNA e tradução de RNA para proteína.
 */

// Tabela de Mapeamento de Códons de RNA para Aminoácidos
const codonTable = {
  'AUG': 'Metionina',
  'UUU': 'Fenilalanina', 'UUC': 'Fenilalanina',
  'UUA': 'Leucina', 'UUG': 'Leucina', 'CUU': 'Leucina', 'CUC': 'Leucina', 'CUA': 'Leucina', 'CUG': 'Leucina',
  'AUU': 'Isoleucina', 'AUC': 'Isoleucina', 'AUA': 'Isoleucina',
  'GUU': 'Valina', 'GUC': 'Valina', 'GUA': 'Valina', 'GUG': 'Valina',
  'UCU': 'Serina', 'UCC': 'Serina', 'UCA': 'Serina', 'UCG': 'Serina', 'AGU': 'Serina', 'AGC': 'Serina',
  'CCU': 'Prolina', 'CCC': 'Prolina', 'CCA': 'Prolina', 'CCG': 'Prolina',
  'ACU': 'Treonina', 'ACC': 'Treonina', 'ACA': 'Treonina', 'ACG': 'Treonina',
  'GCU': 'Alanina', 'GCC': 'Alanina', 'GCA': 'Alanina', 'GCG': 'Alanina',
  'UAU': 'Tirosina', 'UAC': 'Tirosina',
  'CAU': 'Histidina', 'CAC': 'Histidina',
  'CAA': 'Glutamina', 'CAG': 'Glutamina',
  'AAU': 'Asparagina', 'AAC': 'Asparagina',
  'AAA': 'Lisina', 'AAG': 'Lisina',
  'GAU': 'Aspartato', 'GAC': 'Aspartato',
  'GAA': 'Glutamato', 'GAG': 'Glutamato',
  'UGU': 'Cisteína', 'UGC': 'Cisteína',
  'UGG': 'Triptofano',
  'CGU': 'Arginina', 'CGC': 'Arginina', 'CGA': 'Arginina', 'CGG': 'Arginina', 'AGA': 'Arginina', 'AGG': 'Arginina',
  'GGU': 'Glicina', 'GGC': 'Glicina', 'GGA': 'Glicina', 'GGG': 'Glicina',
  // Códons de Parada (Stop Codons)
  'UAA': 'PARADA', 'UAG': 'PARADA', 'UGA': 'PARADA',
};

// Tabela de Abreviações de Aminoácidos
const aminoAcidAbbreviations = {
  'Metionina': 'Met',
  'Fenilalanina': 'Fen',
  'Leucina': 'Leu',
  'Isoleucina': 'Ile',
  'Valina': 'Val',
  'Serina': 'Ser',
  'Prolina': 'Pro',
  'Treonina': 'Thr',
  'Alanina': 'Ala',
  'Tirosina': 'Tyr',
  'Histidina': 'His',
  'Glutamina': 'Gln',
  'Asparagina': 'Asn',
  'Lisina': 'Lys',
  'Aspartato': 'Asp',
  'Glutamato': 'Glu',
  'Cisteína': 'Cys',
  'Triptofano': 'Trp',
  'Arginina': 'Arg',
  'Glicina': 'Gly',
};

/**
 * Valida e limpa uma sequência de DNA.
 * @param {string} dna - A sequência de DNA.
 * @returns {string} A sequência de DNA validada em maiúsculas.
 * @throws {Error} Se a sequência contiver caracteres inválidos.
 */
function validateAndCleanDna(dna) {
  if (typeof dna !== 'string') {
    throw new Error('A sequência de DNA deve ser uma string.');
  }
  const cleanedDna = dna.toUpperCase().replace(/\s/g, '');
  if (!/^[ATCG]*$/.test(cleanedDna)) {
    throw new Error('A sequência de DNA contém caracteres inválidos. Use apenas A, T, C e G.');
  }
  return cleanedDna;
}

/**
 * Valida e limpa uma sequência de RNA.
 * @param {string} rna - A sequência de RNA.
 * @returns {string} A sequência de RNA validada em maiúsculas.
 * @throws {Error} Se a sequência contiver caracteres inválidos.
 */
function validateAndCleanRna(rna) {
  if (typeof rna !== 'string') {
    throw new Error('A sequência de RNA deve ser uma string.');
  }
  const cleanedRna = rna.toUpperCase().replace(/\s/g, '');
  if (!/^[AUCG]*$/.test(cleanedRna)) {
    throw new Error('A sequência de RNA contém caracteres inválidos. Use apenas A, U, C e G.');
  }
  return cleanedRna;
}

/**
 * Transcreve uma sequência de DNA em uma sequência de RNA.
 * @param {string} dna - A sequência de DNA a ser transcrita.
 * @returns {string} A sequência de RNA resultante.
 */
export function transcribe(dna) {
  const cleanedDna = validateAndCleanDna(dna);
  return cleanedDna.replace(/T/g, 'U');
}

/**
 * Traduz uma sequência de RNA em uma cadeia de proteínas (aminoácidos).
 * A tradução começa no primeiro códon 'AUG' (Metionina) e termina em um códon de parada.
 * @param {string} rna - A sequência de RNA a ser traduzida.
 * @returns {Array<string>} Uma lista de abreviações de aminoácidos.
 */
export function translate(rna) {
  const rnaSequence = validateAndCleanRna(rna);
  const startIndex = rnaSequence.indexOf('AUG');

  if (startIndex === -1) {
    return []; // Não há códon de início, não pode traduzir.
  }

  const protein = [];
  // BUG FIX: Corrigida a condição do loop para processar todos os códons
  // Antes: i < rnaSequence.length - 2 (perdia o último códon)
  // Agora: i + 2 < rnaSequence.length (processa todos os códons até o final)
  for (let i = startIndex; i + 2 < rnaSequence.length; i += 3) {
    const codon = rnaSequence.substring(i, i + 3);
    const aminoAcid = codonTable[codon];

    if (!aminoAcid || aminoAcid === 'PARADA') {
      break; // Termina a tradução se encontrar um códon de parada ou um inválido.
    }
    
    // BUG FIX: Agora retorna abreviações de aminoácidos em vez de nomes completos
    const abbreviation = aminoAcidAbbreviations[aminoAcid] || aminoAcid;
    protein.push(abbreviation);
  }

  return protein;
}
