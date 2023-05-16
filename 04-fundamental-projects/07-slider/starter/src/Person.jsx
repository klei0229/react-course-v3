import React from "react";
import {IoMdQuote} from "react-icons/io"

const Person = (props) => {
  const { id, image, name, title, quote } = props.person;
  const style = props.style

  return (
    <div style={style}className="slide">
        <img className="person-img" src={image}></img>
      <h5 className="name">{name}</h5>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>

        <IoMdQuote className="icon"></IoMdQuote>
    </div>
  );
};

export default Person;
