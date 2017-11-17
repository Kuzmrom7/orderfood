import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {browserHistory, Router} from 'react-router';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    HashRouter,
  BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';


import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import App from './containers/App/App.jsx';
import Main from './containers/Main/Main';
import reducers from './reducers/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signin" name="Home" component={Main}/>
                <Route path="/" name="Home" component={App}/>

            </Switch>
        </BrowserRouter>
    </Provider>
),document.getElementById('root'));
