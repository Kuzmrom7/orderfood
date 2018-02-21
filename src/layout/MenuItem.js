import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import Dish from "../actions/dish";
import Menu from "../actions/menu";
import AddDish from "../components/AddDish";
import MenuCardItem from "../containers/MenuCardItem";


class MenuItem extends Component {
  handleSubmit = (nameDish, nameMenu) => {
    let dispatch = this.props.dispatch;
    this.setState({pending: true});
    return dispatch(Menu.Add(nameDish, nameMenu))
      .then(() => this.props.dispatch(Menu.Menudish(nameMenu)))
      .then(() => this.setState({pending: false}))
  };

  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      name: "",
      nameDish: "",
      pend: true
    }
  }

  componentDidMount() {
    const hash = window.location.pathname.slice(6);
    const {menu} = this.props;
    const p = menu[hash];
    let name = p["name"];

    Promise.all([
      this.props.dispatch(Dish.List()),
      this.props.dispatch(Menu.Menudish(name)),
      this.props.dispatch(Dish.ListType())
    ])
      .then(() => this.setState({pending: false}))
  }

  render() {
    const hash = window.location.pathname.slice(6);
    const {menu, menu_dish_fetch} = this.props;
    const p = menu[hash];
    let name = p["name"];
    let img = p["url"];

    if (this.state.pending) return (
      <Preloader/>
    );
    return (
      <div className="content">
        <div className="container-fluid">
          <div className={"card undefined"}>
            <div className="header">
              <h1 className="title text-center text-capitalize">{name} </h1>
              <br/>
              <form className="">

                <div className="text-center">
                  <img className="img-thumbnail" width="900" height="900" alt="" src={img}/>
                </div>
                {
                  Object.keys(menu_dish_fetch).map((id, index) => {
                    const p = menu_dish_fetch[id];
                    if (p === null || p.length === 0) {
                      return (
                        <div>
                        </div>
                      )
                    }
                    else
                      return (
                        <div>
                          <h2 className="text-capitalize">{id}</h2>
                          <div className="col-md-12">
                            <MenuCardItem key={index} menuFetch={p}/>
                          </div>
                        </div>
                      );
                  })
                }
                <hr/>
              </form>


            </div>
          </div>
          <div className={"card undefined"}>

            <br/>
            <AddDish submit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    dish: state.dish,
    type_dishes: state.type_dishes,
    menu_dish_fetch: state.menu_dish_fetch
  }
};


export default connect(mapStateToProps)(MenuItem);