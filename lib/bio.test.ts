import { describe, expect, it } from "vitest";

import {
  gcContent,
  invalidDnaBases,
  reverseComplement,
  translateDna,
  transcribeDna,
} from "@/lib/bio";

describe("bio sequence utilities", () => {
  it("transcribes and translates a coding sequence", () => {
    expect(transcribeDna("ATG TTC GGT TAA")).toBe("AUGUUCGGUUAA");
    expect(translateDna("ATG TTC GGT TAA")).toBe("MFG*");
  });

  it("calculates reverse complement and GC content", () => {
    expect(reverseComplement("ATGC")).toBe("GCAT");
    expect(gcContent("ATGC")).toBe(50);
  });

  it("reports invalid bases", () => {
    expect(invalidDnaBases("ATGNX")).toEqual(["N", "X"]);
  });
});
