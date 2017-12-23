import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuCardItem from "../containers/MenuCardItem";
import Preloader from "../components/Preloader";
import Dish from "../actions/dish";
import {NotificationManager} from "react-notifications";
import Menu from "../actions/menu";
import AddDish from "../components/AddDish";



class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
     pending:true,
     name : "",
      nameDish: "",
      pend : true
    }
  }

  componentDidMount(){
    const hash = window.location.pathname.slice(6);
    const {menu} = this.props;
    const p = menu[hash];
    this.setState({name: p["name"]});
    Promise.all([
      this.props.dispatch(Dish.List()),
      this.props.dispatch(Dish.ListType())
    ])
      .then(() => this.setState({pending:false}))


  }

  handleSubmit = (nameDish, nameMenu) => {
    let dispatch = this.props.dispatch;

    return dispatch(Menu.Add(nameDish, nameMenu))
      .then(() => NotificationManager.success('Меню создано', ''))
      .then(() => this.props.dispatch(Menu.List()))
      .then(() => this.setState({create: false}))
      .catch(() => NotificationManager.error('Ошибка', 'Что-то не так..'))
  };


  render() {
    const hash = window.location.pathname.slice(6);
    const {menu,   type_dishes,menu_dish_fetch} = this.props;
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
              <h4 className="title text-capitalize">{name} </h4>
              <br/>
              <form className="">

                <div className="col-md-4-offset-2">
                  <img className="img-responsive" src={img}/>
                </div>

                {Object.keys(type_dishes).map((id, index) => {
                    const p = type_dishes[id];
                    Promise.all([this.props.dispatch(Menu.Menudish(name,p))],  this.setState({pend: true}))
                      .then(() => NotificationManager.success('Загружены меню и блюда', ''),console.log("TEEELOGO"))
                      .then(() => {
                        this.setState({pend: false})
                    })
                      .catch(() => NotificationManager.error('Ошибка', 'Что-то не так..'));

                   if (this.state.pend === true)
                    return <Preloader/>;
                  else
                    return <MenuCardItem typeDish={p} nameMenu={name}/>

                  }
                )}

                <hr/>
              </form>


            </div>
          </div>
          <div className={"card undefined"}>

            <br/>
           <AddDish submit = {this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    dish:state.dish,
    type_dishes:state.type_dishes,
    menu_dish_fetch:state.menu_dish_fetch
  }
};


export default connect(mapStateToProps)(MenuItem);