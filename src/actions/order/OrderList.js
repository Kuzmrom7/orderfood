import {Order} from '../../api';

import {ORDER_LIST_FAILURE, ORDER_LIST_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: ORDER_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ORDER_LIST_FAILURE,
  payload
});

export default (id_place) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Order.List(id_place)
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