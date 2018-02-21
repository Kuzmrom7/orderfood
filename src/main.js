import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './layout/Dashboard';
import UserProfile from './layout/UserProfile';
import MenuPage from './layout/MenuPage';
import Diches from "./layout/Diches";
import Personals from "./layout/Personals";
import {Storage} from "./utils";
import MenuItem from "./layout/MenuItem";

const Main = () => {
  const Authenticated = ({component, ...rest}) => (
    <Route {...rest} render={(props) => {
      return (!!Storage().get("token"))
        ? (React.createElement(component, {...props}))
        : (<Redirect to="/signin"/>);
    }}/>
  );

  return (

    <Switch>
      <Authenticated exact path="/" component={Dashboard}/>
      <Authenticated exact path="/user" component={UserProfile}/>
      <Authenticated exact path="/menu" component={MenuPage}/>
      <Authenticated exact path="/dish" component={Diches}/>
      <Authenticated exact path="/personal" component={Personals}/>

      <Authenticated exact path='/menu/:name' component={MenuItem}/>
      {/* <Redirect from="/" to="/signin"/>*/}


    </Switch>
  );
};

export default Main;