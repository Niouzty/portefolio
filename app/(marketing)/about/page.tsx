import { AboutSummary } from "../../../features/about";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { SectionTitle } from "../../../components/shared/SectionTitle";

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="/about" />
      <div className="fade-in">
        <SectionTitle>À propos</SectionTitle>
      </div>
      <div className="fade-in-delayed">
        <AboutSummary />
      </div>
    </>
  );
}
