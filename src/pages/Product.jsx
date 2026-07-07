import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "300px",
          objectFit: "contain",
        }}
      />

      <h1>{product.title}</h1>

      <h2>₹ {product.price}</h2>

      <p>{product.description}</p>

      <p>
        <strong>Brand:</strong> {product.brand}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        ⭐ {product.rating}
      </p>
      <button
style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"12px 28px",
borderRadius:"8px",
cursor:"pointer",
fontSize:"16px",
marginTop:"20px"
}}
onClick={()=>{
addToCart(product);
alert("Added to Cart");
}}
>
Add to Cart
</button>
    </div>
  );
}

export default Product;