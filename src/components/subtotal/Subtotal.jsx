import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";

function Subtotal() {
  //Pull the basket from useStateValue
  const [{ basket }] = useStateValue();

  // Calculate basket total
  const calculateTotal = (basket) => {
    return basket.reduce((price, item) => item.price + price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__count">
              Subtotal ( <span>{basket.length}</span> items ):{" "}
              <strong>{calculateTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">This order contains a gift </label>
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
