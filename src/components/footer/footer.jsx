import React from "react";
import logo from "../../images/PTU_Logo-color.png"

const Footer = () => {
    return <>
             <div className="bg-gray-500">
             <div className="footer flex flex-row justify-evenly items-center bg-gray-500 text-sky-100 p-6">
               <div className="logo flex items-center">
                   <img src={logo} alt="PTU logo" />
                   <h2 className="font-bold underline">PTU</h2>
               </div>
               <div className="greetings">
                     thank you for visiting our website
               </div>
               
               <div className="about-us px-3">
                   <h2 className="font-bold underline">About Us</h2>
                   <ol>
                       <li><a href="#">college</a></li>
                       <li><a href="#">vise chancellor</a></li>
                       <li><a href="#">faculties</a></li>
                       <li><a href="#">library</a></li>
                       <li><a href="#">inovation center</a></li>
                       <li><a href="#">placement</a></li>
                       <li><a href="#">students</a></li>
                       <li><a href="#">staffs</a></li>
                       <li><a href="#">campus</a></li>
                   </ol>
               </div>
               <div className="about-us px-3">
                   <h2 className="font-bold underline">About Us</h2>
                   <ol>
                       <li><a href="#">college</a></li>
                       <li><a href="#">vise chancellor</a></li>
                       <li><a href="#">faculties</a></li>
                       <li><a href="#">library</a></li>
                       <li><a href="#">inovation center</a></li>
                       <li><a href="#">placement</a></li>
                       <li><a href="#">students</a></li>
                       <li><a href="#">staffs</a></li>
                       <li><a href="#">campus</a></li>
                   </ol>
               </div>
               <div className="social">
                   <h2 className="font-bold underline">our social profiles</h2>
                   <ol className="flex flex-row">
                       <li>f</li>
                       <li>i</li>
                       <li>in</li>
                       <li>ut</li>
                       <li>t</li>
                   </ol>
               </div>
             </div>
             </div>
             <div className="foot bg-sky-700 text-white px-10 py-3">
                 This is an official website created using react
             </div>
           </>
}

export default Footer;