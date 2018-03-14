import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import Account from "../actions/account";
import Place from "../actions/place";
import AcountFormSignUp from "../containers/AcountFormSignUp";
import PlaceFormCreate from "../containers/PlaceFormCreate";
import {blue100, blue700, blueGrey500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blue700,
    primary3Color: blue100,
  },
}, {
  avatar: {
    borderColor: null,
  },
});

class PageSignUp extends Component {


  handlerAccountCreate = (username, email, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Account.Create(username, email, password))
      .then(() => this.setState({createplace: true}))
      .catch(() => "")
  };

  handlerPlaceCreate = (name, typesplace) => {
    let dispatch = this.props.dispatch;
    return dispatch(Place.Create(name, typesplace))
      .then(() => this.props.history.push("/"))
  };

  constructor(props) {
    super(props);
    this.state = {
      createplace: false
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{backgroundImage: `url('./2.jpg')`, height: '100vh', overflow : 'hidden',backgroundSize: 'cover'}}>
          <div className="container">
            <div className="col-md-4 offset-2">
              <br/>
              <br/>
              <Link to={"/signin"}>

                <i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>

              </Link>
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              {
                (this.state.createplace) ?
                  <PlaceFormCreate submit={this.handlerPlaceCreate}/>
                  :
                  <AcountFormSignUp submit={this.handlerAccountCreate}/>
              }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(PageSignUp)

