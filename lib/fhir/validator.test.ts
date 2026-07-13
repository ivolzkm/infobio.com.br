import { describe, expect, it } from "vitest";

import { rndsPatientExample } from "@/lib/fhir/examples";
import { validateFhirJson } from "@/lib/fhir/validator";

describe("validateFhirJson", () => {
  it("reports malformed JSON as a fatal issue", () => {
    const result = validateFhirJson('{"resourceType":', "fhir-r4");

    expect(result.valid).toBe(false);
    expect(result.outcome.issue[0].severity).toBe("fatal");
    expect(result.outcome.issue[0].source).toBe("json");
  });

  it("accepts the synthetic BRIndividuo example in the local rule set", () => {
    const result = validateFhirJson(rndsPatientExample, "rnds-individuo");

    expect(result.valid).toBe(true);
    expect(result.resourceType).toBe("Patient");
  });

  it("finds required and prohibited BRIndividuo fields", () => {
    const result = validateFhirJson(
      JSON.stringify({ resourceType: "Patient", photo: [{ url: "x" }] }),
      "rnds-individuo",
    );

    expect(result.valid).toBe(false);
    expect(result.outcome.issue.map((issue) => issue.expression[0])).toEqual(
      expect.arrayContaining(["Patient.active", "Patient.photo"]),
    );
  });
});
