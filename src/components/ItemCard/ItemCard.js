import React from "react";
import "./ItemCard.css";
import LaysImage from "../../assets/lays.svg";

const ItemCard = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={LaysImage} alt="lays" />
      </div>
      <div className="card-details">
        <div className="price-details">
          <div>
            <span className="final-price">Rs 500</span>
            <span className="discount">25% off</span>
          </div>
          <div>MSRP:400</div>
        </div>
        <div className="product-name">LAYS</div>
        <div className="product-details">Potato Chip Variety Pack</div>
        <div className="product-quantity">(Pack of 40)</div>
      </div>
    </div>
  );
};

export default ItemCard;
