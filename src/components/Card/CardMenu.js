import React, {Component} from 'react';


export class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  handleRemove() {
    console.log("DELETE")
  }

  render() {
    let img;
    if (this.props.imgMenu === "") {
      img = "https://images.unsplash.com/photo-1446034730750-a0b64d06ad13?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    }
    else img = this.props.imgMenu
    return (
      <div className="col-md-4">
        <div className={"card " + this.props.cardClass}>
          <div className="header">
            <h4 className="title text-capitalize">{this.props.title}
              <div className="pull-right" onClick={this.handleRemove}>
                <i className="fa fa-level-up" aria-hidden="true"/>
              </div>
            </h4>

          </div>

          <div className={"content " + this.props.contentClass}>

            <img src={img} className="img-responsive"/>

            <div className="footer">
              {this.props.legend}
              {this.props.stats != null ? <hr/> : ""}
              <div className="stats">
                <i className={this.props.statsIcon}/> {this.props.stats}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMenu;
