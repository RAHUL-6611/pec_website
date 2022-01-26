import React from "react";
import QuickLinks from "./quicklinks";

import pic from "../../images/OIP.jpg" 

import BasicMasonry from "./masonary";
import Testimonial from "./testimonial";
import Departments from "./departments";
import Recruiters from "./recruiters";
import Numbers from "./numbers";

const About = () => {
    return <>
          <div className="about lg:flex block justify-evenly mx-20">
               <div className="content ab">
                 <h1 className="font-bold">About PTU</h1>
                 <p className="pr-8">Puducherry Technological University (Erstwhile Pondicherry Engineering College) is an Institution promoted and fully funded by the Government of Puducherry, India. It was established as an Engineering College in the year 1984 under the VII Five Year Plan. The college was upgraded to technological university with the approval of the UGC with effect from 5th September, 2020. The PTU was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President, Govt. of India on 13.09.2021. The institution is ranked 144 in Engineering Category by NIRF India Rankings 2021.</p>
                 <div className="ol flex flex-row justify-start">
                    <li>Campus</li>
                    <li>Departments</li>
                    <li>Vice Chancellor</li>
                    <li>Faculty</li>
                    <li>Students life</li>
                 </div>
               </div>
              <div  className="img-slider bg-yellow-200">
                     <img src={pic} alt="" />
              </div>
          </div>
          <Numbers />
          <div className="m-20 ab">
             <h1 className="font-bold text-center">Joy of Engineering</h1>
             <h2 className="wid">with our Departments</h2>
               <Departments />
          </div>

          <div className="m-20 ab">
             <h2 className="wid">Other Departments</h2>
              <Departments />             
          </div>

          <div className="recruiters m-10 ab">
             <h1 className="font-bold">Top recruiters</h1>
             <Recruiters />
          </div>


           <QuickLinks />

          <div className="m-10 ab">
             <h1 className="achieve">Achievements</h1>
             <BasicMasonry />
          </div>

          <div className="m-10 ab">
             <h1 className="font-bold testy">Testimonials</h1>
             <Testimonial />
          </div>
          

          </>
}

export default About;   