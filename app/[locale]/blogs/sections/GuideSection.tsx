"use client";
import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import useBlogs from "../hooks/useBlogs";
import { useTranslations } from "next-intl";

function GuideSection() {
    const { data: guideBlogs, isLoading: guideBlogsLoading, isError: guideBlogsError } = useBlogs(2);
    const { data: reportBlogs, isLoading: reportBlogsLoading, isError: reportBlogsError } = useBlogs(2);
    const { data: marketingBlogs, isLoading: marketingBlogsLoading, isError: marketingBlogsError } = useBlogs(2);
    const t = useTranslations("Blogs");

    return (
        <div className="container mx-auto flex flex-col xl:flex-row justify-center items-start gap-8 ">
            {/* Guides */}
            <div className="flex-1 w-full">
                <ContentSection title={t("guides")}>
                    {guideBlogsError && <p>Failed to load guide blogs</p>}
                    <ul className="grid grid-cols-1 gap-4 divide-y w-full">
                        {guideBlogsLoading
                            ? Array.from({ length: 2 }).map((_, idx) => (
                                <li key={`guide-skeleton-${idx}`} className="pb-2">
                                    <BlogCardSkeleton orientation="horizontal" />
                                </li>
                            ))
                            : guideBlogs?.map((blog) => (
                                <li key={"guides/" + blog.id} className="pb-2">
                                    <BlogCard orientation="horizontal" blog={blog} />
                                </li>
                            ))}
                    </ul>
                </ContentSection>
            </div>

            {/* Data Reports */}
            <div className="flex-1 w-full">
                <ContentSection title={t("dataReports")}>
                    {reportBlogsError && <p>Failed to load data reports</p>}
                    <ul className="grid grid-cols-1 gap-4 divide-y w-full">
                        {reportBlogsLoading
                            ? Array.from({ length: 2 }).map((_, idx) => (
                                <li key={`report-skeleton-${idx}`} className="pb-2">
                                    <BlogCardSkeleton orientation="horizontal" />
                                </li>
                            ))
                            : reportBlogs?.map((blog) => (
                                <li key={"data-reports/" + blog.id} className="pb-2">
                                    <BlogCard orientation="horizontal" blog={blog} />
                                </li>
                            ))}
                    </ul>
                </ContentSection>
            </div>

            {/* All Marketing Insights */}
            <div className="flex-1 w-full">
                <ContentSection title={t("allMarketingInsights")}>
                    {marketingBlogsError && <p>Failed to load marketing insights</p>}
                    <ul className="grid grid-cols-1 gap-4 divide-y w-full">
                        {marketingBlogsLoading
                            ? Array.from({ length: 2 }).map((_, idx) => (
                                <li key={`marketing-skeleton-${idx}`} className="pb-2">
                                    <BlogCardSkeleton orientation="horizontal" />
                                </li>
                            ))
                            : marketingBlogs?.map((blog) => (
                                <li key={"marketing-insights/" + blog.id} className="pb-2">
                                    <BlogCard orientation="horizontal" blog={blog} />
                                </li>
                            ))}
                    </ul>
                </ContentSection>
            </div>
        </div>
    );
}

export default GuideSection;
