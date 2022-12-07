import Head from "next/head";
import React from "react";
import Profilepic from "../public/images/profile.png";
import Image from "next/image";
import Heading1  from "./Heading";
function head(){
    return(
        <div>
            <Head>
                <title>Page Title</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="shadow-xl py-2.5 bg-yellow-800 grid grid-cols-12 hidden">
                {/* Navigation */}
                <div className=" col-span-11 flex-row">
                    <div className="text-white">
                        <Heading1 heading2={"The Systems Name"}></Heading1>
                    </div>
                    <div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </div>
                </div>
                <Image src={Profilepic} className="w-16 h-16 rounded-full col-span-1"/>
            </div>
        </div>
    )
}
export default head;
