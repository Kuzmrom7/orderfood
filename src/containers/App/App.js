import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Dashboard from '../../layout/Dashboard/Dashboard';
import UserProfile from '../../layout/UserProfile/UserProfile';
import TableList from '../../layout/TableList/TableList';
import Typography from '../../layout/Typography/Typography';
import Icons from '../../layout/Icons/Icons';
import Notifications from '../../layout/Notifications/Notifications';
import Menu from '../../layout/Menu';
import Diches from "../../layout/Diches";
import Personal from "../../layout/Personal";

import Header from '../../components/Header/Header';

import Sidebar from '../../components/Sidebar/Sidebar';

import {style} from "../../variables/Variables.jsx";

/*const Authenticated = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (!!Storage().get("token"))?
      (React.createElement(component, { ...props})) :
      (<Redirect to="/signin" />);
  }} />
);*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style}/>
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props}/>

          <Switch>

            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/user" component={UserProfile}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/diches" component={Diches}/>
            <Route path="/personal" component={Personal}/>


            <Redirect from="/" to="/signin"/>

            {/* Неиспользуемы роуты*/}
            <Route path="/table" component={TableList}/>
            <Route path="/typography" component={Typography}/>
            <Route path="/icons" component={Icons}/>
            <Route path="/notifications" component={Notifications}/>

          </Switch>

          {/*<Footer />*/}
        </div>
      </div>


    );
  }
}

export default App;
