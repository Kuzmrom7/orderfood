import React from "react";

export const Status = (status) => {
  switch (status) {
    case "PROCESSING": {

      return (<span className="text-danger">ОЖИДАЕТ</span>);

    }
    case "SUCCESS": {
      return (<span className="text-success">ОБРАБОТАН</span>);
    }

    default :
      return status
  }
};