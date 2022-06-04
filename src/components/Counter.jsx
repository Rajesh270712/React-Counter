import React from "react";

let Counter = () => {

    const [count, setCount]= React.useState(0)

    function handleCount(value){
        setCount(count+value)
    }

    return (
        <>
            <h1 style={{color:"blue",fontSize:"50px"}}>React Counter</h1>

            <h1 style={ count%2==0 ? {color:"green",fontSize:"40px"} : {color:"red",fontSize:"40px"} }>Counter : {count}</h1>
            <button onClick={()=>{handleCount(1)}} >Increment</button>
            <button onClick={()=>{handleCount(-1)}} >Decrement</button>
            <button onClick={()=>{handleCount(count)}} >Double</button>
        </>
    )
}

export default Counter