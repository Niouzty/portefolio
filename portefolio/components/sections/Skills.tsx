import { SkillIcon } from "../shared/SkillIcon";

const cdn = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillsPrimary = [
  { label: "Java", short: "Java", color: "#f89820", logo: `${cdn}/java/java-original.svg` },
  { label: "JavaScript", short: "JS", color: "#f7df1e", text: "#0f172a", logo: `${cdn}/javascript/javascript-original.svg` },
  { label: "TypeScript", short: "TS", color: "#1f74c0", logo: `${cdn}/typescript/typescript-original.svg` },
  { label: "Angular", short: "NG", color: "#dd0031", logo: `${cdn}/angularjs/angularjs-plain.svg` },
  { label: "Spring Boot", short: "SB", color: "#0a7c3b", logo: `${cdn}/spring/spring-original.svg`, invert: true },
  { label: "Python", short: "Py", color: "#3670a0", logo: `${cdn}/python/python-original.svg` },
  { label: "Flask", short: "Fl", color: "#0f172a", text: "#e2e8f0", logo: `${cdn}/flask/flask-original.svg`, invert: true },
  { label: "PHP", short: "PHP", color: "#4f5b93", logo: `${cdn}/php/php-original.svg` },
  { label: "C", short: "C", color: "#283593", logo: `${cdn}/c/c-original.svg` },
  { label: "Bash", short: "Bash", color: "#0f172a", text: "#e2e8f0", logo: `${cdn}/bash/bash-plain.svg`, invert: true },
  { label: "HTML5", short: "HTML", color: "#e34f26", logo: `${cdn}/html5/html5-original.svg` },
  { label: "CSS3", short: "CSS", color: "#264de4", logo: `${cdn}/css3/css3-original.svg` },
  { label: "Tailwind", short: "Tw", color: "#0ea5e9", logo: `${cdn}/tailwindcss/tailwindcss-plain.svg` }
];

const skillsSecondary = [
  { label: "PostgreSQL", short: "PG", color: "#336791", logo: `${cdn}/postgresql/postgresql-plain.svg` },
  { label: "MySQL", short: "My", color: "#00758f", logo: `${cdn}/mysql/mysql-original.svg` },
  { label: "SQLite", short: "SQ", color: "#0f172a", text: "#e2e8f0", logo: `${cdn}/sqlite/sqlite-original.svg`, invert: true },
  { label: "MongoDB", short: "Mg", color: "#4faa41", logo: `${cdn}/mongodb/mongodb-original.svg` },
  { label: "Redis", short: "Rd", color: "#d82c20", logo: `${cdn}/redis/redis-original.svg` },
  { label: "Neo4j", short: "N4", color: "#018bff", logo: `${cdn}/neo4j/neo4j-original.svg` },
  { label: "Docker", short: "Dk", color: "#0db7ed", logo: `${cdn}/docker/docker-original.svg` },
  { label: "Kubernetes", short: "K8s", color: "#326ce5", logo: `${cdn}/kubernetes/kubernetes-plain.svg` },
  { label: "Git", short: "Git", color: "#f05033", logo: `${cdn}/git/git-original.svg` },
  { label: "CI/CD (Jenkins)", short: "CI", color: "#7c3aed", logo: `${cdn}/jenkins/jenkins-original.svg` },
  { label: "JWT", short: "JWT", color: "#0f172a", text: "#f5f5f5", logo: `${cdn}/json/json-original.svg`, invert: true },
  { label: "Swagger", short: "Sw", color: "#85ea2d", text: "#0f172a", logo: `${cdn}/swagger/swagger-original.svg` },
  { label: "Socket.IO", short: "IO", color: "#0f172a", text: "#e2e8f0", logo: `${cdn}/socketio/socketio-original.svg`, invert: true },
  { label: "WordPress/SEO", short: "WP", color: "#21759b", logo: `${cdn}/wordpress/wordpress-plain.svg` },
  { label: "Postman", short: "PM", color: "#f97316", text: "#0f172a", logo: `${cdn}/postman/postman-plain.svg` }
];

export function Skills() {
  return (
    <section className="card json-card space-y-4">
      <span className="title-chip">Compétences</span>
      <h2 className="text-xl font-semibold title-accent">Ce que je manie au quotidien</h2>
      <div className="flex flex-wrap gap-2">
        {skillsPrimary.map((skill) => (
          <SkillIcon key={skill.label} {...skill} />
        ))}
      </div>
      <p className="text-white/70 text-sm">Aussi :</p>
      <div className="flex flex-wrap gap-2">
        {skillsSecondary.map((skill) => (
          <SkillIcon key={skill.label} {...skill} />
        ))}
      </div>
    </section>
  );
}
