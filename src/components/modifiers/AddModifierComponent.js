import { Box } from "@mui/material";
import React from "react";
import TextComponent from "../ui/TextComponent";
import InputFieldComponent from "../ui/InputFieldComponent";
import ButtonComponent from "../ui/ButtonComponent";

const AddModifierComponent = ({addHandleSubmit}) => {
    return (
        <Box p={2} boxShadow={1} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off" onSubmit={addHandleSubmit}>
            <TextComponent label="Add New Modifier"/>
            <div>
                <InputFieldComponent name="Name" id="outlined-name"/>
                <InputFieldComponent name="Description" id="outlined-description"/>
                <InputFieldComponent name="Price" id="outlined-price"/>
                <ButtonComponent label="Save"/>
            </div>
        </Box>
    );
}

export default AddModifierComponent;