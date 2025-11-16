import CaseStudyContent from "./components/CaseStudyContent";

type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

async function SingleViewCaseStudiesPage({ params }: SingleViewCaseStudiesPageProps) {
    const slug = (await params).slug
    return (
        <main>
            <CaseStudyContent slug={slug} />
        </main>
    );
}

export default SingleViewCaseStudiesPage;