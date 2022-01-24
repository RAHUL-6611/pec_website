import React from "react";
import "./home.css"

import Carousel from "./carousel"


const Header = () => {
    return <>
           <header style={{"height" : "max-content"}}>
        
                <Carousel />

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