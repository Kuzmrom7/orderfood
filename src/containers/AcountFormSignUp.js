import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Paper} from "material-ui";

class AcountFormSignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;

    this.props.submit(data.username, data.email, data.password)
      .then(() => console.log(""))
  };
  handleChangeUsername = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.username = e.target.value;
    this.setState({data: data});
  };
  handleChangeEmail = (e) => {
    e.preventDefault();
    let data = this.state.data;
    data.email = e.target.value;
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
        email: "",
        password: ""
      }
    }
  }

  render() {
    return (
      <Paper zDepth={4} className="p-2">
        <form className="form-signin m-4" onSubmit={this.handleSubmit}>

            <a className="simple-text logo-normal">
              <h1 className="form-signin-heading">Регистрация</h1>
            </a>

          <input type="username" className="form-control"
                 placeholder="Username"
                 onChange={this.handleChangeUsername}
                 value={this.state.username}
          />
          <br/>
          <input type="email" className="form-control"
                 placeholder="Email address"
                 onChange={this.handleChangeEmail}
                 value={this.state.email}/>
          <br/>
          <input type="password" className="form-control"
                 placeholder="Password"
                 onChange={this.handleChangePassword}
                 value={this.state.password}/>
          <br/>
          <button type="submit" className="btn btn-lg btn-success center-block">Зарегистрироваться</button>
        </form>
      </Paper>
    );
  }
}

AcountFormSignUp.propTypes = {
  submit: PropTypes.func.isRequired
};


export default AcountFormSignUp;
