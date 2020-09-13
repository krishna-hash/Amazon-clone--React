import React from "react";
import "./checkoutitem.css";
import { useStatevalue } from "./StateProvider";

function Checkoutitem({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStatevalue();
  const removeproduct = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image}></img>
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>&euro;</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span> &#11088;</span>
            ))}
        </p>
        <button onClick={removeproduct}>remove from basket</button>
      </div>
    </div>
  );
}

export default Checkoutitem;
