import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide_image_1 from "../../images/productImages/p1.jpg";
import slide_image_2 from "../../images/productImages/p2.jpg";
import slide_image_3 from "../../images/productImages/p3.jpg";
import slide_image_4 from "../../images/productImages/p4.jpg";
import slide_image_5 from "../../images/productImages/p5.jpg";
import slide_image_6 from "../../images/productImages/p6.jpg";
import slide_image_7 from "../../images/productImages/p7.jpg";
import slide_image_8 from "../../images/productImages/p8.jpg";
import slide_image_9 from "../../images/productImages/p9.jpg";
import slide_image_10 from "../../images/productImages/p10.jpg";
import slide_image_11 from "../../images/productImages/p11.jpg";

import "./ProductSlider.css";
import { Link } from "react-router-dom";

function App() {
  const slidesPerView2 = window.innerWidth <= 1024 ? 3 : 4;
  const slidesPerView = window.innerWidth <= 768 ? 1 : slidesPerView2;
  const spaceBetween = window.innerWidth <= 768 ? 0 : -10;
  return (
    <div className="product-container">
      <div className="product-heading-box">
        <h2 className="product-heading">Feature Product</h2>
        <div className="product-underline"></div>
      </div>
      <div className="product-swipr">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_10} alt="slide_image" className="img-slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_11} alt="slide_image" className="img-slide" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </Swiper>
        <Link className="product-button" to={"product"}>
          Find out more product
        </Link>
      </div>
    </div>
  );
}

export default App;
