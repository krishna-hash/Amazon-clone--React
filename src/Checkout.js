import React from "react";
import "./Checkout.css";
import { useStatevalue } from "./StateProvider";
import Checkoutitem from "./Checkoutitem";
import Shopout from "./Shopout";

function Checkout() {
  const [{ basket }] = useStatevalue();
  return (
    <div className="Checkout">
      <div className="checkout_left">
        <img
          classname="image"
          style={{ width: "100%" }}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        ></img>

        {basket?.length === 0 ? (
          <div style={{ fontSize: "20px", fontWeight: "600" }}>
            Your Basket is empty now........
          </div>
        ) : (
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Your Shopping Baket....,
            </p>
            {basket.map((item) => (
              <Checkoutitem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></Checkoutitem>
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Shopout />
        </div>
      )}
    </div>
  );
}

export default Checkout;
