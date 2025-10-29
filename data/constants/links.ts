import { LanguageLink, NavLink, SocialMediaLink, SolutionLink } from "@/types/link";
import { title } from "process";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const solutionLinks: SolutionLink[] = [
    {
        logo: "/nav-links/sl.png",
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
        logo: "/nav-links/oi.png",
        title: "Own Page Intelligence",
        subTitle: "Elevate your social presence",
        href: "/solution/own-page-intelligence/"
    },
    {
        logo: "/nav-links/ci.png",
        title: "Consumer Insights",
        subTitle: "Understand Your Audience",
        href: "/solution/consumer-insights/"
    },
    {
        logo: "/nav-links/mi.png",
        title: "Market Insights",
        subTitle: "Benchmark performance",
        href: "/solution/market-insights/"
    }
]

export const byRoleLinks: NavLink[] = [
    { title: "Finance", href: "/by-role/finance" },
    { title: "Accounting", href: "/by-role/accounting" },
    { title: "Production", href: "/by-role/production" },
    { title: "Quality", href: "/by-role/quality" },
    { title: "Software Services", href: "/by-role/software-services" },
    { title: "Design House", href: "/by-role/design-house" },
    { title: "Packaging", href: "/by-role/packaging" },
    { title: "Distribution", href: "/by-role/distribution" },
];

export const byCompanyLinks: NavLink[] = [
    { title: "Finance", href: "/by-company/finance" },
    { title: "Accounting", href: "/by-company/accounting" },
    { title: "Production", href: "/by-company/production" },
    { title: "Quality", href: "/by-company/quality" },
    { title: "Software Services", href: "/by-company/software-services" },
    { title: "Design House", href: "/by-company/design-house" },
    { title: "Packaging", href: "/by-company/packaging" },
    { title: "Distribution", href: "/by-company/distribution" },
];

export const blogsLinks: NavLink[] = [
    {
        title: "Blog 1",
        titleKey: "resources.links.blogs.blog1",
        href: "/blogs/blog-1"
    },
    {
        title: "Blog 2",
        titleKey: "resources.links.blogs.blog2",
        href: "/blogs/blog-2"
    },
    {
        title: "Blog 3",
        titleKey: "resources.links.blogs.blog3",
        href: "/blogs/blog-3"
    },
]

export const resourcesLinks: NavLink[] = [
    {
        title: "Videos",
        titleKey: "resources.links.moreResources.videos",
        href: "/videos",
        icon: "/camera.png"
    },
    {
        title: "FAQs",
        titleKey: "resources.links.moreResources.faqs",
        href: "/faqs",
        icon: "/qa.png"
    },
]

export const footerResourcesLinks: NavLink[] = [
    {
        title: "Case Studies",
        href: "/case-studies"
    },
    {
        title: "Blogs",
        href: "/blogs"
    },
    {
        title: "FAQs",
        href: "/faqs"
    },
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
        logo: "/nav-links/sl.png",
        title: "Social Listening & Analytics",
        subTitle: "Listen, analyze & act",
        titleKey: "solutions.links.socialListening.title",
        subTitleKey: "solutions.links.socialListening.description",
        href: "/solutions/social-listening-analytics"
    },
    {
        logo: "/nav-links/pr.png",
        title: "PR & Comms",
        subTitle: "Daily monitoring & coverage reports",
        titleKey: "solutions.links.prComms.title",
        subTitleKey: "solutions.links.prComms.description",
        href: "/solutions/pr-and-comms"
    },
    {
        logo: "/nav-links/im.png",
        title: "Influencer Marketing",
        subTitle: "Find the right partners for your brand",
        titleKey: "solutions.links.influencerMarketing.title",
        subTitleKey: "solutions.links.influencerMarketing.description",
        href: "/solutions/influencer-marketing"
    },
    {
        logo: "/nav-links/oi.png",
        title: "Own Page Intelligence",
        subTitle: "Elevate your social presence",
        titleKey: "solutions.links.ownPageIntelligence.title",
        subTitleKey: "solutions.links.ownPageIntelligence.description",
        href: "/solutions/own-page-intelligence"
    },
    {
        logo: "/nav-links/mi.png",
        title: "Market Insights",
        subTitle: "Benchmark performance",
        titleKey: "solutions.links.marketInsights.title",
        subTitleKey: "solutions.links.marketInsights.description",
        href: "/solutions/market-insights"
    },
    {
        logo: "/nav-links/ci.png",
        title: "Consumer Insights",
        subTitle: "Understand your audience everywhere",
        titleKey: "solutions.links.customerInsights.title",
        subTitleKey: "solutions.links.customerInsights.description",
        href: "/solutions/consumer-insights"
    },
    {
        logo: "/nav-links/ce.png",
        title: "Customer Experience",
        subTitle: "Collect & analyze reviews",
        titleKey: "solutions.links.customerExperience.title",
        subTitleKey: "solutions.links.customerExperience.description",
        href: "/solutions/customer-experience"
    }
];


export const languages: LanguageLink[] = [
    { locale: "en", label: "English", flag: "🇬🇧" },
    { locale: "ar", label: "العربية", flag: "🇸🇦" },
];

