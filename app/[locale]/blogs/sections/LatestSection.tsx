"use client";
import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

function LatestSection() {
    const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs(6);
    const { data: sideBlogs, isLoading: sideBlogsLoading, isError: sideBlogsError } = useBlogs(4);

    if (blogsLoading || sideBlogsLoading) return <p>Loading...</p>
    if (blogsError || sideBlogsError) return <p>failed to load blogs</p>
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 ">
            <ContentSection title="The Latest" className="gap-8">
                {/* Blogs */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        blogs?.map((blog) => (
                            <li key={`blogs/${blog.id}`}>
                                <BlogCard blog={blog} />
                            </li>
                        ))
                    }
                </ul>

                {/* Side Blogs */}
                <ul className="hidden md:block">
                    {sideBlogs?.map((blog, i) => (
                        <li key={`sideBlogs/${blog.id}`} className={i !== 2 ? "border-b border-b-muted my-4" : "border-b-0"}>
                            <BlogCard includeImage={false} orientation="horizontal" blog={blog} />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default LatestSection;