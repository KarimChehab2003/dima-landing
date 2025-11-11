"use client";

import { db } from "@/lib/firebase";
import { Blog } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";

function useBlog(slug: string) {
    return useQuery({
        queryKey: ["blogs", slug],
        queryFn: async () => {
            const docRef = doc(db, "blogs", slug);
            console.log("Fetching....")
            const docSnap = await getDoc(docRef);
            console.log("The docSnap -> ", docSnap)
            if (!docSnap.exists()) throw new Error("Blog not found");
            return { id: docSnap.id, ...docSnap.data() } as Blog
        }
    })
}

export default useBlog;