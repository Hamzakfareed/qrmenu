import React, { useState } from 'react';
import { Box, Button, TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Grid } from "@mui/material";
import TextComponent from '../ui/TextComponent';
import ImageComponent from '../ui/ImageComponent';
import InputFieldComponent from '../ui/InputFieldComponent';
import ButtonComponent from '../ui/ButtonComponent';

const ProfileComponent = () => {
    const profileData = {
        displayName: "Hamza Fareed",
        image: "https://avatars.githubusercontent.com/u/25123404?v=4",
        address: "123 Food Street",
        phoneNumber: "123-456-7890",
        dateOfBirth: '04-04-1995'
    };

    const [profile, setProfile] = useState(profileData);
    const [editMode, setEditMode] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleEdit = () => setEditMode(true);
    const handleSave = () => setEditMode(false);
    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
    const handleSwitchChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.checked });
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            setSelectedImage(image);
        }
    };
    return (
        <div>
            {editMode ? (
                <Box p={2} boxShadow={1} component="form" sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }} noValidate autoComplete="off" onSubmit={handleSave}>
                    <TextComponent label="Profile" />
                    <div>
                        <ImageComponent isUploadImage={true} />
                        <InputFieldComponent name="Name" id="outlined-name" />
                        <InputFieldComponent name="Phone Number#" id="outlined-phoneNumber" />
                        <InputFieldComponent name="Address" id="outlined-address" />
                        <ButtonComponent label="Save" />
                    </div>

                </Box>) :
                ((
                    <Box p={2} boxShadow={1} component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }} noValidate autoComplete="off" onSubmit={handleSave}>
                        <TextComponent label="Profile" />
                        <div>
                            <ImageComponent isUploadImage={true} />
                            <InputFieldComponent isDisabled name="Name" id="outlined-name" />
                            <InputFieldComponent isDisabled name="Phone Number#" id="outlined-phoneNumber" />
                            <InputFieldComponent isDisabled name="Address" id="outlined-address" />
                            <ButtonComponent label="Edit" onClickHandler={handleEdit} />
                        </div>

                    </Box>))}
        </div>);

}

export default ProfileComponent;