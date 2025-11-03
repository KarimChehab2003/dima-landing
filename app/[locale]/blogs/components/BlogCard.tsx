import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BlogCardProps = {
    orientation?: "horizontal" | "vertical";
    includeImage?: boolean;
};

function BlogCard({ orientation = "vertical", includeImage = true }: BlogCardProps) {
    const isHorizontal = orientation === "horizontal";

    return (
        <article
            className={cn(
                "flex items-start gap-4",
                isHorizontal ? "flex-col sm:flex-row" : "flex-col"
            )}
        >
            {/* Image */}
            {includeImage && (
                <figure
                    className={cn(
                        "relative rounded-xl overflow-hidden",
                        isHorizontal
                            ? "w-full sm:w-48 h-48 sm:h-28"
                            : "w-full min-h-[200px]"
                    )}
                >
                    <Image
                        src="/blog-placeholder.svg"
                        alt="blog image"
                        fill
                        className="object-cover"
                    />
                </figure>
            )}

            {/* Text content */}
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap gap-2 w-full">
                    <Badge className="bg-muted! text-black font-bold text-xs">Tag 1</Badge>
                    <Badge className="bg-muted! text-black font-bold text-xs">Tag 2</Badge>
                </div>

                <p className="font-bold">
                    What are KOLs in marketing? How to find true experts for your brand
                </p>
                <p className="text-xs">September 19, 2025 ● 14 minutes</p>
            </div>
        </article>
    );
}

export default BlogCard;
