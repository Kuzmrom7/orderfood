import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {Card, IconButton, IconMenu, RaisedButton, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui";
import {Toolbar} from "material-ui/Toolbar/index";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {connect} from "react-redux";
import {Orders} from "../actions";
import OrdersTable from "../containers/OrdersTable";
import Preloader from "../components/Preloader";


class Order extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pending: true,
      selected: [1],
      response: false,
      push: 1,
      endpoint: process.env.REACT_APP_NODEMON
    };
  }


  componentDidMount() {
    Promise.all([
      this.props.dispatch(Orders.List(this.props.place.id)),
    ])
      .then(() => this.setState({pending: false}))
  }


  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  handleClick = () => {
    Promise.all([
      this.props.dispatch(Orders.List(this.props.place.id)),
    ])
      .then(() => this.setState({pending: false}))

  };

  render() {
    if (this.state.pending) return (<Preloader/>);

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <List>
                <ListItem primaryText="Новые" leftIcon={<ContentInbox/>}/>
                <ListItem primaryText="Принятые" leftIcon={<ActionGrade/>}/>
                <ListItem primaryText="Обработанные" leftIcon={<ContentSend/>}/>
                <ListItem primaryText="Отлоненные" leftIcon={<ContentDrafts/>}/>
                <ListItem primaryText="История" leftIcon={<ContentInbox/>}/>
              </List>

            </IconMenu>
            <ToolbarTitle text="Невский проспект,31"/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator/>
            <RaisedButton label="Обновить" onClick={this.handleClick} primary={true}/>
          </ToolbarGroup>
        </Toolbar>

        <div className="container-fluid">
          <br/>

          <div className="col-md-12">

            <Card>
              <OrdersTable order = {this.props.order}/>
            </Card>

          </div>
        </div>
      </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    place: state.place,
    socket: state.socket,
    order : state.order
  }
};


export default connect(mapStateToProps)(Order);