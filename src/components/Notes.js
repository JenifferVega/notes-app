import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";


const Notes = ({ id, timestamp, title, detail }) => {
  return (
    <div>
      <ListItem
        sx={{ mt: 3, boxShadow: 3 }}
        style={{ backgroundcolor: "#FAFAFA" }}
      >
        <ListItemText
            primary ={title}
            secondary= {moment(timestamp).format("do MMMM, yyyy")}
        />
      </ListItem>
    </div>
  );
};

export default Notes;
