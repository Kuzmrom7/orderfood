import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import logo from '../assets/img/reactlogo.png';
import {Paper} from "material-ui";

class AccountFormSignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;

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
      <Paper zDepth={4} className="p-2">
        <form className="form-signin m-4 " onSubmit={this.handleSubmit}>
          <div className="container">
            <a className="simple-text logo-normal">
              <h1 className="form-signin-heading"><img src={logo} width="60" alt="logo_image"/>rderFood</h1>
            </a>
          </div>
          <h3 className="form-signin-heading">Пожалуйста войдите</h3>
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
      </Paper>
    );
  }
}

AccountFormSignIn.propTypes = {
  submit: PropTypes.func.isRequired
};


export default AccountFormSignIn;
