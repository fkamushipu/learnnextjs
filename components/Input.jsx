import React from "react";

const Input= (props) =>(
    <input className="col-span-6 px-4 py-2.5 focus:outline-none focus:bg-yellow-300 focus:rounded-t-lg  border-b-4 border-yellow-400 bg-gray-200" placeholder={props.placeholder} type={props.type} />
)

export default Input;