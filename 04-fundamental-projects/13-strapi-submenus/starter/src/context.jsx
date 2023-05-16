import { useState, useContext, createContext } from "react";

const AppContext = createContext();



export const AppProvider = (props) => {
  const [isOpenSidebar, setOpenSideBar] = useState(false);
  const [isOpenSubmenu, setOpenSubmenu] = useState(false);
  const [submenuContext, setSubmenuContext] = useState(null);

  const valueObj= {
    isOpenSidebar,
    setOpenSideBar,
    isOpenSubmenu,
    setOpenSubmenu,
    submenuContext,
    setSubmenuContext,
  }

  return <AppContext.Provider value={valueObj}>{props.children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
