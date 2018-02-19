import React, {Component} from 'react';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import {connect} from "react-redux";

class TablePersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
    };

  }

  render() {
    const {personal} = this.props;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <div className={"card undefined"}>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                  <tr>
                    <th><h5>Фамилия Имя Отчество</h5></th>
                    <th><h5>Номер телефона</h5></th>
                    <th><h5>Принят на работу</h5></th>
                    <th><h5>Обновлены данные</h5></th>

                    {/* {
                            thArray.map((prop, key) => {
                              return (
                                <th  key={key}>{prop}</th>
                              );
                            })
                          }*/}

                  </tr>
                  </thead>
                  <tbody>
                  {Object.keys(personal).map((id, index) => {
                      const p = personal[id];
                      return (
                        <tr>
                          <td>{p["name"]}</td>
                          <td>{p["phone"]}</td>
                          <td>{p["created"]}</td>
                          <td>{p["updated"].slice(0, 10)}</td>
                          <td><i className="fa fa-trash-o" aria-hidden="true"/></td>
                        </tr>
                      );
                    }
                  )}


                  {/*   {
                          tdArray.map((prop,key) => {
                            return (
                              <tr key={key}>{
                                prop.map((prop,key)=> {
                                  return (
                                    <td  key={key}>{prop}</td>
                                  );
                                })
                              }</tr>
                            )
                          })
                        }*/}
                  </tbody>
                </Table>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personal: state.personal
});

export default connect(mapStateToProps)(TablePersonal)

