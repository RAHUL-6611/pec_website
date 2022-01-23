import React from "react";
import './dept.css';

const AllDepartment = () => {
    return(
        <div className="departments">
            {
                [  
                    "Computer Science  Engineering", 
                    "Chemical  Engineering", 
                    "Electrical and instumentation Engineering", 
                    "Electrical and Communication Engineering", 
                    "Electrical and Electronics Engineering", 
                    "Information Technology", 
                    "Mechtronics Engineering", 
                    "Mechanical Engineering", 
                    "Humanities and Management" 
                ].map((e)=>{
                    return(
                        <div className="depts">
                            <h1 className="dept-name">{e}</h1>
                            <div key={e} className="dept block sm:flex">
                               <div className="col">
                                   <img src="#" alt={`image of ${e} department`} />
                               </div>
                               <div className="col mx-0 sm:ml-5">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum adipisci ea praesentium labore enim quo dignissimos necessitatibus quidem esse!
                               </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllDepartment;