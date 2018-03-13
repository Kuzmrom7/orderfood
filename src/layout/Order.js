import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {Card, IconButton, IconMenu, RaisedButton, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {Toolbar} from "material-ui/Toolbar/index";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {connect} from "react-redux";


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

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  componentDidMount() {}


  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {

    console.log(this.props.socket);
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
            <RaisedButton label="Обновить" primary={true}/>
          </ToolbarGroup>
        </Toolbar>

        <div className="container-fluid">
          <br/>

          <div className="col-md-12">

            <Card>
              <Table onRowSelection={this.handleRowSelection}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow selected={this.isSelected(0)}>
                    {/*    {response
                      ?
                     <div>
                       <TableRowColumn>{response.id_place}</TableRowColumn>
                       <TableRowColumn>{response.id_address}</TableRowColumn>
                       <TableRowColumn>{response.name_user}</TableRowColumn>
                     </div>
                      : <p>Loading...</p>}*/}
                  </TableRow>
                  <TableRow selected={this.isSelected(1)}>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(2)}>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow selected={this.isSelected(3)}>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
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
    socket: state.socket
  }
};


export default connect(mapStateToProps)(Order);