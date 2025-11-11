"use client";
import ReactMarkdown from "react-markdown";
import useBlog from "../hooks/useBlog";
import remarkGfm from "remark-gfm"
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";


function BlogContent({ slug }: { slug: string }) {
    const { data: blog, isLoading, isError, status, fetchStatus, error } = useBlog(slug);

    console.log("status of query:", status);
    console.log("status of fetch function: ", fetchStatus)
    console.log("Error found: ", error)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Failed to load blog</p>

    console.log(blog);

    return (
        <article>
            <SectionWrapper className="mt-24">
                {/* Heading */}
                <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">
                    <h2 className="bg-black text-white uppercase w-fit py-1 px-2 rounded-sm italic tracking-wide">DIMA BLOGS</h2>
                    <h1 className="text-2xl lg:text-[48px] font-normal">{blog?.title}</h1>
                </div>
            </SectionWrapper>

            {/* Sub title */}
            <div className="min-h-[400px] flex justify-center items-center bg-linear-to-b from-[#95DDEE] via-primary to-[#95DDEE]">
                <div className="container mx-auto text-white">
                    <h3 className="text-2xl font-bold leading-relaxed text-center">{blog?.description}</h3>
                </div>
            </div>

            {/* Content */}
            <SectionWrapper>
                <div className="container max-w-[1536px] mx-auto prose">
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
                    >{blog?.content}</ReactMarkdown>
                </div>
            </SectionWrapper>

            {/* <p className="text-sm text-gray-500 mt-4">
                {new Date(blog!.dateCreated).toLocaleDateString()} • {blog!.tags?.join(", ")}
            </p> */}
        </article>
    );
}

export default BlogContent;