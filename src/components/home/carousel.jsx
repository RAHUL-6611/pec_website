import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hostel from "../../assets/hostel.jpg"
import cover from "../../assets/cover.jpg"
import audi from "../../assets/audi.jpg"
import home from "../../assets/home.jpg"
import sports from "../../assets/sports.jpg"
import video from "../../assets/campus-life.mp4"


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
      <img src={sports} alt="lllllllllllllllllllllll" />
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
// export default function Carousel() {
//   return (
//     <>
//     <Swiper 
//     spaceBetween={30} 
//     // centeredSlides={true}
//      autoplay={{
//     "delay": 1000,
//     "disableOnInteraction": false
//     }} pagination={{
//   "clickable": true
//     }}
//     navigation={true} className="mySwiper"
//     direction={'vertical'}
//     mousewheel={true}
// >
//   <SwiperSlide>
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   <SwiperSlide>Slide 1
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   <SwiperSlide>Slide 1
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   <SwiperSlide>Slide 1
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   <SwiperSlide>Slide 1
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   <SwiperSlide>Slide 1
//       <img src={hostel} alt="lllllllllllllllllllllll" />
//   </SwiperSlide>
  
//   </Swiper>
//     </>
//   )
// }