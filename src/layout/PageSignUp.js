import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import Account from "../actions/account";
import Place from "../actions/place";
import AcountFormSignUp from "../containers/AcountFormSignUp";
import PlaceFormCreate from "../containers/PlaceFormCreate";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class PageSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createplace:false
    }
  }

  handlerAccountCreate = (username, email, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Account.Create(username, email, password))
      .then(()=>  NotificationManager.success('Аккаунт создан! Добавьте заведение!', 'Успешно!'))
      .then(() => this.setState({createplace:true}))
      .catch(()=> NotificationManager.error('Ошибка', 'Упс..!') )
  };

  handlerPlaceCreate = (name, nametypeplace) => {
    let dispatch = this.props.dispatch;
    return dispatch(Place.Create(name, nametypeplace))
      .then(() => this.props.history.push("/"))
  };


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
            (this.state.createplace)?
              <PlaceFormCreate submit = {this.handlerPlaceCreate}/>
              :
              <AcountFormSignUp submit={this.handlerAccountCreate}/>
          }
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(PageSignUp)

