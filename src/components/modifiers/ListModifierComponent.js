import React from "react";

import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ListModifierComponent = ({ modifiers, handleEditClick }) => {
    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper} elevation={3} fullWidth sx={{ m: 1 }}>
                    <Typography variant="h6" component="div" style={{ padding: 16 }}>
                        Modifiers
                    </Typography>
                    <Table aria-label="Modifiers">
                        <TableHead>
                            <TableRow>
                                <TableCell>No#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {modifiers.map((modifier) => (
                                <TableRow key={modifier.id}>
                                    <TableCell component="th" scope="row">
                                        {modifier.id}
                                    </TableCell>
                                    <TableCell>{modifier.name}</TableCell>
                                    <TableCell>{modifier.description}</TableCell>
                                    <TableCell>{modifier.price}</TableCell>
                                    <TableCell><IconButton aria-label="edit" onClick={() => handleEditClick(modifier)} ><EditIcon color="primary" /></IconButton><IconButton aria-label="delete"><DeleteIcon color="warning" /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent></Card>
    );
}

export default ListModifierComponent;