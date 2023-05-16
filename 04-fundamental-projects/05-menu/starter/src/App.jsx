import data from "./data";
import { useState, useReact } from "react";
import { useEffect } from "react";

import FoodItem from "./FoodItem";
const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(data);
  }, []);

  const changeMenu = (filter) => {
    if (filter == "all") {
      setMenu(data);
    } else {
      let newMenu = data.filter((item) => {
        return item.category == filter;
      });
      setMenu(newMenu);
    }
  };

  return (
    <main className="menu">
      <h1 className="title">Our Menu</h1>
      <div className="title-underline"></div>

      <div className="btn-container">
        <button className="btn" onClick={()=>{changeMenu("all")}}>All</button>
        <button className="btn" onClick={()=>{changeMenu("breakfast")}}>
          Breakfast
        </button>
        <button className="btn" onClick={()=>{changeMenu("lunch")}}>Lunch</button>
        <button className="btn" onClick={()=>{changeMenu("shakes")}}>Shakes</button>
      </div>

      <div className="section-center">
        {menu.map((item) => {
          return <FoodItem item={item}></FoodItem>;
        })}
      </div>
    </main>
  );
};
export default App;
