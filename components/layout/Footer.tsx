import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">Exaucé Pembele Fuala</div>
        <div className="footer-links">
          <Link href="#home">Accueil</Link>
          <Link href="#about">À propos</Link>
          <Link href="#projects">Projets</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="footer-meta">© {new Date().getFullYear()} — Portfolio</div>
      </div>
    </footer>
  );
}
