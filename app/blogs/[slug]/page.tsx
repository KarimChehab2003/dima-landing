type SingleViewBlogPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewBlogPage({ params }: SingleViewBlogPageProps) {
    const name = (await params).slug
    return (
        <main>
            single view blog page: {name}
        </main>
    );
}

export default SingleViewBlogPage;