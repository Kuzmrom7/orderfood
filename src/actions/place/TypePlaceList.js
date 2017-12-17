import {Place} from '../../api';

import {TYPEPLACE_LIST_SUCCESS, TYPEPLACE_LIST_FAILURE  } from '../../constants';


const SuccessAction = (payload) => ({
    type: TYPEPLACE_LIST_SUCCESS,
    payload
});

const FailureAction = (payload) => ({
    type: TYPEPLACE_LIST_FAILURE,
    payload
});

export default () => (dispatch) => {
    return new Promise((resolve, reject) => {
        Place.List()
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