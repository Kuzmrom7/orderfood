import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Menu {

  static Create(name,placename, url) {
    let uri = [api_host, "menu"].join("/");
    let body = {name: name,nameplace:placename ,url: url};
    return requestJSON("POST", uri, body, true);
  }

  static List() {
    let uri = [api_host, "menu"].join("/");
    return requestJSON("GET", uri, null, true);
  }
  static Add(nameDish,nameMenu) {
    let uri = [api_host, "menudish"].join("/");
    let body = {namemenu: nameMenu,namedish:nameDish};
    return requestJSON("POST", uri, body, true);
  }
  static MenuDish(nameMenu,nameTypeDish) {
    let uri = [api_host, "menudish","list"].join("/");
    let body = {nameMenu: nameMenu, nameTypeDish:nameTypeDish};
    console.log("Data  ", uri,body)
    return requestJSON("POST", uri, body, true);
  }

}

export default Menu
