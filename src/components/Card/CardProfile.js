import React, {Component} from 'react';
import {connect} from "react-redux";
import {Paper} from "material-ui";
import RaisedButton from 'material-ui/RaisedButton';


export class CardProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: this.props.place.id,
        phone: this.props.place.phone,
        url: this.props.place.url,
        city: this.props.place.city
      }
    };
  }

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

  render() {
    const {account, place} = this.props;

    return (
      <div>
        <Paper zDepth={1}>
          <div className={"card undefined"}>
            <div className="header">
              <h4 className="title">Изменить профиль</h4>
            </div>
            <div className={"content undefined"}>
              <form className="" onSubmit={this.handleSubmit}>
                {/*---------------ACCOUNT--------------*/}


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


                {/*---------------PLACE--------------*/}


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

            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  place: state.place
});

export default connect(mapStateToProps)(CardProfile);
