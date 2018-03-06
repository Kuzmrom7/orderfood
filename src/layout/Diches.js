import React, {Component} from 'react';
import CardDishCreate from "../components/Card/CardDishCreate";
import Dish from "../actions/dish";
import CardDishList from "../components/Card/CardDishList";
import {connect} from "react-redux";
import {Tab, Tabs} from "material-ui";
import {DishTableList} from "../containers/DishTableList";


class Diches extends Component {

  handleSubmit = (name, urls, idtypedish, timemin, description,specs) => {
    let dispatch = this.props.dispatch;
    let data = {name:name,urls:urls, idtypedish: idtypedish, timemin:timemin, description: description,specs:specs};
    return dispatch(Dish.Create(data))
/*      .then(() => this.props.dispatch(Dish.List()))*/
      .then(() => this.setState({create: false}))
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
      this.props.dispatch(Dish.List())
    ])
      .then(() => "")

  }

  render() {

    return (
      <div>
        <div className="content">
            <Tabs>
              <Tab label="Списком">
                <div>
                  <DishTableList dish = {this.props.dish }/>
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

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Diches)

