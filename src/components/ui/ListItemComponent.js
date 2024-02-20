import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";

const ListItemComponent = ({label, icon, toLink}) => {
    return (
        <ListItem button component={Link} to={toLink}>
        <ListItemIcon>
         {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    );
}

export default ListItemComponent;