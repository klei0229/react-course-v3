import { useEffect, useState } from "react";
import Values from "values.js";

const App = () => {
  const defaultColor = "#f15025";
  const [color, setColor] = useState("");
  const [colorsArr, setColorsArr] = useState(new Values(defaultColor).all(10));

  const submitForm = (e) => {
    e.preventDefault();

    let arr = new Values(color).all(10);
    console.log(arr);
    setColorsArr(arr);
  };

  function valueToHex(c) {
    var hex = c.toString(16);
    return hex;
  }
  function rgbToHex(r, g, b) {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  }

  return (
    <main>
      <section className="container">
        <h3>Color Generator</h3>
        <form className="color-form" onSubmit={submitForm}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <input
            type="text"
            value={color}
            placeholder={defaultColor}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          ></input>
          <button
            style={{ backgroundColor: color }}
            className="btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colorsArr.map((element) => {
          const [r, g, b] = element.rgb;
          return (
            <article
              className={
                element.type == "shade" ? "color color-light" : "color"
              }
              style={{ backgroundColor: `rgb(${r},${g},${b})` }}
            >
              {console.log(element.type)}
              <p className="color-value">{element.weight}%</p>
              <p className="percent-value">#{rgbToHex(r, g, b)}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default App;
