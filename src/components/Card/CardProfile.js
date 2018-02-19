import React, {Component} from 'react';
import {connect} from "react-redux";


export class CardProfile extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.phone, data.url, data.adress)
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
    data.adress = e.target.value;
    this.setState({data: data});
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {
        phone: this.props.place.phone,
        url: this.props.place.url,
        adress: this.props.place.adress
      }
    };
  }

  render() {
    const {account, place} = this.props;
    return (
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
            <br/>
            <br/>


            {/*---------------PLACE--------------*/}


            <div className="col-md-4">
              <span>Название</span>
              <input type="text" className="form-control"
                     placeholder="Название заведения"
                     value={place.name}
                     disabled={true}

              />
            </div>
            <div className="col-md-4">
              <span>Телефон</span>
              <input type="tel" className="form-control"
                     placeholder="Телефон пуст заполните пожалуйста"
                     onChange={this.handleChangePhone}
                     value={this.state.data.phone}

              />
            </div>
            <div className="col-md-4">
              <span>Сайт</span>
              <input type="url" className="form-control"
                     placeholder="Сайт пуст заполните пожалуйста"
                     onChange={this.handleChangeUrl}
                     value={this.state.data.url}
              />
            </div>
            <div className="col-md-12">
              <span>Адрес</span>
              <input type="text" className="form-control"
                     placeholder="Адрес пуст заполните пожалуйста"
                     onChange={this.handleChangeaAdress}
                     value={this.state.data.adress}
              />
            </div>
            <div className="col-md-1">
              <button type="submit" className="btn btn-lg btn-primary">Обновить</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  place: state.place
});

export default connect(mapStateToProps)(CardProfile);
