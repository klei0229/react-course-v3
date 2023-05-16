const url = "https://course-api.com/react-tours-project";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    console.log("clicked");
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const tours = await response.json();

      // console.log(response)
      // console.log(tours)

      setIsLoading(false);
      setTours(tours);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (tours.length == 0) {
    return <div>No tours to display</div>;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
};
export default App;
