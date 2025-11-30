import type { Metadata } from "next";
import ExpandingCardsSection from "../sections/ExpandingCardsSection";
import CardsGrid from "../sections/CardsGrid";
import HeroSection from "../sections/HeroSection";
import ScrollingSection from "../sections/ScrollingSection";
import TestimonialSection from "../sections/TestimonialSection";
import QuestionsAnsweredSection from "@/app/[locale]/(home)/sections/QuestionsAnsweredSection";
import { notFound } from "next/navigation";
import RequestDemoSection from "@/components/shared/form/RequestDemoSection";

type SolutionPageProps = {
    params: Promise<{ slug: string }>;
};

// List of valid slugs and their metadata
const SOLUTIONS_METADATA: Record<string, { title: string; description: string, image: string }> =
{
    "social-listening-analytics": {
        title: "Social Listening & Analytics - dima",
        description: "Monitor social media mentions, analyze sentiment, and get actionable insights with dima's AI-powered social listening solution.",
        image: "/og/solutions/sl.png"
    },
    "pr-comms": {
        title: "PR & Comms - dima",
        description: "Manage public relations, track press coverage, and detect PR crises faster with dima's AI PR tools.",
        image: "/og/solutions/pr.png"
    },
    "market-insights": {
        title: "Market Insights - dima",
        description: "Gain deep market insights, monitor competitors, and track trends with AI-powered analytics from dima.",
        image: "/og/solutions/mi.png"
    },
    "consumer-insights": {
        title: "Consumer Insights - dima",
        description: "Understand customer behavior and sentiment, and make data-driven decisions with dima's consumer insights solution.",
        image: "/og/solutions/ci.png"
    },
    "own-page-intelligence": {
        title: "Own Page Intelligence - dima",
        description: "Analyze your own digital presence, measure content performance, and optimize engagement with AI insights.",
        image: "/og/solutions/oi.png"
    },
};

// Check if a slug exists
const checkSlugExists = async (slug: string) => {
    return Object.keys(SOLUTIONS_METADATA).includes(slug);
}

// ---------------------------
// Dynamic Metadata Generator
// ---------------------------
export async function generateMetadata({ params, }: { params: { slug: string }; }): Promise<Metadata> {
    const { slug } = await params;

    const exists = await checkSlugExists(slug);
    if (!exists) return { title: "Solution Not Found" };

    const solutionMeta = SOLUTIONS_METADATA[slug];
    const url = `https://thedar.ai/solutions/${slug}`;

    return {
        title: solutionMeta.title,
        description: solutionMeta.description,

        metadataBase: new URL(url),

        openGraph: {
            title: solutionMeta.title,
            description: solutionMeta.description,
            type: "article",
            url,
            images: [
                {
                    url: solutionMeta.image,
                    width: 1200,
                    height: 630,
                    alt: solutionMeta.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: solutionMeta.title,
            description: solutionMeta.description,
            images: [solutionMeta.image],
        },

        alternates: {
            canonical: url,
        },
    };
}

// ---------------------------
// Page Component
// ---------------------------
async function SolutionPage({ params }: SolutionPageProps) {
    const slug = (await params).slug;
    const exists = await checkSlugExists(slug);
    if (!exists) return notFound();

    return (
        <main>
            <HeroSection slug={slug} />
            <ExpandingCardsSection slug={slug} />
            <ScrollingSection slug={slug} />
            <CardsGrid slug={slug} />
            <TestimonialSection slug={slug} />
            <RequestDemoSection />
            <QuestionsAnsweredSection slug={slug} />
        </main>
    );
}

export default SolutionPage;
