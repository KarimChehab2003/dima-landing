import { IconType } from "react-icons";

export type NavLink = {
    title: string;
    titleKey?: string; // i18n key to resolve title
    href: string;
    icon?: string;
}

export type SolutionLink = {
    logo: string;
    title: string; // default/fallback label
    subTitle: string; // default/fallback subtitle
    titleKey?: string; // i18n key to resolve title
    subTitleKey?: string; // i18n key to resolve subtitle
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