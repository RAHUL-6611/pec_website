import './navbar.css'
import React from "react";
import FirstBar from './first_bar';
import SecondBar from './second_bar';
// import ThirdBar from './Third_Bar';
import Third_Bar from './Third_bar';
import NavContent from './nav_content';

const Navbar = () => {
    return <>
             {/* <FirstBar /> */}
             <SecondBar />
             <Third_Bar />

             {/* <NavContent /> */}
           </>
}

export default Navbar;