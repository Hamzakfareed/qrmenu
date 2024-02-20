import axios from "axios";
import { API_URL } from "../constants/constants";

export async  function createUser(formData) {

    const signUpUrl = API_URL + "/api/v1/signup";
    try {
        const response = await axios.post(signUpUrl, formData);
        return response.data;
    } catch (error) {
        handleError(error);
    }
}


export async function loginUser(formData) {
    const signInUrl = API_URL +"/api/v1/login";
    try {
        return await axios.post(signInUrl, formData);
    }catch(error) {
        return handleError(error);
    }
}

function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error status:', error.response.status);
        console.error('Error data:', error.response.data);
        // Extract and return error message
        return error.response.data.message; // Adjust based on your API's error structure
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        return 'No response received';
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        return error.message;
    }
}
export default createUser;