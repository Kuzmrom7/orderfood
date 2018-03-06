import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {Avatar, Card, Chip} from "material-ui";
import {connect} from "react-redux";


export class DishTableList extends Component {


  render() {
    const {dish} = this.props;

    return (
      <div className="container-fluid margin-top">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Название</TableHeaderColumn>
                <TableHeaderColumn><i className="fa fa-clock-o"/> Время приготовление</TableHeaderColumn>
                <TableHeaderColumn><i className="fa fa-money"/>Тип/Цена</TableHeaderColumn>


              </TableRow>
            </TableHeader>
            <TableBody>

              {Object.keys(dish).map((id) => {
                const di = dish[id];
                return (
                  <TableRow>
                    <TableRowColumn>{di["name"]}</TableRowColumn>
                    <TableRowColumn>{di["timemin"]} минуты</TableRowColumn>
                    <TableRowColumn>

                      <div className="row">
                        {
                          Object.keys(di["specs"]).map((id) => {
                            let d = di["specs"][id];

                            return (
                              <div>
                                <br/>
                                <Chip>
                                  <Avatar size={22}>  {d["size"]}</Avatar>
                                  {d["price"]}р.
                                </Chip>
                              </div>
                            )
                          })
                        }
                        <br/>
                      </div>
                    </TableRowColumn>
                  </TableRow>
                )

              })}

            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dish: state.dish,
    type_dishes: state.type_dishes
  }
};


export default connect(mapStateToProps)(DishTableList);

