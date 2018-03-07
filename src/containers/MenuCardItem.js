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

          ""
          :

          Object.keys(menuFetch).map((id) => {
            const p = menuFetch[id];
            return (
              <div>

                <CardDish
                  statsIcon="fa fa-clock-o"
                  id="chartPreferences"
                  classes="ct-chart ct-perfect-fourth"
                  title={p["name"]}
                  imgMenu={p["urls"]}
                  desc={p["description"]}
                  specs={p["specs"]}
                  timeMin={p["timemin"]}
                  iconCheck={"fa fa-minus"}
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
