import React from "react";

import IT from "../../images/cse.jpg"
import ece from "../../images/cse.jpg"
import eee from "../../images/eee.jpg"
import cse from "../../images/cse.jpg"


const Departments = () => {
    return (
        <div className="depts flex parts">
                 {
                    [cse, IT, ece, eee, cse, IT, ece, eee,cse, IT, ece, eee,cse, IT, ece, eee,cse, IT, ece, eee ].map((e)=>{
                        return <>
                        <div className="cols">
                          <img src={cse} alt="" />
                          <div className="p-2">
                            <h2>IT</h2>
                            <div className="cont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ab non perferendis expedita nisi voluptatem ad obcaecati fugit vero ducimus?</div>
                          </div>
                      </div>
                              </>
                    })
                 }
             </div>
    )
}

export default Departments;