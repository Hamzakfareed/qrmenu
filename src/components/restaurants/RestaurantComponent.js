import React, { useState } from 'react';
import { Box, Button, TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Grid } from "@mui/material";
import InputFieldComponent from '../ui/InputFieldComponent';
import ButtonComponent from '../ui/ButtonComponent';
import UploadImageComponent from '../ui/ImageComponent';
import ImageComponent from '../ui/ImageComponent';
import TextComponent from '../ui/TextComponent';
import BoxComponent from '../ui/BoxComponent';
const RestaurantComponent = ({ initialData }) => {
    const initialRestaurantData = {
        name: "Restaurant Name",
        slogan: "Tasty Food, Happy Mood",
        image: "https://images.deliveryhero.io/image/talabat/restaurants/new_zushi_logo_2637812144107079318.jpg?width=300",
        address: "123 Food Street",
        phoneNumber: "123-456-7890",
        registrationDate: "2023-01-01",
        qrImage: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
        hasDriveThru: true,
        hasTakeaway: true,
        hasDelivery: true,
    };

    const [restaurantData, setRestaurantData] = useState(initialRestaurantData);
    const [editMode, setEditMode] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleEdit = () => setEditMode(true);
    const handleSave = () => setEditMode(false);
    const onChangeHandler = (e) => setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
    const imageChangeHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            setSelectedImage(image);
        }
    };

    const restaurantComponent = editMode ? (<span>   <TextComponent label="Edit Restaurant" />
        <div>
            <Grid container alignItems="center" justifyContent="space-between">
                <ImageComponent selectedImage={restaurantData.image} imageChangeHandler={imageChangeHandler} isUploadImage={true} />
                <ImageComponent selectedImage={restaurantData.qrImage} isUploadImage={true} />
            </Grid>
            <InputFieldComponent id="outlind-name" name="Name" value={restaurantData.name} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-slogan" name="Slogan" value={restaurantData.slogan} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-address" name="Address" value={restaurantData.address} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-registeration" name="Registeration" value={restaurantData.registrationDate} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-delivery" name="Delivery Available" value={restaurantData.hasDelivery} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-takeaway" name="Take Away Available" value={restaurantData.hasTakeaway} onChangeHandler={onChangeHandler} />
            <InputFieldComponent id="outlind-drivethru" name="Drive Thru Available" value={restaurantData.hasDriveThru} onChangeHandler={onChangeHandler} />
            <ButtonComponent label="Save" onClickHandler={handleSave} />
        </div></span>) : (<span><TextComponent label="Restaurant" />
            <div>
                <ImageComponent imageUrl={selectedImage} isUploadImage={true} isDisabled={true} />
                <InputFieldComponent id="outlind-name" name="Name" value={restaurantData.name} isDisabled={true} />
                <InputFieldComponent id="outlind-slogan" name="Slogan" value={restaurantData.slogan} isDisabled={true} />
                <InputFieldComponent id="outlind-address" name="Address" value={restaurantData.address} isDisabled={true} />
                <InputFieldComponent id="outlind-registeration" name="Registeration" value={restaurantData.registrationDate} isDisabled={true} />
                <InputFieldComponent id="outlind-delivery" name="Delivery Available" value={restaurantData.hasDelivery} isDisabled={true} />
                <InputFieldComponent id="outlind-takeaway" name="Take Away Available" value={restaurantData.hasTakeaway} isDisabled={true} />
                <InputFieldComponent id="outlind-drivethru" name="Drive Thru Available" value={restaurantData.hasDriveThru} isDisabled={true} />
                <ButtonComponent label="Edit" onClickHandler={handleEdit} />
            </div></span>);
    return (
        <BoxComponent childrens={restaurantComponent} />
    );
};

export default RestaurantComponent;