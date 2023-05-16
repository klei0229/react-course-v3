import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price} = props.tour;
  const removeTour = props.removeTour
  const [isLongInfo, setLongInfo] = useState(false);


  console.log(removeTour)
  return (
    <div key={id} className="single-tour">
      <img className="img" src={image}></img>
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{isLongInfo ? info : info.substring(0, 200) + "..."}</p>
      </div>
      <button
        className="info-btn"
        onClick={() => {
          setLongInfo(!isLongInfo);
        }}
      >
        read more
      </button>
      <div className="tour-info">
        <button className="delete-btn" onClick={()=>{removeTour(id)}} >not interested</button>
      </div>
    </div>
  );
};

export default Tour;
