import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import {style} from "./variables/Variables.jsx";
import Main from "./main";

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
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
