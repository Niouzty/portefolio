import Link from "next/link";
import Image from "next/image";
import { cn } from "../../../lib/utils/cn";
import { projects } from "../data/projects";
import { Tag } from "../../../components/ui/Tag";

const colors = ["#7dd3fc", "#f9a8d4", "#a5b4fc", "#fbbf24", "#34d399", "#fca5a5"];

export function ProjectsList() {
  return (
    <div className="product-grid">
      {projects.map((project, idx) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="product-card"
          style={{ textDecoration: "none" }}
        >
          <ProjectCard project={project} color={colors[idx % colors.length]} />
        </Link>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  color
}: {
  project: (typeof projects)[number];
  color: string;
}) {
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <>
      <div className="product-thumb">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        ) : (
          <div
            className="product-thumb-fallback"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1), transparent 40%), ${color}`
            }}
          >
            <span className="product-initials">{initials}</span>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold title-accent">{project.title}</h3>
            {project.year && <span className="text-xs text-white/70">{project.year}</span>}
          </div>
          {project.github && (
            <span className="product-cta">GitHub</span>
          )}
        </div>
        <p className="text-sm text-white/75 leading-snug">{project.summary}</p>
        {project.tech && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((tech) => (
              <Tag key={tech} className="text-[11px] px-2 py-1">
                {tech}
              </Tag>
            ))}
          </div>
        )}
        <span className="product-details-btn">Voir le détail</span>
      </div>
    </>
  );
}
