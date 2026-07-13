export type ToolStatus = "Disponível" | "Em desenvolvimento" | "Planejado";

export type Tool = {
  slug: string;
  name: string;
  description: string;
  category: string;
  status: ToolStatus;
  href?: string;
  tags: string[];
};

export const navigation = [
  { href: "/ferramentas", label: "Ferramentas" },
  { href: "/projetos", label: "Projetos" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/sobre", label: "Sobre" },
];

export const tools: Tool[] = [
  {
    slug: "validador-fhir-rnds",
    name: "Validador FHIR / RNDS",
    description:
      "Pré-validação local de recursos FHIR R4 e regras selecionadas do perfil BRIndivíduo da RNDS.",
    category: "Interoperabilidade",
    status: "Disponível",
    href: "/ferramentas/validador-fhir-rnds",
    tags: ["FHIR R4", "RNDS", "OperationOutcome"],
  },
  {
    slug: "sequence-workbench",
    name: "Sequence Workbench",
    description:
      "Inspeção técnica de sequências com transcrição, tradução, complemento reverso e conteúdo GC.",
    category: "Bioinformática",
    status: "Disponível",
    href: "/ferramentas/sequence-workbench",
    tags: ["DNA", "RNA", "Proteína"],
  },
  {
    slug: "fhir-path-lab",
    name: "FHIRPath Lab",
    description:
      "Execução e depuração de expressões FHIRPath sobre recursos sem envio de dados ao servidor.",
    category: "Interoperabilidade",
    status: "Planejado",
    tags: ["FHIRPath", "Debug"],
  },
  {
    slug: "gerador-bundle",
    name: "Bundle Composer",
    description:
      "Montagem assistida e inspeção de Bundles transaction, document e message.",
    category: "Interoperabilidade",
    status: "Planejado",
    tags: ["Bundle", "REST"],
  },
  {
    slug: "terminology-explorer",
    name: "Terminology Explorer",
    description:
      "Consulta técnica de CodeSystem, ValueSet e ConceptMap usados em integrações clínicas.",
    category: "Terminologias",
    status: "Planejado",
    tags: ["LOINC", "SNOMED CT", "ValueSet"],
  },
  {
    slug: "dicom-inspector",
    name: "DICOM Inspector",
    description:
      "Leitura local de metadados DICOM com alerta explícito para campos potencialmente identificáveis.",
    category: "Imagem médica",
    status: "Planejado",
    tags: ["DICOM", "Metadados"],
  },
  {
    slug: "hl7-v2-inspector",
    name: "HL7 v2 Inspector",
    description:
      "Parser visual de segmentos, campos, componentes e repetições de mensagens HL7 v2.",
    category: "Interoperabilidade",
    status: "Planejado",
    tags: ["HL7 v2", "Parser"],
  },
  {
    slug: "deidentification-checklist",
    name: "De-identification Checker",
    description:
      "Checklist técnico para identificar riscos de exposição antes de compartilhar datasets de saúde.",
    category: "Privacidade",
    status: "Planejado",
    tags: ["LGPD", "PHI", "Risco"],
  },
  {
    slug: "openapi-health-linter",
    name: "Health API Linter",
    description:
      "Análise de contratos OpenAPI com regras voltadas a segurança e interoperabilidade em saúde.",
    category: "APIs",
    status: "Planejado",
    tags: ["OpenAPI", "API", "Security"],
  },
  {
    slug: "calculadora-qualidade-dados",
    name: "Data Quality Profiler",
    description:
      "Perfil estatístico local de completude, unicidade, formato e consistência de arquivos tabulares.",
    category: "Dados",
    status: "Planejado",
    tags: ["CSV", "Qualidade", "ETL"],
  },
  {
    slug: "jwt-inspector",
    name: "JWT / SMART Inspector",
    description:
      "Inspeção local de tokens e escopos SMART on FHIR sem validação remota ou armazenamento.",
    category: "Segurança",
    status: "Planejado",
    tags: ["OAuth 2.0", "SMART", "JWT"],
  },
  {
    slug: "research-data-dictionary",
    name: "Data Dictionary Builder",
    description:
      "Criação e comparação de dicionários de variáveis para pesquisa e integração de dados.",
    category: "Dados",
    status: "Planejado",
    tags: ["Schema", "Pesquisa", "CSV"],
  },
];

export const repositoryUrl = "https://github.com/ivolzkm/infobio.com.br";
