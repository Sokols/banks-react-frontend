import {
    GET_ALL_ACCOUNTS
} from "../actions/types";

const initialState = {
    accounts: []
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};