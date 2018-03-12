import {Dish} from '../../api';

import {DISH_LIST_FAILURE, DISH_LIST_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: DISH_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: DISH_LIST_FAILURE,
  payload
});

export default (id_place) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Dish.List(id_place)
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