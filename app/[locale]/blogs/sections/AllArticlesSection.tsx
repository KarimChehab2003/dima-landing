"use client";
import { useTranslations } from "next-intl";
import GroupedBlogs from "../components/GroupedBlogs";
import VideosSection from "./VideosSection";
import useBlogs from "../hooks/useBlogs";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import BlogCard from "../components/BlogCard";

function AllArticlesSection() {
    const t = useTranslations("Blogs");
    const { data: blogs, isLoading, isError } = useBlogs(16)
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 w-full">
            <div>
                <GroupedBlogs title="All Articles" includeViewAll={false} className="sm:flex-col">

                    {/* First grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full">
                        {isError && <p>Failed to load latest blogs</p>}
                        {
                            isLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                    <li key={`skeleton-latest-${i}`}>
                                        <BlogCardSkeleton />
                                    </li>
                                ))
                                : blogs?.slice(0, 8).map((blog) => (
                                    <li key={`blogs/${blog.id}`}>
                                        <BlogCard blog={blog} />
                                    </li>
                                ))
                        }
                    </ul>

                    <VideosSection title={t("videosSection.title")} />

                    {/* Second grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full">
                        {isError && <p>Failed to load latest blogs</p>}
                        {
                            isLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                    <li key={`skeleton-latest-${i}`}>
                                        <BlogCardSkeleton />
                                    </li>
                                ))
                                : blogs?.slice(8).map((blog) => (
                                    <li key={`blogs/${blog.id}`}>
                                        <BlogCard blog={blog} />
                                    </li>
                                ))
                        }
                    </ul>


                </GroupedBlogs>
            </div>
        </div>
    );
}

export default AllArticlesSection;