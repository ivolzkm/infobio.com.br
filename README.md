# InfoBio

Plataforma técnica aberta para informática biomédica, interoperabilidade e soluções digitais em saúde.

[Site](https://infobio.com.br) · [Issues](https://github.com/ivolzkm/infobio.com.br/issues)

## Estado atual

- Validador FHIR/RNDS: pré-validação local de JSON, estrutura FHIR R4 e regras selecionadas do perfil BRIndividuo-1.0.
- Sequence Workbench: transcrição, tradução, complemento reverso e conteúdo GC de sequências de DNA.
- Catálogo técnico: ferramentas disponíveis e propostas para o roadmap.
- Comunidade: colaboração pública por issues e pull requests.

O projeto não usa banco de dados e não persiste recursos clínicos. As ferramentas atuais processam os dados no navegador.

## Arquitetura

- Next.js 16 com App Router
- React 19 e TypeScript estrito
- Tailwind CSS 3
- Vitest para regras de domínio
- Vercel para hospedagem
- Node.js 24 LTS

O validador atual é intencionalmente limitado. Ele não executa todas as StructureDefinitions, invariantes FHIRPath, validações terminológicas ou dependências de pacotes. A integração futura prevê um serviço stateless separado baseado no validador oficial/HAPI FHIR.

## Desenvolvimento local

Requisitos: Node.js 24 e npm 11.

    git clone https://github.com/ivolzkm/infobio.com.br.git
    cd infobio.com.br
    npm ci
    npm run dev

A aplicação estará disponível em http://localhost:3000.

## Verificação

    npm run check

O comando executa lint, verificação de tipos, testes e build de produção. Os comandos também podem ser executados separadamente:

    npm run lint
    npm run typecheck
    npm test
    npm run build

## Rotas principais

- /ferramentas/validador-fhir-rnds
- /ferramentas/sequence-workbench
- /ferramentas
- /projetos
- /comunidade
- /sobre

## Segurança e privacidade

Não use dados reais ou identificáveis de pacientes em exemplos, issues, testes ou demonstrações. Casos de reprodução devem ser completamente sintéticos.

Achados de segurança não devem ser publicados com dados sensíveis. Abra inicialmente uma issue apenas com contexto não sensível para combinar um canal adequado com o mantenedor.

## Contribuição

1. Abra ou associe a mudança a uma issue.
2. Crie uma branch específica.
3. Inclua testes quando alterar regras de domínio.
4. Execute npm run check.
5. Abra um pull request com escopo, limitações e evidências de validação.

## Licença

[MIT](LICENSE) © Ivo Ricardo Lozekam Junior.
