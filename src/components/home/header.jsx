import React from "react";
import "./home.css"
import App from './carousel'

const Header = () => {
    return <>
           <header className="columns-1" style={{"height" : "500px"}}>
               <App />
           </header>
            <div className="numbers">
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