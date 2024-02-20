import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageComponent from "../ui/ImageComponent";
import InputFieldComponent from "../ui/InputFieldComponent";


const ProductsComponent = () => {
    const modifiers = [
        { id: 1, name: "Pepsi", description: "this is for testing", price: 2 },
        { id: 2, name: "Coca cola", description: "This for testing", price: 5 }
    ];

    const categories = [
        { id: 1, name: "appetizer", description: "this is for testing" },
        { id: 2, name: "main course", description: "this is for testing" }
    ]

    const [modifier, setModifier] = useState('');
    const [category, setCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const handleSubmit = (event) => {

    }

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            setSelectedImage(image);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleModifierChange = (event) => {
        setModifier(event.target.value);
    };

    return (
        <div>
            <Box p={2} boxShadow={1} component="form" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom component="div">
                    Add New Product
                </Typography>
                <div>
                    <ImageComponent imageUrl={selectedImage} imageChangeHandler={handleImageChange} isUploadImage={true} />
                    <InputFieldComponent name="Name" id="outlined-name" />
                    <InputFieldComponent name="Description" id="outlined-description" />
                    <InputFieldComponent name="Price" id="outlined-price" />
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-category">Category</InputLabel>
                        <Select id="outlined-adornment-category" label="Category" value={category} onChange={handleCategoryChange}>
                            {categories.map((category) => (
                                <MenuItem value={category.id}>{category.name}</MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-modifiers">Modifiers</InputLabel>
                        <Select id="outlined-adornment-modifiers" label="Modifiers" value={modifier} onChange={handleModifierChange}>
                            {modifiers.map((modifier) => (
                                <MenuItem value={modifier.id}>{modifier.name}</MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                </div>
            </Box>
        </div>
    );
}

export default ProductsComponent;