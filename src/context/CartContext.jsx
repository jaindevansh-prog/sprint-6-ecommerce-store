import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  function addToCart(product) {

    setCart((prevCart) => [...prevCart, product]);

  }

  return (

    <CartContext.Provider value={{ cart, addToCart }}>

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;