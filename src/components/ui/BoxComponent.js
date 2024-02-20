import { Box } from "@mui/material";
import React from "react";

const BoxComponent = ({ childrens, saveHandler }) => {
    return (
        <Box p={2} boxShadow={1} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off" onSubmit={saveHandler}>
            {childrens}
        </Box>
    );
}

export default BoxComponent;