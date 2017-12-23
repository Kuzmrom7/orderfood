import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Dish {

  static Create(name, url, typedish,timemin,description) {
    let uri = [api_host, "dish"].join("/");
    let body = {name: name, description:description ,timemin:parseInt(timemin),typedish:typedish, url:url};
    console.log("Data  ", uri,body)
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "listdish"].join("/");
    return requestJSON("GET", uri, null, true);
  }
  static ListType(){
    let uri = [api_host, "typedish"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Fetch() {
    let uri = [api_host, "typedish"].join("/");
    return requestJSON("GET", uri, null, true);
  }


}

export default Dish
