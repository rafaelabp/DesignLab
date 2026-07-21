import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/content/cases";

export default function Home() {
  return (
    <>
      <div className="glowLayer" aria-hidden="true">
        <span className="glowOne" />
        <span className="glowTwo" />
        <span className="glowThree" />
      </div>

      <section className="heroSection" id="about">
        <div className="statusTag">
          <span className="statusDot" />
          Aberta a trabalho remoto e relocação para São Paulo
        </div>

        <h1>
          Senior Product Designer
          <br />
          <span>UX / UI Designer</span>
        </h1>

        <p className="heroDesc">
          Product Designer com mais de 10 anos de experiência em UX, UI e produtos digitais.
          Atuação recente em plataforma B2B SaaS de gerenciamento de APIs, integrando workflows de
          IA no processo de ideação e prototipação funcional.
        </p>

        <div className="contactLinks" aria-label="Contato e localizacao">
          <span>Aracaju, SE</span>
          <a href="tel:+5579999439386">(79) 99943-9386</a>
          <a href="mailto:rafinhabp@gmail.com">rafinhabp@gmail.com</a>
          <a
            href="https://linkedin.com/in/rafaela-pinto-95611ba0"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="statsBanner" aria-label="Resumo profissional">
        <div>
          <strong>10+ anos</strong>
          <span>De experiência</span>
        </div>
        <div>
          <strong>B2B SaaS</strong>
          <span>Produtos complexos</span>
        </div>
        <div>
          <strong>Atomic</strong>
          <span>Design systems</span>
        </div>
        <div>
          <strong>AI Workflows</strong>
          <span>Prototipação ágil</span>
        </div>
      </section>

      <section className="contentSection" id="experience">
        <h2 className="sectionTitle">
          <span aria-hidden="true">▣</span>
          Experiência profissional
        </h2>

        <article className="resumeCard">
          <div className="jobHeader">
            <h3>Designer de Produtos</h3>
            <span className="jobTag">nov 2022 - jul 2026</span>
          </div>
          <p className="company">Engineering Brasil | São Paulo, Brasil</p>
          <ul className="jobList">
            <li>
              Atuação de ponta a ponta no DHuO API+, plataforma B2B SaaS de gerenciamento de APIs
              e integrações, abrangendo criação, configuração, publicação e evolução de fluxos
              técnicos complexos.
            </li>
            <li>
              Condução de UX Research, incluindo entrevistas com usuários, testes de usabilidade
              com Maze e análise de feedback qualitativo e quantitativo.
            </li>
            <li>
              Colaboração diária com Product Owners e Engenharia em discovery, roughs, exploração
              de soluções, prototipação, refinamento, handoff e QA.
            </li>
            <li>
              Criação e manutenção de design system baseado em Atomic Design, com evolução de
              componentes, documentação e validação durante QA.
            </li>
            <li>
              Uso de Figma, Claude Code, Cursor e Codex para explorar alternativas, criar
              protótipos funcionais e validar experiências antes do desenvolvimento.
            </li>
          </ul>
        </article>

        <article className="resumeCard">
          <div className="jobHeader">
            <h3>UX/UI Designer</h3>
            <span className="jobTag jobTagMuted">out 2021 - nov 2022</span>
          </div>
          <p className="company">PrimeIT | Lisboa, Portugal</p>
          <ul className="jobList">
            <li>
              Colaboração com time internacional no desenvolvimento de solução de treinamento em
              realidade virtual para operadores de maquinário pesado.
            </li>
            <li>
              Desenho de fluxos, protótipos e interfaces com foco em segurança, clareza das
              instruções e facilidade de uso.
            </li>
          </ul>
        </article>

        <article className="resumeCard">
          <h3>Experiências anteriores</h3>
          <p className="company">
            Nindo Mobile App Development · Avenue Code · Avivatec · Iterative · WorkOtter SaaS PPM
            · Slate Development
          </p>
          <p>
            Experiência em UX, UI e design digital para produtos web e mobile, incluindo pesquisa,
            workshops, prototipação, testes, criação de interfaces e acompanhamento pós-lançamento.
          </p>
        </article>
      </section>

      <section className="contentSection" id="skills">
        <h2 className="sectionTitle">
          <span aria-hidden="true">✦</span>
          Competências & ferramentas
        </h2>
        <div className="skillsGrid">
          <article className="skillCard">
            <h3>Product Design</h3>
            <p>Discovery, UX/UI, SaaS B2B</p>
          </article>
          <article className="skillCard">
            <h3>UX Research</h3>
            <p>Entrevistas, Maze, NPS</p>
          </article>
          <article className="skillCard">
            <h3>Design Systems</h3>
            <p>Atomic Design, QA</p>
          </article>
          <article className="skillCard aiHighlight">
            <h3>AI Prototyping</h3>
            <p>Claude Code, Cursor, Codex</p>
          </article>
        </div>
      </section>

      <section className="contentSection" id="education">
        <h2 className="sectionTitle">
          <span aria-hidden="true">◈</span>
          Formação & idiomas
        </h2>
        <div className="educationGrid">
          <article className="resumeCard">
            <h3>Universidade Tiradentes</h3>
            <p className="company">Design Gráfico e Comunicação</p>
            <p>2004 - 2008</p>
          </article>
          <article className="resumeCard">
            <h3>Idiomas</h3>
            <div className="languageRow">
              <span>Português</span>
              <strong>Nativo</strong>
            </div>
            <div className="languageRow">
              <span>Inglês</span>
              <strong>Proficiência completa</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="contentSection" id="portfolio">
        <div className="portfolioBox">
          <span className="portfolioIcon" aria-hidden="true">▦</span>
          <h2>Portfólio</h2>
          <p>
            Estudos de caso sobre produto, fluxos técnicos, canvas, validação e prototipação.
          </p>
          <div className="caseList">
            {cases.map((caseItem) => (
              <CaseCard caseItem={caseItem} key={caseItem.slug} />
            ))}
          </div>
          <Link className="btnCta" href="/cases">
            Ver todos os cases
          </Link>
        </div>
      </section>
    </>
  );
}
