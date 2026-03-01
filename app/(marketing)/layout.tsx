import { CursorGlow } from "../../components/shared/CursorGlow";
import { Footer } from "../../components/layout/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white bg-animated">
      <a href="#main-content" className="skip-link">
        Passer au contenu principal
      </a>
      <CursorGlow />
      <main
        id="main-content"
        role="main"
        aria-label="Contenu principal du portfolio"
        className="page-shell mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 md:px-8 lg:py-16"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
