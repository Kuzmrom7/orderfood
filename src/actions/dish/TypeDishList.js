import {Dish} from '../../api';

import {TYPE_DISH_LIST_FAILURE, TYPE_DISH_LIST_SUCCESS  } from '../../constants';


const SuccessAction = (payload) => ({
  type: TYPE_DISH_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: TYPE_DISH_LIST_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Dish.ListType()
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