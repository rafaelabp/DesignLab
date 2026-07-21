import Link from "next/link";

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/">
        Rafaela Pinto
      </Link>
      <nav className="nav" aria-label="Navegacao principal">
        <Link href="/">Home</Link>
        <Link href="/cases">Cases</Link>
        <Link href="/curriculo">Currículo</Link>
      </nav>
    </header>
  );
}
