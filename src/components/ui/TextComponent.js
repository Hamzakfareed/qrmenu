import { Typography } from "@mui/material";
import React from "react";

const TextComponent = ({label, style}) => {
    return (
        <Typography variant="h6" component="div" gutterBottom style={style}>
           {label}
        </Typography>
    );
}


export default TextComponent;