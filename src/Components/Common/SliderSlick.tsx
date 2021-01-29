import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src='/uploads/SliderPIC/29283.jpg' />
      </div>
      <div>
        <img src='/uploads/SliderPIC/29378.jpg' />
      </div>
      <div>
        <img src='/uploads/SliderPIC/29538.jpg' />
      </div>
    </Slider>
  );
}