import React from "react";

const Child = ({children}) =>{
    return (
        <>
            <div>Child</div>
            {children}
        </>
    );
};
 
export default Child