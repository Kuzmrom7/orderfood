import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';



import {BrowserRouter, Route, Switch} from 'react-router-dom';


import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import App from './App.js';
import PageSignUp from "./layout/PageSignUp";
import PageSignIn from "./layout/PageSignIn";
import {configureStore} from "./utils";

const store = configureStore();


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
