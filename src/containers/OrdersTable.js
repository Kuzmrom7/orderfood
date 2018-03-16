import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  CircularProgress,
  Dialog,
  FlatButton,
  RaisedButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui";
import {Status} from "../utils/status";
import OrderItem from "./OrderItem";

const customContentStyle = {
  height: '100%',
  maxHeight: 'none',
};

class OrdersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
      isNew: '',
      open: false,
      order_id : ''
    };

  }

  handleClick = (e, id) => {
    this.setState({order_id: id});
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false});
  };



  render() {
    const {order} = this.props;
    let isNew = [];
    const actions = [
      <FlatButton
        label="Назад"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn width={80}/>
              <TableHeaderColumn>ID заказа</TableHeaderColumn>
              <TableHeaderColumn>Время</TableHeaderColumn>
              <TableHeaderColumn>Статус</TableHeaderColumn>
              <TableHeaderColumn>Открыть</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {
              Object.keys(order).map((id, index) => {
                const orderI = order[id];
                let date = new Date(orderI.date);
                let dateNow = new Date(Date.now());
                if ((dateNow - date) / (1000 * 60) <= 5 || orderI.status === "PROCCESING") {
                  isNew[id] = true
                }
                return (

                  <TableRow key={index} hovered={isNew[id]}>
                    <TableRowColumn width={80}>{isNew[id] ? <CircularProgress size={25} color={"red"}/> :
                      <i className="fa fa-check-circle fa-2x text-success"/>}</TableRowColumn>
                    <TableRowColumn>{orderI._id}</TableRowColumn>
                    <TableRowColumn>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</TableRowColumn>
                    <TableRowColumn>{Status(orderI.status)}</TableRowColumn>
                    <TableRowColumn> <RaisedButton onClick={(e) => this.handleClick(e, orderI._id)}
                                                   label="Открыть"/></TableRowColumn>
                  </TableRow>
                );

              })
            }
          </TableBody>


        </Table>
        <Dialog
          title={`Заказ №${this.state.order_id}`}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
        <OrderItem id = {this.state.order_id}/>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personal: state.personal
});

export default connect(mapStateToProps)(OrdersTable)

