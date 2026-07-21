import { CaseCard } from "@/components/CaseCard";
import { Section } from "@/components/Section";
import { cases } from "@/content/cases";

export const metadata = {
  title: "Cases | Rafaela Pinto"
};

export default function CasesPage() {
  return (
    <Section
      eyebrow="Cases"
      title="Projetos de Product Design com foco em raciocinio, sistema e impacto"
    >
      <div className="caseList">
        {cases.map((caseItem) => (
          <CaseCard caseItem={caseItem} key={caseItem.slug} />
        ))}
      </div>
    </Section>
  );
}
