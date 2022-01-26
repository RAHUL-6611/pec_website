import React from "react";

//recruiters images
import r1 from "../../images/r1.jpg" 
import r3 from "../../images/r3.jpg" 
import r4 from "../../images/r4.jpg" 
import r5 from "../../images/r5.jpg" 
import r6 from "../../images/r6.jpg" 
import r7 from "../../images/r7.jpg"

const Recruiters = () => {
    return (
        <div className="rec">
                 <marquee behavior="scroll" direction="left" width="100%" loop scrollamount="20">
                    <div className="companies flex">
                      {
                         [r3, r1, r4, r5, r6, r7].map((e)=>{
                            return <div className="company">
                                       <img src={e} alt={e} />
                                   </div>
                         })
                      }
                    </div>
                 </marquee>
             </div>
    )
}

export default Recruiters;