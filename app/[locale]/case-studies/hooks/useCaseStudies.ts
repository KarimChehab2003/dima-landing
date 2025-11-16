"use client";

import { db } from "@/lib/firebase";
import { CaseStudy } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useLocale } from "next-intl";

export const useCaseStudies = (limitCount: number = 4) => {
    const locale = useLocale();
    return useQuery({
        queryKey: ["case-studies", limitCount, locale],
        queryFn: async () => {
            const q = query(collection(db, "case-studies"), orderBy("dateCreated", "desc"), limit(limitCount));
            const querySnapshot = await getDocs(q);

            const caseStudies: CaseStudy[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                caseStudies.push({
                    id: doc.id,
                    ...data,
                    content: data.content[locale] || data.content["en"]
                } as CaseStudy);
            });

            return caseStudies
        }
    })
}