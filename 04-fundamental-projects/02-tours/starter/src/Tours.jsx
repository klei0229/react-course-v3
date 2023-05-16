import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const tours = props.tours || [];
  const removeTour = props.removeTour
  // console.log(removeTour)

  return (
    <div className="title">
      <h1>Our Tours</h1>
      <div className="title-underline"></div>
      <div className="tours">
        {/* {tours.length} tours */}
        {/* <div className="title-underline"></div> */}
        {tours.map((tour) => {
          return <Tour tour={tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;
