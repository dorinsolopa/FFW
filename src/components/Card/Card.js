import React from "react";
import "./Card.css";
const Card = (props) => {
  return <div className="styleCard"> {props.children}</div>;
};
export default Card;
