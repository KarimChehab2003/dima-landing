import { IconType } from "react-icons";

export type CardInfo = {
    title: string;
    highlight: string;
    variant: "text-left-content-right" | "text-image" | "text-only"
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

