import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Place {

  static Create(name, nametypeplace) {
    let uri = [api_host, "place"].join("/");
    let body = {name: name, nametypeplace: nametypeplace};
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "typeplace"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Fetch() {
    let uri = [api_host, "place"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Update(phone, url, adress) {
    let uri = [api_host, "place"].join("/");
    let body = {phone: phone, adress: adress, url: url, city: ""};
    return requestJSON("PUT", uri, body, true);
  }


}

export default Place