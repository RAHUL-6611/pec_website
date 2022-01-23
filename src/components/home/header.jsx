import React from "react";
import "./home.css"
// import vid from "../../images/campus_video.mp4"
// import ImageGallery from 'react-image-gallery';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import "./styles.css";
import Carousel from "./carousel"

// import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// import Swiper core and required modules
// import SwiperCore, {
//   Parallax,Pagination,Navigation
// } from 'swiper';

// install Swiper modules
// SwiperCore.use([Parallax,Pagination,Navigation]);

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const Header = () => {
    return <>
           <header style={{"height" : "max-content"}}>
            {/* <div style={{"background":"black"}}
            >
                </div> */}
                <Carousel />
{/* 
<Carousel
    plugins={[
        'infinite',
        {
            resolve: autoplayPlugin,
            options: {
                interval: 2000,
            }
        },
    ]}   
    animationSpeed={1000}
>
  <img src={images[0].original} />
  <img src={images[1].original} />
  <img src={images[2].original} />
</Carousel> */}
             {/* <Carousel plugins={['arrows']}>
                <img src={images[0].original} alt=""/>
                <img src={images[1].original} alt=""/>
                <img src={images[2].original} alt=""/>
            </Carousel> */}
               {/* <video width="100%" height="600px" preload="auto" muted autoPlay={"autoplay"} loop>
                   <source src={vid} type="video/mp4"/>
               </video> */}

            {/* <ImageGallery items={images} fullscreen infinite autoPlay useTranslate3D    /> */}
            {/* <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 500,
             "disableOnInteraction": false
             }} pagination={{
            "clickable": true
            }} navigation={true} loop={true} className="mySwiper">
        <div slot="container-start" className="parallax-bg" style={{'backgroundImage': images[0].original}} data-swiper-parallax="-23%"></div>
        <SwiperSlide>
             <div className="title" data-swiper-parallax="-300">Slide 1</div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-100">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 2</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 3</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
        </SwiperSlide>
  </Swiper> */}
           </header>
            <div className="count flex flex-row justify-center bg-yellow-200">
                <div>500+facultys</div>
                <div>1700+students</div>
                <div>50+subjects</div>
                <div>20+recruiters</div>
                <div>500+placements</div>
            </div>
           </>
}

export default Header;