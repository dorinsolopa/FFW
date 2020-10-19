import React from "react";
import "./Card.css";

const InfoCard = (props) => {
  const { item, width, fontSize } = props;
  return (
    <div className="box">
      <div>
        <div
          className="content-card"
          style={{
            backgroundColor: `${item.color}`,
            border: "solid grey 2px",
            width: width,
            height: width,
            borderRadius: "15px",
          }}
        >
          <div className="letter">{item.abbr}</div>
        </div>
      </div>
      <div className="list">
        <ul>
          <li>{item.label}</li>
        </ul>
      </div>
    </div>
  );
};
export default InfoCard;
