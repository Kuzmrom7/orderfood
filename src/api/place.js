import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Place {

  static Create(name, typesplace) {
    console.log(typesplace);
    let uri = [api_host, "place"].join("/");
    let body = {name: name, typesplace: [typesplace]};
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "type/place"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Fetch() {
    let uri = [api_host, "place"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Update(id, city, phone, url) {
    let uri = [api_host, "place"].join("/");
    let body = {id: id, city: city, phone: phone, url: url};
    return requestJSON("PUT", uri, body, true);
  }


}

export default Place
