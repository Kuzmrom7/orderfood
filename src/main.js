import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './layout/Dashboard';
import UserProfile from './layout/UserProfile';
import Menu from './layout/Menu';
import Diches from "./layout/Diches";
import Personal from "./layout/Personal";

const Main = () => {
/*  const Authenticated = ({component, ...rest}) => (
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
    }}/>*/

return (

    <Switch>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/user" component={UserProfile}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/diches" component={Diches}/>
      <Route path="/personal" component={Personal}/>


      <Redirect from="/" to="/signin"/>



    </Switch>
  );
};

export default Main;