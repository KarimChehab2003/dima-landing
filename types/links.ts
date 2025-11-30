import { IconType } from "react-icons";

export type NavLink = {
    title: string;
    href: string;
    icon?: string;
    translationKey: string;
};

export type SolutionLink = {
    title: string;
    description: string;
    logo: string;
    href: string;
    translationKey: string;
};

export type SocialMediaLink = {
    href: string;
    icon: IconType;
};

export type LanguageLink = {
    locale: string;
    label: string;
    flag: string;
};

export type ToolLink = {
    href: string;
    translationKey: string;
};
