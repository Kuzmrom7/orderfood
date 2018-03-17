import {createReducer} from "../utils";
import {ORDER_LIST_FAILURE, ORDER_LIST_SUCCESS,ORDER_FETCH_SUCCESS,ORDER_FETCH_FAILURE,ORDER_STATUS_UPDATE_SUCCESS,ORDER_STATUS_UPDATE_FAILURE} from "../constants";


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
    [ORDER_LIST_SUCCESS]: (state, payload) => {
      let newState = {};
      Object.keys(payload.reverse()).forEach(function (key) {
        newState[payload[key]._id] = (payload[key]);
      });
      return newState;
    },
    [ORDER_LIST_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
    [ORDER_FETCH_SUCCESS]: (state) => {
      return Object.assign({}, state);
    },
    [ORDER_FETCH_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
    [ORDER_STATUS_UPDATE_SUCCESS]: (state) => {
      return Object.assign({}, state);
    },
    [ORDER_STATUS_UPDATE_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
  },
  {});

export default menu;