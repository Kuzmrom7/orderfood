import {Menu} from '../../api';
import {MENU_DISH_FETCH_SUCCESS,MENU_DISH_FETCH_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_DISH_FETCH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_DISH_FETCH_FAILURE,
  payload
});

export default ( nameMenu,nameType) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.MenuDish(nameMenu, nameType)
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