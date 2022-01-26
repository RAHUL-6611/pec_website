import React from "react";
import "./home.css"
import App from './carousel'

const Header = () => {
    return <>
           <header className="columns-1" style={{"height" : "500px"}}>
               <App />
           </header>
            
           </>
}

export default Header;