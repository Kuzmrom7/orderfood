import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import App from './App.js';
import reducers from './reducers/index';
import PageSignUp from "./layout/PageSignUp";
import PageSignIn from "./layout/PageSignIn";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/signup" name="Home" component={PageSignUp}/>
        <Route path="/signin" name="Home" component={PageSignIn}/>
        <Route path="/" name="Home" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
