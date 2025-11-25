import { collection, doc, getDoc, getDocs, limit, orderBy, query, QueryConstraint, where } from "firebase/firestore";
import { db } from "../firebase";
import { Blog } from "@/types/content";



export const fetchBlogs = async (locale: string, tags: string[], limitCount: number | null = null) => {
    const collectionRef = collection(db, "blogs");
    const constraints: QueryConstraint[] = [orderBy("dateCreated", "desc")];

    if (tags.length > 0) {
        constraints.unshift(where("tags", "array-contains-any", tags));
    }

    if (limitCount) {
        constraints.push(limit(limitCount));
    }

    const q = query(collectionRef, ...constraints);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            content: data.content?.[locale] || data.content?.en,
        } as Blog;
    });
};


export const fetchSingleBlog = async (locale: string, slug: string) => {
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
