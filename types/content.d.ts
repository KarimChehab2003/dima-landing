import { Timestamp } from "firebase/firestore";

type Content = {
    title: string;
    description: string;
    body: string
}

export type Blog = {
    id: string;
    content: Content;
    dateCreated: Timestamp;
    tags: string[];
    thumbnail: string;
}
