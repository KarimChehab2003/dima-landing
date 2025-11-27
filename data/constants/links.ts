import { LanguageLink, NavLink, SocialMediaLink, SolutionLink, ToolLink } from "@/types/link";
import { FaLinkedin } from "react-icons/fa";


export const blogsLinks: NavLink[] = [
    {
        title: "Blog 1",
        href: "/blogs/blog-1",
        translationKey: "blog1"
    },
    {
        title: "Blog 2",
        href: "/blogs/blog-2",
        translationKey: "blog2"
    },
    {
        title: "Blog 3",
        href: "/blogs/blog-3",
        translationKey: "blog3"
    },
]

export const resourcesLinks: NavLink[] = [
    {
        title: "Videos",
        href: "/videos",
        icon: "/camera.svg",
        translationKey: "videos"
    },
    {
        title: "FAQs",
        href: "/faqs",
        icon: "/qa.svg",
        translationKey: "faqs"
    },
]

export const footerResourcesLinks: NavLink[] = [
    {
        title: "Case Studies",
        href: "/case-studies",
        translationKey: "caseStudies"
    },
    {
        title: "Blogs",
        href: "/blogs",
        translationKey: "blogs"
    },
    // {
    //     title: "FAQs",
    //     href: "/faqs",
    //     translationKey: "faqs"
    // },
]

export const dimaSolutions: SolutionLink[] = [
    {
        logo: "/nav-links/pr.png",
        title: "PR & Comms",
        description: "Daily monitoring & coverage reports",
        href: "/solutions/pr-comms",
        translationKey: "prComms"
    },
    {
        logo: "/nav-links/mi.png",
        title: "Market Insights",
        description: "Benchmark performance",
        href: "/solutions/market-insights",
        translationKey: "marketInsights"
    },
    {
        logo: "/nav-links/sl.png",
        title: "Social Listening & Analytics",
        description: "Listen, analyze & act",
        href: "/solutions/social-listening-analytics",
        translationKey: "socialListening"
    },
    {
        logo: "/nav-links/ci.png",
        title: "Consumer Insights",
        description: "Understand your audience everywhere",
        href: "/solutions/consumer-insights",
        translationKey: "consumerInsights"
    },
    {
        logo: "/nav-links/oi.png",
        title: "Own Page Intelligence",
        description: "Elevate your social presence",
        href: "/solutions/own-page-intelligence",
        translationKey: "ownIntelligence"
    },
    {
        logo: "/nav-links/im.png",
        title: "Influencer Marketing",
        description: "Find the right partners for your brand",
        href: "/solutions/influencer-marketing",
        translationKey: "influencerMarketing"
    },
    {
        logo: "/nav-links/ce.png",
        title: "Customer Experience",
        description: "Collect & analyze reviews",
        href: "/solutions/customer-experience",
        translationKey: "customerExperience"
    }
];

export const socialMediaLinks: SocialMediaLink[] = [
    {
        href: "https://www.linkedin.com/company/darwinz-ai",
        icon: FaLinkedin
    }
]

export const languages: LanguageLink[] = [
    { locale: "en", label: "English", flag: "/flags/en.svg" },
    { locale: "ar", label: "العربية", flag: "/flags/ar.svg" },
];

export const toolLinks: ToolLink[] = [
    {
        href: "/tools/arabic-coverage-gap-audit",
        translationKey: "arabic-coverage-gap-audit"
    },
    {
        href: "/tools/arabic-dialect",
        translationKey: "arabic-dialect"
    },
    {
        href: "/tools/arabic-mention-analyzer",
        translationKey: "arabic-mention-analyzer"
    },
    {
        href: "/tools/crisis-readiness-score",
        translationKey: "crisis-readiness-score"
    },
    {
        href: "/tools/stack-consolidation-calculator",
        translationKey: "stack-consolidation-calculator"
    },
]