import React from "react";
import Subtotal from "../subtotal/Subtotal";
import AddBanner from "../../images/addBannar.jpg";
import "./Checkout.css";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__left">
          <img className="checkout__ad" src={AddBanner} alt="Add banner" />
          <div>
            <h4>Hello, {user?.email}</h4>
            <h2 className="checkout__title">Shopping Basket</h2>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
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
