import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Menu {

  static Create(name, placeid, url) {
    let uri = [api_host, "menu"].join("/");
    let body = {name: name, id_place: placeid, url: url};
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "menu"].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Add(nameDish, nameMenu) {
    let uri = [api_host, "menudish"].join("/");
    let body = {namemenu: nameMenu, namedish: nameDish};
    return requestJSON("POST", uri, body, true);
  }

  static MenuFetch(menuId) {
    let uri = [api_host, "menu",menuId,"dish"].join("/");
    return requestJSON("GET", uri, null, true);
  }

}

export default Menu
