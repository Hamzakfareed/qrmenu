import { Card, CardContent, Paper, TableContainer } from "@mui/material";
import React from "react";
import TextComponent from "./TextComponent";

const TableContainerComponent = ({ label, items }) => {
    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper} elevation={3} fullWidth sx={{ m: 1 }}>
                    <TextComponent label={label} />
                    {items}
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default TableContainerComponent;