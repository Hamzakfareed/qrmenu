import { Button, FormControl } from "@mui/material";
import React from "react";

const ButtonComponent = ({label, onClickHandler, type}) => {
    return (
        <FormControl sx={{ m: 1 }}>
            <Button variant="contained" color="secondary" type={type} onClick={onClickHandler}>{label}</Button>
        </FormControl>
    );
}

export default ButtonComponent;