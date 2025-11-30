import { SolutionKey } from "./solutions";
import { Timestamp } from "firebase/firestore";

export type CaseStudyAttributes = {
    title: string;
    subTitle: string;
};

export type CaseStudyValue = number | string;

export type CaseStudyMetrics = {
    title: string;
    value: CaseStudyValue;
    suffix: string;
};

export type CaseStudySideInfo = {
    index: number;
    title: string;
    description: string;
};

export type CaseStudyContent = {
    type: string;
    title: string;
    metrics: CaseStudyMetrics[];
    description: string;
    attributes: CaseStudyAttributes[];
    body: string;
    sideInfo: CaseStudySideInfo[];
    usedSolutions: SolutionKey[];
};

export type CaseStudyFlags = {
    featured: boolean;
    active: boolean;
};

export type CaseStudy = {
    id: string;
    content: CaseStudyContent;
    flags: CaseStudyFlags;
    dateCreated: Timestamp;
    ogImage?: string;
};
