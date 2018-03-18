import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import Order from "../actions/order";
import {Adrress, Orders} from "../actions";
import {Card, Divider, List, ListItem, MenuItem, RaisedButton, SelectField} from "material-ui";


class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      value: 0,
      dis: false
    }
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(Order.Fetch(this.props.id)),
      this.props.dispatch(Adrress.List())
    ])
      .then(() => {

        const order = this.props.order[this.props.id];

        if (order.status === "PROCCESING") this.setState({value: 1});
        if (order.status === "SUCCESS") this.setState({value: 2, dis: true});
        if (order.status === "CANCEL") this.setState({value: 3, dis: true});
      })
      .then(() => this.setState({pending: false}))
  }

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  handleSubmit = () => {
    let dispatch = this.props.dispatch;
    this.setState({pending: true});

    let status;

    switch (this.state.value) {
      case 2 :
        status = "SUCCESS";
        break;
      default :
        status = "PROCCESING";
        break;
    }


    return dispatch(Orders.StatusUpdate(this.props.id, status))
      .then(() => this.props.dispatch(Orders.List(this.props.place.id)))
      .then(() => this.setState({pending: false}))
  };


  render() {
    if (this.state.pending) return (<Preloader/>);
    const order = this.props.order[this.props.id];
    const address = this.props.adrress;
    let address_name;

    Object.keys(address).map((id, index) => {
      const add = address[id];

      if (add.id === order.id_address) {
        address_name = add.name
      }
      return address_name
    });


    return (
      <div>
        <div className="col-md-12 mt-1">
          <Card>
            <div className="p-1">
              <h3>Сожержание заказа: </h3>

              <List>
                {
                  Object.keys(order.dishes).map((id, index) => {
                    let dish = order.dishes[id];
                    return (
                      <div key={index}>
                        <ListItem
                          primaryText={`Название: ${dish["name_dish"]} | Тип: ${dish["spec_name"]} | Цена: ${dish["price"]} `}/>
                        <Divider/>
                      </div>
                    )
                  })
                }
              </List>

              <h2 className="text-center">Итого : {order.total}</h2>
            </div>
          </Card>
        </div>

        <div className="col-md-12 mt-2">


          <div className="col-md-6">
            <h3>О заказе: </h3>
            <div className="">
              <h6>Адрес: {address_name}</h6>
              <h6>Время заказа: {order.date}</h6>
              <h6>Имя клиента: {order.name_user}</h6>
              <h6>Телефон: {order.phone}</h6>
            </div>
          </div>

          <div className="col-md-6">
            {
              order.status === "PROCCESING" ?
                <span className="text-danger">Обработайте заказ!</span> : ""
            }
            <SelectField
              floatingLabelText="Статус"
              value={this.state.value}
              onChange={this.handleChange}
              disabled={this.state.dis}
            >
              <MenuItem value={1} primaryText="Ожидание"/>
              <MenuItem value={2} primaryText="Обработан"/>

            </SelectField>

            {!this.state.dis ? <RaisedButton label="ОК" onClick={this.handleSubmit}/> : ""}
          </div>


        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  place: state.place,
  adrress: state.adrress

});


export default connect(mapStateToProps)(OrderItem);