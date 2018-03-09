import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Adrress {

  static Create (name, idPlace) {
    let uri = [api_host, "adress"].join("/");
    let body = {name: name, id_place: idPlace};
    return requestJSON("POST", uri, body, true);
  }

  static List (){
    let uri = [api_host, "adress"].join("/");
    return requestJSON("GET", uri, null, true);
  }

}

export default Adrress;