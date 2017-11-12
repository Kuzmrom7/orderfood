import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';


import {Card} from '../../components/Card/Card.jsx';
import {StatsCard} from '../../components/StatsCard/StatsCard.jsx';
/*import {Tasks} from '../../components/Tasks/Tasks.jsx';*/
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
  /*  dataBar,
    optionsBar,
    responsiveBar,
    legendBar*/
} from '../../variables/Variables.jsx';

class Dashboard extends Component {

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"></i>}
                                statsText="Capacity"
                                statsValue="105GB"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                                statsText="Errors"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"></i>}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                classes="ct-chart"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <ChartistGraph
                                        data={dataSales}
                                        type="Line"
                                        options={optionsSales}
                                        responsiveOptions={responsiveSales}/>
                                    }
                                legend={
                                    <div className="legend">

                                    </div>
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                statsIcon="fa fa-clock-o"
                                id="chartPreferences"
                                classes="ct-chart ct-perfect-fourth"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <ChartistGraph data={dataPie} type="Pie"/>
                                }

                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;
