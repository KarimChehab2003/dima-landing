"use client";
import ContentSection from "../components/ContentSection";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

function GuideSection() {
    const { data: guideBlogs, isLoading: guideBlogsLoading, isError: guideBlogsError } = useBlogs(2);
    const { data: reportBlogs, isLoading: reportBlogsLoading, isError: reportBlogsError } = useBlogs(2);
    const { data: marketingBlogs, isLoading: marketingBlogsLoading, isError: marketingBlogsError } = useBlogs(2);

    if (guideBlogsLoading || reportBlogsLoading || marketingBlogsLoading) return <p>Loading...</p>
    if (guideBlogsError || reportBlogsError || marketingBlogsError) return <p>failed to load blogs</p>
    return (
        <div className="container mx-auto flex flex-col xl:flex-row justify-center items-start gap-8 ">
            <ContentSection title="Guides">
                <ul className="grid grid-cols-1 gap-8">
                    {guideBlogs?.map((blog) => (
                        <li key={"guides/" + blog.id}>
                            <BlogCard orientation="horizontal" blog={blog} />
                        </li>
                    ))}
                </ul>
            </ContentSection>
            <ContentSection title="Data Reports">
                <ul className="grid grid-cols-1 gap-8">
                    {reportBlogs?.map((blog) => (
                        <li key={"data-reports/" + blog.id}>
                            <BlogCard orientation="horizontal" blog={blog} />
                        </li>
                    ))}
                </ul>
            </ContentSection>
            <ContentSection title="All Marketing Insights">
                <ul className="grid grid-cols-1 gap-8">
                    {marketingBlogs?.map((blog) => (
                        <li key={"marketing-insights/" + blog.id}>
                            <BlogCard orientation="horizontal" blog={blog} />
                        </li>
                    ))}
                </ul>
            </ContentSection>
        </div>
    );
}

export default GuideSection;