import { z } from "zod";

import {
  RNDS_BIRTH_COUNTRY_EXTENSION,
  RNDS_INDIVIDUO_PROFILE,
} from "@/lib/fhir/examples";
import type {
  IssueSeverity,
  IssueSource,
  ValidationIssue,
  ValidationMode,
  ValidationResult,
} from "@/lib/fhir/types";

const resourceSchema = z.record(z.string(), z.unknown());
const fhirIdPattern = /^[A-Za-z0-9\-.]{1,64}$/;
const resourceTypePattern = /^[A-Z][A-Za-z0-9]+$/;
const fhirDatePattern = /^\d{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$/;
const patientGenders = new Set(["male", "female", "other", "unknown"]);

function addIssue(
  issues: ValidationIssue[],
  severity: IssueSeverity,
  code: string,
  diagnostics: string,
  expression: string,
  source: IssueSource,
) {
  issues.push({
    severity,
    code,
    diagnostics,
    expression: [expression],
    source,
  });
}

function validateExtensions(resource: Record<string, unknown>, issues: ValidationIssue[]) {
  if (resource.extension === undefined) return;

  if (!Array.isArray(resource.extension)) {
    addIssue(
      issues,
      "error",
      "structure",
      "extension deve ser uma lista.",
      "Resource.extension",
      "fhir-r4",
    );
    return;
  }

  resource.extension.forEach((extension, index) => {
    const parsed = resourceSchema.safeParse(extension);
    if (!parsed.success || typeof parsed.data.url !== "string") {
      addIssue(
        issues,
        "error",
        "structure",
        "Cada extensão deve ser um objeto com uma URL canônica.",
        `Resource.extension[${index}].url`,
        "fhir-r4",
      );
    }
  });
}

function validateMeta(resource: Record<string, unknown>, issues: ValidationIssue[]) {
  if (resource.meta === undefined) return;

  const meta = resourceSchema.safeParse(resource.meta);
  if (!meta.success) {
    addIssue(
      issues,
      "error",
      "structure",
      "meta deve ser um objeto.",
      "Resource.meta",
      "fhir-r4",
    );
    return;
  }

  const profile = meta.data.profile;
  if (
    profile !== undefined &&
    (!Array.isArray(profile) || profile.some((item) => typeof item !== "string"))
  ) {
    addIssue(
      issues,
      "error",
      "structure",
      "meta.profile deve ser uma lista de URLs canônicas.",
      "Resource.meta.profile",
      "fhir-r4",
    );
  }
}

function validatePatient(resource: Record<string, unknown>, issues: ValidationIssue[]) {
  if (resource.active !== undefined && typeof resource.active !== "boolean") {
    addIssue(
      issues,
      "error",
      "value",
      "Patient.active deve ser booleano.",
      "Patient.active",
      "fhir-r4",
    );
  }

  if (
    resource.gender !== undefined &&
    (typeof resource.gender !== "string" || !patientGenders.has(resource.gender))
  ) {
    addIssue(
      issues,
      "error",
      "code-invalid",
      "Patient.gender deve usar male, female, other ou unknown.",
      "Patient.gender",
      "fhir-r4",
    );
  }

  if (
    resource.birthDate !== undefined &&
    (typeof resource.birthDate !== "string" || !fhirDatePattern.test(resource.birthDate))
  ) {
    addIssue(
      issues,
      "error",
      "value",
      "Patient.birthDate não está no formato de data aceito pelo FHIR.",
      "Patient.birthDate",
      "fhir-r4",
    );
  }
}

function validateBundle(resource: Record<string, unknown>, issues: ValidationIssue[]) {
  if (resource.entry === undefined) return;

  if (!Array.isArray(resource.entry)) {
    addIssue(
      issues,
      "error",
      "structure",
      "Bundle.entry deve ser uma lista.",
      "Bundle.entry",
      "fhir-r4",
    );
    return;
  }

  resource.entry.forEach((entry, index) => {
    const parsedEntry = resourceSchema.safeParse(entry);
    if (!parsedEntry.success) {
      addIssue(
        issues,
        "error",
        "structure",
        "Cada item de Bundle.entry deve ser um objeto.",
        `Bundle.entry[${index}]`,
        "fhir-r4",
      );
      return;
    }

    if (parsedEntry.data.resource !== undefined) {
      const nested = resourceSchema.safeParse(parsedEntry.data.resource);
      if (!nested.success || typeof nested.data.resourceType !== "string") {
        addIssue(
          issues,
          "error",
          "structure",
          "Bundle.entry.resource deve conter um recurso FHIR identificável.",
          `Bundle.entry[${index}].resource.resourceType`,
          "fhir-r4",
        );
      }
    }
  });
}

function validateBase(resource: Record<string, unknown>, issues: ValidationIssue[]) {
  if (typeof resource.resourceType !== "string" || resource.resourceType.length === 0) {
    addIssue(
      issues,
      "error",
      "required",
      "resourceType é obrigatório.",
      "Resource.resourceType",
      "fhir-r4",
    );
  } else if (!resourceTypePattern.test(resource.resourceType)) {
    addIssue(
      issues,
      "error",
      "value",
      "resourceType não possui um formato FHIR reconhecível.",
      "Resource.resourceType",
      "fhir-r4",
    );
  }

  if (
    resource.id !== undefined &&
    (typeof resource.id !== "string" || !fhirIdPattern.test(resource.id))
  ) {
    addIssue(
      issues,
      "error",
      "value",
      "id deve ter de 1 a 64 caracteres alfanuméricos, hífen ou ponto.",
      "Resource.id",
      "fhir-r4",
    );
  }

  validateMeta(resource, issues);
  validateExtensions(resource, issues);

  if (resource.resourceType === "Patient") validatePatient(resource, issues);
  if (resource.resourceType === "Bundle") validateBundle(resource, issues);
}

function validateRndsIndividuo(
  resource: Record<string, unknown>,
  issues: ValidationIssue[],
) {
  if (resource.resourceType !== "Patient") {
    addIssue(
      issues,
      "error",
      "invalid",
      "O perfil BRIndivíduo-1.0 só pode ser aplicado a Patient.",
      "Patient.resourceType",
      "rnds-1.0.0",
    );
    return;
  }

  if (typeof resource.active !== "boolean") {
    addIssue(
      issues,
      "error",
      "required",
      "BRIndivíduo exige Patient.active.",
      "Patient.active",
      "rnds-1.0.0",
    );
  }

  if (typeof resource.gender !== "string") {
    addIssue(
      issues,
      "error",
      "required",
      "BRIndivíduo exige Patient.gender.",
      "Patient.gender",
      "rnds-1.0.0",
    );
  }

  if (typeof resource.birthDate !== "string") {
    addIssue(
      issues,
      "error",
      "required",
      "BRIndivíduo exige Patient.birthDate.",
      "Patient.birthDate",
      "rnds-1.0.0",
    );
  }

  const profile = resourceSchema.safeParse(resource.meta).success
    ? resourceSchema.safeParse(resource.meta).data?.profile
    : undefined;
  if (!Array.isArray(profile) || !profile.includes(RNDS_INDIVIDUO_PROFILE)) {
    addIssue(
      issues,
      "warning",
      "business-rule",
      "Declare o perfil BRIndivíduo-1.0 em meta.profile.",
      "Patient.meta.profile",
      "rnds-1.0.0",
    );
  }

  const extensions = Array.isArray(resource.extension) ? resource.extension : [];
  const hasBirthCountry = extensions.some((extension) => {
    const parsed = resourceSchema.safeParse(extension);
    return parsed.success && parsed.data.url === RNDS_BIRTH_COUNTRY_EXTENSION;
  });
  if (!hasBirthCountry) {
    addIssue(
      issues,
      "error",
      "required",
      "BRIndivíduo exige a extensão de país de nascimento BRPais-1.0.",
      "Patient.extension.where(url='BRPais-1.0')",
      "rnds-1.0.0",
    );
  }

  const prohibitedFields = [
    "maritalStatus",
    "multipleBirthBoolean",
    "multipleBirthInteger",
    "photo",
    "contact",
    "communication",
    "generalPractitioner",
    "managingOrganization",
    "link",
  ];

  prohibitedFields.forEach((field) => {
    if (resource[field] !== undefined) {
      addIssue(
        issues,
        "error",
        "business-rule",
        `Patient.${field} não é permitido pelo perfil BRIndivíduo-1.0.`,
        `Patient.${field}`,
        "rnds-1.0.0",
      );
    }
  });
}

export function validateFhirJson(
  input: string,
  mode: ValidationMode,
): ValidationResult {
  const issues: ValidationIssue[] = [];
  let parsed: unknown;

  try {
    parsed = JSON.parse(input);
  } catch (error) {
    addIssue(
      issues,
      "fatal",
      "invalid",
      error instanceof Error ? `JSON inválido: ${error.message}` : "JSON inválido.",
      "$",
      "json",
    );
    return {
      valid: false,
      outcome: { resourceType: "OperationOutcome", issue: issues },
    };
  }

  const resource = resourceSchema.safeParse(parsed);
  if (!resource.success) {
    addIssue(
      issues,
      "fatal",
      "structure",
      "O documento deve ser um objeto JSON que represente um recurso FHIR.",
      "$",
      "json",
    );
    return {
      valid: false,
      outcome: { resourceType: "OperationOutcome", issue: issues },
    };
  }

  validateBase(resource.data, issues);
  if (mode === "rnds-individuo") validateRndsIndividuo(resource.data, issues);

  const hasBlockingIssue = issues.some(
    (item) => item.severity === "fatal" || item.severity === "error",
  );

  if (issues.length === 0) {
    addIssue(
      issues,
      "information",
      "informational",
      mode === "rnds-individuo"
        ? "Nenhum problema foi encontrado pelas regras locais implementadas para BRIndivíduo-1.0."
        : "Nenhum problema estrutural foi encontrado pelas regras locais implementadas para FHIR R4.",
      "Resource",
      mode === "rnds-individuo" ? "rnds-1.0.0" : "fhir-r4",
    );
  }

  return {
    valid: !hasBlockingIssue,
    resourceType:
      typeof resource.data.resourceType === "string"
        ? resource.data.resourceType
        : undefined,
    outcome: { resourceType: "OperationOutcome", issue: issues },
  };
}
