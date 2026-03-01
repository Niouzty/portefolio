import Link from "next/link";
import { profile } from "../../content/pages/home";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-kicker">
            <span className="hero-emoji">👋</span> Salut, je suis
          </p>
          <h1 className="hero-title">
            <span className="hero-title-main">{profile.name.split(" ")[0]}</span>{" "}
            <span className="hero-title-accent">
              {profile.name
                .split(" ")
                .slice(1)
                .join(" ")}
            </span>
          </h1>
          <p className="hero-role">{profile.position}</p>
          <p className="hero-sub">{profile.location}</p>

          <div className="hero-cta-row">
            <Link href="#contact" className="hero-btn primary">
              Me contacter
            </Link>
            <Link href="https://github.com/Niouzty" className="hero-btn ghost" target="_blank">
              GitHub
            </Link>
            <Link href="#projects" className="hero-btn ghost">
              Projets
            </Link>
          </div>

          <div className="hero-stats">
            <Stat label="Projets" value="6+" />
            <Stat label="Technologies" value="20+" />
            <Stat label="Expérience" value="1 an" />
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <div className="avatar-placeholder">EP</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">↓</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="hero-stat">
      <div className="hero-stat-value">{value}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}
