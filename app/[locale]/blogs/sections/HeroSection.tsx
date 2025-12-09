"use client";

import GroupedBlogs from "../components/GroupedBlogs";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import useBlogs from "../hooks/useBlogs";
import CaseStudyCard from "../../case-studies/components/CaseStudyCard";
import CaseStudyCardSkeleton from "../../case-studies/components/CaseStudyCardSkeleton";
import { useCaseStudies } from "../../case-studies/hooks/useCaseStudies";
import { useTranslations } from "next-intl";

function HeroSection() {
    const t = useTranslations("Blogs");
    const { data: blogs, isLoading, isError } = useBlogs(3, [t("editorsPick")]);
    const { data: caseStudy, isLoading: caseStudyLoading, isError: caseStudyError } = useCaseStudies(1, { featured: true })
    return (
        <div className="container mx-auto flex flex-col justify-center items-start gap-2">
            <h2 className="bg-black text-white uppercase w-fit py-1 px-2 rounded-sm italic tracking-wide">{t("dimaBlogs")}</h2>

            {/* Content sections */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Featured Card */}
                <GroupedBlogs title={t("featuredCaseStudy")} className="flex-1 w-full lg:min-w-lg" includeViewAll={false}>
                    {caseStudyError && <p>Failed to load featured case study</p>}

                    {caseStudyLoading ? <CaseStudyCardSkeleton /> : <CaseStudyCard {...caseStudy![0]} />}
                </GroupedBlogs>

                {/* Editor's Picks */}
                <div className="flex-1">
                    <GroupedBlogs title={t("editorsPick")} className="items-start" includeViewAll={false}>
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
                    </GroupedBlogs>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
