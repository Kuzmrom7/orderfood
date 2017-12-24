import React, {Component} from 'react';
import {connect} from "react-redux";
import CardDish from "../components/Card/CardDish";

class MenuCardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  render() {
    const {menuFetch} = this.props;
    return (

      <div>
        {(menuFetch === null) ?

          console.log("NUlL", menuFetch)
          :

          Object.keys(menuFetch).map((id, index) => {
            const p = menuFetch[id];
            return (
              <div>


                <CardDish
                  statsIcon="fa fa-clock-o"
                  id="chartPreferences"
                  classes="ct-chart ct-perfect-fourth"
                  title={p["name"]}
                  stats={p["updated"].slice(0,10)}
                  imgMenu={p["url"]}
                  desc={p["description"]}
                  timeMin={p["timeMin"]}
                />


              </div>
            )
          })

        }
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


export default connect(mapStateToProps)(MenuCardItem);
