import React from "react";
import Heading2 from "./Heading/Heading2";
import SmallCard from "./Cards/SmallCard";
import Heading6 from "./Heading/Heading6";
import image2 from "../public/images/backgroundImage.jpg"
const Overview = () => {
    return(
        <div className="">
            <div className="bg-yellow-800 my-4">
                <Heading2 heading2={"Overview"}></Heading2>
            </div>
            <div className="grid md:grid-cols-2">
                <SmallCard src={image2} heading6={"Introduction"} para1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis elit vel metus accumsan gravida. Vivamus sollicitudin enim sed elit molestie, in tincidunt metus ullamcorper. Cras faucibus leo in sem molestie laoreet. Donec ante nunc, pulvinar quis ipsum ut, posuere ornare diam. Sed eget lorem et turpis maximus congue eu sit amet nunc. Maecenas eget bibendum tellus. Integer sed nisl mollis, aliquam eros vel, viverra diam. Aliquam convallis pulvinar mi vel eleifend. Vestibulum vulputate diam massa, sed sollicitudin ligula ullamcorper a." }>
                 
                 </SmallCard>
                 <SmallCard src={image2} heading6={"What we do!"} para1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis elit vel metus accumsan gravida. Vivamus sollicitudin enim sed elit molestie, in tincidunt metus ullamcorper. Cras faucibus leo in sem molestie laoreet. Donec ante nunc, pulvinar quis ipsum ut, posuere ornare diam. Sed eget lorem et turpis maximus congue eu sit amet nunc. Maecenas eget bibendum tellus. Integer sed nisl mollis, aliquam eros vel, viverra diam. Aliquam convallis pulvinar mi vel eleifend. Vestibulum vulputate diam massa, sed sollicitudin ligula ullamcorper a." }>
                 
                 </SmallCard>
            </div>
        </div>
    )
}
export default Overview;