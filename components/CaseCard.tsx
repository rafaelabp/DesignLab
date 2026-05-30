import Link from "next/link";
import type { CaseItem } from "@/content/cases";

type CaseCardProps = {
  caseItem: CaseItem;
};

export function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <article className="caseCard">
      <div>
        <p className="caseCardMeta">{caseItem.year} · {caseItem.role}</p>
        <h3>{caseItem.title}</h3>
        <p>{caseItem.summary}</p>
      </div>
      <div className="caseCardFooter">
        <div className="tagList" aria-label="Tags">
          {caseItem.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="button buttonSecondary" href={`/cases/${caseItem.slug}`}>
          Ler case
        </Link>
      </div>
    </article>
  );
}
