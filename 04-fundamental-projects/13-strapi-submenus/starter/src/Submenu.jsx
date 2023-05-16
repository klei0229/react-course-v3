import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const handleMouseLeave = () => {
    setSubmenuContext(null);
  };
  const { isOpenSubmenu, submenuContext, setSubmenuContext } =
    useGlobalContext();
  console.log(submenuContext);
  const currentPage = sublinks.find((item) => item.pageId === submenuContext);
  const pageName = currentPage?.page;
  const innerLinks = currentPage?.links || [];

  console.log(currentPage);
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={submenuContext == null ? "submenu" : "submenu show-submenu"}
    >
      <h5>{pageName}</h5>
      <div className="submenu-links">
        {innerLinks.map((link) => {
          const { id, label, icon, url } = link;

          return (
            <a>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
