import React, { Component } from 'react';
import {connect} from "react-redux";
import Card from "../components/Card/Card";
import CardMenu from "../components/Card/CardMenu";

class Menu extends Component {

    render() {
        return (
           <div >
             <br/>

             <div className="content">
               <div className="container-fluid">
                 <div className="col-md-4">
                   <CardMenu
                     statsIcon="fa fa-clock-o"
                     id="chartPreferences"
                     classes="ct-chart ct-perfect-fourth"
                     title="Летнее меню"
                     category="Last Campaign Performance"
                     stats="Создано вчера"
                     imgMenu = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                   />
                 </div>
                 <div className="col-md-4">
                   <CardMenu
                     statsIcon="fa fa-clock-o"
                     id="chartPreferences"
                     classes="ct-chart ct-perfect-fourth"
                     title="Зимнее меню"
                     category="Last Campaign Performance"
                     stats="Создано вчера"
                     imgMenu = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                   />
                 </div>

                 <div className="col-md-4">
                   <CardMenu
                     statsIcon="fa fa-clock-o"
                     id="chartPreferences"
                     classes="ct-chart ct-perfect-fourth"
                     title="Кальяны"
                     category="Last Campaign Performance"
                     stats="Создано вчера"
                     imgMenu = "https://кальян.рф/wp-content/uploads/2016/06/paren-kurit-kalyan-i-puskaet-gustoj-dym.jpg"

                   />
                 </div>
               </div>
             </div>

           </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

});

export default connect(mapStateToProps)(Menu);
