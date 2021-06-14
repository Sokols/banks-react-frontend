import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    USER_ERROR_OCCURED,
    USER_ERROR_REMOVED
} from "./types";

import UserDataService from "../../services/userService";

export const loginUser = (user) => async (dispatch) => {
    try {
        const res = await UserDataService.loginUser(user);
        console.log(res.data)
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
        console.log("User logged in!");
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const registerUser = ({ email, username, password }) => async (dispatch) => {
    try {
        const res = await UserDataService.registerUser({ email, username, password });
        dispatch({
            type: REGISTER_USER,
            payload: res.data,
        });
        console.log("User registered!");
        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
};

export const logoutUser = () => (dispatch) => {
    console.log("User logged out!");
    dispatch({
        type: LOGOUT_USER
    });
};

export const removeErrorMessage = () => (dispatch) => {
    dispatch({ 
        type: USER_ERROR_REMOVED 
    });
}

export const addErrorMessage = (message) => (dispatch) => {
    dispatch({
        type: USER_ERROR_OCCURED,
        payload: message
    });
}