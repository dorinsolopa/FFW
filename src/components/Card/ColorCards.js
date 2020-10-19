import React from "react";
import "./Card.css";
import InfoCard from "./InfoCard";

class ColorCards extends React.Component {
  render() {
    const { cards } = this.props;
    if (!cards.length) {
      return null;
    }
    const firstCard = cards[0];
    const restCards = cards.slice(1);
    return (
      <div className="flex ">
        <div>
          <InfoCard item={firstCard} width={200} />
        </div>
        <div className="restCards">
          {restCards.map((item, index) => {
            return <InfoCard item={item} key={index} width={130} />;
          })}
        </div>
      </div>
    );
  }
}
export default ColorCards;
