import React from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import CardMenu from "./CardMenu";


const CardMenuList = ({menu, onRemove}) => (
  <div className="content">
    <div className="container-fluid">
    {Object.keys(menu).map((id, index) => {
        const menu = menu[id];

        return (
          <Link key={index} to={`/p/${menu.meta.name}/${menu.namespaces[0].name}`}>
            <CardMenu key={index} menu={menu} onRemove={onRemove}/>
            <CardMenu
              statsIcon="fa fa-clock-o"
              id="chartPreferences"
              classes="ct-chart ct-perfect-fourth"
              title={menu.meta.name}
              stats="Создано вчера"
              imgMenu="https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            />
          </Link>
        )
      }
    )}
  </div>
  </div>
);

CardMenuList.propTypes = {
  menu: PropTypes.object.isRequired
};

export default CardMenuList
