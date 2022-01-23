import React from "react";

const Anouncements = () => {
    return <>
          <div className="anouncements">
              <h1 className="Newstitle">Anouncements</h1>
              {
                  [1,2,3,4,5,6,7,8].map(()=>{
                      return (
                        <div>
                        <div className="heading">
                            <h1 className="headlines"></h1>
                            <img src="#" alt="anouncements" />
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tempore commodi est corrupti velit laborum ipsum id! Sed quam culpa animi, eaque molestiae, at voluptatibus, sint perspiciatis reiciendis voluptates optio ex nihil temporibus nostrum accusamus asperiores. Fuga a nesciunt atque voluptates rerum. Enim at doloremque dignissimos ullam reiciendis aliquid unde animi quae iure aliquam fugiat quaerat odit beatae cupiditate error architecto optio suscipit, exercitationem eos voluptates eaque quasi fugit sit.</p>
                        </div>
                    </div>
                      )
                  })
              }
          </div>
           </>
}

export default Anouncements;