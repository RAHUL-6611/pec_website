import React from "react";
import { FaQuoteLeft, FaQuoteRight } from '../../../node_modules/react-icons/fa'

const Testimonial = () => {
    return(
        <>
        <div className="depts flex">
                  {
                     [1,2,3,4,5,6,7,8,9,10].map(()=> {
                        return(
                           <>
                         <div className="cols test m-2 p-5">
                              <div className="pic p-2"></div>
                                <h2>john smith</h2>
                             <div className="cont">
                                <div className="flex justify-start text-blue-600"><FaQuoteLeft /></div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ab non perferendis expedita nisi voluptatem ad obcaecati fugit vero ducimus?
                                <div className="flex justify-end text-blue-700"><FaQuoteRight /></div>
                             </div>
                          </div>
                    
                           </>
                        )
                     })
                  }
             </div>
        </>
    )
}

export default Testimonial;