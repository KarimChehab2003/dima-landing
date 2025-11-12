"use client";

import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ChevronDown, SearchIcon } from "lucide-react";
import useBlogs from "../hooks/useBlogs";
import CaseStudyCard from "../../case-studies/components/CaseStudyCard";

function HeroSection() {
    const { data: blogs, isLoading, isError } = useBlogs(3);

    return (
        <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">
            {/* Header and Search */}
            <div className="flex justify-between items-center w-full flex-wrap gap-4">
                <div className="flex items-center gap-6 flex-wrap">
                    <p className="font-bold">Dima Blog</p>
                    <p className="font-bold inline-flex items-center gap-1">
                        Topics <ChevronDown size={18} />
                    </p>
                </div>

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
                    <CaseStudyCard />
                </ContentSection>

                {/* Editor's Picks */}
                <div className="flex-1">
                    <ContentSection title="Editor's Pick" className="items-start">
                        {isError && <p>Failed to load editor&apos;s pick blogs</p>}

                        <ul className="grid grid-cols-1 gap-4 divide-y w-full">
                            {isLoading
                                ? Array.from({ length: 3 }).map((_, idx) => (
                                    <li key={`skeleton-${idx}`} className="pb-2">
                                        <BlogCardSkeleton orientation="horizontal" />
                                    </li>
                                ))
                                : blogs?.map((blog) => (
                                    <li key={blog.id} className="pb-2">
                                        <BlogCard orientation="horizontal" blog={blog} />
                                    </li>
                                ))}
                        </ul>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
