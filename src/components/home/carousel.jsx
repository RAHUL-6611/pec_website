import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hostel from "../../assets/hostel.jpg"
import cover from "../../assets/cover.jpg"
import audi from "../../assets/audi.jpg"
import home from "../../assets/home.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Autoplay,EffectFade, Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Autoplay,EffectFade, Keyboard]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper keyboard={{"enabled":true}} slidesPerView={1} spaceBetween={30} pagination={{
  "clickable": false
    }} className="mySwiper"
    autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
      }}
      effect={'fade'}
>
 <SwiperSlide>
      <img src={hostel} alt="lllllllllllllllllllllll" />
  </SwiperSlide>
  
  <SwiperSlide>
      <img src={home} alt="lllllllllllllllllllllll" />
  </SwiperSlide>
  
  <SwiperSlide>
      <img src={audi} alt="lllllllllllllllllllllll" />
  </SwiperSlide>
  
  <SwiperSlide>
      <img src={cover} alt="lllllllllllllllllllllll" />
  </SwiperSlide>
  
  <SwiperSlide>
      <img src={hostel} alt="lllllllllllllllllllllll" />
  </SwiperSlide>
  
  <SwiperSlide>
      <img src={home} alt="lllllllllllllllllllllll" />
      {/* <video src={video}></video> */}
  </SwiperSlide>
  </Swiper>
    </>
  )
}