import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducer";


// ---------------------------------------REDUCER----------------------------------------------
export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}

// ---------------------------------------REQUEST FOR SERVER ----------------------------------------------
export function requestJSON(method, url, body, auth) {

  let headers = {};
  headers["Content-Type"] = "app/json";

  if (auth) {
    headers["Authorization"] = ["Bearer", Storage().get("token")].join(" ");
  }

  let opts = {};
  opts.method = method;
  opts.headers = headers;

  if (!!body) {
    opts.body = JSON.stringify(body);
  }
  return fetch(url, opts)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json().then((res) => {
          return res;
        }).catch((e) => {
          return response;
        });
      }

      return response.json().then((e) => {
        throw e;
      });
    });
}

// ---------------------------------------LOCAL STORAGE ----------------------------------------------
export function Storage() {

  window.addEventListener('storage', storeEvent, false);

  function storeEvent(event) {
    setTimeout(handle(event.key, event.newValue, event.oldValue), 0);
  }

  let Events = function () {
    this.size = 0;
    this.get = (key) => this[key];
    this.has = (key) => this.hasOwnProperty(key);

    this.set = (key, value) => {
      if (!this.has(key)) this.size++;
      this[key] = value;
      return value;
    };

    this.update = (key, value, extend) => {
      extend = extend || true;
      if (!this.has(key)) {
        this.size++;
        this[key] = value;
      } else {
        this[key] = extend ? Object.assign(this[key], value) : Object.merge(this[key], value);
      }
      return this[key];
    };

    this.remove = (key) => {
      if (this.has(key)) {
        delete this[key];
        this.size--;
      }
    };

    return this
  };

  let events = new Events();

  function handle(key, val, old) {
    if (val === 'undefined') return;
    let handlers = events.get(key);
    if (!handlers || !handlers.forEach) return false;
    handlers.forEach((func) => func(val, old));
  }

  let storage = {
    get(k) {
      return localStorage.getItem(k);
    },
    set(k, v) {
      this.remove(k);
      localStorage.setItem(k, v);
    },
    remove(k) {
      localStorage.removeItem(k);
    },
    on: (key, handler) => {
      if (!events.has(key)) events.set(key, []);
      events.get(key).push(handler);
    },
    off: (key, handler) => {
      if (!handler) return events.remove(key);
      let arr = events.get(key);
      let index = arr.findIndex(handler);
      if (index > 0) arr.splice(index, 1);
    },
  };

  return storage;
}

// ---------------------------------------CONFIGURED STORE REDUX ----------------------------------------------
export function configureStore() {
  const devTools = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ?
    window.devToolsExtension() : f => f;

  const middleware = applyMiddleware(
    thunk,
    logger,
  );

  const enhancer = compose(
    middleware,
    devTools
  );

  return createStore(
    rootReducer,
    enhancer
  );
}