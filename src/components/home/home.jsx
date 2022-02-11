import React from "react";

import CarouselHold from "./Carousel_hold";
import StudentCount from "./student_Count/Student_Count";
import CampusLifeOne from "./campus_life/Campus_life1";
// import About from "./AboutPTU/About";
import News from "./news";
import Header from "../header/Header";


export default function Home() {
    return (
        <div>
            <Header/>
           {/* <About /> */}
           <News />
           <CarouselHold />
           <StudentCount />
           <CampusLifeOne />
        </div>
    )
}