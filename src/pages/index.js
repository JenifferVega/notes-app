import Notes from "../components/NotesList";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import NotesForm from "@/components/NotesForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxWidth="sm">
      <NotesForm/>
      <Notes/>
    </Container>
  );
}
