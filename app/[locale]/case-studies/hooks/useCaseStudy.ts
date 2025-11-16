"use client";

import { db } from "@/lib/firebase";
import { CaseStudy } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { useLocale } from "next-intl";

export const useCaseStudy = (slug: string) => {
    const locale = useLocale();
    return useQuery({
        queryKey: ["case-studies", slug, locale],
        queryFn: async () => {
            const docRef = doc(db, "case-studies", slug);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) throw new Error("Case Study not found");

            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                content: data.content[locale] || data.content["en"]
            } as CaseStudy
        }
    })
}