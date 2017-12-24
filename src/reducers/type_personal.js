import {createReducer, Storage} from "../utils";
import {
TYPE_PERSONAL_LIST_SUCCESS,
  TYPE_PERSONAL_LIST_FAILURE

} from "../constants";


const convert = (payload) => {

  return {
    typePlace: {
      name: payload.meta
    }

  };
};
const convert_type = (payload) => {
  let user = {
   id : payload.id,
    name: payload.name
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

export const type_dishes = createReducer(initialState, {
  [TYPE_PERSONAL_LIST_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = convert_type(payload[key].meta);
    });
    return newState;
  },
  [TYPE_PERSONAL_LIST_FAILURE]: (state) => {
    return Object.assign({}, state);
  },


});

export default type_dishes;