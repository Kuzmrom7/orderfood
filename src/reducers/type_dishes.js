import {createReducer} from "../utils";
import {TYPE_DISH_LIST_FAILURE, TYPE_DISH_LIST_SUCCESS} from "../constants";

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

export const type_dishes = createReducer(initialState, {

  [TYPE_DISH_LIST_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = {
        id: payload[key].meta.id,
        name: payload[key].meta.name
      };
    });
    return newState;
  },
  [TYPE_DISH_LIST_FAILURE]: (state) => {
    return Object.assign({}, state);
  },


});

export default type_dishes;