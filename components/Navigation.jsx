import React from "react";
import Links from "./Links";
import Profilepic from "../public/images/profile.png";
import Image from "next/image";

function Navigation (){
    return (
        <div>
            <div className="shadow-xl py-2.5 bg-yellow-800 grid grid-cols-12">
                {/* Navigation */}
                <div className="p-6 col-span-10">
                    <nav className="">
                        <Links href={"/"}>Home</Links>
                    </nav>
                </div>
                <Image src={Profilepic} className="w-32 h-32 rounded-full col-span-2"/>

            </div>
        </div>
    )
}

export default Navigation;