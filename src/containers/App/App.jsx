import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Dashboard from '../../layout/Dashboard/Dashboard';
import UserProfile from '../../layout/UserProfile/UserProfile';
import TableList from '../../layout/TableList/TableList';
import Typography from '../../layout/Typography/Typography';
import Icons from '../../layout/Icons/Icons';
import Notifications from '../../layout/Notifications/Notifications';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

import {style} from "../../variables/Variables.jsx";


class App extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        var _notificationSystem = this.refs.notificationSystem;
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        _notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>OrderFood</b> - Roman Kuzmenko great developer.
                </div>
            ),
            level: 'success',
            position: "tr",
            autoDismiss: 15,
        });
        _notificationSystem.addNotification({
            title: (<span data-notify="icon" className="fa fa-check-square"></span>),
            message: (
                <div>
                    Kirill Levin superMAN!
                </div>
            ),
            level: 'info',
            position: "tr",
            autoDismiss: 15,
        });
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
                                <Route path="/table" component={TableList}/>
                                <Route path="/typography" component={Typography}/>
                                <Route path="/icons" component={Icons}/>
                                <Route path="/notifications" component={Notifications}/>
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>

                        {/*<Footer />*/}
                    </div>
                </div>


        );
    }
}

export default App;
