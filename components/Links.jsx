import React from "react";
const Links= (props) =>(
    <div className="shadow-xl py-2.5 my-2.5 hover:bg-yellow-800 ease-in-out duration-700">
        <a className="py-2.5 text-base px-12 font-semibold font-serif w-full" href={props.href} >{props.link}</a>
    </div>
)

export default Links;