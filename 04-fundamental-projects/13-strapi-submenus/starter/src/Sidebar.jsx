import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isOpenSidebar, setOpenSideBar } = useGlobalContext();

  return (
    <div className={isOpenSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
      <button className="close-btn" onClick={()=>{setOpenSideBar(false)}}>x</button>
        {sublinks.map((sublink) => {
          const { pageId, page, links } = sublink;
          return (
            <article>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
