import {createReducer, Storage} from "../utils";
import {
  TYPE_DISH_LIST_SUCCESS,
  TYPE_DISH_LIST_FAILURE,
  DISH_CREATE_SUCCESS,
  DISH_CREATE_FAILURE
} from "../constants";


const convert = (payload) => {

  return {
    typePlace: {
      name: payload.meta
    }

  };
};
const convert_place = (payload) => {
  let user = {
    name: payload.name,
    phone: payload.phone,
    url: payload.url,
    adress: payload.adress,
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

export const dish = createReducer(initialState, {
  [TYPE_DISH_LIST_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = payload[key].meta.name;
    });
    return newState;
  },
  [TYPE_DISH_LIST_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_CREATE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [DISH_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },



});

export default dish;