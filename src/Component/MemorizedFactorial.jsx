import React , {useState , useMemo} from 'react';
const factorial = (n) => {
      console.log("Calculating factorial for:", n);

    if (n < 0) return 0;
    if(n === 0) return 1 ; 
    let result = 1 ; 
    for (let i = 1 ; i<=n ; i++){
        result*=i;
    
    }
    return result ; 
}
const MemorizedFactorial = () => {
      console.log("Component re-rendered");

    const [count , setCount] = useState(0);
    const [dummy , setDummy] = useState(0);

    const fact = useMemo(()=>factorial(count) , [count]);

    return (
     <div>
        <h2>Memorize Expensive Calculator</h2>
        <div>
        <p>Count : {count}</p>
        <button onClick={()=> setCount(count +1 )}>Increament</button>
        <button onClick={()=> setDummy(dummy +1)}>Re-Render Dummy</button>
</div>
<div>
    <p>Factorial of {count} is : <strong>{fact}</strong></p>
</div>
     </div>

    );
}
export default MemorizedFactorial;
