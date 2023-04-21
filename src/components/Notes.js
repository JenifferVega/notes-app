import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Notes = () => {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "notes"); // mover a otra carpeta y reusar la funcion
      const q = query(collectionRef, orderBy("title"));
      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("documents", documents);
      setnotes(documents);
    };
    fetchData();
  }, []);
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </div>
  );
};

export default Notes;
