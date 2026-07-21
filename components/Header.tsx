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
          <Link href="/#experience">Experiencia</Link>
          <Link href="/#skills">Competencias</Link>
          <Link href="/#education">Formacao</Link>
          <Link className="portfolioMenuItem" href="/#portfolio">
            Portfolio <span>Cases</span>
          </Link>
        </nav>
        <a className="headerContact" href="mailto:rafinhabp@gmail.com">
          Contato
        </a>
      </div>
    </header>
  );
}
