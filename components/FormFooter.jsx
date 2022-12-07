import React from "react";


const Label= (props) =>(
    <div className="w-full  bg-yellow-800  md:py-2.5"> 
    <div className="inline md:px-16 md:text-lg md:font-semibold font-serif tracking-wide ">
        <input class="mr-2 leading-tight" type="checkbox" />
        <span className=" text-center text-white"> {props.terms}</span> 
    </div>
    
</div>
)

export default Label;