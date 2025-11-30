import { IconType } from "react-icons";
import { CaseStudyValue } from "./content";

export type HeroSlide = {
    image: string;
    translationKey: string;
}

export type EmpoweringAgenciesInfo = {
    title: string;
    description: string;
    value: number;
    suffix?: string;
    maxValue?: number;
    gapValue?: number;
    translationKey: string;
}

export type ConversationInfo = {
    title: string;
    subTitle: string;
    icon: IconType;
    animation: object;
    translationKey: string;
}

export type BrandCardInfo = {
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
    translationKey: string;
}

export type CardType = {
    index: number;
    title: string;
    description: string;
    highlighted?: string;
    slug: string
}

export type EnterpriseType = {
    icon: string;
    title: string;
    description: string;
}

export type SideInfoType = {
    index: number;
    title: string;
    description: string;
}

export type LayeredCardProps = {
    index: number;
    value: CaseStudyValue;
    title: string;
    suffix: string;
    isLast: boolean
}

export type TestimonialAsset = {
    companyLogo: string;
    testimonialImage?: string;
}