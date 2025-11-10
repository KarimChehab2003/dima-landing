"use client";

import { db } from "@/lib/firebase";
import { Blog } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

function useBlogs() {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const blogs: Blog[] = [];
            querySnapshot.forEach((doc) => {
                blogs.push({ id: doc.id, ...doc.data() } as Blog);
            })
            return blogs;
        }
    })
}

export default useBlogs;