import React from "react";
import Heading5 from "../Heading/Heading5";
import Heading6 from "../Heading/Heading6";

import Image from "next/image";
const SmallCard = (props) => {
    return(
        <div className="w-full shadow-xl">
            <div className=""> 
                <Heading6 heading6={props.heading6}></Heading6>
            </div>
            <div className=" flex-col">
            </div>
        </div>
    )
}
export default SmallCard;