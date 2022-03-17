import React from "react";
import Child from "./Child";
const Parent = () =>{
    return(
        <>
            <h1>Parent Component</h1>
            <Child values = {"yash"}/>
            <Child>
                <div>
                    yash verma
                </div>
            </Child>
        </>
    )
}
export default Parent