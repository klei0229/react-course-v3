import { useState, useReact } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {

    if(text.length == 0 ){
      toast.error("string is empty");

      return;
    }

    const item = { id: uuidv4(), text: text, isDone: false };
    console.log(item);
    const newList = [...list];
    newList.push(item);
    setList(newList);
    setText("");
    toast.success("item added to the list");
  };

  const deleteItem = (id) => {
    setList(
      list.filter((element) => {
        return element.id !== id;
      })
    );
    toast.success('item deleted');

  };

  const handleChange = (id) => {
    const newItems = list.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isDone: !item.isDone };
        return newItem;
      }
      return item;
    });

    setList(newItems);
  };

  return (
    <main className="section-center">
      <ToastContainer position='top-center' />

      <form>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button type="button" className="btn" onClick={addItem}>
            Add Item
          </button>
        </div>
      </form>

      <section className="items">
        {console.log(list)}

        {list.map((element) => {
          return (
            // <div>element</div>

            <div key={element.id} className="single-item">
              <input
                name="isDone"
                type="checkbox"
                value={element.isDone}
                onChange={(e) => {
                  handleChange(element.id);
                }}
              ></input>
              <p
                style={{
                  textDecoration: element.isDone ? "line-through" : "none",
                }}
              >
                {element.text}
              </p>
              <button
                className="btn remove-btn"
                onClick={() => {
                  deleteItem(element.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default App;
