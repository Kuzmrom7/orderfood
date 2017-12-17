import {createReducer, Storage} from "../utils";

import {SESSION_CREATE_FAILURE, SESSION_CREATE_SUCCESS, SESSION_REMOVE_SUCCESS} from "../constants";

const initialState = {
    token: Storage().get("token")
};

export default createReducer(initialState, {
    [SESSION_CREATE_SUCCESS]: (state, payload) => {
        let newState = Object.assign({}, state);
        let token = (!!payload && !!payload.token) ? payload.token : null;
        newState.token = token;
        Storage().set("token", token);
        return newState;
    },
    [SESSION_CREATE_FAILURE]: (state) => {
        return Object.assign({}, state);
    },
    [SESSION_REMOVE_SUCCESS]: (state) => {
        let newState = Object.assign({}, state);
        Storage().remove("token");
        newState.token = null;
        return newState;
    }
});