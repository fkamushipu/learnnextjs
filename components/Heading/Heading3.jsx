import React from "react";
const Heading3= (props) =>(
    <div className=""> 
    {/* Different Heading styles */}
        <h3 className="sm:text-2xl md:text-5xl text-center py-3.5 tracking-normal  font-bold text-white bg-yellow-800 w-full py-2.5">{props.heading4}</h3>
    </div>
)

export default Heading3;