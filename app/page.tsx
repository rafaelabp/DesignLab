import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/content/cases";

export default function Home() {
  return (
    <>
      <section className="homeHero" aria-labelledby="home-title">
        <div className="heroCopy">
          <p className="eyebrow">Product Design Portfolio</p>
          <h1 id="home-title">Desenho interfaces para decisões complexas ficarem mais simples.</h1>
          <p>
            Sou Rafaela Pinto, product designer com foco em fluxos técnicos, protótipos e
            experiências que precisam ser claras sob pressão.
          </p>
          <div className="heroActions" aria-label="Ações principais">
            <Link className="button buttonPrimary" href="/cases">
              Ver cases
            </Link>
            <a className="button buttonSecondary" href="mailto:contato@designlab.dev">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="heroBoard" aria-label="Resumo do trabalho">
          <div className="boardCard">
            <span>Foco</span>
            <strong>Interfaces técnicas</strong>
          </div>
          <div className="boardCard">
            <span>Cases</span>
            <strong>{cases.length}</strong>
          </div>
          <div className="boardCard">
            <span>Formato</span>
            <strong>Processo e decisão</strong>
          </div>
        </div>
      </section>

      <section className="workSection" aria-labelledby="work-title">
        <div className="sectionLead">
          <p className="eyebrow">Cases selecionados</p>
          <h2 id="work-title">Projetos com problema, processo e aprendizado.</h2>
        </div>
        <div className="caseList">
          {cases.map((caseItem) => (
            <CaseCard caseItem={caseItem} key={caseItem.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
