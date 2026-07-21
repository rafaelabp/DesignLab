import type { Metadata } from "next";
import { ResumeEffects } from "@/components/ResumeEffects";

export const metadata: Metadata = {
  title: "Currículo | Rafaela Pinto",
  description:
    "Currículo de Rafaela Pinto, Product Designer com experiência em B2B SaaS, UX Research, Design Systems e prototipação com IA."
};

const skills = [
  "Product Design",
  "UX Research",
  "User Interviews",
  "Usability Testing",
  "Maze",
  "Design Systems",
  "Atomic Design",
  "Figma",
  "AI Prototyping",
  "Claude Code",
  "Cursor",
  "Codex",
  "Product Discovery",
  "User Flows",
  "Handoff",
  "B2B SaaS",
  "API Management"
];

export default function CurriculoPage() {
  return (
    <div className="resumePage">
      <ResumeEffects />

      <section className="resumeHero">
        <div className="resumeAurora" aria-hidden="true" />
        <span className="eyebrow">Aracaju, SE</span>
        <h1>
          Rafaela <em>Pinto</em>
        </h1>
        <p>
          Senior Product Designer com mais de 10 anos transformando problemas complexos de
          produtos B2B em fluxos claros e utilizáveis.
        </p>
        <div className="resumeMeta" aria-label="Informações de contato e disponibilidade">
          <span>Aberta a remoto e relocação para São Paulo</span>
          <a href="mailto:rafinhabp@gmail.com">rafinhabp@gmail.com</a>
          <a href="tel:+5579999439386">79 99943-9386</a>
          <a
            href="https://linkedin.com/in/rafaela-pinto-95611ba0"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="resumeSection" id="sobre">
        <div className="resumeSectionHead reveal">
          <span className="eyebrow">Resumo</span>
          <h2>Discovery, research e prototipação de ponta a ponta</h2>
          <p>
            Experiência recente em plataforma B2B de gerenciamento de APIs, atuando em discovery,
            UX research, entrevistas com usuários, testes de usabilidade com Maze, análise de
            feedback, definição de fluxos complexos, prototipação, handoff e colaboração próxima
            com Produto e Engenharia.
          </p>
        </div>
        <hr className="gradientRule reveal" />
        <div className="resumeTags reveal">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="resumeSection" id="experiencia">
        <div className="resumeSectionHead reveal">
          <span className="eyebrow">Trajetória</span>
          <h2>Experiência profissional</h2>
        </div>

        <div className="timeline">
          <article className="job reveal">
            <div>
              <span className="jobDate">nov 2022 - jul 2026</span>
              <span className="jobPlace">São Paulo, Brasil</span>
            </div>
            <div>
              <h3>Engineering Brasil</h3>
              <p className="jobRole">Designer de Produtos</p>
              <ul>
                <li>
                  Atuação de ponta a ponta no DHuO API+, plataforma B2B SaaS de gerenciamento de
                  APIs e integrações, abrangendo criação, configuração, publicação e evolução de
                  fluxos técnicos complexos.
                </li>
                <li>
                  Condução de UX research, entrevistas com usuários, testes de usabilidade com Maze
                  e análise de feedback qualitativo e quantitativo para orientar decisões de
                  produto.
                </li>
                <li>
                  Colaboração diária com Product Owners e Engenharia em discovery, roughs,
                  exploração de soluções, prototipação, refinamento, handoff e QA.
                </li>
                <li>
                  Criação e manutenção de design system baseado em Atomic Design, com evolução de
                  componentes, documentação de uso e validação de fidelidade durante QA.
                </li>
                <li>
                  Uso de Figma, Claude Code, Cursor e Codex para explorar alternativas, criar
                  protótipos funcionais e validar experiências antes do desenvolvimento.
                </li>
              </ul>
            </div>
          </article>

          <article className="job reveal">
            <div>
              <span className="jobDate">out 2021 - nov 2022</span>
              <span className="jobPlace">Lisboa, Portugal</span>
            </div>
            <div>
              <h3>PrimeIT</h3>
              <p className="jobRole">UX/UI Designer</p>
              <ul>
                <li>
                  Colaboração com time internacional no desenvolvimento de solução de treinamento em
                  realidade virtual para operadores de maquinário pesado em indústria farmacêutica.
                </li>
                <li>
                  Desenho de fluxos, protótipos e interfaces com foco em segurança, clareza das
                  instruções e facilidade de uso.
                </li>
              </ul>
            </div>
          </article>

          <div className="previousRoles reveal">
            <span className="jobDate">Experiências anteriores</span>
            <p>
              Nindo Mobile App Development · Avenue Code · Avivatec · Iterative · WorkOtter SaaS
              PPM · Slate Development
            </p>
            <p>
              Experiência em UX, UI e design digital para produtos web e mobile, incluindo
              pesquisa, workshops, prototipação, testes, criação de interfaces e acompanhamento
              pós-lançamento.
            </p>
          </div>
        </div>
      </section>

      <section className="resumeSection" id="formacao">
        <div className="resumeSectionHead reveal">
          <span className="eyebrow">Base</span>
          <h2>Formação e idiomas</h2>
        </div>
        <div className="resumeGrid">
          <article className="resumeCard reveal">
            <span className="eyebrow">Formação</span>
            <h3>Universidade Tiradentes</h3>
            <p>Design Gráfico e Comunicação - 2004 a 2008</p>
          </article>
          <article className="resumeCard reveal">
            <span className="eyebrow">Idiomas</span>
            <div className="languageRow">
              <span>Português</span>
              <strong>Nativo</strong>
            </div>
            <div className="languageRow">
              <span>Inglês</span>
              <strong>Profissional completo</strong>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
