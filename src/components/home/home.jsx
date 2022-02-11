import React from "react";

import CarouselHold from "./Carousel_hold";
// import CardHold from "./cards/Card_hold";
// import AboutUs from "./About Us/Aboutus";
import StudentCount from "./student_Count/Student_Count";
// import NewsBlock from "./newsEvents/NewsEvents";
import CampusLifeOne from "./campus_life/Campus_life1";
import AboutComp from "./AboutPTU/About";
import News from "./news";
import Header from "../header/Header";


export default function Home() {
    return (
        <div>
            <Header/>
           {/* <CardHold /> */}
           {/* <SmallCarousel /> */}
           <AboutComp />
           <News />
           {/* <AboutUs /> */}
           {/* <NewsBlock /> */}
           <CarouselHold />
           <StudentCount />
           <CampusLifeOne />
        </div>
    )
}