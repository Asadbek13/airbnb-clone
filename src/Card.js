import React from "react";
import "./Card.css";

function Card({ src, title, description, price, sna }) {
  return (
    <div className={"card " + sna}>
      <div className="card__img">
        <img src={src} alt="" />
      </div>
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
