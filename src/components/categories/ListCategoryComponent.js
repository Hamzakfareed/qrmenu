import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableContainerComponent from "../ui/TableContainerComponent";

const ListCategoryComponent = ({ categories, handleEditClick }) => {
    const items = (<Table aria-label="Categories">
        <TableHead>
            <TableRow>
                <TableCell>No#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {categories.map((category) => (
                <TableRow key={category.id}>
                    <TableCell component="th" scope="row">
                        {category.id}
                    </TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell><IconButton aria-label="edit" onClick={() => handleEditClick(category)}><EditIcon color="primary" /></IconButton><IconButton aria-label="delete"><DeleteIcon color="warning" /></IconButton></TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>);
    return (
        <TableContainerComponent label="Categories" items={items} />
    );
}

export default ListCategoryComponent;