import {Order} from '../../api';

import {ORDER_STATUS_UPDATE_SUCCESS, ORDER_STATUS_UPDATE_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: ORDER_STATUS_UPDATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ORDER_STATUS_UPDATE_FAILURE,
  payload
});

export default (id_order,status) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Order.StatusUpdate(id_order,status)
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