import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ContentSectionProps = {
    className?: string;
    children: React.ReactNode
    title: string;
    includeViewAll?: boolean;
    hrefViewAll?: string;
}

function ContentSection({ className, children, title, includeViewAll = true, hrefViewAll = "#" }: ContentSectionProps) {
    return (
        <div>
            {/* Separator */}
            <div className="h-0.5 bg-black my-4 w-full"></div>

            {/* Title and View All */}
            <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
                {includeViewAll && (
                    <Link href={hrefViewAll} className="text-primary text-sm inline-flex items-center font-bold">
                        View all <ChevronRight />
                    </Link>
                )}
            </div>

            {/* Content */}
            <div className={cn("flex flex-col sm:flex-row justify-center items-stretch gap-4 w-full", className)}>
                {children}
            </div>
        </div>
    );
}

export default ContentSection;
