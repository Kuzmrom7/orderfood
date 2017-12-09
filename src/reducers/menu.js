import {createReducer} from "../utils";
import {MENU_LIST_FETCH_SUCCESS} from "../constants";

const initialState = {};

const convert = (payload) => {
  let menu = {
    id: payload.id || '',
    meta: payload.meta || {},
  };
  return menu
};

export const menu = createReducer(initialState, {
    [MENU_LIST_FETCH_SUCCESS]: (state, payload) => {
      let newState = initialState;
      Object.keys(payload).forEach(function (key) {
        newState[payload[key].meta.name] = convert(payload[key]);
      });
      return newState;
    }
  },
  {});

export default menu;