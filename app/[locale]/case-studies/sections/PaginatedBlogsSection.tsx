import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

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

            <Pagination>
                <PaginationContent className="space-x-4">
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default PaginatedBlogsSection;