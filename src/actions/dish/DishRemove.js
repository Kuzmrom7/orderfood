import {Dish} from '../../api';

import {DISH_REMOVE_SUCCESS, DISH_REMOVE_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: DISH_REMOVE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: DISH_REMOVE_FAILURE,
  payload
});

export default (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Dish.Remove(id)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error);
      })
  })
};