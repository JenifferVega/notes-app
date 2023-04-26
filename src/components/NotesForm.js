import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { addNote } from "../utils/functionsNotesForm";
import notesContent from "../pages/api/notesContent";

const NotesForm = (props) => {
  const [note, setNote] = useState({ title: "", detail: "" });
  const {showAlert} = useContext(notesContent);

  const onSubmit = async () => {
    if (!note.title) {
      alert("Please enter a title");
      return;
    }
    if (!note.detail) {
      alert("Please enter a detail");
      return;
    }
    const noteId = await addNote(note);
    setNote({ title: "", detail: "" });
    showAlert('success', `Todo with id ${noteId} is added successfully`);
    props.onNewData();
  };

  return (
    <div>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={note.detail}
        onChange={(e) => setNote({ ...note, detail: e.target.value })}
      />
      <Button
        onClick={onSubmit}
        variant="contained"
        sx={{ mt: 2 , backgroundColor: "#9400D3" }}
      >
        Add note
      </Button>
    </div>
  );
};

export default NotesForm;
