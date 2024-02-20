import { FormControl } from "@mui/material";
import React, { useState } from "react";

const ImageComponent = ({selectedImage,isUploadImage, imageChangeHandler}) => {
    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            {selectedImage && (
                <div style={{ marginTop: 20 }}>
                    {/* <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ height: '100px' }} /> */}
                </div>
            )}

            {isUploadImage && (
                <input accept="image/*" style={{ display: 'none' }} id="upload-image" multiple type="file" onChange={imageChangeHandler} />
            )}
        </FormControl>
    );
}

export default ImageComponent;