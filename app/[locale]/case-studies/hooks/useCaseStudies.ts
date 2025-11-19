"use client";

import { db } from "@/lib/firebase";
import { CaseStudy } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useLocale } from "next-intl";

type CaseStudyFilters = {
    featured?: boolean;
};

export const useCaseStudies = (limitCount: number = 2, filters: CaseStudyFilters = {}) => {
    const locale = useLocale();

    return useQuery({
        queryKey: ["more-case-studies", locale, limitCount, filters.featured ?? null],
        queryFn: async () => {
            const constraints = [
                where("flags.active", "==", true),
                ...(filters.featured ? [where("flags.featured", "==", true)] : []),
                orderBy("dateCreated", "desc"),
                limit(limitCount)
            ];

            const snapshot = await getDocs(
                query(collection(db, "case-studies"), ...constraints)
            );

            return snapshot.docs.map((doc) => {
                const data = doc.data();

                return {
                    id: doc.id,
                    ...data,
                    content: data.content[locale] || data.content["en"]
                } as CaseStudy;
            });
        },
        staleTime: 1000 * 60
    });
};

