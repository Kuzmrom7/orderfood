import {Menu} from '../../api';
import {MENU_DISH_REMOVE_SUCCESS, MENU_DISH_REMOVE_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_DISH_REMOVE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_DISH_REMOVE_FAILURE,
  payload
});

export default (idMenu, idDish) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.RemoveDish(idMenu, idDish)
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