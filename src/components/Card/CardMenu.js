import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {CardHeader} from "material-ui";

const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 200,
  },
};


export class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }


  render() {
    const {classes} = this.props;
    let img;
    if (this.props.imgMenu === "") {
      img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    }

    else img = this.props.imgMenu;

    return (
      <div className="col-md-4 col-sm-4">
        <Card className={classes.card}>
          <CardHeader
            title={this.props.title}
            subheader={this.props.stats}
          />
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardActions>
            <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
              <AddIcon/>
            </Button>
            <Button size="medium" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/*        <div className={"card " + this.props.cardClass}>
          <div className="header">
            <h4 className="title text-capitalize">{this.props.title}
              <div className="pull-right" onClick={this.handleRemove}>
                <i className="fa fa-level-up" aria-hidden="true"/>
              </div>
            </h4>

          </div>

          <div className={"content " + this.props.contentClass}>

            <img src={img} className="img-responsive" alt=""/>

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

export default withStyles(styles)(CardMenu);
