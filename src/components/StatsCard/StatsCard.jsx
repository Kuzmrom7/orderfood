import React, { Component } from 'react';


export class StatsCard extends Component{
    render(){
        return (
            <div className="card card-stats">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big text-center icon-warning">
                              <img   width="100" height="100" src={this.props.bigIcon} alt=""/>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>{this.props.statsText}</p>

                                {this.props.statsValue}
                                <p> {this.props.timeMin}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            {this.props.statsIcon}{" "}{this.props.statsIconText}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsCard;
