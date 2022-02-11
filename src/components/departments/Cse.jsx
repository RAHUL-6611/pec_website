import React from "react"
import './cse.css'
import Hod from "./hod"

import DeptHeader from "./dept_head"
// import Faculty from "./faculty"
import { Routes, Route, Link } from "react-router-dom";
import About from "./About"
import Courses from "./Courses"
import Faculty from "./Faculty"
import DeptLandingPage from "./DeptLandingPage"
import Facilities from "./Facilities"
// <<<<<<< HEAD
import Notices1 from "./Notices"
// =======
import Research from "./research"
import Notices from "./notice"
// >>>>>>> c5730b8a49a608998323a46828d2d66c52e9228e
import Footer from "../footer"
import Alumini from "./Alumini";

export default function Cse(){

    return (
        <> 
        <DeptHeader />
        {/* <About/> */}
        {/* <Faculty/> */}
        {/* <Facilities/> */}
        <Routes>
            <Route path="/" element={<DeptLandingPage/>} />
        </Routes>
        <Routes>
            <Route path="/about" element={<DeptLandingPage />} />
        </Routes>
        <Routes>
            <Route path="/faculty" element={<Faculty />} />
        </Routes>
        <Routes>
            <Route path="/notices" element={<Notices1 />} />
        </Routes>
        <Routes>
            <Route path="/facilities" element={<Facilities />} />
        </Routes>
        <Routes>
            <Route path="/notices" element={<Notices />} />
        </Routes>
        <Routes>
            <Route path="/syllabus" element={<Courses/>} />
        </Routes>
        <Routes>
            <Route path="/alumini" element={<Alumini/>} />
        </Routes> 
        <Footer/>
        </>
    )
}