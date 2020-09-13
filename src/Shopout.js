import React from "react";
import "./Shopout.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "./StateProvider";
import { getbasket } from "./reducer";

function Shopout() {
  const [{ basket }, dispatch] = useStatevalue();
  console.log("the total is", getbasket(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal{basket.length} items:<strong>{value}</strong>
            </p>
            <small className="small_gift">
              <input type="checkbox"></input>
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasket(basket)}
        thousandSeparator={true}
        displayType={"text"}
        prefix="&euro;"
      />
      <button>Proceed to check out</button>
    </div>
  );
}

export default Shopout;
