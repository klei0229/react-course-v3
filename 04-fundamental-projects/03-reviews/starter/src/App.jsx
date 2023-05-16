import data from "./data";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

const App = () => {
  const [id, setId] = useState(1);
  const [review, setReview] = useState(data[0]);

  const nextReview = () => {
    console.log("clicked next review");
    if (id == data.length) {
      setId(1);
    } else {
      let nextId = id + 1;
      setId(nextId);
    }
  };

  const prevReview = () => {
    console.log("clicked next review");
    if (id == 1) {
      setId(data.length);
    } else {
      let nextId = id - 1;
      setId(nextId);
    }
  };

  const randomReview = () =>{
    let min = 1
    let max = data.length+1
    let newId = Math.floor(Math.random() * (max - min) + min);
    console.log(newId)
    setId(newId)
  }

  useEffect(() => {
    console.log(data);
    console.log("id:" + id);
    let review = data.filter((review) => {
      return review.id == id;
    });
    console.log(review);

    setReview(review[0]);
  }, [id]);

  return (
    <main>
      {console.log(review)}
      <ReviewCard
        review={review}
        nextReview={nextReview}
        prevReview={prevReview}
        randomReview={randomReview}
      ></ReviewCard>
    </main>
  );
};
export default App;
