import React, {Component} from 'react';
import { NavItem, Nav } from 'react-bootstrap';
/*import Session from "../../actions/session";*/
import {connect} from "react-redux";



class HeaderLinks extends Component{

    handlerSessionRemove = (login, password) => {
        console.log("SESSION")
       /* let dispatch = this.props.dispatch;
        return dispatch(Session.Create(login, password))
            .then(() =>  this.props.history.push("/"))*/
    };

    render(){
        return (
            <div>
                <Nav pullRight>

                    <NavItem eventKey={2} href="#" onClick={this.handlerSessionRemove}>
                        Выйти
                        <i className="fa fa-sign-out" aria-hidden="true"/>
                    </NavItem>

                </Nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(HeaderLinks)
