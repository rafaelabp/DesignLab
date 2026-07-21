import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { cases } from "@/content/cases";

const caseItem = cases.find((item) => item.slug === "indicativos-de-sintaxe-no-canvas");

export const metadata = {
  title: "Indicativos de sintaxe no canvas | Rafaela Pinto"
};

export default function SyntaxIndicatorsCasePage() {
  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <Section className="caseHero">
        <Link className="backLink" href="/cases">
          Voltar para cases
        </Link>
        <p className="eyebrow">{caseItem.year} · {caseItem.role}</p>
        <h1>{caseItem.title}</h1>
        <p className="heroText">{caseItem.summary}</p>
        <div className="tagList" aria-label="Tags do case">
          {caseItem.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Section>

      <Section title="Contexto">
        <p>
          Produtos baseados em canvas costumam concentrar muitas decisoes em um mesmo espaco:
          componentes, conexoes, estados e regras de montagem. O desafio deste case foi tornar
          esses sinais mais legiveis sem transformar a interface em uma camada pesada de avisos.
        </p>
      </Section>

      <Section title="Problema">
        <p>
          Pessoas usuarias conseguiam construir fluxos, mas tinham dificuldade para perceber
          quando uma configuracao estava incompleta, ambigua ou fora da sintaxe esperada. Isso
          aumentava retrabalho e criava dependencia de revisoes manuais.
        </p>
      </Section>

      <Section title="Processo">
        <div className="processGrid">
          <article>
            <h3>Mapeamento</h3>
            <p>Inventario dos erros mais frequentes e dos pontos do canvas onde eles surgiam.</p>
          </article>
          <article>
            <h3>Sintaxe visual</h3>
            <p>Definicao de sinais discretos para alerta, bloqueio, sugestao e confirmacao.</p>
          </article>
          <article>
            <h3>Validacao</h3>
            <p>Teste de leitura com cenarios de montagem, revisao e correcao de fluxos.</p>
          </article>
        </div>
      </Section>

      <Section title="Decisoes de design">
        <ul className="caseBullets">
          <li>Usar indicativos proximos ao ponto de acao, evitando mensagens soltas.</li>
          <li>Diferenciar severidade por comportamento, nao apenas por cor.</li>
          <li>Manter a leitura do canvas limpa durante exploracao e mais explicita durante revisao.</li>
        </ul>
      </Section>

      <Section title="Aprendizados">
        <p>
          O trabalho mostrou que feedback tecnico precisa ser desenhado como parte da linguagem
          do produto. Quando o sistema comunica sintaxe no lugar certo, a interface passa a ensinar
          sem interromper.
        </p>
      </Section>
    </>
  );
}
