import React from "react";
import "./Card.css";

const InfoCard = (props) => {
  const { item, width, top } = props;
  return (
    <div className="box">
      <div>
        <div
          className="content-card"
          style={{
            backgroundColor: `${item.color}`,
            border: "solid grey 3px",
            width: width,
            height: width,
            borderRadius: "15px",
          }}
        >
          <div className="letter">
            <div className="bottom-left">{item.abbr}</div>
          </div>
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
