import data from "./data";
import { useState, useEffect } from "react";

const App = () => {
  const [textArray, setTextArray] = useState([]);
  const [paragraphs, setParagraphs] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    setTextArray(data.slice(0, paragraphs));
    const arr = data.slice(0, paragraphs);
    setTextArray(arr);
  };

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className="lorem-form" onSubmit={submitForm}>
        <label>Paragraphs: </label>
        <input
          className="input"
          type="number"
          min="1"
          max="8"
          value={paragraphs}
          onChange={(e) => {
            setParagraphs(e.target.value);
          }}
        ></input>
        <button className="btn" type="submit">
          Generate
        </button>

      </form>
      <article className='lorem-text'>

      {textArray.map((paragraph,index) => {
        return <p key={index}>{paragraph}</p>;
      })}
      </article>
    </section>
  );
};
export default App;
