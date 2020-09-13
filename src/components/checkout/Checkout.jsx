import React from "react";
import Subtotal from "../subtotal/Subtotal";
import AddBanner from "../../images/addBannar.jpg";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__left">
          <img className="checkout__ad" src={AddBanner} alt="Add banner" />
          <div>
            <h2 className="checkout__title">Shopping Basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
