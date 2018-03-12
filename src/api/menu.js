import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Menu {

  static Create(name, placeid, url) {
    let uri = [api_host, "menu"].join("/");
    let body = {name: name, id_place: placeid, url: url};
    return requestJSON("POST", uri, body, true);
  }

  static List(id_place) {
    let uri = [api_host, "menu/place",id_place].join("/");
    return requestJSON("GET", uri, null, true);
  }

  static Add(idMenu, idDish) {
    let uri = [api_host, "menu",idMenu,"dish",idDish].join("/");
    return requestJSON("POST", uri, null, true);
  }

  static RemoveDish(idMenu, idDish) {
    let uri = [api_host, "menu",idMenu,"dish",idDish].join("/");
    return requestJSON("DELETE", uri, null, true);
  }

  static MenuFetch(menuId,id_place) {
    let uri = [api_host, "menu",menuId,"place", id_place, "dish"].join("/");
    return requestJSON("GET", uri, null, true);
  }

}

export default Menu
