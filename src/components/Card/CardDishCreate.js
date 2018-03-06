import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dish} from "../../actions";
import Preloader from "../../components/Preloader";
import {RaisedButton, Snackbar} from "material-ui";
import AddSpec from "../AddSpec";


class SpecList extends React.Component {
  render() {
    return (
      <div>
        {
          Object.keys(this.props.item).map((id) => {
            const p = this.props.item[id];
            return (
              <div className="col-12" key={id}>
                <div className="row">
                  <div className="col-md-5">
                    <span>Размер или название </span>
                    <input type="text" className="form-control"
                           value={p.size} disabled={true}
                    />
                  </div>

                  <div className="col-md-5">
                    <span>Цена</span>
                    <input type="text" className="form-control"
                           value={p.price} disabled={true}
                    />
                  </div>

                  <div className="col-md-2 ">
                    ДОБАВЛЕНО
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

class CardDishCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        urls: [],
        idtypedish: "",
        timeMin: 0,
        desc: "",
        specs: []
      },
      specs: [],
      metaspecs: {
        size: "",
        price: ""
      },
      open : false,
      pending: true
    };

  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name, data.urls, data.idtypedish, data.timeMin, data.desc, data.specs)
      .then(this.handleSuccess)
  };

  handleSuccess = ()=>{
    this.setState({open:true})
  };

  handleRequestClose = () => {
    this.setState({open:false, data: {
        name: "",
        urls: [],
        idtypedish: "",
        timeMin: 0,
        desc: "",
        specs: []
      }})
  };

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Dish.ListType())
    ])
      .then(() => this.setState({pending: false}))
  }

  render() {
    if (this.state.pending) return (<Preloader/>);

    const {type_dishes} = this.props;
    return (
      <div className="col-md-12 margin-top">
        <div className={"card undefined"}>
          <div className="header">
            <h4 className="title">Создать блюдо</h4>
          </div>
          <div className={"content undefined"}>
            <div className="">
              {/*---------------DISH--------------*/}

              <div className="col-md-6">
                <span>Название</span>
                <input type="username" className="form-control"
                       onChange={this.handleChangeName}
                       value={this.state.data.name}
                />
              </div>

              <div className="col-md-6">
                <span>Выбрать тип: </span>
                <select className="form-control text-capitalize" id="sel1" onClick={this.handleChangeType}>
                  <option disabled selected>Выберите тип блюда</option>
                  {Object.keys(type_dishes).map((id, index) => {
                      const p = type_dishes[id];
                      return (
                        <option key={index} className="text-capitalize">{p.name}</option>
                      )
                    }
                  )}
                </select>
              </div>

              <div className="col-md-6">
                <span>URL photo</span>
                <input type="url" className="form-control"
                       placeholder="" onChange={this.handleChangeUrl}
                />
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

              <div className="col-md-12">

                Добавьте спецификации

                <SpecList item={this.state.data.specs}/>

                <AddSpec size={this.handleSpecSize} price={this.handleSpecPrice} submit={this.handleSubmitSpec}
                         s={this.state.metaspecs.size} p={this.state.metaspecs.price}/>

              </div>
              <div className="col-md-1">
                <RaisedButton type="submit" onClick={this.handleSubmit} label="Создать" primary={true}/>
              </div>
            </div>

            <Snackbar
              open={this.state.open}
              message="Блюдо было добавлено"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            />

          </div>
        </div>
      </div>
    );
  }

  handleSpecSize = (e) => {

    e.preventDefault();

    let data = this.state.metaspecs;
    data.size = e.target.value;

    this.setState({metaspecs: data});

  };

  handleSpecPrice = (e) => {
    e.preventDefault();

    let data = this.state.metaspecs;
    data.price = e.target.value;

    this.setState({metaspecs: data});

  };

  handleSubmitSpec = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.specs = [...this.state.data.specs, this.state.metaspecs]
    this.setState({
      data: data
    });

    this.setState({
      metaspecs: {
        size: "",
        price: ""
      }
    });

  }
  handleChangeName = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };

  handleChangeUrl = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.urls = [{url: e.target.value}];
    this.setState({data: data});
  };

  handleChangeType = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.idtypedish = e.target.value;

    Object.keys(this.props.type_dishes).map((id) => {
        const p = this.props.type_dishes[id];
        if (p.name === e.target.value) data.idtypedish = p.id;
        return data.idtypedish;
      }
    );

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


}


const mapStateToProps = (state) => ({
  type_dishes: state.type_dishes
});

export default connect(mapStateToProps)(CardDishCreate);
