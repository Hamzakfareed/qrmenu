import { LOGIN_SUCCESS, LOGOUT, UPDATE_TOKEN } from './authActions';

const initialState = {
    token: null,
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload, isLoggedIn: true };
        case LOGOUT:
            return { ...state, token: null, isLoggedIn: false };
        case UPDATE_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
};

export default authReducer;
