import React from "react";
const Heading1= (props) =>(
    <div className=""> 
    {/* Different Heading styles */}
        <h1 className="sm:text-2xl md:text-4xl text-white font-bold font-mono text-center tracking-wider antialiased bg-yellow-800 w-full py-2.5 ">{props.heading1}</h1>
    </div>
)

export default Heading1;