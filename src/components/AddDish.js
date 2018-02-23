import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dish} from "../actions";
import {RaisedButton} from "material-ui";


export class AddDish extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state;
    this.props.submit(data.nameDish, data.nameMenu)
      .then(() => console.log("+++", data.nameDish, data.nameMenu))
  };
  handleSelect = (e) => {
    e.preventDefault();
    this.setState({nameDish: e.target.value});
  };

  constructor(props) {
    super(props);

    this.state = {
      nameDish: "",
      nameMenu: "",
      pending: true
    };
  }

  componentDidMount() {
    const hash = window.location.pathname.slice(6);
    const {menu} = this.props;
    const p = menu[hash];
    this.setState({nameMenu: p["name"]});
    Promise.all([
      this.props.dispatch(Dish.List())
    ])
      .then(() => this.setState({pending: false}))

  }

  render() {
    const {dish} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-12">
          <div className="col-md-6">
            <br/><br/>
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
          <div className="col-md-6">
            <br/>
            <br/>
            <RaisedButton  type="submit" label="Добавить блюдо" primary={true}/>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  dish: state.dish
});

export default connect(mapStateToProps)(AddDish);
