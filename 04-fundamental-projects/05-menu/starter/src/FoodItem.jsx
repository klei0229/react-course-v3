import React from "react";

const FoodItem = (props) => {
  const { id, title, category, price, img, desc } = props.item;
  return (
    <div className="menu-item">
      <img className="img" src={img} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
      <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};

export default FoodItem;
