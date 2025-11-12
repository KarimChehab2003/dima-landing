"use client";
import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

function SocialMediaAnalyticsSection() {
    const { data: blogs, isLoading, isError } = useBlogs(4);

    return (
        <div className="container mx-auto flex justify-center items-center gap-8 ">
            <div className="flex-1">
                <ContentSection title="Social Media Analytics">
                    {isError && <p>Failed to load social media analytics blogs</p>}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                        {
                            isLoading
                                ? Array.from({ length: 4 }).map((_, i) => (
                                    <li key={`skeleton-social-${i}`}>
                                        <BlogCardSkeleton />
                                    </li>
                                ))
                                : blogs?.map((blog) => (
                                    <li key={blog.id}>
                                        <BlogCard blog={blog} />
                                    </li>
                                ))
                        }
                    </ul>
                </ContentSection>
            </div>
        </div>
    );
}

export default SocialMediaAnalyticsSection;