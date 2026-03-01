import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../features/projects/data/projects";
import { Tag } from "../../../components/ui/Tag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="card json-card">
          <p className="text-white">Projet introuvable.</p>
          <Link href="/#projects" className="text-string hover:underline">
            Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white bg-animated">
      <div className="page-shell mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12 md:px-8 lg:py-16">
        <Link href="/#projects" className="text-sm text-string hover:underline">
          ← Retour aux projets
        </Link>
        <div className="card json-card space-y-3">
          <span className="title-chip">Projet</span>
          <h1 className="text-2xl font-semibold title-accent">{project.title}</h1>
          {project.year && <p className="text-sm text-white/70">{project.year}</p>}
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <p className="text-white/75">{project.summary}</p>
          {project.tech && (
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Tag key={tech} className="text-[11px] px-2 py-1">
                  {tech}
                </Tag>
              ))}
            </div>
          )}
          {project.details && (
            <div className="product-details mt-2 leading-relaxed space-y-3">
              {project.details.split("\n").map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>
          )}
          {project.images && project.images.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2">
              {project.images.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={src}
                    alt={`${project.title} capture`}
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="product-cta inline-flex items-center gap-2"
              >
                GitHub
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="product-cta inline-flex items-center gap-2"
              >
                Démo
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
