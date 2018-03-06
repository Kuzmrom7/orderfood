import {createReducer} from "../utils";
import {
  MENU_CREATE_FAILURE,
  MENU_CREATE_SUCCESS,
  MENU_LIST_FAILURE,
  MENU_LIST_FETCH_SUCCESS,
  MENU_LIST_SUCCESS
} from "../constants";


const convert = (payload) => {
  return {
    id: payload.id || '',
    meta: payload.meta || {},
  }
};
const convert_menu = (payload) => {
  return {
    name: payload.name,
    url: payload.url,
    id: payload.id
  };
};

/*
const convert_fetch = (payload) => {
  let user = {
    name: payload.name,
    url: payload.url,
    updated: payload.updated
  };

  return user;
};
*/

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
    [MENU_LIST_FETCH_SUCCESS]: (state, payload) => {
      let newState = initialState;
      Object.keys(payload).forEach(function (key) {
        newState[payload[key].meta.name] = convert(payload[key]);
      });
      return newState;
    },
    [MENU_LIST_SUCCESS]: (state, payload) => {
      let newState = initialState;
      Object.keys(payload).forEach(function (key) {
        newState[key] = convert_menu(payload[key]);
      });
      return newState;
    },
    [MENU_LIST_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
    [MENU_CREATE_SUCCESS]: (state) => {
      return Object.assign({}, state);
    },
    [MENU_CREATE_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
  },
  {});

export default menu;