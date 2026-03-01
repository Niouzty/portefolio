import { ProjectsList } from "../../../features/projects";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { SectionTitle } from "../../../components/shared/SectionTitle";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader active="/projects" />
      <div className="fade-in">
        <SectionTitle>Projets récents</SectionTitle>
      </div>
      <div className="fade-in-delayed">
        <ProjectsList />
      </div>
    </>
  );
}
