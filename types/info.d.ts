import { IconType } from "react-icons";


export type EmpoweringAgenciesInfo = {
    title: string;
    description: string;
    value: number;
    suffix?: string;
    maxValue?: number;
}

export type ConversationInfo = {
    title: string;
    subTitle: string;
    icon: IconType;
    image: string;
}

export type CaseStudyInfo = {
    image: string;
    companyName: string;
    description: string;
}

export type QuestionAccordion = {
    question: string;
    answer: string;
}

export type TestimonialType = {
    quote: string;
    name: string;
    jobRole: string;
    companyLogo: string;
}

export type CardType = {
    title: string;
    description: string;
    highighted?: string;
}