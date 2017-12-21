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

}

export default Place
