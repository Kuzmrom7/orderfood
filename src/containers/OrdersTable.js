import React, {Component} from 'react';
import {connect} from "react-redux";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";

class OrdersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };

  }

  render() {
    const {order} = this.props;
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID заказа</TableHeaderColumn>
            <TableHeaderColumn>Время</TableHeaderColumn>
            <TableHeaderColumn>Статус</TableHeaderColumn>
            <TableHeaderColumn>Открыть</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {
            Object.keys(order).map((id,index) => {
              const orderI  = order[id];
              return (
                <TableRow key={index}>
                  <TableRowColumn>{orderI._id}</TableRowColumn>
                  <TableRowColumn>{orderI.date}</TableRowColumn>
                  <TableRowColumn>Не обработан</TableRowColumn>
                  <TableRowColumn>Тут будет кнопка</TableRowColumn>
                </TableRow>
              );

            })
          }
         {/* <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>*/}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  personal: state.personal
});

export default connect(mapStateToProps)(OrdersTable)

