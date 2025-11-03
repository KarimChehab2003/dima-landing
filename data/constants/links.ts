import { LanguageLink, NavLink, SocialMediaLink, SolutionLink } from "@/types/link";
import { FaLinkedin } from "react-icons/fa";



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
        href: "/blogs/blog-1"
    },
    {
        title: "Blog 2",
        href: "/blogs/blog-2"
    },
    {
        title: "Blog 3",
        href: "/blogs/blog-3"
    },
]

export const resourcesLinks: NavLink[] = [
    {
        title: "Videos",
        href: "/videos",
        icon: "/camera.svg"
    },
    {
        title: "FAQs",
        href: "/faqs",
        icon: "/qa.svg"
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
    // {
    //     href: "#twitter",
    //     icon: FaXTwitter
    // },
    // {
    //     href: "#instagram",
    //     icon: FaInstagram
    // },
    {
        href: "https://www.linkedin.com/company/darwinz-ai",
        icon: FaLinkedin
    }
]

export const dimaSolutions: SolutionLink[] = [
    {
        logo: "/nav-links/pr.svg",
        title: "PR & Comms",
        description: "Daily monitoring & coverage reports",
        href: "/solutions/pr-and-comms"
    },
    {
        logo: "/nav-links/mi.svg",
        title: "Market Insights",
        description: "Benchmark performance",
        href: "/solutions/market-insights"
    },
    {
        logo: "/nav-links/sl.svg",
        title: "Social Listening & Analytics",
        description: "Listen, analyze & act",
        href: "/solutions/social-listening-analytics"
    },
    {
        logo: "/nav-links/ci.svg",
        title: "Consumer Insights",
        description: "Understand your audience everywhere",
        href: "/solutions/consumer-insights"
    },
    {
        logo: "/nav-links/oi.svg",
        title: "Own Page Intelligence",
        description: "Elevate your social presence",
        href: "/solutions/own-page-intelligence"
    },
    {
        logo: "/nav-links/im.svg",
        title: "Influencer Marketing",
        description: "Find the right partners for your brand",
        href: "/solutions/influencer-marketing"
    },
    {
        logo: "/nav-links/ce.svg",
        title: "Customer Experience",
        description: "Collect & analyze reviews",
        href: "/solutions/customer-experience"
    }
];


export const languages: LanguageLink[] = [
    { locale: "en", label: "English", flag: "/flags/ar.svg" },
    { locale: "ar", label: "العربية", flag: "/flags/ar.svg" },
];

