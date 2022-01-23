import './navbar.css'
import React from "react";
import FirstBar from './first_bar';
import SecondBar from './second_bar';
import ThirdBar from './thirdbar';
import NavContent from './nav_content';

const Navbar = () => {
    return <>
             <FirstBar />
             <SecondBar />
             <ThirdBar />
             {/* <NavContent /> */}
           </>
}

export default Navbar;