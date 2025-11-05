import CaseStudyCard from "@/components/shared/CaseStudyCard";
import PaginationWrapper from "../components/PaginationWrapper";

function PaginatedBlogsSection() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-8 my-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {Array.from({ length: 8 }).map((_, i) => (
                    <li key={i}>
                        <CaseStudyCard />
                    </li>
                ))}
            </ul>

            <PaginationWrapper />
        </div>
    );
}

export default PaginatedBlogsSection;