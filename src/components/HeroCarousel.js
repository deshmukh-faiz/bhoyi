import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png"

import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src="https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480133.jpg?t=st=1716371991~exp=1716375591~hmac=36cf011cb3bc5b2da59f2f4f04093b6f4cf4695d36b655dad27453658d5b78f1&w=1380" className="car-pic" />
          </div>

          <div>
            <img src="https://img.freepik.com/free-photo/horizontal-banner-beauty-products-with-brush_23-2149446506.jpg?t=st=1716371714~exp=1716375314~hmac=7e090385f5553612b94cfd790daa1af701dc3c6b66f11a810a3da3c233fb5179&w=1380" className="car-pic" />
          </div>


        

          <div>
            <img src="https://img.freepik.com/free-photo/horizontal-banner-cosmetic-product-with-kiwi-citrus_23-2149446543.jpg?t=st=1716371897~exp=1716375497~hmac=ace7d86c10c8cbb0606d5535925946b0db83f0da934496325d2f6a6e5c3a58a5&w=1380" className="car-pic" />
          </div>

          <div>
            <img src="https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480138.jpg?t=st=1716371969~exp=1716375569~hmac=eada9dbafa12b772899c12e4e223822aa578eb3025098fab898617834dc9bdae&w=1380" className="car-pic" />
          </div>

          <div>
            <img src="https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480150.jpg?t=st=1716372035~exp=1716375635~hmac=218a4544202ef40f01bf921f8f2e0ea700e6b6672e005562df33d963ff14b46c&w=1380" className="car-pic" />
          </div>

          <div>
            <img src="https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480194.jpg?t=st=1716372065~exp=1716375665~hmac=cc59e9fe716eed29a0d0afc2755795b4184f672939fb29bb53b030c09399f80a&w=1380" className="car-pic" />
          </div>



        </Slider>
      </div>
    );
  }
}