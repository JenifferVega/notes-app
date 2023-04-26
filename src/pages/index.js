import NotesList from "../components/NotesList";
import notesContent from "../pages/api/notesContent";
import { Inter } from "next/font/google";
import { Alert, Container, Snackbar } from "@mui/material";
import NotesForm from "@/components/NotesForm";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [alerType, setAlerType] = useState("sucess");
  const [alertMessage, setAlertMessage] = useState("");
  const [reload, setReload] = useState(false);
  const showAlert = (type, msg) => {
    setOpen(true);
    setAlerType(type);
    setAlertMessage(msg);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <notesContent.Provider value={{ showAlert }}>
      <Container maxWidth="sm">
        {
          <NotesForm
            onNewData={() => {
              setReload(true);
            }}
          />
        }
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={alerType}
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
        <NotesList reload={reload} reloadFunc={setReload} />
      </Container>
    </notesContent.Provider>
  );
}
