import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { cases } from "@/content/cases";

const caseItem = cases.find((item) => item.slug === "interfile-venda-assistida");

export const metadata = {
  title: "Venda assistida para Interfile | DesignLab de Rafaela Pinto"
};

export default function InterfileAssistedSalesCasePage() {
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

      <Section title="Visao geral">
        <div className="caseIntro">
          <p>
            A Interfile queria apresentar para a Vivo uma proposta de aplicativo para apoiar
            vendedores de chip no registro de vendas. A ideia era reduzir atrito operacional e
            permitir que parte do fluxo acontecesse no celular, em poucos passos.
          </p>
          <figure className="caseVisual">
            <img
              src="/images/cases/interfile-venda-assistida/interfile-case.png"
              alt="Referencia visual do case Interfile com telas mobile e etapas de pesquisa, wireframes e consideracoes."
            />
            <figcaption>Referencia visual extraida do material original do case.</figcaption>
          </figure>
        </div>
      </Section>

      <Section title="Problema">
        <p>
          O processo de venda precisava ser rapido, mas ainda dependia de etapas que podiam
          atrasar o atendimento. Para quem vendia em campo, qualquer friccao entre abordagem,
          validacao e fechamento aumentava o risco de perder a venda.
        </p>
      </Section>

      <Section title="Pesquisa">
        <div className="processGrid">
          <article>
            <h3>Identificacao do problema</h3>
            <p>
              Entender onde o vendedor perdia tempo e quais etapas precisavam ser simplificadas
              para tornar a venda mais direta.
            </p>
          </article>
          <article>
            <h3>Publico</h3>
            <p>
              Vendedores de SIM card que precisavam registrar vendas com agilidade, muitas vezes
              longe de uma estrutura fixa de atendimento.
            </p>
          </article>
          <article>
            <h3>Metodologia</h3>
            <p>
              Design Sprint de cinco dias, com pesquisa rapida, sombra do processo, geracao de
              alternativas, prototipacao e ajustes.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Wireframes">
        <p>
          Os wireframes exploraram telas para aceite de voz, orientacao do vendedor, validacao de
          identidade e tentativa de recuperacao quando a verificacao nao era concluida. O objetivo
          era criar um fluxo simples o suficiente para ser usado em contexto de venda, mas claro
          sobre o estado de cada etapa.
        </p>
      </Section>

      <Section title="Decisoes de design">
        <ul className="caseBullets">
          <li>Dividir o fluxo em passos curtos para reduzir carga cognitiva durante a venda.</li>
          <li>Usar o aceite de voz como parte central da validacao do atendimento.</li>
          <li>Mostrar mensagens diretas quando a verificacao falhava ou precisava ser refeita.</li>
          <li>Priorizar prototipos rapidos para testar entendimento antes de refinar a interface.</li>
        </ul>
      </Section>

      <Section title="Aprendizados">
        <p>
          O projeto reforcou que prototipos existem para falhar cedo. A primeira versao nao era o
          resultado final: ela serviu para revelar duvidas, ajustar o fluxo e aproximar a solucao
          das condicoes reais de uso.
        </p>
        <p className="paragraphGap">
          Trabalhar em sprint tambem exigiu desapego. Mais importante do que defender uma tela era
          entender por que ela nao funcionava, corrigir rapido e transformar feedback em uma versao
          mais clara.
        </p>
      </Section>
    </>
  );
}
