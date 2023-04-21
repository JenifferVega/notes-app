import Notes from "../components/Notes";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Notes/>
    </Container>
  );
}
