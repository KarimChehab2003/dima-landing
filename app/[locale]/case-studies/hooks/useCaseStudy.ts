"use client";

import { fetchSingleCaseStudy } from "@/lib/firebase/caseStudiesFunctions";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useCaseStudy = (slug: string) => {
    const locale = useLocale();
    return useQuery({
        queryKey: ["case-studies", slug, locale],
        queryFn: () => fetchSingleCaseStudy(locale, slug)
    })
}