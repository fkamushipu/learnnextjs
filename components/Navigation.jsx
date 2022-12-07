import React from "react";
import Links from "./Links";
import Profilepic from "../public/images/profile.png";
import Image from "next/image";
import Heading1  from "./Heading"

function Navigation (){
    return (
        <div className="md:fixed md:w-96 col-span-8 border h-full pr-8 bg-gray-200">
            <div className="bg-yellow-800 p-4">
                <div class="flex flex-col  items-center gap-2">
                    <div className="rounded-full bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                    
                    <h5 class="text-xl font-medium leading-tight mb-2 font-bold text-white font-serif">John Doe</h5>
                    <p class="text-yellow-400 font-serif italic text-base tracking-wider">&laquo; Web designer &raquo;</p>
                </div>
            </div>
            <div>
                <nav className="gap-4 ">
                    <Links href={"/"} link={"Home"}></Links>
                    <Links href={"/Dashboard"} link={"Dashboard"}></Links>
                    <Links href={"/"} link={"Home"}></Links>
                    <Links href={"/Dashboard"} link={"Dashboard"}></Links>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;