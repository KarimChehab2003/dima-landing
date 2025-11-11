"use client";

import { db } from "@/lib/firebase";
import { Blog } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useLocale } from "next-intl";

function useBlogs(limitCount: number = 4) {
    const locale = useLocale();

    return useQuery({
        queryKey: ["blogs", limitCount, locale],
        queryFn: async () => {
            const q = query(collection(db, "blogs"), orderBy("dateCreated", "desc"), limit(limitCount));
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
