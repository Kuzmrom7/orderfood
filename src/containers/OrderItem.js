import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import Order from "../actions/order";


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
    console.log(order, ">>>>>>")
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order

});


export default connect(mapStateToProps)(OrderItem);