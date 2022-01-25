import React from "react";
import e1 from "../../images/en1.jpg"
import e2 from "../../images/en2.jpg"
import e3 from "../../images/en3.jpg"
import e4 from "../../images/en4.jpg"
import e5 from "../../images/en1.jpg"
 
const FirstBar = () => {
    return <>
             <div className="first_bar text-center">
                 <ul>
                      <li>
                         <img src={e1} alt="" />
                         <h4>IIC</h4>
                      </li>
                      <li>
                         <img src={e2} alt="" />
                         <h4>IIC</h4>
                      </li>
                      <li>
                         <img src={e3} alt="" />
                         <h4>IIC</h4>
                      </li>
                      <li>
                         <img src={e4} alt="" />
                         <h4>IIC</h4>
                      </li>
                      <li>
                         <img src={e1} alt="" />
                         <h4>IIC</h4>
                      </li>
                 </ul>
             </div>
           </>
}

export default FirstBar;