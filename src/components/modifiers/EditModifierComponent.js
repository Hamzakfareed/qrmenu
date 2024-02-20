import React, { useState } from "react";
import TextComponent from "../ui/TextComponent";
import InputFieldComponent from "../ui/InputFieldComponent";
import ButtonComponent from "../ui/ButtonComponent";
import { Box } from "@mui/material";

const EditModifierComponent = ({modifier, editHandleSubmit}) => {
    const [editModifier, setEditModifier] = useState(modifier);
    return (
        <Box p={2} boxShadow={1} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off" onSubmit={editHandleSubmit}>
            <TextComponent label="Edit New Modifier"/>
            <div>
                <InputFieldComponent name="Name" id="outlined-name" value={editModifier.name}/>
                <InputFieldComponent name="Description" id="outlined-description" value={editModifier.description}/>
                <InputFieldComponent name="Price" id="outlined-price" value={editModifier.price} />
                <ButtonComponent label="Save"/>
            </div>
        </Box>
    );
}

export default EditModifierComponent;