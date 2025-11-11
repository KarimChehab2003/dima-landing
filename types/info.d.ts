import { IconType } from "react-icons";

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
    translationKey: string;
}

export type ConversationInfo = {
    title: string;
    subTitle: string;
    icon: IconType;
    image: string;
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
    title: string;
    description: string;
    highlighted?: string;
}

export type EnterpriseType = {
    icon: string;
    title: string;
    description: string;
}

export type SideInfoType = {
    icon: string;
    title: string;
    description: string;
}

export type LayeredCardType = {
    text: string;
    bgColor: string;
    suffix: string;
    suffixColor: string;
    value: number;
    rotation: string;
}

export type TestimonialAsset = {
    companyLogo: string;
    testimonialImage?: string;
}