// import { db } from "@/lib/firebase";
// import { slugify } from "@/lib/utils";
// import {
//     doc,
//     getDoc,
//     setDoc,
//     deleteDoc
// } from "firebase/firestore";

// /**
//  * Copies a Firestore document to a new ID and optionally deletes the old one.
//  * 
//  * @param {string} collectionName - Firestore collection name
//  * @param {string} oldId - The existing document ID
//  * @param {string} newId - The new document ID (slugified)
//  * @param {boolean} removeOld - Whether to delete the old doc (default: true)
//  */
// export async function copyAndRenameDoc(
//     collectionName: string,
//     oldId: string,
//     newId: string,
//     removeOld = true
// ) {
//     const oldRef = doc(db, collectionName, oldId);
//     const newRef = doc(db, collectionName, newId);

//     // 1. Get old doc
//     const snapshot = await getDoc(oldRef);

//     if (!snapshot.exists()) {
//         throw new Error(`Document with ID "${oldId}" does not exist.`);
//     }

//     const data = snapshot.data();

//     // 2. Save data to new doc
//     await setDoc(newRef, data);

//     // 3. Delete old doc (if enabled)
//     if (removeOld) {
//         await deleteDoc(oldRef);
//     }

// }

// // copyAndRenameDoc("case-studies", "How-a-Leading-F&B-Brand-Protected-Millions-in-Revenue-with-Real-Time-Arabic-First-Crisis-Detection", slugify("How-a-Leading-F&B-Brand-Protected-Millions-in-Revenue-with-Real-Time-Arabic-First-Crisis-Detection"), false);