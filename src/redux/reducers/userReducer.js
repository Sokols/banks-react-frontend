import {
    LOGIN_USER,
    REGISTER_USER
} from "../actions/types";

const initialState = [];

function userReducer(users = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER:
            return [...users, payload];

        case REGISTER_USER:
             return [...users, payload];

        default:
            return users;
    }
};

export default userReducer;