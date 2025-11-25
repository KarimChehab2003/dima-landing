import { Metadata } from "next";
import CaseStudyContent from "./components/CaseStudyContent";

type SingleViewCaseStudiesPageProps = {
    params: Promise<{ slug: string }>
}

export const metadata: Metadata = {
    title: "Case Studies - How Teams Use dima",
    description:
        "Explore real-world examples of brands using dima to monitor media, track campaigns, and manage PR crises efficiently.",
    openGraph: {
        title: "Case Studies - How Teams Use dima",
        description:
            "See how marketers and PR teams leverage dima to save time, improve accuracy, and gain actionable insights.",
        url: "https://thedar.ai/case-studies",
        images: [
            {
                url: "/og/caseStudy.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};


async function SingleViewCaseStudiesPage({ params }: SingleViewCaseStudiesPageProps) {
    const slug = (await params).slug
    return (
        <main>
            <CaseStudyContent slug={slug} />
        </main>
    );
}

export default SingleViewCaseStudiesPage;