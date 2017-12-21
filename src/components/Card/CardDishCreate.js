import React, {Component} from 'react';
import {FormInputs} from '../../components/FormInputs/FormInputs.jsx';


export class CardDishCreate extends Component {
  render() {
    return (
      <div className={"card undefined"}>
        <div className="header">
          <h4 className="title">Создать блюдо</h4>
        </div>
        <div className={"content undefined"}>
          <FormInputs
            ncols={["col-md-6", "col-md-6"]}
            proprieties={[
              {
                label: "Название блюда",
                type: "text",
                bsClass: "form-control",
                placeholder: "Наименование"
              },
              {
                label: "URL фото",
                type: "text",
                bsClass: "form-control",
                placeholder: "Photo"
              }
            ]}
          />
          <button className="btn btn-success">Создать</button>
        </div>
      </div>
    );
  }
}

export default CardDishCreate;
