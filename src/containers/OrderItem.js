import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import Order from "../actions/order";
import {Adrress} from "../actions";
import {Card, Divider, List, ListItem} from "material-ui";


class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true,

    }
  }

  /*  handleSubmit = (nameDish, nameMenu) => {
      let dispatch = this.props.dispatch;
      let idMenu = window.location.pathname.slice(6);
      this.setState({pending: true});
      return dispatch(Menu.Add(nameDish, nameMenu))
        .then(() => this.props.dispatch(Menu.Menudish(idMenu, this.props.place.id)))
        .then(() => this.setState({pending: false}))
        .then(() => this.setState({openAdd: true}))
    };

    handleRemove = (idDish) => {
      let dispatch = this.props.dispatch;
      let idMenu = window.location.pathname.slice(6);
      return dispatch(Menu.RemoveDish(idMenu, idDish))
        .then(() => this.props.dispatch(Menu.Menudish(idMenu, this.props.place.id)))
        .then(() => this.setState({open: true}))
    };*/


  componentDidMount() {
    Promise.all([
      this.props.dispatch(Order.Fetch(this.props.id)),
      this.props.dispatch(Adrress.List())
    ])
      .then(() => this.setState({pending: false}))
    /*    const hash = window.location.pathname.slice(6);
        let name = hash;

        Promise.all([
          this.props.dispatch(Menu.Menudish(name, this.props.place.id)),
          this.props.dispatch(Dish.List(this.props.place.id)),
          this.props.dispatch(Dish.ListType())
        ])
          .then(() => this.setState({pending: false}))*/
  }

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
        <div className="col-md-12">
          <div className="col-md-6">
            <Card>
              <div className="p-2">
                <h5>Адрес: {address_name}</h5>
                <h5>Время заказа: {order.date}</h5>
              </div>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <div className="p-2">
                <h5>Имя клиента: {order.name_user}</h5>
                <h5>Телефон: {order.phone}</h5>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <Card>
            <div className="p-2">
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

        <hr/>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  adrress: state.adrress

});


export default connect(mapStateToProps)(OrderItem);