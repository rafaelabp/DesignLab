import Link from "next/link";

export function Header() {
  return (
    <header className="siteHeader">
      <div className="navContainer">
        <Link className="brand" href="/#about">
          Rafaela<span>.</span>
        </Link>
        <nav className="nav" aria-label="Navegacao principal">
          <Link href="/#about">Sobre</Link>
          <Link href="/#experience">Experiência</Link>
          <Link href="/#skills">Competências</Link>
          <Link href="/#education">Formação</Link>
          <Link className="portfolioMenuItem" href="/#portfolio">
            Portfólio <span>Cases</span>
          </Link>
        </nav>
        <div className="headerActions">
          <a className="headerDownload" href="/rafaela-pinto-curriculo.pdf" download>
            Baixar em PDF
          </a>
          <a className="headerContact" href="mailto:rafinhabp@gmail.com">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
