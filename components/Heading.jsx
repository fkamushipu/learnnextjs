
import React from "react";


const Heading1= (props) =>(
    <div className="py-2.5"> 
    {/* Different Heading styles */}
        <h1 className="sm:text-2xl md:text-4xl text-yellow-800 font-bold font-mono text-center tracking-wider antialiased ">{props.heading1}</h1>
        <h1 className="sm:text-2xl md:text-4xl text-white font-extrabold font-serif text-center tracking-wide antialiased py-2.5">{props.heading2}</h1>
        <h1 className="sm:text-2xl md:text-5xl text-yellow-800 font-bold font-sans text-center tracking-wide antialiased underline decoration-wavy decoration-1 underline-offset-8">{props.heading3}</h1>
        <h1 className="sm:text-2xl md:text-5xl text-center py-3.5 tracking-normal  font-bold text-white">{props.heading4}</h1>

    </div>
)

export default Heading1;