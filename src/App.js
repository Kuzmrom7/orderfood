import React, {Component} from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from "./main";
import Preloader from "./components/Preloader";
import {Account, Place} from "./actions";
import {connect} from "react-redux";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };
  }

  componentDidMount(){
    Promise.all([
      this.props.dispatch(Account.Fetch()),
      this.props.dispatch(Place.Fetch())
    ])
      .then(() => this.setState({pending:false}))
  }

  render() {
    if (this.state.pending) return (
      <div><Preloader/><Main/></div>
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
  place:state.place
});

export default connect(mapStateToProps)(App)
