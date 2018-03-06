import React, {Component} from 'react';
import {Card, CardMedia, CardTitle} from "material-ui";

export class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }


  render() {

    console.log("menu", this.props.imgMenu)
    let img;
    if (this.props.imgMenu === "") {
      img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    }

    else img = this.props.imgMenu;

    return (
      <div className="col-md-4 col-sm-4 margin-top">
        <Card>
          <CardMedia
            overlay={<CardTitle title={this.props.title}/>}
          >
            <img src={img} alt=""/>
          </CardMedia>

        </Card>
      </div>
    )
      ;
  }
}

export default (CardMenu);
