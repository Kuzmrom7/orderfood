import React, {Component} from 'react';
import PropTypes from "prop-types";

class AcountFormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        email: "",
        password:""
      }
    }
  }

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


  render() {
    return (
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <div className="container">
              <a className="simple-text logo-normal">
                <h1 className="form-signin-heading">Регистрация</h1>
              </a>
            </div>
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
            <button type="submit" className="btn btn-lg btn-success">Зарегистрироваться</button>
          </form>

    );
  }
}

AcountFormSignUp.propTypes = {
  submit: PropTypes.func.isRequired
};


export default AcountFormSignUp;
