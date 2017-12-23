import {Menu} from '../../api';

import {MENU_LIST_FAILURE, MENU_LIST_SUCCESS  } from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_LIST_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.List()
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