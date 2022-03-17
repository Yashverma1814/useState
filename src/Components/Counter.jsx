import React from "react";

const Counter = () =>{
    const [count, setCount] = React.useState(0);

    function add(){
        setCount(count+1);
    }
    function sub(){
        setCount(count-1);
    }
    function double(){
        setCount(count*2);
    }
    return(
        <>
            <div>Counter: {count}</div>
            <button onClick={add}>ADD</button>
            <button onClick={sub}>ADD</button>
            <button onClick={double}>ADD</button>
        
        
        </>
    )
}

export default Counter;