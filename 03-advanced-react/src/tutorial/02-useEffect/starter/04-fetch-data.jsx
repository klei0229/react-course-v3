const url = "https://api.github.com/users";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //what is the function we execute on load?
    //we call an async function because it gets data from a database

    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();

        setData(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      {console.log(data)}
      
      {data.map((user)=>{return (<>
        <h6>{user.login}</h6>
        <img style={{width:"50px"}}src={user.avatar_url}></img>
      </>)
      })}
    </>
  );
};
export default FetchData;
