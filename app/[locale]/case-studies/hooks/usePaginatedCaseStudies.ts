"use client";

import { db } from "@/lib/firebase";
import { CaseStudy } from "@/types/content";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
    collection,
    DocumentData,
    getCountFromServer,
    getDocs,
    limit,
    orderBy,
    query,
    QueryConstraint,
    QueryDocumentSnapshot,
    startAfter,
    where
} from "firebase/firestore";
import { useLocale } from "next-intl";

type CaseStudiesPage = {
    caseStudies: CaseStudy[];
    lastVisible: QueryDocumentSnapshot<DocumentData> | null;
    hasMore: boolean;
};

export const usePaginatedCaseStudies = (limitCount: number = 4) => {
    const locale = useLocale();
    const collectionRef = collection(db, "case-studies");
    const baseConstraints: QueryConstraint[] = [where("flags.active", "==", true)];

    // Get total number of case studies
    const countQuery = useQuery({
        queryKey: ["case-studies-count", locale, "active"],
        queryFn: async () => {
            const countSnapshot = await getCountFromServer(query(collectionRef, ...baseConstraints));
            return countSnapshot.data().count;
        },
        staleTime: 1000 * 60
    });

    // Get case studies
    const infiniteQuery = useInfiniteQuery({
        queryKey: ["case-studies", locale, limitCount, "active"],
        initialPageParam: null as QueryDocumentSnapshot<DocumentData> | null,
        queryFn: async ({ pageParam }) => {
            const constraints: QueryConstraint[] = [
                ...baseConstraints,
                orderBy("dateCreated", "desc"),
                limit(limitCount)
            ];

            if (pageParam) {
                constraints.push(startAfter(pageParam));
            }

            const snapshot = await getDocs(query(collectionRef, ...constraints));

            const caseStudies = snapshot.docs.map((doc) => {
                const data = doc.data();

                return {
                    id: doc.id,
                    ...data,
                    content: data.content[locale] || data.content["en"]
                } as CaseStudy;
            });

            const lastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null;

            return {
                caseStudies,
                lastVisible,
                hasMore: snapshot.size === limitCount
            } as CaseStudiesPage;
        },
        getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.lastVisible : undefined),
        staleTime: 1000 * 60
    });

    const totalCount = countQuery.data ?? 0;
    const totalPages = totalCount > 0 ? Math.ceil(totalCount / limitCount) : 1;

    return {
        ...infiniteQuery,
        totalCount,
        totalPages,
        isLoading: infiniteQuery.isLoading || countQuery.isLoading,
        isError: infiniteQuery.isError || countQuery.isError,
        error: infiniteQuery.error ?? countQuery.error
    };
};