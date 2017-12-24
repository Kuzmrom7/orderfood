import React, {Component} from 'react';
import {connect} from "react-redux";
import CardDish from "./CardDish";

export class CardDishList extends Component {
  render() {
    const {dish} = this.props;

    return (
      <div>



          {Object.keys(dish).map((id, index) => {
              const p = dish[id];
              let dta = Date.UTC(p["updated"])
              return(
                <CardDish
                  statsIcon="fa fa-clock-o"
                  id="chartPreferences"
                  classes="ct-chart ct-perfect-fourth"
                  title={p["name"]}
                  stats={ p["updated"]}
                  imgMenu={p["url"]}
                  desc = {p["description"]}
                  timeMin = {p["timemin"]}
                />
              );
            }
          )}

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    dish: state.dish,
    type_dishes:state.type_dishes
  }
};


export default connect(mapStateToProps)(CardDishList);