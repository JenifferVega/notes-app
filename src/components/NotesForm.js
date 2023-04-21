import { Button, TextField } from "@mui/material";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const NotesForm = () => {
  const [note, setnote] = useState({ title: "", detail: "" });
  const onSubmit = async () => {
    const collectionRef = collection(db, "notes"); // mover a otra carpeta y reusar la funcion
    const docRef = await addDoc(collectionRef, { ...note, timeStamp:
    serverTimestamp() });
    setnote({ tittle: '', detail: ''})
    alert(`Todo with id ${docRef.id} is added succesfully`)
    
  };
  return (
    <div>
      {
        //<pre>{JSON.stringify(note)}</pre>
      }
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={note.title}
        onChange={(e) => setnote({ ...note, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={note.detail}
        onChange={(e) => setnote({ ...note, detail: e.target.value })}
      />
      <Button onClick={onSubmit} variant="contained" sx={{ mt: 3 }}>
        create a new Note
      </Button>
    </div>
  );
};

export default NotesForm;
