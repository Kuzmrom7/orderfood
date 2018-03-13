import {createReducer} from "../utils";
import {
  SOCKET_CONNECT,
} from "../constants";


const convert = (payload) => {

  return {
    id_place : payload.id_place,
    id_dish  : payload.id_dish,
    name_user : payload.name_user,
    phone : payload.phone,
    dishes : payload.dishes,
    total : payload.total
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

export const socket = createReducer(initialState, {
  [SOCKET_CONNECT]: (state, payload) => {
    let newState = initialState;
    console.log()
    Object.keys(payload).forEach(function (key) {
      newState[payload[key]] = convert(payload[key]);
    });
    return newState;
  },


});

export default socket;