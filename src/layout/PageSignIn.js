import React, {Component} from 'react';
import Session from "../actions/session";
import AccountFormSignIn from "../containers/AccountFormSignIn";
import {connect} from "react-redux";
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

class PageSignIn extends Component {

  handlerSessionCreate = (login, password) => {
    let dispatch = this.props.dispatch;
    return dispatch(Session.Create(login, password))
      .then(() => this.props.history.push("/"))
      .catch(() => "")

  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{backgroundImage: `url('./2.jpg')`, height: '100vh', overflow : 'hidden',backgroundSize: 'cover'}}>
          <div className="container">
            <div className="col-md-4">
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <AccountFormSignIn submit={this.handlerSessionCreate}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(PageSignIn)
