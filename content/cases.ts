export type CaseItem = {
  title: string;
  slug: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
};

export const cases: CaseItem[] = [
  {
    title: "Indicativos de sintaxe no canvas",
    slug: "indicativos-de-sintaxe-no-canvas",
    summary:
      "Um estudo sobre como tornar regras, alertas e estados de montagem mais legiveis dentro de uma experiencia baseada em canvas.",
    role: "Product Design",
    year: "2026",
    tags: ["Canvas", "Sintaxe visual", "UX tecnica"]
  },
  {
    title: "Venda assistida para Interfile",
    slug: "interfile-venda-assistida",
    summary:
      "Um sprint de design para prototipar um aplicativo de apoio a vendedores de chip, com foco em registro rapido, aceite de voz e validacao do atendimento.",
    role: "Product Design",
    year: "2021",
    tags: ["Design Sprint", "Mobile", "Wireframes"]
  }
];
