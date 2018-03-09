import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {green400, red400} from 'material-ui/styles/colors';
import {Avatar, Card, Chip, Dialog, FlatButton, FloatingActionButton} from "material-ui";
import {connect} from "react-redux";


export class DishTableList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create: false,
      open: false,
      openRm: false,
      idRM: "",
      id: "",
      menuId: "",
      error : ""
    }
  }

  handleOpen = (e, id) => {
    this.setState({open: true, id: id});
  };

  handleOpenRM = (e, id) => {
    this.setState({openRm: true, idRM: id});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleCloseM = () => {
    this.setState({openRm: false,error : ""});
  };

  handleSelect = (e) => {
    e.preventDefault();

    Object.keys(this.props.menu).map((id) => {
        const p = this.props.menu[id];
        if (p.name === e.target.value) this.setState({menuId: p.id});

        return id;
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let menuId = this.state.menuId;
    let dishId = this.state.id;

    this.props.submit(menuId, dishId)
      .then(() => this.setState({open: false}))
  };

  handleRemove = (e) => {

    e.preventDefault();
    let id = this.state.idRM;
    this.props.rm(id)
      .then(() => this.setState({openRm: false}))
      .catch(() => this.setState({error :  "Error"}))
  };


  render() {
    const {dish, menu} = this.props;
    const actions = [
      <FlatButton
        label="Назад"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Добавить"
        primary={true}
        keyboardFocused={true}
        type="submit"
        onClick={this.handleSubmit}
      />,
    ];

    const actionsRm = [
      <FlatButton
        label="Назад"
        primary={true}
        onClick={this.handleCloseM}
      />,
      <FlatButton
        label="Удалить"
        primary={true}
        keyboardFocused={true}
        type="submit"
        onClick={this.handleRemove}
      />,
    ];

    return (
      <div className="container-fluid margin-top">
        <Card>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Название</TableHeaderColumn>
                <TableHeaderColumn><i className="fa fa-clock-o"/> Время приготовление</TableHeaderColumn>
                <TableHeaderColumn><i className="fa fa-money"/>Тип/Цена</TableHeaderColumn>
                <TableHeaderColumn width={100}>Добавить</TableHeaderColumn>
                <TableHeaderColumn width={100}>Удалить</TableHeaderColumn>

              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>

              {Object.keys(dish).map((id, index) => {
                const di = dish[id];
                return (
                  <TableRow key={index}>
                    <TableRowColumn>{di["name"]}</TableRowColumn>
                    <TableRowColumn>{di["timemin"]} минуты</TableRowColumn>
                    <TableRowColumn>

                      <div className="row">
                        {
                          Object.keys(di["specs"]).map((id, index) => {
                            let d = di["specs"][id];

                            return (
                              <div key={index}>
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
                    <TableRowColumn width={100}> <FloatingActionButton mini={true} backgroundColor={green400}
                                                                       onClick={(e) => {
                                                                         this.handleOpen(e, di["id"])
                                                                       }}><i
                      className="fa fa-plus"/></FloatingActionButton></TableRowColumn>
                    <TableRowColumn width={100}> <FloatingActionButton mini={true} backgroundColor={red400}
                                                                       onClick={(e) => {
                                                                         this.handleOpenRM(e, di["id"])
                                                                       }}><i
                      className="fa fa-minus"/></FloatingActionButton></TableRowColumn>
                  </TableRow>
                )

              })}

            </TableBody>
          </Table>
        </Card>

        <Dialog
          title="Добавить в меню"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="col-md-12">
            <select className="form-control text-capitalize" id="sel1" onChange={this.handleSelect}>
              <option disabled selected>Выберите меню</option>
              {Object.keys(menu).map((id, index) => {
                  const p = menu[id];
                  return (
                    <option key={index} className="text-capitalize">{p["name"]}</option>
                  )
                }
              )}
            </select>
          </div>
        </Dialog>

        <Dialog
          title="Точно хотите удалить?"
          actions={actionsRm}
          modal={false}
          open={this.state.openRm}
          onRequestClose={this.handleCloseM}
        >
          {this.state.error ? <div className='text-danger'>...Ошибка, возможно блюдо состоит в меню</div> : ""}
        </Dialog>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    dish: state.dish,
    type_dishes: state.type_dishes
  }
};


export default connect(mapStateToProps)(DishTableList);

