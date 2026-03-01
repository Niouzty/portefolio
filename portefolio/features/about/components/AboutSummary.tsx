export function AboutSummary() {
  return (
    <div className="card json-card space-y-3">
      <h2 className="text-xl font-semibold">À propos</h2>
      <p className="text-white/75">
        Étudiant en 3ᵉ année de BUT Informatique (IUT de Montreuil), spécialisé en développement
        full-stack et data. J&apos;oriente mes projets vers des livrables concrets, robustes et
        maintenables.
      </p>
      <p className="text-white/75">
        Je travaille sur des APIs REST, SQL/NoSQL, Docker et Git. J&apos;ai récemment livré une
        plateforme client (ALVS) en Angular/Flask/SQLite avec auth JWT et rôles, et j&apos;itère sur
        un bot de trading memecoin pour tester des stratégies en conditions réelles.
      </p>
      <p className="text-white/75">
        Stack actuelle : TypeScript/Angular, Python/Flask, PostgreSQL & MongoDB, Docker, Git. Intérêt
        marqué pour la data et la cybersécurité.
      </p>
    </div>
  );
}
