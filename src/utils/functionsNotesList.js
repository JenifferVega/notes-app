import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const getNotes = async () => {
  const collectionRef = collection(db, "notes");
  const q = query(collectionRef, orderBy("title"));
  const snapshot = await getDocs(q);
  const documents = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return documents;
};
