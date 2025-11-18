import { CaseStudy } from "@/types/content";
import Link from "next/link";

function CaseStudyCard(caseStudy: CaseStudy) {
    return (
        <article className="flex flex-col gap-4 p-8 shadow-[0_0_15px_rgba(0,0,0,0.07)] rounded-xl rounded-br-[96px] max-w-lg h-full">
            {/* Metric */}
            <div className="space-x-2">
                <span className="text-2xl lg:text-4xl font-bold text-primary">{caseStudy.content.metrics[1].value + caseStudy.content.metrics[1].suffix}</span>
                <span className="font-medium text-gray-400">{caseStudy.content.metrics[1].title}</span>
            </div>

            {/* Text */}
            <h3 className="text-lg lg:text-[22px] font-bold">{caseStudy.content.title}</h3>
            <p>{caseStudy.content.description}</p>
            <Link href={`/case-studies/${caseStudy.id}`} className="text-primary font-medium">Read more</Link>
        </article>
    );
}

export default CaseStudyCard;