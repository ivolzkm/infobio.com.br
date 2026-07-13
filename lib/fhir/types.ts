export type ValidationMode = "fhir-r4" | "rnds-individuo";

export type IssueSeverity = "fatal" | "error" | "warning" | "information";

export type IssueSource = "json" | "fhir-r4" | "rnds-1.0.0";

export type ValidationIssue = {
  severity: IssueSeverity;
  code: string;
  diagnostics: string;
  expression: string[];
  source: IssueSource;
};

export type OperationOutcome = {
  resourceType: "OperationOutcome";
  issue: ValidationIssue[];
};

export type ValidationResult = {
  valid: boolean;
  resourceType?: string;
  outcome: OperationOutcome;
};
