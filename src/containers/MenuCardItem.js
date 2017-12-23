import React, {Component} from 'react';
import {connect} from "react-redux";
import StatsCard from "../components/StatsCard/StatsCard";

class MenuCardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  render() {
    const {typeDish, nameMenu, menu_dish_fetch} = this.props;
    const dish = menu_dish_fetch[0];
    console.log("!!!!!!!!!",dish)

    return (

      <div>
        <h4 className="text-capitalize">{typeDish}</h4>
        <div className="col-md-12">
          <div className="col-md-3">
            <StatsCard statsText={dish}/>
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


export default connect(mapStateToProps)(MenuCardItem);
