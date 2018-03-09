import React, {Component} from 'react';
import {Avatar, Card, CardMedia, CardText, CardTitle, Chip, Divider} from "material-ui";
import FloatingActionButton from 'material-ui/FloatingActionButton';


export class CardDish extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleAction = () => {
    this.props.action(this.props.id)
      .then(() => this.setState({openRm: false}))
  };

  render() {

    return (
      <div className="col-md-3 col-sm-3 margin-top" style={{marginRight: 30}}>
        <Card>
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
                    <FloatingActionButton mini={true} onClick={(e) => {
                      this.handleAction()
                    }}>
                      <i className={this.props.iconCheck}/>
                    </FloatingActionButton>
                  </div>

                </div>

                <div className="col-md-12 col-lg-12 ">
                  {
                    Object.keys(this.props.specs).map((id, index) => {
                      const speca = this.props.specs[id];
                      return (
                        <div className="col-md-6 col-lg-6" key={index}>
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

      </div>
    );
  }
}

export default (CardDish);
