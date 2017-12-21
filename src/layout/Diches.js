import React, { Component } from 'react';
import CardDishCreate from "../components/Card/CardDishCreate";


class Diches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create : false
    }
  }
  handleClick=(e) =>  {
    this.setState({create: !this.state.create})
  }
    render() {
        return (
          <div>
            <br/>
          <div className="content">
            <div className="container-fluid">
                <button className="btn btn success" onClick={this.handleClick}>+ блюдо</button>
                <br/>
                <br/>
                {
                  (this.state.create)?
                    <CardDishCreate/>
                    :
                    ""
                }
             {/*   <div className="col-md-12">
                  <Card
                    title="Все блюда"
                    contentClass="all-icons"
                    content={
                      <div className="row">
                      </div>
                    }
                  />
                </div>*/}
            </div>
          </div>
          </div>
        );
    }
}

export default Diches;
