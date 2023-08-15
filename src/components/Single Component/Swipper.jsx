import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./indexs.css";

const Swipper = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //   },
    });
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides here or map*/}
      </div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* <div className="swiper-scrollbar"></div> */}
    </div>
  );
};

export default Swipper;
