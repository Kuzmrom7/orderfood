import React, {Component} from 'react';
import CardProfile from "../components/Card/CardProfile";
import {Place} from "../actions";
import {connect} from "react-redux";
import {CardAdrressing} from "../components/Card/CardAdrressing";

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };

  }

  handlePlaceSubmit = (id, city, phone, url) => {
    let dispatch = this.props.dispatch;
    return dispatch(Place.Update(id, city, phone, url))
      .then(() => {
        ""
      })

  };

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6">
                <CardProfile submit={this.handlePlaceSubmit}/>
              </div>
              <div className="col-md-6">
                <CardAdrressing/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  place: state.place
});

export default connect(mapStateToProps)(UserProfile)

