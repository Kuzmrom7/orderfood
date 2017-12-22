import React, {Component} from 'react';
import CardProfile from "../components/Card/CardProfile";
import {Place} from "../actions";
import {connect} from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };

  }



  handlePlaceSubmit= ( phoneNumber,url,adress) =>{
    let dispatch = this.props.dispatch;
    return dispatch(Place.Update( phoneNumber,url,adress))
      .then(() => {
              NotificationManager.success('Обновлено', 'Данные профиля успешно изменены');
      })

  };
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <CardProfile submit={this.handlePlaceSubmit}/>
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account: state.account,
  place:state.place
});

export default connect(mapStateToProps)(UserProfile)

