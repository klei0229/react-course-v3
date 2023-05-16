import React from "react";
import { links, social } from "./data";

import logo from "./logo.svg";

import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar": "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} className="logo"></img>
        <button className="close-btn" onClick={closeSidebar}>
          x
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((elem) => {
          const { id, url, text, icon } = elem;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
