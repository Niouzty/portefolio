/* eslint-disable react/no-unescaped-strings */
import { profile } from "../../content/pages/home";
import type { ExperienceMap } from "../../types/profile";
import { LineBuilder } from "../shared/line-builder";

export function JsonResume() {
  const lines = buildLines();
  return (
    <section className="card json-card" aria-label="CV en code JSON">
      <pre>
        <code>{lines}</code>
      </pre>
    </section>
  );
}

function buildLines() {
  const experience = profile.experience;
  const lines = LineBuilder({
    name: profile.name,
    position: profile.position,
    email: profile.email,
    phone: profile.phone ?? "",
    location: profile.location,
    github: profile.github ?? "",
    experience: "[voir ci-dessous]"
  });

  const expEntries = Object.entries(experience);
  const expLines: React.ReactNode[] = [];
  expEntries.forEach(([k, v], idx) => {
    const trailing = idx === expEntries.length - 1 ? "" : ",";
    expLines.push(
    <span
      className="line type-line"
      style={{ "--delay": `${(lines.length + idx) * 0.08}s` } as React.CSSProperties}
      key={k}
    >
        <span className="indent">    </span>
        <span className="string">"{k}"</span>
        <span className="punctuation">: </span>
        <span className="string">"{v}"</span>
        <span className="punctuation">{trailing}</span>
      </span>
    );
  });

  const withExperience = [
    ...lines.slice(0, lines.length - 1),
    <span
      className="line type-line"
      style={{ "--delay": `${lines.length * 0.08}s` } as React.CSSProperties}
      key="exp-open"
    >
      <span className="indent">  </span>
      <span className="key">"experience"</span>
      <span className="punctuation">: &#123;</span>
    </span>,
    ...expLines,
    <span
      className="line type-line"
      style={{ "--delay": `${(lines.length + expLines.length) * 0.08}s` } as React.CSSProperties}
      key="exp-close"
    >
      <span className="indent">  </span>
      <span className="punctuation">&#125;</span>
    </span>,
    <span
      className="line type-line"
      style={{ "--delay": `${(lines.length + expLines.length + 1) * 0.08}s` } as React.CSSProperties}
      key="close"
    >
      <span className="punctuation">&#125;</span>
    </span>
  ];

  return withExperience;
}
