import React from "react";
import ImageSlider from "../slider/ImageSlider";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider />
        <div className="home__row">
          {/* Product */}
          <Product />
        </div>
        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
