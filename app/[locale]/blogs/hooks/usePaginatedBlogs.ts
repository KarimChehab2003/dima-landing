import { db } from "@/lib/firebase";
import { Blog } from "@/types/blog"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { collection, DocumentData, getCountFromServer, getDocs, limit, orderBy, query, QueryConstraint, QueryDocumentSnapshot, startAfter, where } from "firebase/firestore";
import { useLocale } from "next-intl";


type BlogsPage = {
    blogs: Blog[];
    lastVisible: QueryDocumentSnapshot<DocumentData> | null;
    hasMore: boolean;
}

export const usePaginatedBlogs = (limitCount: number = 16) => {
    const locale = useLocale();
    const collectionRef = collection(db, "blogs");
    const baseConstraints: QueryConstraint[] = [where("active", "==", true)];

    // Get total number of blogs
    const countQuery = useQuery({
        queryKey: ["blogs-count", locale, "active"],
        queryFn: async () => {
            const countSnapshot = await getCountFromServer(query(collectionRef, ...baseConstraints));
            return countSnapshot.data().count;
        },
        staleTime: 1000 * 60
    })

    // Get blogs
    const infiniteQuery = useInfiniteQuery({
        queryKey: ["blogs", locale, limitCount, "active"],
        initialPageParam: null as QueryDocumentSnapshot<DocumentData> | null,
        queryFn: async ({ pageParam }) => {
            // Constraints
            const constraints: QueryConstraint[] = [
                ...baseConstraints,
                orderBy("dateCreated", "desc"),
                limit(limitCount)
            ];

            // If page isn't 1, start after offset
            if (pageParam) {
                constraints.push(startAfter(pageParam))
            }

            const snapshot = await getDocs(query(collectionRef, ...constraints));
            const blogs = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    content: data.content[locale] || data.content["en"],
                    tags: data.tags[locale] || data.tags["en"]
                } as Blog
            });

            // Get last document in page
            const lastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null;

            return {
                blogs,
                lastVisible,
                hasMore: snapshot.size === limitCount
            } as BlogsPage
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
    }
}