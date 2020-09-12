import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Beuaty from "../../images/back1.jpg";
import Computer from "../../images/back2.jpg";
import Furniture from "../../images/back3.jpg";
import Games from "../../images/back4.jpg";
import Sports from "../../images/back5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function ImageSlider() {
  const settings = {
    dots: false,
    autoplay: true,
    draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
  };
  return (
    <div className="home__sliderImage">
      <Slider {...settings}>
        <div className="home__slider">
          <img className="home__image" src={Beuaty} alt="beauty" />
        </div>
        <div className="home__slider">
          <img className="home__image" src={Computer} alt="computer" />
        </div>
        <div className="home__slider">
          <img className="home__image" src={Furniture} alt="Furniture" />
        </div>
        <div className="home__slider">
          <img className="home__image" src={Games} alt="Games" />
        </div>
        <div className="home__slider">
          <img className="home__image" src={Sports} alt="Sports" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
