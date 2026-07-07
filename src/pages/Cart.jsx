import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "30px" }}>
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              border: "1px solid #ddd",
              margin: "15px 0",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              width="120"
            />

            <h3>{item.title}</h3>

            <p>₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;