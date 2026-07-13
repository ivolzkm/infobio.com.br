const codonTable: Record<string, string> = {
  TTT: "F", TTC: "F", TTA: "L", TTG: "L",
  TCT: "S", TCC: "S", TCA: "S", TCG: "S",
  TAT: "Y", TAC: "Y", TAA: "*", TAG: "*",
  TGT: "C", TGC: "C", TGA: "*", TGG: "W",
  CTT: "L", CTC: "L", CTA: "L", CTG: "L",
  CCT: "P", CCC: "P", CCA: "P", CCG: "P",
  CAT: "H", CAC: "H", CAA: "Q", CAG: "Q",
  CGT: "R", CGC: "R", CGA: "R", CGG: "R",
  ATT: "I", ATC: "I", ATA: "I", ATG: "M",
  ACT: "T", ACC: "T", ACA: "T", ACG: "T",
  AAT: "N", AAC: "N", AAA: "K", AAG: "K",
  AGT: "S", AGC: "S", AGA: "R", AGG: "R",
  GTT: "V", GTC: "V", GTA: "V", GTG: "V",
  GCT: "A", GCC: "A", GCA: "A", GCG: "A",
  GAT: "D", GAC: "D", GAA: "E", GAG: "E",
  GGT: "G", GGC: "G", GGA: "G", GGG: "G",
};

export function normalizeDna(input: string) {
  return input.toUpperCase().replace(/\s+/g, "").replace(/U/g, "T");
}

export function invalidDnaBases(input: string) {
  return [...new Set(normalizeDna(input).replace(/[ACGT]/g, ""))];
}

export function transcribeDna(input: string) {
  return normalizeDna(input).replace(/T/g, "U");
}

export function reverseComplement(input: string) {
  const complements: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };
  return normalizeDna(input)
    .split("")
    .reverse()
    .map((base) => complements[base] ?? "?")
    .join("");
}

export function translateDna(input: string, frame = 0) {
  const dna = normalizeDna(input);
  const protein: string[] = [];

  for (let index = frame; index + 2 < dna.length; index += 3) {
    protein.push(codonTable[dna.slice(index, index + 3)] ?? "X");
  }

  return protein.join("");
}

export function gcContent(input: string) {
  const dna = normalizeDna(input);
  if (dna.length === 0) return 0;
  const gc = dna.split("").filter((base) => base === "G" || base === "C").length;
  return (gc / dna.length) * 100;
}
