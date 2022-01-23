import React from "react";

const LatestNews = () => {

    let d = new Date()
    console.log(d)
    return <>
        <div className="latest">
           <h1 className="Newstitle">Latest News</h1>

           {[1,2,3,4,5, 6].map((e)=>{
              return (<div>
              <div className="head flex">
                 <h2 className="headlines">Semester exams to be conducted online</h2>
                 <img src="#" alt="" />
              </div>
              <p className="date">{`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}</p>
              <div className="content">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur reiciendis similique harum ad ut temporibus aspernatur quis consectetur quidem eligendi placeat, minus atque in, natus libero doloribus laborum fugit. Quia delectus corporis mollitia facere. Natus ad at dolores illum veritatis soluta, dolore aliquid, esse repudiandae totam numquam facere minima reiciendis?</p>
              </div>
              <hr />
           </div>)})}           
        </div>
           </>
}

export default LatestNews;