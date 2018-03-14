import React, {Component} from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from "./main";
import Preloader from "./components/Preloader";
import {Orders, Place, Socket} from "./actions";
import {connect} from "react-redux";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue100, blue700, blueGrey500} from 'material-ui/styles/colors';
import './App.css';
import socketIOClient from "socket.io-client";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
      open: false
    };
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Place.Fetch()),
    ])
      .then(() => this.setState({pending: false}))
      .then(() => {
        const socket = socketIOClient(process.env.REACT_APP_NODEMON);
        this.props.dispatch(Socket.SocketAdd(socket, this.props.place.id))
      })
      .catch(() => this.props.history.push("/signin"))
  }


  componentWillReceiveProps(newProps) {
    const {name_user} = newProps.socket;
    if (this.props.socket !== newProps.socket) {

      NotificationManager.success(`Пользователь ${name_user} сделал заказ`, 'Новый заказ', 6000);
      Promise.all([
        this.props.dispatch(Orders.List(this.props.place.id)),
      ])
        .then(() => this.setState({pending: false}))
    }

  }


  render() {
    if (this.state.pending) return (<Preloader/>);
    console.log(this.state.response);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="wrapper">
          <Sidebar {...this.props} />
          <div id="main-panel" className="main-panel">
            <Header {...this.props}/>
            <Main/>
          </div>
          <NotificationContainer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  place: state.place,
  socket: state.socket
});

export default connect(mapStateToProps)(App)
