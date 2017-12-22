import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Account {

    static Create(username, email, password) {
        let uri = [api_host, "user"].join("/");
        let body = {username: username, email: email, password: password};
        return requestJSON("POST", uri, body, false);
    }
    static Fetch(){
      let uri = [api_host, "user"].join("/");
      return requestJSON("GET", uri, null, true);
    }

}

export default Account
