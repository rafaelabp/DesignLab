import Link from "next/link";
import type { CaseItem } from "@/content/cases";

type CaseCardProps = {
  caseItem: CaseItem;
};

export function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <Link className="caseCard" href={`/cases/${caseItem.slug}`}>
      <div className="caseThumb" aria-hidden="true">
        {caseItem.image ? <img src={caseItem.image} alt="" /> : <div className="casePattern" />}
      </div>
      <div className="caseCardBody">
        <p className="caseCardMeta">{caseItem.year} / {caseItem.role}</p>
        <h3>{caseItem.title}</h3>
        <p>{caseItem.summary}</p>
      </div>
      <div className="caseCardFooter">
        <div className="tagList" aria-label="Tags">
          {caseItem.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="textLink">Ler case</span>
      </div>
    </Link>
  );
}
