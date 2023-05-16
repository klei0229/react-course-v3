import CartItem from "./CartItem";
import cartItems from "./data";
import { useEffect } from "react";

import { useGlobalContext } from "./context";

const CartContainer = () => {
  //function imports this component access to fetchdata from context
  const { cart, fetchData, clearCart } = useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(cart)
  const cartArray = [...cart];

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${cartArray.reduce((accum,currVal)=>{return accum+parseFloat(currVal.price*currVal.amount)},0).toFixed(2)}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            console.log("clear cart");
            clearCart();
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
