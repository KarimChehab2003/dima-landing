import SectionWrapper from "@/components/shared/SectionWrapper";

type SingleViewBlogPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewBlogPage({ params }: SingleViewBlogPageProps) {
    const name = (await params).slug
    return (
        <main>
            <SectionWrapper className="min-h-dvh mt-4">
                <div className="container mx-auto flex flex-col justify-center items-start gap-8 ">
                    <h2 className="bg-black text-white uppercase w-fit py-1 px-2 rounded-sm italic tracking-wide">DIMA BLOGS</h2>
                    <h1 className="text-2xl lg:text-[48px] font-normal">Top tools in Saudi Arabia & MENA - For Marketers, Brand Managers, PR & Communications Experts…Social Listening, Audience Intelligence, Media Monitoring & More!</h1>
                </div>
            </SectionWrapper>
        </main>
    );
}

export default SingleViewBlogPage;