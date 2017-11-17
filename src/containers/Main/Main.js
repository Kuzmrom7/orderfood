import React, { Component } from 'react';
//import './css/bulma.css'
import {Link} from 'react-router-dom'
import { NavItem, Nav } from 'react-bootstrap';


class Main extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (


      <div className="container">
        <div className="col-md-4">
        </div>
          <div className="col-md-4">


        <form className="form-signin" role="form">
          <h2 className="form-signin-heading">Please sign in</h2>
          <input type="email" className="form-control" placeholder="Email address" />
          <br/>
            <input type="password" className="form-control" placeholder="Password" />
          <br/>
          <Link to={"/dashboard"}>
            <button className="btn btn-lg btn-primary" >Sign in</button>
          </Link>
          <Nav pullRight>
          <button className="btn btn-lg btn-success" >Sign up</button>
          </Nav>
        </form>
          </div>
      </div>
    );
  }
}

export default Main;
