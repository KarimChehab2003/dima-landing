"use client";

import { db } from "@/lib/firebase";
import { Blog } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { useLocale } from "next-intl";

function useBlog(slug: string) {
    const locale = useLocale();
    return useQuery({
        queryKey: ["blogs", slug, locale],
        queryFn: async () => {
            const docRef = doc(db, "blogs", slug);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) throw new Error("Blog not found");

            const data = docSnap.data();
            return {
                id: docSnap.id,
                ...data,
                content: data.content[locale] || data.content["en"]
            } as Blog
        }
    })
}

export default useBlog;