import {SESSION_REMOVE_SUCCESS} from '../../constants';

export const SuccessAction = {
  type: SESSION_REMOVE_SUCCESS
};

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(SuccessAction);
    resolve();
  })
};