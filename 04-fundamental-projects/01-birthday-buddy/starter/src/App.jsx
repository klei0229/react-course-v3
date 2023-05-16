import data from "./data.js";
import { useEffect, useState } from "react";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <div className="container">
      <h3>Birthday Reminder - Starter</h3>
      <h3>{people.length} birthdays today</h3>
      {/* {console.log(data)} */}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person">
            <h4>{name}</h4>
            <p>{age} years</p>
            <img src={image} />
          </div>
        );
      })}
      <button
        class="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default App;
