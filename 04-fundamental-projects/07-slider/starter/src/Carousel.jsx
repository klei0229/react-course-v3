import React, { useEffect, useState } from "react";
import { shortList, longList, list } from "./data";
import Person from "./Person";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = () => {
  const [array, useArray] = useState(list);

  const [currentPerson, setCurrentPerson] = useState(0);

  const nextPerson = () => {
    console.log("next");
    if (currentPerson == array.length - 1) {
      setCurrentPerson(0);
    } else {
      let nextPerson = currentPerson + 1;
      setCurrentPerson(nextPerson);
    }
  };

  const prevPerson = () => {
    if (currentPerson == 0) {
      setCurrentPerson(array.length - 1);
    } else {
      let nextPerson = currentPerson - 1;
      setCurrentPerson(nextPerson);
    }

    console.log("prev");
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextPerson();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {console.log("currentPerson", currentPerson)}

      {array.map((person, personIndex) => {
        return (
          <Person key={person.id}
            style={{
              visibility: personIndex == currentPerson ? "visible" : "hidden",
              //   transform:`translateX(${10*personIndex}%)`
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            person={person}
          ></Person>
        );
      })}
      <button className="prev" onClick={prevPerson}>
        <AiFillCaretLeft />
      </button>
      <button className="next" onClick={nextPerson}>
        <AiFillCaretRight />
      </button>
    </section>
  );
};

export default Carousel;
