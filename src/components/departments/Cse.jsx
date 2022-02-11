import React from "react"
import './cse.css'
import DeptHeader from "./DeptHeader"
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses"
import Faculty from "./Faculty"
import DeptLandingPage from "./DeptLandingPage"
import Facilities from "./Facilities"
import Notices from "./Notices"
// import Notice from "./Notice"
import Footer from "../footer"
import Alumini from "./Alumini";

export default function Cse(){

    return (
        <> 
        <DeptHeader />
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
            <Route path="/notices" element={<Notices />} />
        </Routes>
        <Routes>
            <Route path="/facilities" element={<Facilities />} />
        </Routes>
        {/* <Routes>
            <Route path="/notice" element={<Notice />} />
        </Routes> */}
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