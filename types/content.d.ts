import { SolutionKey } from "@/data/constants/caseStudyPageAssets";
import { Timestamp } from "firebase/firestore";

type BlogContent = {
    title: string;
    description: string;
    body: string
}

export type Blog = {
    id: string;
    content: BlogContent;
    dateCreated: Timestamp;
    tags: string[];
    thumbnail: string;
}

type CaseStudyAttributes = {
    title: string;
    subTitle: string;
}

type CaseStudyValue = number | string;

type CaseStudyMetrics = {
    title: string;
    value: CaseStudyValue;
    suffix: string;
}

type CaseStudySideInfo = {
    icon: string;
    title: string;
    description: string;
}

type CaseStudyContent = {
    type: string;
    title: string;
    metrics: CaseStudyMetrics[];

    description: string;
    attributes: CaseStudyAttributes[];
    body: string;

    sideInfo: CaseStudySideInfo[];
    usedSolutions: SolutionKey[];
}

type CaseStudyFlags = {
    featured: boolean;
    active: boolean;
}

export type CaseStudy = {
    id: string;
    content: CaseStudyContent;
    flags: CaseStudyFlags;
    dateCreated: Timestamp;
    ogImage?: string
}

interface RawKeywordResult {
    keyword: string;
    variations: string[];
    dialectTerms?: {
        dialect: string;
        terms: string[];
    }[];
    misspellings: string[];
}

type Video = {
    src: string;
    href?: string;
    alt?: string;
};