import React from "react";
import { SalesService } from "../../utils/sales";
import "./index.css";

const Card = () => {
  return (
    <>
      <div className="container">
        {SalesService?.map((item, index) => {
          return (
            <div key={index} className="elemento">
              <div className="day">{item.dia}</div>
              <div className="value">{item.valor}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
