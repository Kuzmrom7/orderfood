import {Order} from '../../api';

import {ORDER_FETCH_SUCCESS, ORDER_FETCH_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: ORDER_FETCH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ORDER_FETCH_FAILURE,
  payload
});

export default (id_order) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Order.Fetch(id_order)
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