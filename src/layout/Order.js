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


class Order extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
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
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
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

export default Order