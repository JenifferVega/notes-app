import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Notes  from "../components/Notes";

const NotesList = () => {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "notes"); // mover a otra carpeta y reusar la funcion
      const q = query(collectionRef, orderBy("title"));
      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      //console.log("documents", documents);
      setnotes(documents);
    };
    fetchData();
  }, []);
  return (
    <div>
      {notes.map((note) => (
        <Notes key={note.id}
          title={note.title}
          details={note.details}
          timeStamp={note.timeStamp}
        />
      ))}
    </div>
  );
};

export default NotesList;
