import { createContext, useContext, useState } from "react";

//creates an Global Context called AppContext using the creatcontext hook
const AppContext = createContext();

// the jsx function is called AppProvider
export const AppProvider = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  //functions
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openModal = () => {
    console.log('true')
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    //we supply the appcontext provider component created above
    <AppContext.Provider
      value={{
        bob: "bob",
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebarOpen,
        isModalOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

//this is a custom hook to be called in other components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
