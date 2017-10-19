import React, {Component} from 'react';
import { } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../Header/HeaderLinks.jsx';

import imagine from '../../assets/img/sidebar-2.jpg';
import logo from '../../assets/img/reactlogo.png';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
                        <a  className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>
                        </a>
                        <a  className="simple-text logo-normal">
                            OrderFood
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        <li className={this.activeRoute("/dashboard")}>
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/user")}>
                            <NavLink to={'/user'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/'} className="nav-link" activeClassName="">
                                <i className="fa fa-cutlery"></i>
                                <p>Menu</p>
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/'} className="nav-link" activeClassName="">
                                <i className="fa fa-lemon-o"></i>
                                <p>Dishes</p>
                            </NavLink>
                        </li>

                       {/* <li className={this.activeRoute("/table")}>
                            <NavLink to={'/table'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-note2"></i>
                                <p>Table List</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/typography")}>
                            <NavLink to={'/typography'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-news-paper"></i>
                                <p>Typography</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/icons")}>
                            <NavLink to={'/icons'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-science"></i>
                                <p>Icons</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/notifications")}>
                            <NavLink to={'/notifications'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-bell"></i>
                                <p>Notifications</p>
                            </NavLink>
                        </li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
