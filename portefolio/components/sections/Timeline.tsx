const steps = [
  {
    title: "BUT Informatique",
    subtitle: "IUT de Montreuil, Université Paris 8",
    period: "2023 - 2026",
    badge: "En cours",
    detail: "Réalisation d'applications : conception, développement, validation."
  },
  {
    title: "Baccalauréat STMG",
    subtitle: "Lycée Saint Charles Sainte Croix, Le Mans",
    period: "2020 - 2023",
    badge: "Mention Assez Bien",
    detail: "Option gestion/management"
  }
];

export function Timeline() {
  return (
    <section className="card json-card space-y-4">
      <span className="title-chip">Parcours</span>
      <h2 className="text-xl font-semibold title-accent">Formation</h2>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.title} className="timeline-card">
            <div className="timeline-period">{step.period}</div>
            <div className="timeline-title-row">
              <h3 className="timeline-title">{step.title}</h3>
              {step.badge && <span className="timeline-badge">{step.badge}</span>}
            </div>
            {step.subtitle && <p className="timeline-sub">{step.subtitle}</p>}
            <p className="timeline-detail">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
