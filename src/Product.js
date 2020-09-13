import React from "react";
import "./Product.css";
import { useStatevalue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStatevalue();
  console.log("basket length is", basket);
  const addproduct = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>&euro;</small>
          <strong>{price}</strong>
        </p>
        <p className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span> &#11088;</span>
            ))}
        </p>
      </div>

      <img src={image} alt="book"></img>
      <button onClick={addproduct}>Add to basket</button>
    </div>
  );
}

export default Product;
