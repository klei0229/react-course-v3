import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

import { useGlobalContext } from "./context";

const App = () => {
  const { bob } = useGlobalContext();
  console.log(bob);
  return (
    <div className="main">
      <Home></Home>
      <Sidebar></Sidebar>
      <Modal></Modal>
    </div>
  );
};
export default App;
