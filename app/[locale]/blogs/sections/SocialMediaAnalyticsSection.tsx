"use client";
import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

function SocialMediaAnalyticsSection() {
    const { data: blogs, isLoading, isError } = useBlogs(4);
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Failed to load blogs</p>
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 ">
            <ContentSection title="Social Media Analytics">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blogs?.map((blog) => (
                        <li key={blog.id}>
                            <BlogCard blog={blog} />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default SocialMediaAnalyticsSection;