import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextComponent from "../ui/TextComponent";
import InputFieldComponent from "../ui/InputFieldComponent";
import ButtonComponent from "../ui/ButtonComponent";

const EditCategoryComponent = ({ selectedCategory, onUpdateCategory}) => {

    const [editCategory, setEditCategory] = useState(selectedCategory);

    useEffect(() => {
        setEditCategory(selectedCategory); // Update category when initialCategory changes
      }, [selectedCategory]);

      
    const onInputChangeHandler = (event) => {
        const { name, value } = event.target;
        console.log("Field changed:", name, "Value:", value); // Debugging line
      
        setEditCategory(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
    }

    const onSubmitFormHandler =(event) => {
        event.preventDefault();
        onUpdateCategory(editCategory);
    }
    return (
        <Box boxShadow={1} p={2} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
        }} noValidate autoComplete="off"onSubmit={onSubmitFormHandler}>
            <TextComponent label="Edit Category"/>
            <div>
               <InputFieldComponent id="outlined-name" name="Name" value={editCategory.name} onChangeHandler={onInputChangeHandler} />
               <InputFieldComponent id="outlined-description" name="Description" value={editCategory.description} onChangeHandler={onInputChangeHandler}/>
               <ButtonComponent label="Save" type="submit" />
            </div>
        </Box>
    );
}

export default EditCategoryComponent;