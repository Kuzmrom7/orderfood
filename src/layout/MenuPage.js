import React, {Component} from 'react';
import {connect} from "react-redux";
import CardMenuList from "../components/Card/CardMenuList";
import CardMenuCreate from "../components/Card/CardMenuCreate";
import Menu from "../actions/menu";
import Preloader from "../components/Preloader";
import {Tab, Tabs} from "material-ui";


class MenuPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create: false,
      pending: true,
    }
  }


  handleSubmit = (name, url) => {
    let dispatch = this.props.dispatch;
    let placeid = this.props.place.id;
    return dispatch(Menu.Create(name, placeid, url))
      .then(() => this.props.dispatch(Menu.List(this.props.place.id)))
  };

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Menu.List(this.props.place.id))
    ])
      .then(() => this.setState({pending: false}))

  }

  render() {
    if (this.state.pending) return (<Preloader/>);

    return (

      <div>
        <div className="content">
          <Tabs>
            <Tab label="Меню">
              <div>
                <CardMenuList/>
              </div>
            </Tab>
            <Tab label="Создать новое">
              <div>
                <CardMenuCreate submit={this.handleSubmit}/>
              </div>
            </Tab>
          </Tabs>

        </div>
      </div>
    )
      ;
  }
}

const mapStateToProps = (state,props) => {
  return {
    menu: state.menu,
    place: state.place
  }
};


export default connect(mapStateToProps)(MenuPage);
