import React from "react";

const Newsletter = () =>{
    return(
       <div>
           <h1>subscribe for newsletter</h1>
            <div className="p-10 flex justify-center">
            <form action="#">
                <input type="email" />
                <button>subscribe</button>
            </form>
        </div>
       </div>
    )
}

export default Newsletter;