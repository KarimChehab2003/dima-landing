export type SolutionKey = "sl" | "pr" | "oi" | "mi" | "ci";

export type SolutionAsset = {
    icon: string;
    href: string;
    title: {
        en: string;
        ar: string;
    };
};

export type TestimonialAsset = {
    companyLogo: string;
    testimonialImage?: string;
};
