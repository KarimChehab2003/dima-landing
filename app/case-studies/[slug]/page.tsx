type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewCaseStudiesPage({ params }: SingleViewCaseStudiesPageProps) {
    const name = (await params).slug
    return (
        <main>
            single view case studies page: {name}
        </main>
    );
}

export default SingleViewCaseStudiesPage;