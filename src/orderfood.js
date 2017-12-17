import React, {Component} from 'react'
import {Storage} from "./utils";
import {Redirect, Route, Switch} from 'react-router-dom';
import PageSignUp from "./layout/PageSignUp";
import PageSignIn from "./layout/PageSignIn";
import App from './App.js';
import {style} from "./variables/Variables";

/*const orderfood = () => {
    const Authenticated = ({component, ...rest}) => (
        <Route {...rest} render={(props) => {
            return (!!Storage().get("token"))
                ? (React.createElement(component, {...props}))
                : (<Redirect to="/signin"/>);
        }}/>
    );
    const Identificated = ({component, ...rest}) => (
        <Route {...rest} render={(props) => {
            return (!!Storage().get("token"))
                ? (<Redirect to="/"/>)
                : (React.createElement(component, {...props}));
        }}/>);



    return (

        <Switch>
            <Authenticated exact path="/" component={App}/>
            {/!*************** Identification **************!/}

            <Identificated exact path="/signin" component={PageSignIn}/>
            <Identificated exact path="/signup" component={PageSignUp}/>




        </Switch>
    );
};*/
const Authenticated = ({component, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (!!Storage().get("token"))
            ? (React.createElement(component, {...props}))
            : (<Redirect to="/signin"/>);
    }}/>
);
const Identificated = ({component, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (!!Storage().get("token"))
            ? (<Redirect to="/"/>)
            : (React.createElement(component, {...props}));
    }}/>);
class orderfood extends Component {

    render() {


        return (

            <Switch>
                <Authenticated exact path="/" component={App}/>
                {/!*************** Identification **************!/}

                <Route exact path="/signin" component={PageSignIn}/>
                <Route exact path="/signup" component={PageSignUp}/>




            </Switch>
        );
    }
}


export default orderfood;