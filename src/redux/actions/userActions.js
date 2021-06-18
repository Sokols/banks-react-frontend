import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    USER_ERROR_OCCURED,
    USER_ERROR_REMOVED
} from "./types";

import { encode } from 'base-64';

import UserDataService from "../../services/userService";

export const loginUser = (user) => async (dispatch) => {
    try {
        const res = await UserDataService.loginUser(user);
        dispatch({
            type: LOGIN_USER,
            payload: { user: res.data, authToken: getAuthToken({ username: res.data.username, password: user.password }) },
        });
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
            payload: { user: res.data, authToken: getAuthToken({ username, password }) },
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const logoutUser = () => (dispatch) => {
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

const getAuthToken = ({ username, password }) => {
    return encode(username + ":" + password);
}