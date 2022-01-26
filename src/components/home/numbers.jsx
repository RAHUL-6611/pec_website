import React, { useEffect, useState } from "react";
import engineers from "../../images/engineers.jpeg"



export default function Numbers(){

    let [state, setState] = useState({faculty : 0, students : 0, subjects : 0, recruiters : 0, placements : 0})

    useEffect(()=>{
        setInterval(() => {
            setState({faculty : state.faculty+1, students : state.students+1, subjects : state.subjects+1, recruiters : state.recruiters+1, placements : state.placements+1})
            console.log(state.recruiters)
        }, 4000);
    }, [state.faculty = 500, state.students = 1700, state.subjects = 50, state.recruiters = 20, state.placements = 500])


    return(
        <div className="numbers" style={{"background" : `url(${engineers})`}}>
               <div className="count block text-center lg:flex justify-center">
                   <div>{`${state.faculty}+facultys`}</div>
                   <div>{`${state.students}+students`}</div>
                   <div>{`${state.subjects}+subjects`}</div>
                   <div>{`${state.recruiters}+recruiters`}</div>
                   <div>{`${state.placements}+placements`}</div>
               </div>
            </div>
    )
}