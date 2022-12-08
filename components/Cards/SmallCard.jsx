import React from "react";
import Heading5 from "../Heading/Heading5";
import Heading6 from "../Heading/Heading6";
import image2 from "../../public/images/backgroundImage.jpg"

import Image from "next/image";
const SmallCard = (props) => {
    return(
        <div className="max-w-xl shadow-xl">
            <div className="bg-yellow-800"> 
                <Heading6 heading6={props.heading6}></Heading6>
            </div>
            <div className=" flex">
                <div>
                    <Image src={image2} className="h-full w-auto"></Image>
                </div>
                <div className="border-l border-yellow-800">
                    <p className="w-full p-4 leading-loose para-1">{props.para1}</p>
                </div>
            </div>
        </div>
    )
}
export default SmallCard;