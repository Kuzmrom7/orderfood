import React, {Component} from 'react';
import {connect} from "react-redux";
import CardDish from "./CardDish";

export class CardDishList extends Component {
  render() {
    const {dish} = this.props;

    return (
      <div className="col-md-12">


        {Object.keys(dish).map((id,index) => {
            const p = dish[id];

            return (

              <CardDish
                key = {index}
                statsIcon="fa fa-clock-o"
                id="chartPreferences"
                classes="ct-chart ct-perfect-fourth"
                title={p["name"]}
                imgMenu={p["urls"]}
                desc={p["description"]}
                specs={p["specs"]}
                timeMin={p["timemin"]}
                iconCheck={"fa fa-plus"}
              />
            );
          }
        )}

      </div>

    );
  }
}

const mapStateToProps = (state) => ({

  dish: state.dish,
  type_dishes: state.type_dishes

});


export default connect(mapStateToProps)(CardDishList);
