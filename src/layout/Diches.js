import React, {Component} from 'react';
import CardDishCreate from "../components/Card/CardDishCreate";
import Dish from "../actions/dish";
import Menu from "../actions/menu";
import CardDishList from "../components/Card/CardDishList";
import {connect} from "react-redux";
import {Tab, Tabs} from "material-ui";
import {DishTableList} from "../containers/DishTableList";


class Diches extends Component {

  handleSubmit = (name, urls, idtypedish, timemin, description, specs) => {
    let dispatch = this.props.dispatch;
    let data = {
      name: name,
      urls: urls,
      idtypedish: idtypedish,
      timemin: timemin,
      description: description,
      specs: specs
    };
    return dispatch(Dish.Create(data))
      .then(() => this.props.dispatch(Dish.List()))
      .catch(() => "")
  };

  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Dish.List(this.props.place.id)),
      this.props.dispatch(Menu.List(this.props.place.id))
    ])
      .then(() => "")

  }

  handleSubmitM = (nameDish, nameMenu) => {
    let dispatch = this.props.dispatch;
    this.setState({pending: true});
    return dispatch(Menu.Add(nameDish, nameMenu))
      .then(() => this.props.dispatch(Menu.Menudish(nameMenu)))
      .then(() => this.setState({pending: false}))
  };

  handleRemove = (id) => {
    let dispatch = this.props.dispatch;
    this.setState({pending: true});
    return dispatch(Dish.Remove(id))
      .then(() => this.props.dispatch(Dish.List(this.props.place.id)))
      .then(() => this.setState({pending: false}))
  };

  render() {

    return (
      <div>
        <div className="content">
          <Tabs>
            <Tab label="Списком">
              <div>
                <DishTableList dish={this.props.dish} menu = {this.props.menu} submit = {this.handleSubmitM} rm = {this.handleRemove}/>
              </div>
            </Tab>
            <Tab label="Карточки">
              <div>
                <CardDishList/>
              </div>
            </Tab>
            <Tab label="Создать новое">
              <div>
                <CardDishCreate submit={this.handleSubmit}/>
              </div>
            </Tab>
          </Tabs>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  dish : state.dish,
  place : state.place
});

export default connect(mapStateToProps)(Diches)

