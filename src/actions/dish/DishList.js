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

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Dish.List()
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