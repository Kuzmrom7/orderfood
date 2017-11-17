import React, {Component} from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'


class HeaderLinks extends Component{

    render(){
        return (
            <div>
                <Nav pullRight>
                    <NavItem eventKey={2} href="#">
                      <Link to={"/signin"}>
                      Log out
                      </Link>
                    </NavItem>

                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
