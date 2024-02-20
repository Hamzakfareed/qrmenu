// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

// Action Creators
export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token,
});

export const logout = () => ({
    type: LOGOUT,
});

export const updateToken = (token) => ({
    type: UPDATE_TOKEN,
    payload: token,
});
