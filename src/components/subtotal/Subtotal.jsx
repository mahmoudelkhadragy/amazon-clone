import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__count">
              Subtotal ( <span>0</span> items ): <strong>0</strong>
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
