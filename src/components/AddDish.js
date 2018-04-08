import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dish} from "../actions";
import {RaisedButton} from "material-ui";


export class AddDish extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nameDish: "",
      idMenu: this.props.menuid,
      pending: true
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(this.props.dish).map((id) => {
        const p = this.props.dish[id];
        if (p.name === this.state.nameDish) this.state.nameDish = p.id;
        return this.state.nameDish;
      }
    );

    let data = this.state;
    this.props.submit( data.idMenu, data.nameDish)
      .then(() => console.log( data.nameDish, data.idMenu))
  };

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({nameDish: e.target.value});
  };

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Dish.List(this.props.place.id))
    ])
      .then(() => this.setState({pending: false}))

  }

  render() {

    const {dish,name} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-12">
          <div className="col-md-6">

            <select className="form-control text-capitalize" id="sel1" onChange={this.handleSelect}>
              <option disabled selected>Выберите блюдо</option>
              {Object.keys(dish).map((id, index) => {
                  const p = dish[id];
                  return (
                    <option key={index} className="text-capitalize">{p["name"]}</option>
                  )
                }
              )}
            </select>
            <br/><br/>
          </div>
          <div className="col-md-6 ">
            <RaisedButton  type="submit" label={"Добавить в "+ name} primary={true}/>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  dish: state.dish,
  place: state.place
});

export default connect(mapStateToProps)(AddDish);
