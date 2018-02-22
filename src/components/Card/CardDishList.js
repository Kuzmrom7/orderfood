import React, {Component} from 'react';
import {connect} from "react-redux";
import CardDish from "./CardDish";

export class CardDishList extends Component {
  render() {
    const {dish} = this.props;

    return (
      <div>


        {Object.keys(dish).map((id) => {
            const p = dish[id];
            return (

              <CardDish
                statsIcon="fa fa-clock-o"
                id="chartPreferences"
                classes="ct-chart ct-perfect-fourth"
                title={p["name"]}
                stats={p["updated"].slice(0, 10)}
                imgMenu={p["url"]}
                desc={p["description"]}
                timeMin={p["timemin"]}
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
    type_dishes: state.type_dishes
  }
};


export default connect(mapStateToProps)(CardDishList);
