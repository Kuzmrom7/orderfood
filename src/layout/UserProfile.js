import React, {Component} from 'react';
import CardProfile from "../components/Card/CardProfile";
import {Adrress, Place} from "../actions";
import {connect} from "react-redux";
import {CardAdrressing} from "../components/Card/CardAdrressing";

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };

  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Adrress.List()),
    ])
      .then(() => this.setState({pending: false}))

  }

  handlePlaceSubmit = (id, city, phone, url) => {
    let dispatch = this.props.dispatch;
    return dispatch(Place.Update(id, city, phone, url))
      .then(() => {this.props.dispatch(Place.Fetch())})

  };

  handleAdrressCreate = (name) => {
    let dispatch = this.props.dispatch;
    let id = this.props.place["id"];
    return dispatch(Adrress.Create(name,id))
      .then(() => {this.props.dispatch(Adrress.List())})
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
                <CardAdrressing adrress = {this.props.adrress} submit = {this.handleAdrressCreate} />
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
  place: state.place,
  adrress : state.adrress
});

export default connect(mapStateToProps)(UserProfile)

