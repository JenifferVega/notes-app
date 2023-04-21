import { Button, TextField } from "@mui/material"

const NotesForm = () => {
    return(
        <div>
            <TextField fullWidth label="title" margin="normal"/>
            <TextField fullWidth label="detail" multiline maxRows={4}/>
            <Button variant="contained" sx={{mt: 3}}>create a new Note</Button>
        </div>
    )
}

export default NotesForm