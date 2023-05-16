import React, { useContext, createContext, useReducer } from "react";
import cartItems from "./data";

//creates a var for createContext
const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === "DISPLAY_ITEMS") {
    state = { ...state, cart: action.payload.cartData };
  } else if (action.type === "INCREASE_AMOUNT") {
    let currentCart = state.cart;
    let id = action.payload.id;

    let newCart = currentCart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount++ };
      } else {
        return cartItem;
      }
    });
    state = { ...state, cart: newCart };
  } else if (action.type === "DECREASE_AMOUNT") {
    let currentCart = state.cart;
    let id = action.payload.id;
    let cartItem = currentCart.filter((cartItem) => {
      return cartItem.id == id;
    })[0];

    let newCart;
    if (cartItem.amount == 1) {
      newCart = currentCart.filter((cartItem) => {
        return cartItem.id !== id;
      });
      console.log("newCart", newCart);
    } else {
      newCart = currentCart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount-- };
        } else {
          return cartItem;
        }
      });
    }

    state = { ...state, cart: newCart };
  } else if (action.type === "CLEAR_CART") {
    state = { ...state, cart: new Map() };
  } else if (action.type === "REMOVE_ITEM") {
    let id = action.payload.id;
    let currentCart = state.cart;
    let newCart = currentCart.filter((cartItem) => {
      return cartItem.id !== id;
    });
    state = { ...state, cart: newCart };
  } else {
    console.log("action provided does not match any action in reducer");
  }

  console.log(action.type);
  console.log(state);
  return state;
};

const defaultState = {
  cart: new Map(),
};

//name jsx component AppProvider
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async () => {
    let cartData = [];
    try {
      const url = "https://www.course-api.com/react-useReducer-cart-project";
      const response = await fetch(url);
      console.log('res',response)
      cartData = await response.json();
    } catch (err) {
      console.log("error:", err);
      cartData = [...cartItems];
      
    }

    dispatch({ type: "DISPLAY_ITEMS", payload: { cartData } });
  };

  const increaseAmt = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { id } });
  };
  const decreaseAmt = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchData,
        increaseAmt,
        decreaseAmt,
        clearCart,
        removeItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
