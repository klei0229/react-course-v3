import { data } from "../../../data.js";

import { useState } from "react";

const UseStateArray = () => {
  const [list, setList] = useState(data);

  const removePerson = (id)=>{
    let newList = list.filter((person)=>{return (person.id !== id)})

    setList(newList)
  }

  return (
    <>
      <h2>useState array example</h2>
      {list.map((element) => {
        const {id,name} = element

        return (
          <div key={id}>
            <p>{element.name}</p>
            <button onClick={()=>{removePerson(id)}}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
