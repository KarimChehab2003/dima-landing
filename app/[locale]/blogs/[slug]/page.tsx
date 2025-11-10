import BlogContent from "../components/BlogContent";

type SingleViewBlogPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewBlogPage({ params }: SingleViewBlogPageProps) {
    const name = (await params).slug
    return (
        <main>
            <BlogContent slug="my-cool-blog" />
        </main>
    );
}

export default SingleViewBlogPage;
