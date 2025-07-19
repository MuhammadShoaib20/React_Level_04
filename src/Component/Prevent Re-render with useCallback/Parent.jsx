import React,{useState , useCallback} from "react";
import Child from "./Child";

const Parent  = () => {
 const [count  , setCount] = useState (0);

 const handleChildClick = useCallback(()=> {
    console.log ("Call back called from child ") ; 

 }, []);
 return (
    <div>
        <h2>UseCallback + react.memo </h2>
        <p>Parent Count : {count}</p>
        <button onClick={()=> setCount(count+1)} >Increament </button>
        <Child handleClick = {handleChildClick} />
    </div>
 );
}
export default Parent;