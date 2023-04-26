import { IconButton, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import notesContent from "../pages/api/notesContent";
import { useContext } from "react";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Notes = ({ id, timestamp, title, detail }) => {
  console.log({ id, timestamp, title, detail });

  const { showAlert } = useContext(notesContent);

  const deleteNote = async (id, e) => {
    e.stopPropagation();
    console.log("id", id);
    if (id) {
      const docRef = doc(db, "notes", id);
      await deleteDoc(docRef);
      showAlert("error", `Notes with id ${id} has been deleted successfully`);
    } else {
      showAlert("error", `The note ID is not defined`);
    }
  };

  return (
    <div>
      <ListItem
        sx={{ mt: 3, boxShadow: 3 }}
        style={{ backgroundcolor: "#FAFAFA" }}
        secondaryAction={
          <>
            <IconButton onClick={(e) => deleteNote(id, e)}>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText
          primary={title ? title : ""}
          secondary={moment(timestamp).format("do MMMM, yyyy")}
        />
      </ListItem>
    </div>
  );
};

export default Notes;
