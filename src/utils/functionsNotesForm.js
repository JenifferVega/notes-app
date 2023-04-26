import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { showAlert } from "@/pages/api/notesContent";

export const addNote = async (note) => {
  const collectionRef = collection(db, "notes");
 // const {showAlert} = useContext(notesContent)
  const docRef = await addDoc(collectionRef, {
    ...note,
    timeStamp: serverTimestamp(),
  });
  return docRef.id;
};