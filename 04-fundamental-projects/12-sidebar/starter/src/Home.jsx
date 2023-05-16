import React from "react";

import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <div className="main">
      <button onClick={openSidebar}>Open Sidebar</button>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Home;
