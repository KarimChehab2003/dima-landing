"use client";

import { fetchSingleBlog } from "@/lib/firebase/blogsFunctions";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

function useBlog(slug: string) {
    const locale = useLocale();
    return useQuery({
        queryKey: ["blogs", slug, locale],
        queryFn: () => fetchSingleBlog(locale, slug)
    })
}

export default useBlog;