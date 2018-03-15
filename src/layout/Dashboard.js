import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import {Divider, IconButton, IconMenu, List, ListItem, Paper, Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const biPolarBarChartData = {
  labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]

};
const biPolarBarChartOptions = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: true,
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};

const responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];


class Dashboard extends Component {

  render() {
    return (
      <div className="content">
        <div className="col-md-12">
          <div className="col-md-4">

            <Paper zDepth={1}>

              <Toolbar>
                <ToolbarGroup firstChild={true}>
                  <ToolbarTitle text={<span className="text-center">Статистика</span>}/>
                </ToolbarGroup>
              </Toolbar>
              <List>
                <ListItem primaryText="За сутки" rightIcon={<div className="text-success ">+32</div>}/>
                <Divider/>
                <ListItem primaryText="За месяц" rightIcon={<div className="text-success">+239</div>}/>
              </List>


            </Paper>
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <Paper zDepth={1}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <List>
                    <ListItem primaryText="Сутки"/>
                    <ListItem primaryText="Месяц"/>

                  </List>
                </IconMenu>
                <ToolbarTitle text="График заказов"/>
              </ToolbarGroup>
            </Toolbar>
            <div className="p-4">

              <div className="">
                <ChartistGraph
                  data={biPolarBarChartData}
                  type="Line"
                  options={biPolarBarChartOptions}
                  responsiveOptions={responsiveSales}
                />
              </div>


            </div>
          </Paper>

        </div>

      </div>
    );
  }
}


export default (Dashboard);