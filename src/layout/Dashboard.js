import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import {Card} from '../components/Card/Card.jsx';
import {StatsCard} from '../components/StatsCard/StatsCard.jsx';
import {
  dataPie,
  dataSales,
  optionsSales,
  responsiveSales,
} from '../variables/Variables.jsx';

class Dashboard extends Component {

  render() {
    return (
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-8">
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                classes="ct-chart"
                title="График заказов"
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
                title="Статистика"
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