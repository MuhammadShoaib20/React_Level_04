import React, { Suspense , useState } from "react";

const Char =React.lazy(()=> import("./Char"));

const LazyCharLoader = ()=> {
    const [showChar  , setShowChar] = useState(false);

    return (
        <div>
   <button onClick={()=> setShowChar(true)}>ShowChart</button>
{ showChar && (
   <Suspense fallback = {<div>Loading ... </div>}>
    <Char />
   </Suspense>
   )}
        </div>
    )
};
export default LazyCharLoader;