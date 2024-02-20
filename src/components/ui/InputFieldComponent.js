import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

const InputFieldComponent = ({id, name, value, isDisabled, onChangeHandler}) => {
    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor={id}>{name}</InputLabel>
            <OutlinedInput disabled={isDisabled} id={id} name={name} label={name} value={value}  onChange={onChangeHandler}/>
        </FormControl>
    );
}

export default InputFieldComponent;