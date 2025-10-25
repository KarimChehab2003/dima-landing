import { NavLink, SocialMediaLink, SolutionLink } from "@/types/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const solutionLinks: SolutionLink[] = [
    {
        logo: "/nav-links/social-listening.png",
        title: "Social listening & analytics",
        subTitle: "Listen, analyze & act",
        href: "/solution/social-listening-analytics/"
    },
    {
        logo: "/nav-links/pr.png",
        title: "PR & Comms",
        subTitle: "Daily monitoring & coverage reports for all your clients",
        href: "/solution/pr-comms/"
    },
    {
        logo: "/nav-links/own-page-intelligence.png",
        title: "Own Page Intelligence",
        subTitle: "Elevate your social presence",
        href: "/solution/own-page-intelligence/"
    },
    {
        logo: "/nav-links/consumer-insights.png",
        title: "Consumer Insights",
        subTitle: "Understand Your Audience",
        href: "/solution/consumer-insights/"
    },
    {
        logo: "/nav-links/market-insights.png",
        title: "Market Insights",
        subTitle: "Benchmark performance",
        href: "/solution/market-insights/"
    }
]

export const footerLinks: NavLink[] = [
    {
        title: "Home",
        href: "/"
    },

    {
        title: "About",
        href: "/about-us"
    },
    {
        title: "Blogs",
        href: "/blogs"
    },
    {
        title: "Resources",
        href: "/resources"
    },
    {
        title: "FAQs",
        href: "/faqs"
    },
]

export const socialMediaLinks: SocialMediaLink[] = [
    {
        href: "#twitter",
        icon: FaXTwitter
    },
    {
        href: "#instagram",
        icon: FaInstagram
    },
    {
        href: "#linkedin",
        icon: FaLinkedin
    }
]

export const dimaSolutions: SolutionLink[] = [
    {
        logo: "/nav-links/pr.png",
        title: "PR & Comms",
        subTitle: "Daily monitoring & coverage reports",
        href: "/solutions/pr-and-comms"
    },
    {
        logo: "/nav-links/mi.png",
        title: "Market Insights",
        subTitle: "Benchmark performance",
        href: "/solutions/market-insights"
    },
    {
        logo: "/nav-links/sl.png",
        title: "Social Listening & Analytics",
        subTitle: "Listen, analyze & act",
        href: "/solutions/social-listening-analytics"
    },
    {
        logo: "/nav-links/ci.png",
        title: "Consumer Insights",
        subTitle: "Understand your audience everywhere",
        href: "/solutions/consumer-insights"
    },
    {
        logo: "/nav-links/oi.png",
        title: "Own Page Intelligence",
        subTitle: "Elevate your social presence",
        href: "/solutions/own-page-intelligence"
    },
    {
        logo: "/nav-links/im.png",
        title: "Influencer Marketing",
        subTitle: "Find the right partners for your brand",
        href: "/solutions/influencer-marketing"
    },
    {
        logo: "/nav-links/ce.png",
        title: "Customer Experience",
        subTitle: "Collect & analyze reviews",
        href: "/solutions/customer-experience"
    }
];


