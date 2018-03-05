import {Dish} from '../../api';

import {DISH_CREATE_FAILURE, DISH_CREATE_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: DISH_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: DISH_CREATE_FAILURE,
  payload
});

export default (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Dish.Create(data)
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