import {
    ADD_BANK,
    DELETE_BANK
} from "../actions/types";

const initialState = {
    banks: []
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_BANK:
            return { ...state, banks: payload }

        case DELETE_BANK:
            return { ...state, banks: [] }

        default:
            return state;
    }
};