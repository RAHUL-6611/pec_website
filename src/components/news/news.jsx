import React from "react";
import LatestNews from "./latest";
import Anouncements from "./anouncements";

import './news.css';
const News = () => {
    return <>
           <div className="news block grid-cols-2 gap-5 sm:grid">
              <LatestNews />
              <Anouncements />
           </div>
           </>
}

export default News;