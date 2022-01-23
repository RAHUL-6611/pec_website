import React from "react";
import "./home.css"
import vid from "../../images/campus_video.mp4"

const Header = () => {
    return <>
           <header className="columns-1" style={{"height" : "600px"}}>
               <video className="w-full aspect-video" width="100%" height="600px" preload="auto" muted autoPlay={"autoplay"} loop>
                   <source src={vid} type="video/mp4"/>
               </video>
           </header>
            <div className="bg-yellow-200">
               <div className="count block text-center lg:flex justify-center">
                   <div>500+facultys</div>
                   <div>1700+students</div>
                   <div>50+subjects</div>
                   <div>20+recruiters</div>
                   <div>500+placements</div>
               </div>
            </div>
           </>
}

export default Header;