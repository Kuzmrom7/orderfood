import React, {Component} from 'react';
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import CardMenu from "../../components/Card/CardMenu"


export class CardMenuList extends Component {
  render() {
    const {menu} = this.props;

    return (
      <div className="">
        {Object.keys(menu).map((id, index) => {
            const p = menu[id];
            return (
              <Link key={index} to={`/menu/${p["id"]}`}>

                  <CardMenu
                    statsIcon="fa fa-clock-o"
                    id="chartPreferences"
                    classes="ct-chart ct-perfect-fourth"
                    title={p["name"]}
                    imgMenu={p["url"]}
                  />

              </Link>
            );
          }
        )}

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  menu : state.menu
});


export default connect(mapStateToProps)(CardMenuList);
