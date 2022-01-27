import React from "react";
import logo from "../../images/PTU_Logo-color.png"
import location from "../../images/location.jpg"
import './footer.css';
import { TiSocialYoutube, TiSocialInstagram, TiSocialLinkedin, TiSocialFacebook, TiSocialTwitter} from "../../../node_modules/react-icons/ti"

const Footer = () => {
    return <>
             <div className="">
             <div className="footer flex flex-row justify-evenly items-center bg-black text-sky-100 p-8 py-12">
               <div className="items-center">
                   <img src={logo} alt="PTU logo" className="logo my-5" />
                   <h2 className="font-bold underline text-center">PTU</h2>
               </div>
              
              <div>
                  <img src={location} alt="PTU location" className="loc" />
              </div>
               
               <div className="about-us px-3">
                   <h2 className="underline">About Us</h2>
                   <ol>
                       <li><a href="\">college</a></li>
                       <li><a href="\">vise chancellor</a></li>
                       <li><a href="\">faculties</a></li>
                       <li><a href="\">library</a></li>
                       <li><a href="\">inovation center</a></li>
                       <li><a href="\">placement</a></li>
                       <li><a href="\">students</a></li>
                       <li><a href="\">staffs</a></li>
                       <li><a href="\">campus</a></li>
                   </ol>
               </div>
               <div className="about-us px-3">
                   <h2 className="underline">About Us</h2>
                   <ol>
                       <li><a href="\">college</a></li>
                       <li><a href="\">vise chancellor</a></li>
                       <li><a href="\">faculties</a></li>
                       <li><a href="\">library</a></li>
                       <li><a href="\">inovation center</a></li>
                       <li><a href="\">placement</a></li>
                       <li><a href="\">students</a></li>
                       <li><a href="\">staffs</a></li>
                       <li><a href="\">campus</a></li>
                   </ol>
               </div>
               <div className="social">
                   <ol className="flex flex-row">
                       <li className="text-red-600"><TiSocialYoutube /></li>
                       <li className="text-sky-500"><TiSocialTwitter /></li>
                       <li className="text-blue-700"><TiSocialFacebook /></li>
                       <li className="text-blue-900"><TiSocialLinkedin /></li>
                       <li className="text-pink-700"><TiSocialInstagram /></li>
                   </ol>
               </div>
             </div>
             </div>
             <div className="foot text-white px-10 py-3">
                 This is an official website created using react
             </div>
           </>
}

export default Footer;