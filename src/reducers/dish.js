import {createReducer} from "../utils";
import {
  DISH_CREATE_FAILURE,
  DISH_CREATE_SUCCESS,
  DISH_LIST_FAILURE,
  DISH_LIST_SUCCESS,
  DISH_REMOVE_FAILURE,
  DISH_REMOVE_SUCCESS
} from "../constants";


const convert_dish = (payload) => {
  return {
    id: payload.id,
    name: payload.name,
    description: payload.description,
    urls: payload.urls,
    specs: payload.specs,
    timemin: payload.timemin
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

export const dish = createReducer(initialState, {
  [DISH_CREATE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_LIST_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = convert_dish(payload[key]);
    });
    return newState;
  },
  [DISH_LIST_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_REMOVE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_REMOVE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },


});

export default dish;