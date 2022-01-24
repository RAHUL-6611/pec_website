import './navbar.css'
import React from "react";
import FirstBar from './first_bar';
import SecondBar from './second_bar';
import ThirdBar, { Tog } from './thirdbar';
import NavContent from './nav_content';

const Navbar = () => {
    return <>
             <SecondBar />
             <FirstBar />
             <ThirdBar />
           </>
}

export default Navbar;