import SectionWrapper from "@/components/shared/SectionWrapper";

type SingleViewBlogPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewBlogPage({ params }: SingleViewBlogPageProps) {
    const name = (await params).slug
    return (
        <main>
            <SectionWrapper className="mt-24">
                {/* Heading */}
                <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">
                    <h2 className="bg-black text-white uppercase w-fit py-1 px-2 rounded-sm italic tracking-wide">DIMA BLOGS</h2>
                    <h1 className="text-2xl lg:text-[48px] font-normal">Top tools in Saudi Arabia & MENA - For Marketers, Brand Managers, PR & Communications Experts…Social Listening, Audience Intelligence, Media Monitoring & More!</h1>
                </div>

            </SectionWrapper>
            {/* Sub title */}
            <div className="min-h-[400px] flex justify-center items-center bg-linear-to-b from-[#95DDEE] via-primary to-[#95DDEE]">
                <div className="container mx-auto text-white">
                    <h3 className="text-2xl font-bold leading-relaxed">There are multiple tools for media monitoring worldwide, however, each one has its own benefits, use cases and target audience. This simple list gives you access to the tools you may need based on your required use case with a quick brief on each tool:</h3>
                </div>
            </div>
        </main>
    );
}

export default SingleViewBlogPage;
