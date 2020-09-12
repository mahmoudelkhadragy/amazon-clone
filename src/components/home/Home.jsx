import React from "react";
import ImageSlider from "../slider/ImageSlider";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <ImageSlider />
      <div className="home__container">
        <div className="home__row">
          {/* Product */}
          <Product
            id="23234"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            rating={3}
          />
          <Product
            id="23234ff"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/313I+J9L3jL._AC_SY200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="2323433"
            title="The lean startup"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51YDVvVL9vL._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="2323422"
            title="The lean startup"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41WOalZ1N5L._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2323433"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
