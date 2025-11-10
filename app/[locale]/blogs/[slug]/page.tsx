import BlogContent from "../components/BlogContent";

type SingleViewBlogPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewBlogPage({ params }: SingleViewBlogPageProps) {
    const slug = (await params).slug
    return (
        <main>
            <BlogContent slug={slug} />
        </main>
    );
}

export default SingleViewBlogPage;
