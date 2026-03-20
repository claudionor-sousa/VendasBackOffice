import { Autocomplete, TextField } from "@mui/material";
import { top100Films } from "../Json";

// import top100Films from './top100Films';




export default function ContentViewDash(){
    return(
       <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
}