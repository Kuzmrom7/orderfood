import React, {Component} from 'react';
import Session from "../actions/session";
import AccountFormSignIn from "../containers/AccountFormSignIn";
import {connect} from "react-redux";


class PageSignIn extends Component {

  handlerSessionCreate = (login, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Session.Create(login, password))
      .then(() => this.props.history.push("/"))
      .catch(() => "")

  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <AccountFormSignIn submit={this.handlerSessionCreate}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(PageSignIn)
