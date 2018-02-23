import React, {Component} from 'react';
import PropTypes from 'prop-types';


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

export default (Dashboard);