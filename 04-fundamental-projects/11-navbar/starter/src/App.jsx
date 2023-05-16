import { links, social } from "./data";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
const App = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="nav-center">
      <img src={logo}></img>
      <div>
        {links.map((link) => {
          return <a href={link.url}>{link.text}</a>;
        })}
      </div>

      <div>
        {social.map((elem) => {
          return <a href={elem.url}>{elem.icon}</a>;
        })}
      </div>
    </div>
  );
};
export default App;
