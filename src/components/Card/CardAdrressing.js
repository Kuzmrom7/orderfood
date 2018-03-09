import React, {Component} from 'react';
import {connect} from "react-redux";
import {Avatar, List, ListItem, Paper, RaisedButton} from "material-ui";


export class CardAdrressing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        id_place: ""
      }

    };
  }


  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.state.data;
    this.props.submit(data.name)
      .then(() =>this.setState({data : ""}))
  };

  handleChange = (e) => {
    e.preventDefault();
    let data = this.state.data;
    data.name = e.target.value;
    this.setState({data: data});
  };


  render() {
    const {adrress} = this.props;
    return (
      <div>
        <Paper zDepth={1}>
          <div className={"card undefined"}>
            <div className="header">
              <h4 className="title">Мои адреса</h4>
              <div className={"content undefined"}>
                <List>
                  {
                    Object.keys(adrress).map((id,index) => {
                      const add = adrress[id];
                      return (
                        <ListItem
                          key = {index}
                          primaryText={add["name"]}
                          leftAvatar={<Avatar>A</Avatar>}
                        />
                      )
                    })
                  }
                </List>
              </div>
            </div>

            <div className="header">
              <h4 className="title">Добавить адрес</h4>
              <div className={"content undefined"}>
                <div className="col-md-12 mb-3">
                  <form className="" onSubmit={this.handleSubmit}>
                    <div className="col-md-10">
                      <span>Адрес</span>
                      <input type="text" className="form-control"
                             placeholder="Адрес" onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <span>Добавить</span>
                      <RaisedButton type="submit" label="Ок" primary={true}/>
                    </div>
                  </form>
                </div>
                <br/>
              </div>
            </div>
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
