import { cn } from "../../lib/utils/cn";

interface SkillIconProps {
  label: string;
  short: string;
  color: string;
  text?: string;
  logo?: string;
  invert?: boolean;
}

export function SkillIcon({ label, short, color, text, logo, invert }: SkillIconProps) {
  return (
    <span className="skill-icon-col">
      <span
        className={cn("skill-icon", "title-accent")}
        style={{
          backgroundColor: color,
          color: text ?? "#e9ecff",
          boxShadow: `0 10px 30px ${hexToRgba(color, 0.35)}`
        }}
        title={label}
      >
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={label}
            className={cn(
              "h-7 w-7 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]",
              invert && "invert brightness-150"
            )}
            loading="lazy"
          />
        ) : (
          <span className="skill-short">{short}</span>
        )}
      </span>
      <span className="skill-label">{label}</span>
    </span>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
