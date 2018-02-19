import {createReducer} from "../utils";
import {MENU_DISH_FETCH_FAILURE, MENU_DISH_FETCH_SUCCESS, MENU_FETCH_FAILURE, MENU_FETCH_SUCCESS} from "../constants";


const convert = (payload) => {

  return {
    typePlace: {
      name: payload.meta
    }

  };
};
const convert_dish = (payload) => {
  let user = {
    name: payload.name,
    description: payload.description,
    url: payload.url,
    timemin: payload.timemin,
    updated: payload.updated
  };

  return user;
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

export const menu_dish_fetch = createReducer(initialState, {
  [MENU_DISH_FETCH_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = convert_dish(payload[key]);
    });
    return newState;
  },
  [MENU_DISH_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [MENU_FETCH_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = (payload[key]);
    });
    return newState;
  },
  [MENU_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },


});

export default menu_dish_fetch;