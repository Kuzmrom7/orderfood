import React, {Component} from 'react';
import {RaisedButton, Snackbar} from "material-ui";
import {connect} from "react-redux";

export class CardDishCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        url: "",
      },
      open: false,
      dis: false,
      pending: true
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name, data.url)
      .then(this.handleSuccess)
  };


  handleSuccess = () => {
    this.setState({open: true, dis: true})
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      dis: false,
      data: {
        name: "",
        url: ""
      }
    })
  };

  handleChangeName = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };
  handleChangeUrl = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.url = e.target.value;
    this.setState({data: data});
  };


  render() {
    return (
      <div className="col-md-12 margin-top">
        <div className={"card undefined"}>
          <div className="header">
            <h4 className="title">Создать меню</h4>
          </div>
          <div className={"content undefined"}>
            <form className="" onSubmit={this.handleSubmit}>
              <div className="col-md-6">
                <span>Название меню</span>
                <input type="username" className="form-control"
                       onChange={this.handleChangeName}
                       value={this.state.data.name}
                       disabled={this.state.dis}
                />
              </div>

              <div className="col-md-6">
                <span>URL photo</span>
                <input type="text" className="form-control" disabled={this.state.dis}
                       placeholder="url" onChange={this.handleChangeUrl}
                />
              </div>
              <div className="col-md-1 col-sm-12">
                <br/>
                <RaisedButton type="submit" label={!this.state.dis ? "Добавить" : "Добавлено"} primary={true}
                              disabled={this.state.dis}/>
              </div>
            </form>

            <Snackbar
              open={this.state.open}
              message="Меню было создано"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  type_dishes: state.type_dishes
});

export default connect(mapStateToProps)(CardDishCreate);
