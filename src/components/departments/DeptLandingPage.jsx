import React from 'react';
// import Testimonial from "./Testimonial"
import HodCard from "./HodCard"
import { Link } from "react-router-dom";
import About from './About';
import Faculty from './Faculty';
import Notice from "./Notice"
import Vision from './Vision';

const DeptLandingPage = () => {
  return (<div>
      <Link to="/cse/about">
         <HodCard />
      </Link>
      <About />
      <Vision />
      <Notice />
      <Faculty />
      {/* <Testimonial /> */}
  </div>);
};

export default DeptLandingPage;
