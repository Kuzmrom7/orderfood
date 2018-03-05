
import React from "react";
import {RaisedButton} from "material-ui";


const AddSpec = ({size, price, submit,s,p}) => {
  return (
    <form onSubmit={submit}>
      <div className="col-12">
        <div className="row">
          <div className="col-md-5">
            <span>Размер или название </span>
            <input type="text" className="form-control" value={s}
                   placeholder="Например 220 гр." onChange={(e) => size(e)}
            />
          </div>

          <div className="col-md-5">
            <span>Цена</span>
            <input type="text" className="form-control" value={p}
                   placeholder="Цена за единицу товара" onChange={(e) => price(e)}
            />
          </div>

          <div className="col-md-2 ">
            <span>Добавьте здесь</span>
            <RaisedButton type="submit" label="ОК"/>
          </div>
        </div>
      </div>
    </form>

  )
};


export default (AddSpec);