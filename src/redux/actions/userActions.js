import {
    LOGIN_USER,
    REGISTER_USER
} from "./types";

import UserDataService from "../../services/userService";

export const loginUser = (email, username, password) => async (dispatch) => {
    try {
        const res = await UserDataService.loginUser({ email, username, password });

        dispatch({
            type: LOGIN_USER,
            payload: res.data,
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
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
};