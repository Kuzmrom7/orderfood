import React, {Component} from 'react';
import {Card, CardMedia, CardText, CardTitle, Divider} from "material-ui";
import FloatingActionButton from 'material-ui/FloatingActionButton';


export class CardDish extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    let img;
    if (this.props.imgMenu === "") {
      img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    }
    else img = this.props.imgMenu;
    return (
      <div className="col-md-3 col-sm-4 margin-top">
        <Card>
          <div className="">
            <CardMedia
              overlay={<CardTitle title={this.props.title} subtitle={this.props.desc}/>}
            >
              <img src={img}
                   alt=""
              />
            </CardMedia>

            <CardText>
              <div className="row">
                <div className="col-md-12">

                  <div className="text-left">
                    <h6><i className="fa fa-clock-o"/> {this.props.timeMin} минут</h6>
                    <small><i className="fa fa-calendar"/> {this.props.stats}</small>
                  </div>
                  <div className="text-right">
                    <FloatingActionButton>
                      <i className={this.props.iconCheck}/>
                    </FloatingActionButton>
                  </div>
                </div>
              </div>
            </CardText>

          </div>
          <Divider/>
        </Card>

        {/*        <div className={"card " + this.props.cardClass}>
          <div className="header">
            <h4 className="title text-capitalize">{this.props.title}
              <div className="pull-right" onClick={this.handleRemove}>
              </div>
            </h4>

          </div>

          <div className={"content " + this.props.contentClass}>

            <img src={img} className="img-responsive" alt=""/>
            <br/>
            <h6 className>Время приготовления: {this.props.timeMin} минут</h6>
            <br/>
            <p className="category">{this.props.desc}</p>
            <div className="footer">
              {this.props.legend}
              {this.props.stats != null ? <hr/> : ""}
              <div className="stats">
                <i className={this.props.statsIcon}/> {this.props.stats}
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default (CardDish);
