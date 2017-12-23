import React, {Component} from 'react';
import {connect} from "react-redux";
import CardMenuList from "../components/Card/CardMenuList";
import CardMenuCreate from "../components/Card/CardMenuCreate";
import {NotificationContainer, NotificationManager} from "react-notifications";
import Menu from "../actions/menu"
import {Dish} from "../actions";


class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Menu.List())
    ])
      .then(() => NotificationManager.success('Обновлено', ''))

  }

  handleClick = (e) => {
    this.setState({create: !this.state.create})
  };
  handleSubmit = (name, url) => {
    let dispatch = this.props.dispatch;
    let placename = this.props.place.name;
    return dispatch(Menu.Create(name, placename, url))
      .then(() => NotificationManager.success('Добавлено', ''))
      .then(() => this.props.dispatch(Menu.List()))
      .then(() => this.setState({create: false}))
      .catch(() => NotificationManager.error('Ошибка', 'Что-то не так..'))
  };

  render() {
    return (
      <div>
        <br/>

        <div className="content">
          <div className="container-fluid">
            <button className="btn btn success" onClick={this.handleClick}>+ меню</button>
            <br/>
            <br/>
            {
              (this.state.create) ?
                <CardMenuCreate submit={this.handleSubmit}/>
                :
                ""
            }

            <div className="col-md-12">
              <CardMenuList/>
            </div>

          </div>
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(MenuPage);
