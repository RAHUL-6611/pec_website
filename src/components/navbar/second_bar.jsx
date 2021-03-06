import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/PTU_Logo-color.png";


const SecondBar = () => {
    return <>
    <div className="titlebar">
         <div className="college_name">
             <img src={logo} alt="logo of PTU" className="logo" />
             <div className="title px-2">
               <h1 className="name text-2xl">Puducherry Technological University</h1>
               <h4 className="text-sm">An Autonomous Institution of Govt. of Puducherry; Erstwhile Pondicherry Engineering College</h4>
             </div>
         </div>
        
         <div className="navlinks text-lg">
             <ol className="flex flex-row justify-evenly">
                 <li className="bg-red-500 text-white border-2"><Link to="/news">News</Link></li>
                 <li className="border-2 "><Link to="/events">Events</Link></li>
             </ol>
         </div>
    </div>
    <hr />
    </>
}

export default SecondBar;