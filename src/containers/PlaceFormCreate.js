import React, {Component} from 'react';
import PropTypes from "prop-types";
import Preloader from "../components/Preloader";

import Place from '../actions/place'
import {connect} from "react-redux";

class PlaceFormCreate extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    console.log("DATA", data)

    this.props.submit(data.name, data.nametypeplace)
      .then(() => console.log(""))
  };
  handleChangeUsername = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };
  handleChangeOption = (e) => {
    e.preventDefault();
    let data = this.state.data;
    data.nametypeplace = e.target.value;
    this.setState({data: data});
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        nametypeplace: "бар",
      },
      pending: true
    }
  }

  componentDidMount() {
    let dispatch = this.props.dispatch;
    return dispatch(Place.List())
      .then(() => this.setState({pending: false}))
  }

  render() {
    if (this.state.pending) return <Preloader/>;
    const {place} = this.props;

    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="container">
          <a className="simple-text logo-normal">

          </a>
        </div>
        <h2 className="form-signin-heading">Добавьте свое заведение</h2>
        <input type="username" className="form-control"
               placeholder="Название"
               onChange={this.handleChangeUsername}
               value={this.state.username}
        />
        <br/>
        <label>Выберите тип</label>
        <select className="form-control text-capitalize" id="sel1" onClick={this.handleChangeOption}>
          <option disabled selected>Выберите тип заведения</option>
          {Object.keys(place).map((id, index) => {
              const p = place[id];
              return (
                <option key={index} className="text-capitalize">{p}</option>
              )
            }
          )}
        </select>
        <br/>
        <button type="submit" className="btn btn-lg btn-success">Добавить</button>
      </form>

    );
  }
}

PlaceFormCreate.propTypes = {
  submit: PropTypes.func.isRequired
};
const mapStateToProps = (state, props) => {
  return {
    place: state.place
  }
};

export default connect(mapStateToProps)(PlaceFormCreate)
