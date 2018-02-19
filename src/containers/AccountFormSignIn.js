import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import logo from '../assets/img/reactlogo.png';

class AccountFormSignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    console.log("DATA", this.state.data)

    this.props.submit(data.username, data.password)
      .then(() => console.log())
  };
  handleChangeUsername = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.username = e.target.value;
    this.setState({data: data});
  };
  handleChangePassword = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.password = e.target.value;
    this.setState({data: data});
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: ""
      }
    }
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="container">
          <a className="simple-text logo-normal">
            <h1 className="form-signin-heading"><img src={logo} width="60" alt="logo_image"/>rderFood</h1>
          </a>
        </div>
        <h2 className="form-signin-heading">Пожалуйста войдите</h2>
        <input type="username" className="form-control"
               placeholder="Username"
               onChange={this.handleChangeUsername}
               value={this.state.username}
        />
        <br/>
        <input type="password" className="form-control"
               placeholder="Password"
               onChange={this.handleChangePassword}
               value={this.state.password}
        />
        <br/>
        <button className="btn btn-lg btn-primary" type="submit">Войти</button>
        <Link to={"/signup"}>
          <div className="pull-right">
            <button className="btn btn-lg btn-success">Регистрация</button>
          </div>
        </Link>
      </form>
    );
  }
}

AccountFormSignIn.propTypes = {
  submit: PropTypes.func.isRequired
};


export default AccountFormSignIn;
