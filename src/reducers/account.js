import {createReducer, Storage} from "../utils";

import {
    ACCOUNT_CREATE_FAILURE,
    ACCOUNT_CREATE_SUCCESS,
} from "../constants";

const initialState = {
    meta: {
        id: "",
        email: "",
        username: "",
        balance: "",
        subscription: "",
    },
    emails: [],
};

export default createReducer(initialState, {

    [ACCOUNT_CREATE_SUCCESS]: (state, payload) => {
        //let token = (!!payload && !!payload.token) ? payload.token : null;
        let newState = Object.assign({}, state);
        //Storage().set("token", token);
        return newState;
    },
    [ACCOUNT_CREATE_FAILURE]: (state) => {
        return Object.assign({}, state);
    }
});