import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../components/Preloader";
import Dish from "../actions/dish";
import Menu from "../actions/menu";
import MenuCardItem from "../containers/MenuCardItem";
import {Divider} from "material-ui";
import AddDish from "../components/AddDish";


class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      name: "",
      nameDish: "",
      pend: true
    }
  }

  handleSubmit = (nameDish, nameMenu) => {
    let dispatch = this.props.dispatch;
    this.setState({pending: true});
    return dispatch(Menu.Add(nameDish, nameMenu))
      .then(() => this.props.dispatch(Menu.Menudish(nameMenu)))
      .then(() => this.setState({pending: false}))
  };




  componentDidMount() {
    const hash = window.location.pathname.slice(6);
    let name = hash;

    Promise.all([
      this.props.dispatch(Menu.Menudish(name)),
      this.props.dispatch(Dish.List()),
      this.props.dispatch(Dish.ListType())
    ])
      .then(() => this.setState({pending: false}))
  }

  render() {
    const hash = window.location.pathname.slice(6);
    const {menu_dish_fetch, menu} = this.props;
    let id = hash;
    let name;

    Object.keys(menu).map((id) => {
      let m = menu[id];
      if (m["id"] === hash) name = m["name"];
      return name
    });


    if (this.state.pending) return (<Preloader/>
    );
    return (
      <div className="content">
        <div className="container-fluid">
          <div className={"card undefined"}>

            <AddDish submit={this.handleSubmit} name={name ? name : "меню"} menuid={id}/>

          </div>

          <div className={"card undefined"}>
            <div className="header">
              <h1 className="title text-center text-capitalize">{name ? name : "Меню"} </h1>

              <form className="">

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
                          <Divider/>
                          <div className="col-md-12">
                            <MenuCardItem key={index} menuFetch={p}/>
                          </div>
                        </div>
                      );
                  })
                }
              </form>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  dish: state.dish,
  type_dishes: state.type_dishes,
  menu_dish_fetch: state.menu_dish_fetch

});


export default connect(mapStateToProps)(MenuItem);