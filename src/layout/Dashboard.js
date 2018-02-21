import React, {Component} from 'react';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import {CardHeader} from "material-ui";

class Dashboard extends Component {

  render() {
    return (
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-4">
              <Card className="">
                <CardHeader

                  title={"ll"}
                  subheader={"kek"}
                />
                <CardContent>{"Goood"}</CardContent>

                <CardActions className="">"dddd"</CardActions>

              </Card>
            </div>
            <div className="col-md-4">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;