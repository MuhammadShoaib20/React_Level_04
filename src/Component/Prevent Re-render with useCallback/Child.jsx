import React from "react";

const Child = React.memo (({handleClick})=>{
    console.log("Child re-rendered");
    return(
        <div>
            <button onClick={handleClick}>Call Child Call back</button>
        </div>
    )
})
export default Child;