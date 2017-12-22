import React, {Component} from 'react';
import { } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../components/Header/HeaderLinks.jsx';

import imagine from '../assets/img/sidebar-3.jpg';
import logo from '../assets/img/reactlogo.png';

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
    const {place} = this.props;
    return (
      <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
        <div className="sidebar-background" style={sidebarBackground}/>
        <div className="logo">
          <a  className="simple-text logo-normal">
            <img src={logo} alt="logo_image" width={30}/>
            rderFood
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            { this.state.width <= 991 ? (<HeaderLinks />):null }
            <li className={this.activeRoute("/dashboard")}>
              <NavLink to={'/'} className="nav-link" activeClassName="active">
                <i className="pe-7s-graph"/>
                <p>{place.name}</p>
              </NavLink>
            </li>
            <li className={this.activeRoute("/user")}>
              <NavLink to={'/user'} className="nav-link" activeClassName="active">
                <i className="pe-7s-user"/>
                <p>Профиль</p>
              </NavLink>
            </li>
            <li className={this.activeRoute("/menu")}>
              <NavLink to={'/menu'} className="nav-link" activeClassName="active">
                <i className="fa fa-bars"/>
                <p>Меню</p>
              </NavLink>
            </li>
            <li className="">
              <NavLink to={'/diches'} className="nav-link" activeClassName="active">
                <i className="fa fa-cutlery"/>
                <p>Блюда</p>
              </NavLink>
            </li>
            <li className="">
              <NavLink to={'/personal'} className="nav-link" activeClassName="active">
                <i className="fa fa-users"/>
                <p>Персонал</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
