export const sideInfoIcons = [
    "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/CaseStudy%2Fchallenge-icon.svg?alt=media&token=08229af5-fd4a-4007-b85c-3346e8105afc",
    "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/CaseStudy%2Fsolution-icon.svg?alt=media&token=736fae21-7384-4f6b-abbb-4154715ffd5a",
    "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/CaseStudy%2Fresult-icon.svg?alt=media&token=cfc2dc84-c9cc-4e33-a121-ddefdf42d642"
]

export type SolutionKey = "sl" | "pr" | "oi" | "mi" | "ci";

export interface SolutionAsset {
    icon: string;
    href: string;
    title: string;
}

export const usedSolutionsAssets: Record<SolutionKey, SolutionAsset> = {
    "sl": {
        icon: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fnav-links%2Fsl.svg?alt=media&token=5462149c-87b4-4471-9783-fa9cf99cda2e",
        title: "Social Listening & Analytics",
        href: "/solutions/social-listening-analytics"
    },
    "pr": {
        icon: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fnav-links%2Fpr.svg?alt=media&token=d8cd7d25-eced-4ed4-afd3-9564be8db2ea",
        title: "PR & Comms",
        href: "/solutions/pr-comms"
    },
    "oi": {
        icon: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fnav-links%2Foi.svg?alt=media&token=cdcc2077-5cf0-4507-aa91-6728e1a18c96",
        title: "Own Page Intelligence",
        href: "/solutions/own-page-intelligence"
    },
    "mi": {
        icon: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fnav-links%2Fmi.svg?alt=media&token=f0d86772-8efa-4c75-84d7-566483983dad",
        title: "Market Intelligence",
        href: "/solutions/market-intelligence"
    },
    "ci": {
        icon: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/Navbar%2Fnav-links%2Fci.svg?alt=media&token=9feaeb34-a7d5-48d1-b08e-23f36d487c6c",
        title: "Consumer Insights",
        href: "/solutions/consumer-insights"
    }
}

