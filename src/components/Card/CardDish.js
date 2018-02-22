import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import {Divider} from "material-ui";


const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 200,
  },
};

export class CardDish extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {classes} = this.props;


    let img;
    if (this.props.imgMenu === "") {
      img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    }
    else img = this.props.imgMenu;
    return (
      <div className="col-md-3 col-sm-4 margin-top">

        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              <h5>{this.props.title}</h5>
              <Divider/>
            </Typography>
            <Typography component="p">
              <h6><i className="fa fa-clock-o" /> {this.props.timeMin} минут</h6>
            </Typography>

          </CardContent>
          <CardActions>
            <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
              <AddIcon/>
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
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

export default withStyles(styles)(CardDish);
