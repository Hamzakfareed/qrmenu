import { List, ListSubheader } from "@mui/material";
import React from "react";

const ListComponent = ({ id, label, items }) => {
    return (
        <List
            subheader={
                <ListSubheader component="div" id={id}>
                    {label}
                </ListSubheader>
            }>
            {items}
        </List>
    );
}

export default ListComponent;