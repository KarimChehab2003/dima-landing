"use client";

import { db } from "@/lib/firebase";
import { Blog } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useLocale } from "next-intl";

function useBlogs(limitCount: number = 4, tags: string[] = []) {
    const locale = useLocale();

    return useQuery({
        queryKey: ["blogs", limitCount, locale, tags],
        queryFn: async () => {
            const collectionRef = collection(db, "blogs");

            let q;

            if (tags.length > 0) {
                q = query(
                    collectionRef,
                    where("tags", "array-contains-any", tags),
                    orderBy("dateCreated", "desc"),
                    limit(limitCount)
                );
            } else {
                q = query(
                    collectionRef,
                    orderBy("dateCreated", "desc"),
                    limit(limitCount)
                );
            }

            const querySnapshot = await getDocs(q);

            const blogs: Blog[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                blogs.push({
                    id: doc.id,
                    ...data,
                    content: data.content?.[locale] || data.content?.en
                } as Blog);
            });

            return blogs;
        },
    });
}

export default useBlogs;
