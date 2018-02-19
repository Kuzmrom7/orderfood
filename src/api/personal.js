import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Personal {

  static Create(nametypePerson, fio, phone) {
    let uri = [api_host, "personal"].join("/");
    let body = {nametypeperson: nametypePerson, fio: fio, phone: phone};
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "personal"].join("/");
    console.log("DATA!!!!", uri)
    return requestJSON("GET", uri, null, true);
  }

  static ListType() {

    let uri = [api_host, "typepersonal"].join("/");
    return requestJSON("GET", uri, null, true);
  }

}

export default Personal
