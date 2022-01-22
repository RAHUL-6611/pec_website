import React from "react";
import "./home.css"

const Header = () => {
    return <>
           <header className="" style={{"height" : "400px"}}>
               <vedio src="#" alt="PTU vedio will be played here">
               PTU vedio will be played here
               </vedio>
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