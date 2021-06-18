import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    USER_ERROR_OCCURED,
    USER_ERROR_REMOVED
} from "../actions/types";

const initialState = {
    errorMessage: '',
    user: null,
    authToken: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER:
            return { ...state, user: payload.user, authToken: payload.authToken }

        case REGISTER_USER:
            return { ...state, user: payload.user, authToken: payload.authToken }

        case LOGOUT_USER:
            return { ...state, user: null, authToken: '' }

        case USER_ERROR_OCCURED:
            return { ...state, errorMessage: payload }

        case USER_ERROR_REMOVED:
            return { ...state, errorMessage: '' }

        default:
            return state;
    }
};