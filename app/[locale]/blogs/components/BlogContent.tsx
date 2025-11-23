"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import useBlog from "../hooks/useBlog";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import useBlogs from "../hooks/useBlogs";
import ContentSection from "./ContentSection";
import BlogCard from "./BlogCard";
import { notFound } from "next/navigation";
import LoadingAnimation from "@/components/shared/LoadingAnimation";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { useTranslations } from "next-intl";


function BlogContent({ slug }: { slug: string }) {
    const t = useTranslations("Blog")
    const { data: blog, isLoading: blogLoading, isError: blogError } = useBlog(slug);
    const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs();
    if (blogLoading) return <LoadingAnimation />
    if (blogError) return notFound()


    return (
        <article>
            <SectionWrapper className="mt-24">
                {/* Heading */}
                <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">
                    <h2 className="bg-black text-white uppercase w-fit py-1 px-2 rounded-sm italic tracking-wide">{t("dimaBlogs")}</h2>
                    <h1 className="text-2xl lg:text-[48px] font-normal">{blog?.content.title}</h1>
                </div>
            </SectionWrapper>

            {/* Sub title */}
            <div className="min-h-[400px] flex justify-center items-center bg-linear-to-b from-[#95DDEE] via-primary to-[#95DDEE]">
                <div className="container mx-auto text-white">
                    <h3 className="lg:text-2xl font-bold leading-relaxed text-center">{blog?.content.description}</h3>
                </div>
            </div>

            {/* Content */}
            <SectionWrapper>
                <div className="container max-w-[1536px] mx-auto prose text-lg lg:text-xl">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Changing a tag into next.js Link tag
                            a: ({ href, children, ...props }) => {
                                return (
                                    <Link href={href || "#"} className="text-primary" {...props}>{children}</Link>
                                )
                            },
                        }}
                    >{blog?.content.body}</ReactMarkdown>
                </div>
            </SectionWrapper>

            {/* Check more blogs  */}
            <SectionWrapper>
                <div className="container mx-auto">
                    <div className="flex-1">
                        <ContentSection title={t("checkMoreBlogs")} hrefViewAll="/blogs">
                            {blogsError && <p>Failed to load more blogs</p>}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                                {
                                    blogsLoading
                                        ? Array.from({ length: 4 }).map((_, i) => (
                                            <li key={`skeleton-blogs-${i}`}>
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
            </SectionWrapper>
        </article>
    );
}

export default BlogContent;