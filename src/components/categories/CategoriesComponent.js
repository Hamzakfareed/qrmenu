import React, { useState } from "react";
import AddCategoryComponent from "./AddCategoryComponent";
import ListCategoryComponent from "./ListCategoryComponent";
import EditCategoryComponent from "./EditCategoryComponent";
import { Card, CardContent } from "@mui/material";
import ContainerComponent from "../ui/ContainerComponent";

const CategoriesComponent = () => {

    const categoriesList = [
        { id: 1, name: "appetizer", description: "this is for testing" },
        { id: 2, name: "main course", description: "this is for testing" }
    ];

    const [categories, setCategories] = useState(categoriesList);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleEditClick = (category) => {
        setSelectedCategory(category);
    }

    const handleCategoryUpdate = (updatedCategory) => {
        // setCategories(categories.map(category => {
        //     category.id === updatedCategory.id ? updatedCategory : category;
        // }));
        // setSelectedCategory(null);
    };
    const editOrAddCategoryCompoennt = (<span>{selectedCategory ? (<EditCategoryComponent key={selectedCategory.id} onUpdateCategory={handleCategoryUpdate} selectedCategory={selectedCategory} />) : (<AddCategoryComponent />)} </span>)
    const categoriesComponent = (<span><ListCategoryComponent categories={categories} handleEditClick={handleEditClick} /></span>)
    return (
        <div>
            <ContainerComponent items={editOrAddCategoryCompoennt} />
            <ContainerComponent items={categoriesComponent} />
        </div>
    );
}

export default CategoriesComponent;