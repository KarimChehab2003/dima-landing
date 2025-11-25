"use client";

import { fetchBlogs } from "@/lib/firebase/blogsFunctions";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

function useBlogs(limitCount: number | null = null, tags: string[] = []) {
    const locale = useLocale();

    return useQuery({
        queryKey: ["blogs", limitCount, locale, tags],
        queryFn: () => fetchBlogs(locale, tags, limitCount)
    });
}

export default useBlogs;
