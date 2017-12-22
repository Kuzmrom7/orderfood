import React, {Component} from 'react';
import {connect} from "react-redux";


export class CardProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    const {account,place} = this.props;
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
              <input type="text" className="form-control"
                     placeholder="Номер телефона"
                     value={place.phone}
              />
            </div>
            <div className="col-md-4">
              <span>Сайт</span>
              <input type="text" className="form-control"
                     placeholder="Сайт"
                     value={place.url}
              />
            </div>
            <div className="col-md-12">
              <span>Адрес</span>
              <input type="text" className="form-control"
                     placeholder="Адрес"
                     value={place.adress}
              />
            </div>
            <div className="col-md-1">
              <button className="btn btn-lg btn-primary">Обновить</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account: state.account,
  place:state.place
});

export default connect(mapStateToProps)(CardProfile);
