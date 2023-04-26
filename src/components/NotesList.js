import { useEffect, useState } from "react";
import { getNotes } from "../utils/functionsNotesList";
import Notes from "../components/Notes";

const NotesList = (props) => {
  const [notes, setnotes] = useState([]);

  const fetchData = async () => {
    const documents = await getNotes();
    console.log("documents", documents);
    setnotes(documents);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (props.reload) {
      fetchData();
      props.reloadFunc(false);
    }
  }, [props.reload]);

  return (
    <div>
      {notes.map((note) => (
        <Notes
          key={note.id}
          id={note.id}
          title={note.title}
          detail={note.detail}
          timeStamp={note.timeStamp}
        />
      ))}
    </div>
  );
};

export default NotesList;
