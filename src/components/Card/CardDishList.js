import React, {Component} from 'react';
import {connect} from "react-redux";
import CardMenu from "../../components/Card/CardMenu"

export class CardDishList extends Component {
  render() {
    const {dish,type_dishes} = this.props;

    return (
      <div>



          {Object.keys(dish).map((id, index) => {
              const p = dish[id];
              let dta = Date.UTC(p["updated"])
              return(
                <CardMenu
                  statsIcon="fa fa-clock-o"
                  id="chartPreferences"
                  classes="ct-chart ct-perfect-fourth"
                  title={p["name"]}
                  stats={ p["updated"]}
                  imgMenu={p["url"]}
                />
              );
            }
          )}

      </div>

    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    dish: state.dish,
    type_dishes:state.type_dishes
  }
};


export default connect(mapStateToProps)(CardDishList);
