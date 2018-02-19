import React, {Component} from 'react';
import TablePersonal from "../containers/TablePersonal";
import {NotificationContainer, NotificationManager} from "react-notifications";
import Personal from "../actions/personal"
import Preloader from "../components/Preloader";
import {connect} from "react-redux";
import CardPersonalCreate from "../components/Card/CardPersonalCreate";


class Personals extends Component {
  handleClick = (e) => {
    this.setState({create: !this.state.create})
  };
  handleSubmit = (nametypePerson, fio, phone) => {
    let dispatch = this.props.dispatch;
    return dispatch(Personal.Create(nametypePerson, fio, phone))
      .then(() => NotificationManager.success('Сотрудник добавлен!', ''))
      .then(() => this.props.dispatch(Personal.List()))
      .then(() => this.setState({create: false}))
      .catch(() => NotificationManager.error('Ошибка', 'Что-то не так..'))
  };

  constructor(props) {
    super(props);
    this.state = {
      create: false,
      pending: true
    }
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Personal.List())
    ])
      .then(() => this.setState({pending: false}))

  }

  render() {
    if (this.state.pending) return (
      <Preloader/>
    );
    return (
      <div>
        <h1 className="text-center">Персонал</h1>
        <div className="content">
          <div className="container-fluid">
            <TablePersonal/>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <button className="btn btn-lg btn-success" onClick={this.handleClick}>
              <i className="fa fa-plus" aria-hidden="true"/>Добавить сотрудника
            </button>
            <br/><br/>
            {
              (this.state.create) ?
                <CardPersonalCreate submit={this.handleSubmit}/>
                :
                ""
            }
          </div>
          <NotificationContainer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Personals);
