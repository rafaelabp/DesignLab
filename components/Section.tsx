import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
};

export function Section({ children, className, eyebrow, title }: SectionProps) {
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      {eyebrow || title ? (
        <div className="sectionHeader">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
