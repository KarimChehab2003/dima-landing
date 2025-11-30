"use client";
import GroupedBlogs from "../components/GroupedBlogs";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { useTranslations } from "next-intl";

function LatestSection() {
    const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs(6);
    const { data: sideBlogs, isLoading: sideBlogsLoading, isError: sideBlogsError } = useBlogs(4);
    const t = useTranslations("Blogs");
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 w-full">
            <div className="flex-1">
                <GroupedBlogs title={t("theLatest")} includeViewAll={false} className="items-start gap-8" >
                    {blogsError && <p>Failed to load latest blogs</p>}
                    {/* Blogs */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full md:basis-3/4">
                        {
                            blogsLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                    <li key={`skeleton-latest-${i}`}>
                                        <BlogCardSkeleton />
                                    </li>
                                ))
                                : blogs?.map((blog) => (
                                    <li key={`blogs/${blog.id}`}>
                                        <BlogCard blog={blog} />
                                    </li>
                                ))
                        }
                    </ul>

                    {/* Side Blogs */}
                    {sideBlogsError && <p>Failed to load side blogs</p>}
                    <ul className="hidden md:grid grid-cols-1 gap-4 divide-y basis-1/4">
                        {
                            sideBlogsLoading
                                ? Array.from({ length: 4 }).map((_, i) => (
                                    <li key={`skeleton-side-${i}`} className="pb-2">
                                        <BlogCardSkeleton includeImage={false} />
                                    </li>
                                ))
                                : sideBlogs?.map((blog) => (
                                    <li key={`sideBlogs/${blog.id}`} className="pb-2">
                                        <BlogCard includeImage={false} blog={blog} />
                                    </li>
                                ))
                        }
                    </ul>
                </GroupedBlogs>
            </div>
        </div>
    );
}

export default LatestSection;