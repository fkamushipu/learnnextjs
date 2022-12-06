import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React from "react";


const Input= (props) =>(
    <input className="col-span-6 px-4 py-2.5 focus:outline-yellow-400 focus:border-b shadow-xl bg-gray-100" placeholder={props.placeholder} />
)

export default Input;