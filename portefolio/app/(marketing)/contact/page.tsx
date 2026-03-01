import { ContactBlock } from "../../../features/contact";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { SectionTitle } from "../../../components/shared/SectionTitle";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="/contact" />
      <div className="fade-in">
        <SectionTitle>Contact</SectionTitle>
      </div>
      <div className="fade-in-delayed">
        <ContactBlock />
      </div>
    </>
  );
}
