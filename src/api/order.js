import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_NODEMON;

class Order {

  static List(id_place) {
    let uri = [api_host, "order/place",id_place].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Fetch(id_order) {
    let uri = [api_host, "order",id_order].join("/");
    return requestJSON("GET", uri, null, true);
  }


}

export default Order
