import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { isOpenSidebar, setOpenSideBar, setOpenSubmenu, setSubmenuContext } =
    useGlobalContext();

  const handleSubmenu = (e) => {
    // console.log(e.target.classList.value);
    if(e.target.classList.value == 'nav-links'){
      setSubmenuContext(null);
    }


  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button
          className="toggle-btn"
          onClick={() => {
            setOpenSideBar(!isOpenSidebar);
          }}
        >
          =
        </button>

        <div className="nav-links">
          {sublinks.map((sublink) => {
            const { pageId, page, links } = sublink;
            return (
              <button
                key={pageId}
                className="nav-link"
                onMouseEnter={() => setSubmenuContext(pageId)}
                value={pageId}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
