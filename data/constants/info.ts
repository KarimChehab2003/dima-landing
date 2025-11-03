import { CardType, CaseStudyInfo, ConversationInfo, EmpoweringAgenciesInfo, EnterpriseType, QuestionAccordion, TestimonialType } from "@/types/info";
import { FaChartLine, FaLaptop, FaLayerGroup } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";



export const empoweringAgenciesInfo: EmpoweringAgenciesInfo[] = [
    {
        title: "Full Coverage",
        description: "Track tagged, untagged and misspelled mentions of your brand across social, communities and media",
        value: 100,
        suffix: "%"
    },
    {
        title: "Accurate Arabic Analysis",
        description: "Monitor with unmatched Arabic accuracy across all dialects, slang and Franco-Arabic",
        value: 97,
        suffix: "%"
    },
    {
        title: "Mentions Captured",
        description: "Scale without constraints, unlimited users, keywords and reports at enterprise scale",
        value: 50_000_000,
        maxValue: 50_000_000,
        suffix: "M"
    },
]

export const ownConversationInfo: ConversationInfo[] = [
    {
        title: "Listen, analyze & act",
        subTitle: "Cut through the noise of millions of unfiltered conversations to uncover the insights that matter most powered by AI.",
        icon: FaLaptop,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Grow your brand with the right partners",
        subTitle: "Invest in creators who amplify your reach, drive authentic engagement, and deliver measurable ROI.",
        icon: FaChartLine,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Daily monitoring & coverage reports for all your clients",
        subTitle: "Stay in control of your brand narrative with proactive monitoring and reporting.",
        icon: FaLayerGroup,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Elevate your social presence",
        subTitle: "Turn your owned channels into proof of impact with AI content performance tracking.",
        icon: FaLayerGroup,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Benchmark performance",
        subTitle: "Outpace your competitors with insights that accelerate decisions and increases your share of voice",
        icon: PiUserList,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Understand your audience everywhere",
        subTitle: "Go beyond demographics, uncover what truly drives your audience and turn those insights into measurable impact.",
        icon: FaLayerGroup,
        image: "/elevating-social-presence.svg"
    },
    {
        title: "Collect & analyze reviews",
        subTitle: "Turn feedback into action to protect loyalty and increase customer satisfaction",
        icon: FaLayerGroup,
        image: "/elevating-social-presence.svg"
    },
]

export const caseStudiesInfo: CaseStudyInfo[] = [
    {
        image: "/case-studies/case-study-1.png",
        companyName: "Company Name",
        description: "Lumora Health partnered with Grovia to streamline their product launch process and cross-team coordination."
    },
    {
        image: "/case-studies/case-study-2.png",
        companyName: "Company Name",
        description: "NaviAI, an emerging leader in AI-driven navigation systems, partnered with Grovia to scale their technical team."
    },
    {
        image: "/case-studies/case-study-3.png",
        companyName: "Company Name",
        description: "Helped Pluto scale their product team and streamline onboarding as they expanded into new markets."
    },
    {
        image: "/case-studies/case-study-4.png",
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
        companyLogo: "/testimonial-logos/wadi-degla.png",
    },
    {
        quote: "For over 30 years, we've been working closely with our clients to offer them the state-of-the-art PR solutions across different industries and verticals. dima has enabled our media monitoring PR experts to offer easier, faster & more accurate media coverage & analysis",
        name: "Dina El Sewefy",
        jobRole: "CEO at MountPR",
        companyLogo: "/testimonial-logos/mountpr.png",
    },
    {
        quote: "Working with the team at dima has helped us with understanding the drivers of engagement on our pages and to build an effective strategy across all social platforms through a true understanding of our audience's reactions and comments to everything we post!",
        name: "Omar Al Masry",
        jobRole: "Senior Brand Manager at Mori International",
        companyLogo: "/testimonial-logos/mori-int.png",

    },
    {
        quote: "Being top of mind in the F&B market is difficult, everyday we see new players & trends…dima helps us to truly monitor where we stand in the market at all times and to maintain market leadership by staying in tune with the next big thing",
        name: "Mohamed Osman",
        jobRole: "Chariman at Tico Group",
        companyLogo: "/testimonial-logos/tico.png",
    },
    {
        quote: "Managing over 50 locations in 3 different continents is not easy, but dima makes it easier by providing tailored business insights to our different audiences 24/7 so that we can provide a tailored marketing strategy that targets our various audience segments",
        name: "Mostafa AlSagheer",
        jobRole: "Vice Chairman at AlSagheer Group",
        companyLogo: "/testimonial-logos/alsagheer.png",
    },
]

export const actionableInsightsCardsInfo: CardType[] = [
    {
        title: "Full Coverage",
        description: "Track and analyze coverage across online publications, social media, print, TV, radio & closed communities, so you can get the full picture.",
        highighted: "online publications, social media, print, TV, radio & closed communities"
    },
    {
        title: "Arabic First AI Copilot",
        description: "Monitor with unmatched Arabic accuracy across all dialects, slang and Franco-Arabic.",
        highighted: "dialects, slang and Franco-Arabic."
    },
    {
        title: "Built for Agencies",
        description: "Scale without constraints, Unlimited keywords, reports & users. dima adapts to your high-volume needs.",
        highighted: "Unlimited keywords, reports & users."
    },
]

export const scrollingCards: CardType[] = [
    {
        title: "Trend Dectection",
        description: "Identify emerging trends before they gain momentum, giving you the edge to act first"
    },
    {
        title: "Communities",
        description: "Track communities conversations to expand coverage and visibility"
    },
    {
        title: "Posts Vs Comments analysis",
        description: "Separate post and comment section analysis for deeper, more accurate insights."
    },
    {
        title: "Be First to Know, First to Act",
        description: "Act instantly on real-time alerts to prevent crises, seize opportunities, and accelerate response times."
    },
    {
        title: "Go beyond mentions",
        description: "Seamlessly track sentiment, emotion, topics & more to uncover the true context behind conversations"
    }
]

export const enterpriseFeaturesCards: EnterpriseType[] = [
    {
        icon: "/enterprise-icons/360.png",
        title: "360° Conversation Coverage",
        description: "Track tagged, untagged, and misspelled mentions across all social media platforms and private groups"
    },
    {
        icon: "/enterprise-icons/arabic.png",
        title: "Arabic-First Engine",
        description: "97% accuracy in detecting Arabic dialects, slang, Franco-Arabic, sarcasm & cultural nuance"
    },
    {
        icon: "/enterprise-icons/crisis-alert.png",
        title: "Crisis Alerts",
        description: "You're the first to know, before the public sees it grow. Get early crisis alerts via whatsapp and app notifications"
    },
    {
        icon: "/enterprise-icons/custom.png",
        title: "Customizable White-Label Reports",
        description: "Generate unlimited reports in branded templates (PPT, PDF, Excel), ready to share instantly"
    },
    {
        icon: "/enterprise-icons/dima.png",
        title: "dima AI Assistant",
        description: "Ask plain-language questions about your brand and get instant, actionable answers"
    },
    {
        icon: "/enterprise-icons/users.png",
        title: "Unlimited Users & Keywords",
        description: "No caps on team members or keywords"
    },
    {
        icon: "/enterprise-icons/visual.png",
        title: "Visual Listening",
        description: "Spot your brand in images, videos and audio to capture the full picture."
    },
    {
        icon: "/enterprise-icons/historical-data.png",
        title: "Capture Historical Data",
        description: "dima provides full historical coverage to see the full picture."
    },
] 
