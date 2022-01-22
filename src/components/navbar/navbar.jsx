import './navbar.css'
import React from "react";
import FirstBar from './first_bar';
import SecondBar from './second_bar';

const Navbar = () => {
    return <>
             <FirstBar />
             <SecondBar />
             <div className="third-bar flex flex-row justify-around m-5">
                <ol className="flex flex-row ">
                  <li>Home</li>
                  <li>About</li>
                  <li>campus</li>
                  <li>Academic</li>
                  <li>Placement</li>
                </ol>
         <div class="flex justify-evenly items-center px-4 sm:px-6 lg:px-8">
           <input type="text" class="h-8 w-66 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder='type something...' />
            <div> 
               <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500">hgh</i> 
            </div>
          </div>
        </div>
           </>
}

export default Navbar;