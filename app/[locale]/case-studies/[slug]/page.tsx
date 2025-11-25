import { Metadata } from "next";
import CaseStudyContent from "./components/CaseStudyContent";
import { fetchSingleCaseStudy } from "@/lib/firebase/caseStudiesFunctions";

type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: SingleViewCaseStudiesPageProps
): Promise<Metadata> {
    const { slug } = await params;

    // Fetch case study data
    const caseStudy = await fetchSingleCaseStudy("en", slug);

    if (!caseStudy) {
        return {
            title: "Case Study Not Found - dima",
        };
    }

    return {
        title: `${caseStudy.content.title} - dima`,
        description: caseStudy.content.description,
        openGraph: {
            title: `${caseStudy.content.title} - dima`,
            description: caseStudy.content.description,
            url: `https://thedar.ai/case-studies/${slug}`,
            images: [
                {
                    url: caseStudy.ogImage || "/og/caseStudy.png",
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
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