import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import Account from "../actions/account";
import Place from "../actions/place";
import AcountFormSignUp from "../containers/AcountFormSignUp";
import PlaceFormCreate from "../containers/PlaceFormCreate";

class PageSignUp extends Component {
  handlerAccountCreate = (username, email, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Account.Create(username, email, password))
      .then(() => this.setState({createplace: true}))
      .catch(() => "")
  };
  handlerPlaceCreate = (name, nametypeplace) => {
    let dispatch = this.props.dispatch;
    return dispatch(Place.Create(name, nametypeplace))
      .then(() => this.props.history.push("/"))
  };

  constructor(props) {
    super(props);
    this.state = {
      createplace: false
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 offset-2">
          <br/>
          <br/>
          <Link to={"/signin"}>

            <i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>

          </Link>
        </div>
        <div className="col-md-4">
          {
            (this.state.createplace) ?
              <PlaceFormCreate submit={this.handlerPlaceCreate}/>
              :
              <AcountFormSignUp submit={this.handlerAccountCreate}/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(PageSignUp)

