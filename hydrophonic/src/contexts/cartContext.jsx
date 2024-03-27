import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // item  amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total amount state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cartProducts.reduce((accumalator, currentItem) => {
      return accumalator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cartProducts]);

  // update itme amount
  useEffect(() => {
    if (cartProducts) {
      const amount = cartProducts.reduce((accumalator, currentItem) => {
        return accumalator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  });

  // add to cart
  const addToCart = async(product, id) => {
      try {
        console.log("Hello",id)
        const response = await axios.put(
          `http://localhost:4000/api/v1/product/addtocart/${id}`,
          null, // data parameter (optional)
          { withCredentials: true } // Axios request configuration object
        );
          console.log("Hello")
          console.log(response.data);
      } catch (error) {
          console.error("Error fetching data:", error);
      };
    const newItem = { ...product, amount: 1 };
    const cartItem = cartProducts.find((item) => {
      // we are checking if the product is already in the cart
      return item.id === product._id; // if it is in the cart, we are returning the item
    });
    // if cart item is already in cart
    if (cartItem) {
      const newCart = [...cartProducts].map((item) => {
        if (item._id === id) {
          console.log("hello",id)
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCartProducts(newCart);
    } else {
      setCartProducts([...cartProducts, newItem]);
    }
  };
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cartProducts.filter((item) => {
      return item.id !== id; // if the item id is not equal to the id we are passing in, we are returning the item
    });
    setCartProducts(newCart);
  };
  // clear cart
  const clearCart = () => {
    setCartProducts([]);
  };
  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cartProducts.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cartProducts.find((item) => item.id === id);
    if (cartItem.amount === 1) {
      item.amount = 1;
    } else {
      const newCart = [...cartProducts].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCartProducts(newCart);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}{" "}
    </cartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(cartContext);
};
