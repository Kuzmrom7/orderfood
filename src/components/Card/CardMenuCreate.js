import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dish} from "../../actions";
import Preloader from "../../components/Preloader";



export class CardDishCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : {
        name :"",
        url: "",
      },
      pending : true
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name,data.url)
      .then(() =>console.log(""))
  };

  handleChangeName = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };
  handleChangeUrl = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.url = e.target.value;
    this.setState({data: data});
  };

  render() {
    return (
      <div className={"card undefined"}>
        <div className="header">
          <h4 className="title">Создать меню</h4>
        </div>
        <div className={"content undefined"}>
          <form className="" onSubmit={this.handleSubmit}>
            {/*---------------DISH--------------*/}

            <div className="col-md-6">
              <span>Название меню</span>
              <input type="username" className="form-control"
                     onChange={this.handleChangeName}
                     value={this.state.data.name}
              />
            </div>

            <div className="col-md-6">
              <span>URL photo</span>
              <input type="text" className="form-control"
                     placeholder="url" onChange={this.handleChangeUrl}
              />
            </div>
            <div className="col-md-1">
              <button type="submit" className="btn btn-lg btn-success">Создать меню</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  type_dishes: state.type_dishes
});

export default connect(mapStateToProps)(CardDishCreate);
