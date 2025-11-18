import { CardType, BrandCardInfo, ConversationInfo, EmpoweringAgenciesInfo, HeroSlide, QuestionAccordion, TestimonialType } from "@/types/info";
import { FaChartLine, FaLaptop, FaLayerGroup } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";

import elevateAnim from "@/public/animations/elevate-lottie.json";
import dailyAnim from "@/public/animations/daily-lottie.json";
import listenAnim from "@/public/animations/listen-lottie.json";
import benchmarkAnim from "@/public/animations/benchmark-lottie.json";
import understandAnim from "@/public/animations/understand-lottie.json";

export const empoweringAgenciesInfo: EmpoweringAgenciesInfo[] = [
    {
        title: "Full Coverage",
        description: "Track tagged, untagged and misspelled mentions of your brand across social, communities and media",
        value: 100,
        suffix: "%",
        translationKey: "fullCoverage"
    },
    {
        title: "Accurate Arabic Analysis",
        description: "Monitor with unmatched Arabic accuracy across all dialects, slang and Franco-Arabic",
        value: 97,
        suffix: "%",
        translationKey: "accurateArabicAnalysis",
        gapValue: 0.05
    },
    {
        title: "Mentions Captured",
        description: "Scale without constraints, unlimited users, keywords and reports at enterprise scale",
        value: 50_000_000,
        maxValue: 50_000_000,
        suffix: "M",
        translationKey: "mentionsCaptured"
    },
]

export const ownConversationInfo: ConversationInfo[] = [
    {
        title: "Listen, analyze & act",
        subTitle: "Cut through the noise of millions of unfiltered conversations to uncover the insights that matter most powered by AI.",
        icon: FaLaptop,
        animation: listenAnim,
        translationKey: "listen"
    },
    // {
    //     title: "Grow your brand",
    //     subTitle: "Invest in creators who amplify your reach, drive authentic engagement, and deliver measurable ROI.",
    //     icon: FaChartLine,
    //     animation: listenAnim, // missing
    //     translationKey: "grow"
    // },
    {
        title: "Daily monitoring & reports",
        subTitle: "Stay in control of your brand narrative with proactive monitoring and reporting.",
        icon: FaLayerGroup,
        animation: dailyAnim,
        translationKey: "daily"
    },
    {
        title: "Elevate your social presence",
        subTitle: "Turn your owned channels into proof of impact with AI content performance tracking.",
        icon: FaLayerGroup,
        animation: elevateAnim,
        translationKey: "elevate"
    },
    {
        title: "Benchmark performance",
        subTitle: "Outpace your competitors with insights that accelerate decisions and increases your share of voice",
        icon: PiUserList,
        animation: benchmarkAnim,
        translationKey: "benchmark"
    },
    {
        title: "Understand your audience",
        subTitle: "Go beyond demographics, uncover what truly drives your audience and turn those insights into measurable impact.",
        icon: FaLayerGroup,
        animation: understandAnim,
        translationKey: "understand"
    },
    // {
    //     title: "Collect & analyze reviews",
    //     subTitle: "Turn feedback into action to protect loyalty and increase customer satisfaction",
    //     icon: FaLayerGroup,
    //     animation: listenAnim, // missing
    //     translationKey: "collect"
    // },
]

export const caseStudiesInfo: BrandCardInfo[] = [
    {
        image: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FCase%20Studies%2Fcase-study-1.png?alt=media&token=45d3f921-923e-4060-b209-a9eb6728b005",
        companyName: "Company Name",
        description: "Lumora Health partnered with Grovia to streamline their product launch process and cross-team coordination."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FCase%20Studies%2Fcase-study-2.png?alt=media&token=25d37588-0f32-429c-9296-948fe24d34d3",
        companyName: "Company Name",
        description: "NaviAI, an emerging leader in AI-driven navigation systems, partnered with Grovia to scale their technical team."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FCase%20Studies%2Fcase-study-3.png?alt=media&token=09711ace-a72f-4a4e-8304-a8b73e3dd16b",
        companyName: "Company Name",
        description: "Helped Pluto scale their product team and streamline onboarding as they expanded into new markets."
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FCase%20Studies%2Fcase-study-4.png?alt=media&token=eb6ccc22-2ae4-4c82-9cd9-a2706db60272",
        companyName: "Company Name",
        description: "Partnered with VitaHealth to set up their first operations team from the ground up."
    },
]

export const questionsAnsweredInfo: QuestionAccordion[] = [
    {
        question: "What platforms does dima cover?",
        answer: "dima covers both traditional and social media platforms. Traditional includes: Online Publications, Print Publications, TV & Radio. Social Media includes: TikTok, X, Snapchat, Facebook, Instagram & LinkedIn. There are other sources covered by dima as well like Google Maps Reviews & others in the pipeline. If you don't see the platform you want in the list, contact us to see when it will be available, our team is probably working on it already!"
    },
    {
        question: "What is the accuracy in Arabic? Does it detect slang, franco and dialects?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis cupiditate blanditiis voluptatibus minus. Voluptate, asperiores nobis eum nam unde accusantium iusto, voluptas perferendis molestias quos excepturi nostrum itaque possimus?"
    },
    {
        question: "How long does it take to set up an account?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis cupiditate blanditiis voluptatibus minus. Voluptate, asperiores nobis eum nam unde accusantium iusto, voluptas perferendis molestias quos excepturi nostrum itaque possimus?"
    },
]

export const testimonialsInfo: TestimonialType[] = [
    {
        quote: "dima should be the go-to partner for any business serious about customer satisfaction and brand perception. Their ability to blend data, creativity and strategy makes a real difference",
        name: "Samer Yassa",
        jobRole: "Business Development Manager at Wadi Degla",
        companyLogo: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FTestimonials%2Fwadi-degla.png?alt=media&token=2840fd94-b2e7-4d47-9f6a-fe380240a90c",
        translationKey: "samerYassa"
    },
    {
        quote: "For over 30 years, we've been working closely with our clients to offer them the state-of-the-art PR solutions across different industries and verticals. dima has enabled our media monitoring PR experts to offer easier, faster & more accurate media coverage & analysis",
        name: "Dina El Sewefy",
        jobRole: "CEO at MountPR",
        companyLogo: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FTestimonials%2Fmountpr.png?alt=media&token=f05ece49-9938-4453-a8aa-c6bd1b65c0b2",
        translationKey: "dinaElSewefy"
    },
    {
        quote: "Working with the team at dima has helped us with understanding the drivers of engagement on our pages and to build an effective strategy across all social platforms through a true understanding of our audience's reactions and comments to everything we post!",
        name: "Omar Al Masry",
        jobRole: "Senior Brand Manager at Mori International",
        companyLogo: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FTestimonials%2Fmori-int.png?alt=media&token=b7dcefa6-cf1c-4137-8985-ebef97cb9758",
        translationKey: "omarAlMasry"

    },
    {
        quote: "Being top of mind in the F&B market is difficult, everyday we see new players & trends…dima helps us to truly monitor where we stand in the market at all times and to maintain market leadership by staying in tune with the next big thing",
        name: "Mohamed Osman",
        jobRole: "Chariman at Tico Group",
        companyLogo: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FTestimonials%2Ftico.png?alt=media&token=6aeff656-ff4f-4d3f-b2f1-b2bdc1f75e82",
        translationKey: "mohamedOsman"
    },
    {
        quote: "Managing over 50 locations in 3 different continents is not easy, but dima makes it easier by providing tailored business insights to our different audiences 24/7 so that we can provide a tailored marketing strategy that targets our various audience segments",
        name: "Mostafa AlSagheer",
        jobRole: "Vice Chairman at AlSagheer Group",
        companyLogo: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/HomePage%2FTestimonials%2Falsagheer.png?alt=media&token=2a1eb961-78b1-4c97-97a2-0a393e63d290",
        translationKey: "mostafaAlSagheer"
    },
]

// export const actionableInsightsCardsInfo: CardType[] = [
//     {
//         title: "Full Coverage",
//         description: "Track and analyze coverage across online publications, social media, print, TV, radio & closed communities, so you can get the full picture.",
//         highlighted: "online publications, social media, print, TV, radio & closed communities"
//     },
//     {
//         title: "Arabic First AI Copilot",
//         description: "Monitor with unmatched Arabic accuracy across all dialects, slang and Franco-Arabic.",
//         highlighted: "dialects, slang and Franco-Arabic."
//     },
//     {
//         title: "Built for Agencies",
//         description: "Scale without constraints, Unlimited keywords, reports & users. dima adapts to your high-volume needs.",
//         highlighted: "Unlimited keywords, reports & users."
//     },
// ]

// export const scrollingCards: CardType[] = [
//     {
//         title: "Trend Dectection",
//         description: "Identify emerging trends before they gain momentum, giving you the edge to act first"
//     },
//     {
//         title: "Communities",
//         description: "Track communities conversations to expand coverage and visibility"
//     },
//     {
//         title: "Posts Vs Comments analysis",
//         description: "Separate post and comment section analysis for deeper, more accurate insights."
//     },
//     {
//         title: "Be First to Know, First to Act",
//         description: "Act instantly on real-time alerts to prevent crises, seize opportunities, and accelerate response times."
//     },
//     {
//         title: "Go beyond mentions",
//         description: "Seamlessly track sentiment, emotion, topics & more to uncover the true context behind conversations"
//     }
// ]

export const enterpriseFeaturesCards: { icon: string, translationKey: string }[] = [
    { icon: "/enterprise-icons/360.png", translationKey: "cards.0" },
    { icon: "/enterprise-icons/arabic.png", translationKey: "cards.1" },
    { icon: "/enterprise-icons/crisis-alert.png", translationKey: "cards.2" },
    { icon: "/enterprise-icons/custom.png", translationKey: "cards.3" },
    { icon: "/enterprise-icons/dima.png", translationKey: "cards.4" },
    { icon: "/enterprise-icons/users.png", translationKey: "cards.5" },
    { icon: "/enterprise-icons/visual.png", translationKey: "cards.6" },
    { icon: "/enterprise-icons/historical-data.png", translationKey: "cards.7" },
];


export const heroSlides: HeroSlide[] = [
    {
        image: "/hero-carousel-item-1.webp",
        translationKey: "slides.socialListening",
    },
    {
        image: "/hero-carousel-item-2.webp",
        translationKey: "slides.influencerTracking",
    },
    {
        image: "/hero-carousel-item-3.webp",
        translationKey: "slides.sentimentInsights",
    },
    {
        image: "/hero-carousel-item-3.webp",
        translationKey: "slides.competitorBenchmarking",
    },
    {
        image: "/hero-carousel-item-3.webp",
        translationKey: "slides.discoverCreators",
    },
    {
        image: "/hero-carousel-item-3.webp",
        translationKey: "slides.campaignRoi",
    },
];