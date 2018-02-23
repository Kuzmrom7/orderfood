import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dish} from "../../actions";
import Preloader from "../../components/Preloader";
import {RaisedButton} from "material-ui";


export class CardDishCreate extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name, data.url, data.typeDish, data.timeMin, data.desc)
      .then(() => console.log(""))
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
  handleChangeType = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.typeDish = e.target.value;
    this.setState({data: data});
  };
  handleChangeTime = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.timeMin = e.target.value;
    this.setState({data: data});
  };
  handleChangeDesc = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.desc = e.target.value;
    this.setState({data: data});
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        url: "",
        typeDish: "",
        timeMin: 0,
        desc: ""
      },
      pending: true
    };
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Dish.ListType())
    ])
      .then(() => this.setState({pending: false}))
  }

  render() {
    if (this.state.pending) return (
      <div><Preloader/></div>
    );
    const {type_dishes} = this.props;
    return (
      <div className={"card undefined"}>
        <div className="header">
          <h4 className="title">Создать блюдо</h4>
        </div>
        <div className={"content undefined"}>
          <form className="" onSubmit={this.handleSubmit}>
            {/*---------------DISH--------------*/}

            <div className="col-md-6">
              <span>Название</span>
              <input type="username" className="form-control"
                     onChange={this.handleChangeName}
                     value={this.state.data.name}
              />
            </div>

            <div className="col-md-6">
              <span>URL photo</span>
              <input type="text" className="form-control"
                     placeholder="" onChange={this.handleChangeUrl}
              />
            </div>

            <div className="col-md-6">
              <span>Выбрать тип: </span>
              <select className="form-control text-capitalize" id="sel1" onClick={this.handleChangeType}>
                <option disabled selected>Выберите тип блюда</option>
                {Object.keys(type_dishes).map((id, index) => {
                    const p = type_dishes[id];
                    return (
                      <option key={index} className="text-capitalize">{p}</option>
                    )
                  }
                )}
              </select>
            </div>

            <div className="col-md-6">
              <span>Время приготовления </span>
              <input type="number" className="form-control"
                     placeholder="Телефон пуст заполните пожалуйста"
                     onChange={this.handleChangeTime}
                     value={this.state.data.timeMin}

              />
            </div>

            <div className="col-md-12">
              <span>Описание </span>
              <input type="text" className="form-control"
                     placeholder="Здесь пусто, заполните пожалуйста"
                     onChange={this.handleChangeDesc}
                     value={this.state.data.desc}
              />
            </div>
            <div className="col-md-1">
              <RaisedButton type="submit" label="Создать" primary={true}/>
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
