import {createReducer, Storage} from "../utils";
import {
PERSONAL_CREATE_SUCCESS,
  PERSONAL_CREATE_FAILURE,
  PERSONAL_LIST_SUCCESS,
PERSONAL_LIST_FAILURE
} from "../constants";


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
    phone: payload.phone,
    created: payload.created,
    updated:payload.updated
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
  [PERSONAL_CREATE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [PERSONAL_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [PERSONAL_LIST_SUCCESS]: (state,payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = convert_dish(payload[key]);
    });
    return newState;
  },
  [PERSONAL_LIST_FAILURE]: (state) => {
    return Object.assign({}, state);
  },




});

export default dish;