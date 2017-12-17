import React, {Component} from 'react';
import {connect} from "react-redux";
import CardMenuList from "../components/Card/CardMenuList";
import CardMenuCreate from "../components/Card/CardMenuCreate";

class Menu extends Component {

  handleRemoveMenu = (e, menu) => {
    e.preventDefault();
    /*return this.props.dispatch(Project.Remove(project.meta.name))*/
  };

  render() {
    const menu = this.props.menu;
    return (
      <div>
        <br/>

        <div className="content">
          <div className="container-fluid">
            <CardMenuCreate/>

            <CardMenuList menu={menu} onRemove={this.handleRemoveMenu}/>
            {/*   <CardMenu
              statsIcon="fa fa-clock-o"
              id="chartPreferences"
              classes="ct-chart ct-perfect-fourth"
              title="Летнее меню"
              category="Last Campaign Performance"
              stats="Создано вчера"
              imgMenu="https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            />*/}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(Menu);
