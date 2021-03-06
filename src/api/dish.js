import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Dish {

  static Create(data) {
    let uri = [api_host, "dish"].join("/");

    let body = {
      name: data.name,
      description: data.description,
      timemin: parseInt(data.timemin, 10),
      idtypedish: data.idtypedish,
      urls: data.urls,
      specs : data.specs
    };
    return requestJSON("POST", uri, body, true);
  }

  static List(id_place) {
    let uri = [api_host, "dish/place",id_place].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Remove(id) {
    let uri = [api_host, "dish", id].join("/");
    return requestJSON("DELETE", uri , null,true);
  }

  static ListType() {
    let uri = [api_host, "type/dish"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Fetch() {
    let uri = [api_host, "typedish"].join("/");
    return requestJSON("GET", uri, null, true);
  }


}

export default Dish
