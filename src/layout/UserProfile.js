import React, {Component} from 'react';
import CardProfile from "../components/Card/CardProfile";
import {Account,Place} from "../actions";
import Preloader from "../components/Preloader";
import {connect} from "react-redux";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };
  }

/*  handlePlaceUpdate= (placeName, phoneNumber,url,city) =>{
    let dispatch = this.props.dispatch;
    return dispatch(Place.Update((placeName, phoneNumber,url,city))
      .then(() => console.log())
  }*/
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <CardProfile/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account: state.account,
  place:state.place
});

export default connect(mapStateToProps)(UserProfile)

