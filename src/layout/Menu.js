import React, { Component } from 'react';
import {connect} from "react-redux";
import Link from "react-router";

class Menu extends Component {

    render() {
        return (
           <div>

                   <h1 className="text-center">Меню</h1>

               </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

});

export default connect(mapStateToProps)(Menu);
