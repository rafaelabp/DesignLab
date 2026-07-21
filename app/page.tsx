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
          <div className="boardCard boardCardLarge">
            <span>Foco</span>
            <strong>Produto, interface e sistemas de trabalho</strong>
          </div>
          <div className="boardCard">
            <span>Cases</span>
            <strong>{cases.length}</strong>
          </div>
          <div className="boardCard">
            <span>Formato</span>
            <strong>Processo + decisão</strong>
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

      <section className="approachSection" aria-labelledby="approach-title">
        <div className="sectionLead">
          <p className="eyebrow">Como eu penso</p>
          <h2 id="approach-title">Menos tela solta. Mais clareza sobre o sistema.</h2>
        </div>
        <div className="approachGrid">
          <article>
            <span>01</span>
            <h3>Estruturar</h3>
            <p>Entender contexto, dependências e onde a decisão trava.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Prototipar</h3>
            <p>Transformar hipótese em fluxo navegável para aprender rápido.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Refinar</h3>
            <p>Ajustar linguagem, estados e hierarquia até a interface ficar óbvia.</p>
          </article>
        </div>
      </section>
    </>
  );
}
