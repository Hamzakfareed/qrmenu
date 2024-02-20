import { Box } from "@mui/material";
import React from "react";
import TextComponent from "../ui/TextComponent";
import InputFieldComponent from "../ui/InputFieldComponent";
import ButtonComponent from "../ui/ButtonComponent";

const AddCategoryComponent = ({handleSubmit}) => {
    return (
        <Box boxShadow={1} p={2} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
        }} noValidate autoComplete="off" onSubmit={handleSubmit} >
            <TextComponent label="Add New Category"/>
            <div>
               <InputFieldComponent id="outlined-name" label="Name" name="Name" />
               <InputFieldComponent id="outlined-description" name="Description" />
               <ButtonComponent label="Save" />
            </div>
        </Box>
    );
}

export default AddCategoryComponent;