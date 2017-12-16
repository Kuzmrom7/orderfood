import React, {Component} from 'react';
import PropTypes from "prop-types";
import Preloader from "../components/Preloader";

class PlaceFormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        email: "",
        password:""
      },
      pending:true
    }
  }


  componentDidMount() {
    this.setState({pending:false})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;

    this.props.submit(data.username, data.email, data.password)
      .then(() => this.props.history.push("/"))
  };

  handleChangeUsername = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.username = e.target.value;
    this.setState({data: data});
  };




  render() {
    if (this.state.pending) return <Preloader/>;

    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="container">
          <a className="simple-text logo-normal">

          </a>
        </div>
        <h2 className="form-signin-heading">Добавьте свое заведение</h2>
        <input type="username" className="form-control"
               placeholder="Название"
               onChange={this.handleChangeUsername}
               value={this.state.username}
        />
        <br/>
        <label >Выберите тип</label>
        <select className="form-control" id="sel1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <br/>
        <button type="submit" className="btn btn-lg btn-success">Добавить</button>
      </form>

    );
  }
}

PlaceFormCreate.propTypes = {
  submit: PropTypes.func.isRequired
};


export default PlaceFormCreate;
