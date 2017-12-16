import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/reactlogo.png';


class PageSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <form className="form-signin">
            <div className="container">
              <a className="simple-text logo-normal">
                <h1 className="form-signin-heading"><img src={logo} width="60" alt="logo_image"/>rderFood</h1>
              </a>
            </div>
            <h2 className="form-signin-heading">Пожалуйста войдите</h2>
            <input type="email" className="form-control" placeholder="Username"/>
            <br/>
            <input type="password" className="form-control" placeholder="Password"/>
            <br/>
            <Link to={"/dashboard"}>
              <button className="btn btn-lg btn-primary">Войти</button>
            </Link>
            <Link to={"/signup"}>
              <div className="pull-right">
                <button className="btn btn-lg btn-success">Регистрация</button>
              </div>
            </Link>
          </form>
        </div>

      </div>
    );
  }
}

export default PageSignIn;
