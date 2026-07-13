export const RNDS_INDIVIDUO_PROFILE =
  "https://rnds-fhir.saude.gov.br/StructureDefinition/BRIndividuo-1.0";

export const RNDS_BIRTH_COUNTRY_EXTENSION =
  "https://rnds-fhir.saude.gov.br/StructureDefinition/BRPais-1.0";

export const rndsPatientExample = JSON.stringify(
  {
    resourceType: "Patient",
    id: "paciente-sintetico-001",
    meta: {
      profile: [RNDS_INDIVIDUO_PROFILE],
    },
    extension: [
      {
        url: RNDS_BIRTH_COUNTRY_EXTENSION,
        valueCodeableConcept: {
          coding: [
            {
              system: "https://rnds-fhir.saude.gov.br/CodeSystem/BRPais",
              code: "BRA",
              display: "Brasil",
            },
          ],
        },
      },
    ],
    active: true,
    gender: "unknown",
    birthDate: "1990-01-01",
  },
  null,
  2,
);

export const fhirBundleExample = JSON.stringify(
  {
    resourceType: "Bundle",
    id: "bundle-exemplo",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:paciente-sintetico-001",
        resource: {
          resourceType: "Patient",
          id: "paciente-sintetico-001",
          active: true,
        },
      },
    ],
  },
  null,
  2,
);
