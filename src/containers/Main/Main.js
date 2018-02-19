import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/reactlogo.png';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            <h2 className="form-signin-heading">Please sign in</h2>
            <input type="email" className="form-control" placeholder="Email address"/>
            <br/>
            <input type="password" className="form-control" placeholder="Password"/>
            <br/>
            <Link to={"/dashboard"}>
              <button className="btn btn-lg btn-primary">Sign in</button>
            </Link>

            <Link to={"/signup"}>
              <button className="btn btn-lg btn-success">Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
