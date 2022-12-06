import React from "react";


const Button= (props) =>(
        <div className="py-2.5 m-4 text-center rounded-xl shadow-xl font-bold text-2xl bg-yellow-400  hover:text-white hover:bg-yellow-900 ease-in-out duration-700 uppercase">{props.button}
        </div>
)

export default Button;