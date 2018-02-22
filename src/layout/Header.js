import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';

import HeaderLinks from '../components/Header/HeaderLinks';

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }

  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });

    }
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');
    let node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle('nav-open');
    };
    document.body.appendChild(node);
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Nav>
            <NavItem>
              {this.props.place.name}
            </NavItem>
          </Nav>
          <Navbar.Toggle onClick={this.mobileSidebarToggle}/>
        </Navbar.Header>
        <Navbar.Collapse id="header_navbar">
          <HeaderLinks {...this.props}/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
