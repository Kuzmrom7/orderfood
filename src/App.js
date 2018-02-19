import React, {Component} from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from "./main";
import Preloader from "./components/Preloader";
import {Account, Menu, Place} from "./actions";
import {connect} from "react-redux";
import Dish from "./actions/dish";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Account.Fetch()),
      this.props.dispatch(Place.Fetch()),
      this.props.dispatch(Dish.List()),
      this.props.dispatch(Menu.List()),
    ])
      .then(() => this.setState({pending: false}))
      .catch(() => this.props.history.push("/signin"))
  }

  render() {
    if (this.state.pending) return (
      <div><Preloader/></div>
    );
    return (

      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props}/>
          <Main/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  place: state.place
});

export default connect(mapStateToProps)(App)
