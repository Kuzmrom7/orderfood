import React, {Component} from 'react';
import CardDishCreate from "../components/Card/CardDishCreate";
import Dish from "../actions/dish";
import CardDishList from "../components/Card/CardDishList"
import {connect} from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Account, Place} from "../actions";

class Diches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }
  componentDidMount(){
    Promise.all([
      this.props.dispatch(Dish.List())
    ])
      .then(() =>   NotificationManager.success('Обновлено', ''))

  }
  handleClick = (e) => {
    this.setState({create: !this.state.create})
  };
  handleSubmit = (name, url, typedish, timemin, description) => {
    let dispatch = this.props.dispatch;
    return dispatch(Dish.Create(name, url, typedish, timemin, description))
      .then(() =>  NotificationManager.success('Добавлено', ''))
      .then(() =>   this.props.dispatch(Dish.List()))
      .then(()=> this.setState({create: false}))
      .catch(() => NotificationManager.error('Ошибка', 'Что-то не так..'))
  };

  render() {
    return (
      <div>
        <br/>
        <div className="content">
          <div className="container-fluid">
            <button className="btn btn success" onClick={this.handleClick}>+ Блюдо</button>
            <br/>
            <br/>
            {
              (this.state.create) ?
                <CardDishCreate submit={this.handleSubmit}/>
                :
                ""
            }
               <div className="col-md-12">
                  <CardDishList/>
                </div>
          </div>
          <NotificationContainer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Diches)

