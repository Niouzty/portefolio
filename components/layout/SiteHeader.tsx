import { mainNav } from "../../lib/constants/nav";
import { profile } from "../../content/pages/home";
import { cn } from "../../lib/utils/cn";

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header
      className="site-header flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center"
      role="banner"
    >
      <div className="text-center">
        <span className="title-chip">Portfolio</span>
      </div>
      <nav
        className="flex flex-wrap justify-center gap-2 text-sm"
        role="navigation"
        aria-label="Navigation principale"
      >
        {mainNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full border border-transparent px-3 py-2 text-white/80 transition hover:border-white/20 hover:text-white",
              active === item.href && "border-white/30 bg-white/10 text-white"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
