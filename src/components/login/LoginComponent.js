import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginSuccess, updateToken, logout } from './authActions';
import { API_URL } from '../../constants/constants';
import InputFieldComponent from '../ui/InputFieldComponent';
import ButtonComponent from '../ui/ButtonComponent';
import { Box } from '@mui/material';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const { token, isLoggedIn } = useSelector(state => state.auth);
    const [credentials, setCredentials] = useState('');

    useEffect(() => {
        // Check if the user is logged in and token is expired
        if (isLoggedIn && isTokenExpired(token)) {
            refreshToken();
        }
    }, [isLoggedIn, token]);

    const isTokenExpired = (token) => {
        // Implement token expiration check logic
    };

    const refreshToken = async () => {

        try {
            const response = await axios.get('/api/refresh_token'); // Replace with your API endpoint
            dispatch(updateToken(response.data.token));
        } catch (error) {
            console.error('Error refreshing token', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginUrl = API_URL + "/api/v1/login";
        try {
            console.log("Credentials: ", credentials);
            const response = await axios.post(loginUrl, credentials ); // Replace with your API endpoint
            dispatch(loginSuccess(response.data.token));
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    const onInputChangeHandler = (event) => {
        const {name, value} = event.target;
        setCredentials(prevFormData => ({
            ...prevFormData,
            [name]: value
          }));
    }

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {!isLoggedIn ? (
                <Box p={2} boxShadow={1} component="form" sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }} noValidate autoComplete="off" onSubmit={handleLogin}>
                    <InputFieldComponent name="username" id="outlined-username" value={credentials.username} onChangeHandler={onInputChangeHandler}/>
                    <InputFieldComponent name="password" id="outlined-password" value={credentials.password} onChangeHandler={onInputChangeHandler}/>
                    <ButtonComponent label="Sign In" type="submit"/>
                </Box>
            ) : (<div></div>)}
        </div>
    );
};

export default LoginComponent;
