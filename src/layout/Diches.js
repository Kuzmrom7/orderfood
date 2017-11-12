import React, { Component } from 'react';
import {iconsArray} from "../variables/Variables";
import Card from "../components/Card/Card";


class Diches extends Component {

    render() {
        return (

          <div className="content">
            <div className="container-fluid">
              <div className="row">

                <div className="col-md-12">
                  <Card
                    title="Все блюда"
                    contentClass="all-icons"
                    /*category={}*/
                    content={
                      <div className="row">
                        {
                          iconsArray.map((prop,key) => {
                            return (
                              <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" key={key}>

                                <div className="font-icon-detail">
                                  <i className={prop}></i>
                                  <input type="text" defaultValue="Суперхавчик" />
                                  <br/>
                                    <i className="fa fa-plus" />
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Diches;
