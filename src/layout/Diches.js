import React, {Component} from 'react';
import CardDishCreate from "../components/Card/CardDishCreate";
import Dish from "../actions/dish";
import CardDishList from "../components/Card/CardDishList";
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux";


class Diches extends Component {

  handleClick = (e) => {
    this.setState({create: !this.state.create})
  };
  handleSubmit = (name, url, typedish, timemin, description) => {
    let dispatch = this.props.dispatch;
    return dispatch(Dish.Create(name, url, typedish, timemin, description))
      .then(() => this.props.dispatch(Dish.List()))
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
        <br/>
        <div className="content">
          <div className="container-fluid">
            <div className="col-md-12">
              <RaisedButton label={"+ Создать блюдо"} primary={true} onClick={this.handleClick}/>
            </div>

            <br/>
            <br/>
            <br/>

            {(this.state.create) ? <CardDishCreate submit={this.handleSubmit}/> : ""}

            <CardDishList/>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Diches)

