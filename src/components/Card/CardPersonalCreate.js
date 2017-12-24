import React, {Component} from 'react';
import {connect} from "react-redux";
import Preloader from "../../components/Preloader";
import Personal from "../../actions/personal";



export class CardPersonalCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : {
        name :"",
        phone: "",
        nametypePerson: ""
      },
      pending : true
    };
  }
  componentDidMount(){
    Promise.all([
      this.props.dispatch(Personal.TypePersonal())
    ])
      .then(() => this.setState({pending:false}))
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.nametypePerson,data.name,data.phone)
      .then(() =>console.log("GO"))
  };

  handleChangeName = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };
  handleChangePhone = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.phone = e.target.value;
    this.setState({data: data});
  };
  handleChangeType = (e) => {
    e.preventDefault();

    let data = this.state.data;
    data.nametypePerson = e.target.value;
    this.setState({data: data});
  };

  render() {
    if (this.state.pending) return (
      <div><Preloader/></div>
    );
    const {type_personal} = this.props;
    return (
      <div className={"card undefined"}>
        <div className="header">
          <h4 className="title">Добавить сотрудника</h4>
        </div>
        <div className={"content undefined"}>
          <form className="" onSubmit={this.handleSubmit}>
            {/*---------------PERSONAL--------------*/}

            <div className="col-md-4">
              <span>Фамилия Имя Отчество:</span>
              <input type="username" className="form-control"
                     onChange={this.handleChangeName}
                     value={this.state.data.name}
              />
            </div>

            <div className="col-md-4">
              <span>Телефонный номер:</span>
              <input type="tel" className="form-control"
                     placeholder="" onChange={this.handleChangePhone}
              />
            </div>

            <div className="col-md-4">
              <span>Должность:</span>
              <select className="form-control text-capitalize" id="sel1" onClick={this.handleChangeType} >
                <option disabled selected>Выберите должность</option>
                {Object.keys(type_personal).map((id, index) => {
                    const p = type_personal[id];
                    return (
                      <option key={index} className="text-capitalize" >{p["name"]}</option>
                    )
                  }
                )}
              </select>
            </div>

            <div className="col-md-4">
              <button type="submit" className="btn btn-lg btn-success ">Создать</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  type_personal: state.type_personal
});

export default connect(mapStateToProps)(CardPersonalCreate);
