import {createReducer} from "../utils";
import {PLACE_CREATE_FAILURE, PLACE_CREATE_SUCCESS, TYPEPLACE_LIST_FAILURE,TYPEPLACE_LIST_SUCCESS} from "../constants";


const convert = (payload) => {

    return {

    name: payload.meta

    };
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

export const place = createReducer(initialState, {
        [PLACE_CREATE_SUCCESS]: (state, payload) => {
            let newState = initialState;
            Object.keys(payload).forEach(function (key) {
                newState[payload[key].meta] = convert(payload[key]);
            });
            return newState;
        },
        [PLACE_CREATE_FAILURE]: (state) => {
            return Object.assign({}, state);
        },
        [TYPEPLACE_LIST_SUCCESS]: (state,payload) => {
            let newState = initialState;
            Object.keys(payload).forEach(function (key) {
                console.log("reducer", payload[key])
                newState[key] = payload[key].meta.name;
            });
            return newState;
        },
    });

export default place;