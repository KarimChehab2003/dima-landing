import { CardInfo, CaseStudyInfo, ConversationInfo, QuestionAccordion, TestimonialType } from "@/types/info";
import { FaChartLine, FaLaptop, FaLayerGroup } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";

export const expandableCardInfo: CardInfo[] = [
    {
        title: "FULL TRACKING",
        highlight: "full",
        variant: "text-left-content-right"
    },
    {
        title: "Grow with ZERO constraints",
        highlight: "zero",
        variant: "text-image"
    },
    {
        title: "Trusted by +250 leading agencies",
        highlight: "+250",
        variant: "text-only"
    },
]

export const ownConversationInfo: ConversationInfo[] = [
    {
        title: "Listen, analyze & act",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLaptop,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Grow with the right partners",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaChartLine,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Daily monitoring Reports",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Daily monitoring Reports 2",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
    },
    {
        title: "Elevating social Presence",
        subTitle: "Cut through the noise of millions of unfilteredconversations to uncover the insights thatmatter most powered by AI.",
        icon: PiUserList,
        image: "/elevating-social-presence.png"
    },
    {
        title: "Benchmark Performance",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse autem, beatae, iusto voluptatem accusamus aspernatur quae laborum placeat quibusdam ipsum vel consequatur ut quos repudiandae debitis. Assumenda, nam delectus.",
        icon: FaLayerGroup,
        image: "https://placehold.co/800x600"
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
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus vero voluptate voluptas sint ut repudiandae veritatis vel illum explicabo. Odit sed rerum quas velit quis provident beatae vel mollitia.",
        name: "Jordan Johnson",
        jobRole: "COO at Company",
        companyLogo: "/testimonials/company-placeholder.png"
    },
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus vero voluptate voluptas sint ut repudiandae veritatis vel illum explicabo. Odit sed rerum quas velit quis provident beatae vel mollitia.",
        name: "Jordan Johnson",
        jobRole: "COO at Company",
        companyLogo: "/testimonials/company-placeholder.png"
    },
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus vero voluptate voluptas sint ut repudiandae veritatis vel illum explicabo. Odit sed rerum quas velit quis provident beatae vel mollitia.",
        name: "Jordan Johnson",
        jobRole: "COO at Company",
        companyLogo: "/testimonials/company-placeholder.png"
    },
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus vero voluptate voluptas sint ut repudiandae veritatis vel illum explicabo. Odit sed rerum quas velit quis provident beatae vel mollitia.",
        name: "Jordan Johnson",
        jobRole: "COO at Company",
        companyLogo: "/testimonials/company-placeholder.png"
    },
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet natus vero voluptate voluptas sint ut repudiandae veritatis vel illum explicabo. Odit sed rerum quas velit quis provident beatae vel mollitia.",
        name: "Jordan Johnson",
        jobRole: "COO at Company",
        companyLogo: "/testimonials/company-placeholder.png"
    },
]

