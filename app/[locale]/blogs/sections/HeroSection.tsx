import ContentSection from "../components/ContentSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BlogCard from "../components/BlogCard";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ChevronDown, SearchIcon } from "lucide-react";

function HeroSection() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-start gap-8 my-12 px-4">

            {/* Header and Search */}
            <div className="flex justify-between items-center w-full flex-wrap gap-4">
                {/* Left side */}
                <div className="flex items-center gap-6 flex-wrap">
                    <p className="font-bold">Dima Blog</p>
                    <p className="font-bold inline-flex items-center gap-1">
                        Topics <ChevronDown size={18} />
                    </p>
                </div>

                {/* Right side */}
                <div className="w-full sm:w-auto">
                    <InputGroup className="w-full sm:w-64">
                        <InputGroupInput placeholder="Search the blog" />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

            {/* Content sections */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Featured Card */}
                <ContentSection title="Featured Research" className="flex-1 w-full" includeViewAll={false}>
                    <article className="bg-[#00C7EC]/9 py-4 px-6 rounded-3xl shadow-md">
                        {/* Image */}
                        <figure className="flex justify-center items-center">
                            <Image
                                src="/featured-research.svg"
                                alt="featured card"
                                width={600}
                                height={300}
                            />
                        </figure>

                        {/* Text and Actions */}
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-medium my-6 sm:my-8">
                                How an Agency based in Egypt uses dima to deliver 5x more accurate media coverage for clients
                            </h3>
                            <Button size="xl" className="bg-primary! hover:bg-primary/90! w-fit mb-4 text-sm sm:text-base">
                                Read Full Story
                            </Button>
                        </div>
                    </article>
                </ContentSection>

                {/* Editor's Picks */}
                <ContentSection title="Editor's Pick" className="flex-1 w-full items-start">
                    <ul>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <li key={i} className={i !== 2 ? "border-b border-b-muted mb-4" : "border-b-0"}>
                                <BlogCard orientation="horizontal" />
                            </li>
                        ))}
                    </ul>
                </ContentSection>
            </div>
        </div>
    );
}

export default HeroSection;
