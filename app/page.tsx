import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { Section } from "@/components/Section";
import { cases } from "@/content/cases";

export default function Home() {
  const featuredCase = cases[0];

  return (
    <>
      <Section className="hero">
        <div className="heroPanel">
          <div className="heroContent">
            <p className="eyebrow">Portfolio tecnico de Product Design</p>
            <h1>DesignLab de Rafaela Pinto organiza problemas de interface em decisoes mais claras.</h1>
            <p className="heroText">
              Estudos de caso sobre produto, canvas, sintaxe visual e colaboracao entre design,
              engenharia e estrategia.
            </p>
            <div className="heroActions" aria-label="Acoes principais">
              <Link className="button buttonPrimary" href="/cases">
                Ver cases
              </Link>
              <a className="button buttonSecondary" href="mailto:contato@designlab.dev">
                Entrar em contato
              </a>
            </div>
          </div>

          <aside className="heroAside" aria-label="Resumo profissional">
            <div>
              <span>Atuacao</span>
              <strong>Product Design</strong>
            </div>
            <div>
              <span>Foco</span>
              <strong>Interfaces tecnicas</strong>
            </div>
            <div>
              <span>Primeiro case</span>
              <strong>Canvas e sintaxe visual</strong>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Foco" title="Produto, interface e sistemas de trabalho">
        <div className="focusGrid">
          <article>
            <h3>Clareza operacional</h3>
            <p>Interfaces que ajudam equipes a entender estado, risco e proximo passo.</p>
          </article>
          <article>
            <h3>Design tecnico</h3>
            <p>Decisoes documentadas para aproximar prototipo, comportamento e implementacao.</p>
          </article>
          <article>
            <h3>Experimentos de produto</h3>
            <p>Hipoteses pequenas, leitura rapida de sinais e evolucao continua da experiencia.</p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Case em destaque" title="Um estudo inicial para abrir a conversa">
        <CaseCard caseItem={featuredCase} />
      </Section>
    </>
  );
}
