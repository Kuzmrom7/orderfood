import {Place} from '../../api'
import {PLACE_FETCH_FAILURE, PLACE_FETCH_SUCCESS} from "../../constants"

const SuccessAction = (payload) => ({
  type: PLACE_FETCH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PLACE_FETCH_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Place.Fetch()
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response)
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error)
      })
  })
}