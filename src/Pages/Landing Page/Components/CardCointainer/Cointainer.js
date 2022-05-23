import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import "./Cointainer.css";

export default function Cointainer(props) {
  const cards = props.items;
  return (
    <div className="contain">
      {cards.map((item) => (
        <Card src={item.previewImage} title={item.title} key={item._id} date={item.releaseDate} />
      ))}
    </div>
  );
}
