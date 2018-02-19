import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import Session from "../../actions/session";
import {connect} from "react-redux";


class HeaderLinks extends Component {
  handlerSessionRemove = (login, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Session.Remove(login, password))
      .then(() => window.location.reload())
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
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

const mapStateToProps = (state, props) => (state, props);

export default connect(mapStateToProps)(HeaderLinks)
