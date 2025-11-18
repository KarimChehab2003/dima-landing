"use client";

import { db } from "@/lib/firebase";
import { CaseStudy } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useLocale } from "next-intl";

export const useMoreCaseStudies = (limitCount: number = 2) => {
    const locale = useLocale();

    return useQuery({
        queryKey: ["more-case-studies", locale, limitCount],
        queryFn: async () => {
            const snapshot = await getDocs(
                query(collection(db, "case-studies"), orderBy("dateCreated", "desc"), limit(limitCount))
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

