import React, {Component} from 'react';
import {Avatar, Card, CardMedia, CardText, CardTitle, Chip, Divider} from "material-ui";
import FloatingActionButton from 'material-ui/FloatingActionButton';


export class CardDish extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    /*    let imgs;
        if (this.props.imgMenu === "") {
          img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        }
        else imgs = this.props.imgMenu;*/

    /*
        Object.keys(this.props.imgMenu).map((id) => {
          let img = imgMenu[id]
        });*/

    return (
      <div className="col-lg-2 col-md-4 col-sm-3 margin-top" style={{marginRight: 30}}>
        <Card style={{"width": "200"}}>
          <div className="">
            <CardMedia
              overlay={<CardTitle title={this.props.title}/>}
            >
              <img src={this.props.imgMenu[0].url}
                   alt=""
              />
            </CardMedia>

            <CardText>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <div className="col-md-7">
                    <h6><i className="fa fa-clock-o"/> {this.props.timeMin} минут</h6>
                  </div>
                  <div className="col-md-5 text-right">
                    <FloatingActionButton mini={true}>
                      <i className={this.props.iconCheck}/>
                    </FloatingActionButton>
                  </div>

                </div>

                <div className="col-md-12 col-lg-12 content">
                  {
                    Object.keys(this.props.specs).map((id) => {
                      const speca = this.props.specs[id];
                      return (
                        <div className="col-md-6 col-lg-6">
                          <Chip>
                            <Avatar size={32}>  {speca["size"]}</Avatar>
                            {speca["price"]}р.
                          </Chip>
                        </div>
                      )
                    })
                  }
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
