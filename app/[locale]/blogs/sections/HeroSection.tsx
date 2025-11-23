"use client";

import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import useBlogs from "../hooks/useBlogs";
import CaseStudyCard from "../../case-studies/components/CaseStudyCard";
import CaseStudyCardSkeleton from "../../case-studies/components/CaseStudyCardSkeleton";
import { useCaseStudies } from "../../case-studies/hooks/useCaseStudies";
import { useTranslations } from "next-intl";

function HeroSection() {
    const { data: blogs, isLoading, isError } = useBlogs(3, ["editor's pick"]);
    const { data: caseStudy, isLoading: caseStudyLoading, isError: caseStudyError } = useCaseStudies(1, { featured: true })
    const t = useTranslations("Blogs");
    return (
        <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">

            {/* Content sections */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Featured Card */}
                <ContentSection title={t("featuredCaseStudy")} className="flex-1 w-full lg:min-w-[512px]" includeViewAll={false}>
                    {caseStudyError && <p>Failed to load featured case study</p>}

                    {caseStudyLoading ? <CaseStudyCardSkeleton /> : <CaseStudyCard {...caseStudy![0]} />}
                </ContentSection>

                {/* Editor's Picks */}
                <div className="flex-1">
                    <ContentSection title={t("editorsPick")} className="items-start" includeViewAll={false}>
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
