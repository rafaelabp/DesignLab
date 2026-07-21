import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { Section } from "@/components/Section";
import { cases } from "@/content/cases";

export default function Home() {
  return (
    <>
      <Section className="hero">
        <div className="heroPanel">
          <div className="heroContent">
            <p className="eyebrow">Portfolio tecnico de Product Design</p>
            <h1>DesignLab de Rafaela Pinto transforma fluxos complexos em produto claro.</h1>
            <p className="heroText">
              Cases sobre interfaces tecnicas, prototipos, canvas, validacao e decisoes de
              produto. Menos vitrine bonita, mais raciocinio de design aplicado.
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

          <aside className="heroVisual" aria-label="Resumo visual do portfolio">
            <div className="signalCard signalCardPrimary">
              <span>Foco atual</span>
              <strong>Produto + sistemas de interface</strong>
            </div>
            <div className="flowMap" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="signalGrid">
              <div>
                <span>Cases</span>
                <strong>{cases.length}</strong>
              </div>
              <div>
                <span>Formato</span>
                <strong>Estudo tecnico</strong>
              </div>
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

      <Section eyebrow="Cases" title="Projetos para entender processo, decisao e resultado">
        <div className="caseList">
          {cases.map((caseItem) => (
            <CaseCard caseItem={caseItem} key={caseItem.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}
