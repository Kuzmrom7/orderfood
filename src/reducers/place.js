import {createReducer} from "../utils";
import {PLACE_CREATE_FAILURE, PLACE_CREATE_SUCCESS, TYPEPLACE_LIST_FAILURE,TYPEPLACE_LIST_SUCCESS} from "../constants";


const convert = (payload) => {
    return {
        meta: payload.meta || {},
        namespaces: payload.namespaces || [],
    };

const stateExtension = (state) => {
    Object.defineProperty(state, 'filter', {
        value: (match) => {
            return Object.keys(state).reduce((prev, el) => {
                const item = state[el];
                if ((item.meta.name.toLowerCase().indexOf(match.toLowerCase()) !== -1)
                    || (item.meta.description.toLowerCase().indexOf(match.toLowerCase()) !== -1)) prev[el] = item;
                return prev;
            }, {});
        },
        writable: true,
        enumerable: false
    });

    return state;
};





const initialState = stateExtension({});

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
        [TYPEPLACE_LIST_SUCCESS]: (state) => {
            let newState = initialState;
            Object.keys(payload).forEach(function (key) {
                newState[payload[key].meta.name] = convert(payload[key]);
            });
            return newState;
        },
    },
    {});

export default menu;