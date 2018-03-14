import React, {Component} from 'react';
import PropTypes from "prop-types";
import Preloader from "../components/Preloader";

import Place from '../actions/place'
import {connect} from "react-redux";
import {Paper} from "material-ui";

class PlaceFormCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
      },
      typesplace: {
        idtypeplace: "",
        nametypeplace: ""
      },
      pending: true
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    let typesplace = this.state.typesplace;


    Object.keys(this.props.place).map((id) => {
        const p = this.props.place[id];
        if (p.nametypeplace === this.state.typesplace.nametypeplace) typesplace.idtypeplace = p.idtypeplace;
        return data.idtypeplace;
      }
    );


    this.props.submit(data.name, typesplace)
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
    let data = this.state.typesplace;
    data.nametypeplace = e.target.value;

    this.setState({typesplace: {nametypeplace: data.nametypeplace}});
  };


  componentDidMount() {
    let dispatch = this.props.dispatch;
    return dispatch(Place.List())
      .then(() => this.setState({pending: false}))
  }

  render() {
    if (this.state.pending) return <Preloader/>;
    const {place} = this.props;

    return (
      <Paper zDepth={4} className="p-2">
        <form className="form-signin m-4" onSubmit={this.handleSubmit}>
          <div className="container">
            <a className="simple-text logo-normal">

            </a>
          </div>
          <h3 className="form-signin-heading">Добавьте свое заведение</h3>
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
                  <option key={index} className="text-capitalize" name={p.idtypeplace}> {p.nametypeplace} </option>
                )
              }
            )}
          </select>
          <br/>
          <button type="submit" className="btn btn-lg btn-success">Добавить</button>
        </form>
      </Paper>

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
