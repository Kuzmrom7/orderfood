import React, {Component} from 'react';


export class CardMenu extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className={"card " + this.props.cardClass}>
          <div className="header">
            <h4 className="title">{this.props.title}</h4>
            <p className="category">{this.props.category}</p>
          </div>
          <div className={"content " + this.props.contentClass}>

            <img src={this.props.imgMenu} className="img-responsive" />

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
