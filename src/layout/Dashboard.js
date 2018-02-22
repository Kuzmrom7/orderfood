import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';


const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
};


class Dashboard extends Component {

  render() {
    return (
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-4">


            </div>
            <div className="col-md-4">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);