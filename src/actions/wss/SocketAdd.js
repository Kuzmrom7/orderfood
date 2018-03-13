import {SOCKET_CONNECT} from "../../constants";

const SuccessAction = (payload) => ({
  type: SOCKET_CONNECT,
  payload
});


export default (socket, place_id,) => (dispatch) => {
  return new Promise(() => {
    socket.on(place_id, (data) => {
      dispatch(SuccessAction(data))
    });
  })
};
