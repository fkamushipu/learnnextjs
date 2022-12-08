import React from "react";
import Button from "./Form/Button";
import Image from "next/image";
import image1 from "../public/images/backgroundImage.jpg";
import Heading2 from "./Heading/Heading2";
import FormLabel from "./FormLabel";
import FormFooter from "./Form/FormFooter";
const Card = (props) =>(
    <div className=" w-full mt-6 shadow-xl opacity-90">
        <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
            <Image src={image1} className="w-full h-96 md:h-auto object-cover md:max-w-xl rounded-t-lg md:rounded-none md:rounded-l-lg"/>

            <div className="bg-gray-200   flex flex-col justify-start w-full">
                <div className="w-full  bg-yellow-800 "> 
                    <Heading2 heading2={props.title}></Heading2>  
                </div>
                <div className="p-6">
                    <p className="text-center tracking-loose text-lg">{props.description}</p>

                    {/* Login Register Form */}
                    <form  className="">
                        <FormLabel  username={"Username : "} type={"text"} placeholder={"Enter your username!"}>
                        </FormLabel>
                        <FormLabel  username={"Password : "} type={"text"} placeholder={"Enter your password!"}>
                        </FormLabel>
                    </form>
                    
                    <div className="grid grid-cols-2 ">
                        <Button button={"CANCEL"}></Button>
                        <Button button={"LOGIN"} type="submit"></Button>
                    </div>
                </div>
                <FormFooter terms={props.terms}></FormFooter>
            </div>
        </div>
    </div>
)
export default Card;