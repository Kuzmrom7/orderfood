import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Card} from "material-ui";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';


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
      <div className="container-fluid">
        <br/>

        <div className="col-md-12">
          <div className="col-md-4">
            <Card>
              <List>
                <ListItem primaryText="Новые" leftIcon={<ContentInbox/>}/>
                <ListItem primaryText="Принятые" leftIcon={<ActionGrade/>}/>
                <ListItem primaryText="Обработанные" leftIcon={<ContentSend/>}/>
                <ListItem primaryText="Отлоненные" leftIcon={<ContentDrafts/>}/>
                <ListItem primaryText="История" leftIcon={<ContentInbox/>}/>
              </List>
              <Divider/>
              <List>
                <ListItem primaryText="Список всех" rightIcon={<ActionInfo/>}/>
                <ListItem primaryText="Удаленные" rightIcon={<ActionInfo/>}/>
              </List>
            </Card>
          </div>
          <div className="col-md-8">
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