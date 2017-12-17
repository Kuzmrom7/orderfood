import {createReducer} from "../utils";
import {PLACE_CREATE_FAILURE, PLACE_CREATE_SUCCESS, SESSION_CREATE_FAILURE} from "../constants";

const initialState = {};

const convert = (payload) => {
    let place = {
        id: payload.id || '',
        meta: payload.meta || {},
    };
    return menu
};

export const menu = createReducer(initialState, {
        [PLACE_CREATE_SUCCESS]: (state, payload) => {
            let newState = initialState;
            Object.keys(payload).forEach(function (key) {
                newState[payload[key].meta.name] = convert(payload[key]);
            });
            return newState;
        },
        [PLACE_CREATE_FAILURE]: (state) => {
            return Object.assign({}, state);
        },
    },
    {});

export default menu;