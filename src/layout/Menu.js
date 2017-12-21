import React, {Component} from 'react';
import {connect} from "react-redux";
import CardMenuList from "../components/Card/CardMenuList";
import CardMenuCreate from "../components/Card/CardMenuCreate";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create : false
    }
  }

  handleRemoveMenu = (e, menu) => {
    e.preventDefault();
    /*return this.props.dispatch(Project.Remove(project.meta.name))*/
  };

  handleClick=(e) =>  {
    this.setState({create: !this.state.create})
  }

  render() {
    const menu = this.props.menu;
    return (
      <div>
        <br/>

        <div className="content">
          <div className="container-fluid">
            <button className="btn btn success" onClick={this.handleClick}>+ меню</button>
            <br/>
            <br/>
            {
              (this.state.create)?
                <CardMenuCreate/>
                :
                ""
            }


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
