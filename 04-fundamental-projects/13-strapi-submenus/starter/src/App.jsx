import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Submenu></Submenu>
      <Hero></Hero>
      <Sidebar></Sidebar>
    </div>
  );
};
export default App;
