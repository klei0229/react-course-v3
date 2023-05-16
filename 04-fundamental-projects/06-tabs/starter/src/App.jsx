import {useState, useEffect} from "react"
import Sidebar from "./Sidebar";
import SummaryView from "./SummaryView";

const url = 'https://course-api.com/react-tabs-project';
const App = () => {

  const [data, setData] = useState([]);
  const [entry, setEntry] = useState({});


  const makeActive = (id) =>{
    let newEntry = data.filter((element)=>{return element.id == id})[0]
    setEntry(newEntry);
  }

  useEffect(()=>{
    const fetchData = async() =>{
      const res = await fetch(url)
      const resJSON = await res.json();
      setData(resJSON)
      setEntry(resJSON[0]);
    }
    fetchData();
  },[])


  return <main className="jobs-center">
    <Sidebar data={data} makeActive={makeActive} activeEntry={entry}></Sidebar>
    <SummaryView entry={entry}></SummaryView>
  </main>;


};
export default App;
