import { IconType } from "react-icons";

export type NavLink = {
    title: string;
    href: string;
    icon?: string;
}

export type SolutionLink = {
    logo: string;
    title: string;
    subTitle: string;
    href: string
}

export type SocialMediaLink = {
    href: string;
    icon: IconType
}

export type LanguageLink = {
    locale: string;
    label: string;
    flag: string;
}