import React, {Component} from 'react';
import {connect} from "react-redux";
import {Avatar, List, ListItem, Paper, RaisedButton} from "material-ui";


export class CardAdrressing extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  /*

    handleSubmit = (e) => {
      e.preventDefault();

      let data = this.state.data;
      this.props.submit(data.id, data.city, data.phone, data.url)
        .then(() => console.log(""))
    };


    handleChangePhone = (e) => {
      e.preventDefault();

      let data = this.state.data;
      data.phone = e.target.value;

      this.setState({data: data});
    };

    handleChangeUrl = (e) => {
      e.preventDefault();

      let data = this.state.data;
      data.url = e.target.value;
      this.setState({data: data});
    };

    handleChangeaAdress = (e) => {
      e.preventDefault();

      let data = this.state.data;
      data.city = e.target.value;
      this.setState({data: data});
    };
  */

  render() {

    return (
      <div>
        <Paper zDepth={1}>
          <div className={"card undefined"}>
            <div className="header">
              <h4 className="title">Мои адреса</h4>
              <div className={"content undefined"}>
                <List>
                  <ListItem
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar>A</Avatar>}
                  />
                  <ListItem
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar>A</Avatar>}
                  />
                </List>
              </div>
            </div>

            <div className="header">
              <h4 className="title">Добавить адрес</h4>
              <div className={"content undefined"}>
                <div className="col-md-12 mb-3">
                  <div className="col-md-10">
                    <span>Адрес</span>
                    <input type="text" className="form-control"
                           placeholder="Адрес"
                    />
                  </div>
                  <div className="col-md-2">
                    <span>Добавить</span>
                    <RaisedButton type="submit" label="Ок" primary={true}/>
                  </div>
                </div>
                <br/>
              </div>
            </div>
            {/*<div className={"content undefined"}>
              <form className="" onSubmit={this.handleSubmit}>
                ---------------ACCOUNT--------------


                <div className="col-md-6">
                  <span>Username</span>
                  <input type="username" className="form-control"
                         placeholder="Username"
                         value={account.username}
                         disabled={true}

                  />
                </div>
                <div className="col-md-6">
                  <span>Email</span>
                  <input type="email" className="form-control"
                         placeholder="Email address"
                         disabled={true}
                         value={account.email}
                  />
                </div>


                ---------------PLACE--------------


                <div className="col-md-6">
                  <span>Название</span>
                  <input type="text" className="form-control"
                         placeholder="Название заведения"
                         value={place.name}
                         disabled={true}

                  />
                </div>
                <div className="col-md-6">
                  <span>Телефон</span>
                  <input type="tel" className="form-control"
                         placeholder="Телефон пуст заполните пожалуйста"
                         onChange={this.handleChangePhone}
                         value={place.phone}

                  />
                </div>
                <div className="col-md-12">
                  <span>Сайт</span>
                  <input type="url" className="form-control"
                         placeholder="Сайт пуст заполните пожалуйста"
                         onChange={this.handleChangeUrl}
                         value={place.url}
                  />
                </div>
                <div className="col-md-12">
                  <span>Город</span>
                  <input type="text" className="form-control"
                         placeholder="Адрес пуст заполните пожалуйста"
                         onChange={this.handleChangeaAdress}
                         value={place.city}
                  />
                </div>
                <div className="col-md-1">
                  <RaisedButton type="submit" label="Обновить" primary={true}/>
                </div>
              </form>

            </div>*/}
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(CardAdrressing);
