import React from "react";
import Label from "./Label"
import Button from "./Button"
import Input from "./Input"
import Image from "next/image";
import Heading from "./Heading";
import FormLabel from "./FormLabel";


const Card = (props) =>(
    <div className=" z-10 absolute top-10 opacity-80 sm:max-w-sm md:max-w-xl">
        <div className="">
            <div className="bg-gray-200 rounded-3xl  ">
                <div className="w-full  bg-yellow-800 rounded-t-3xl"> 
                    <Heading heading4={props.title}></Heading> 
                </div>
                <div className="p-6">
                    <p className="text-center tracking-loose text-lg">{props.description}</p>
                    <br></br>

                    {/* Login Register Form */}
                    <form  className="">
                        <FormLabel  username={"Username : "} type={"text"} placeholder={"Enter your username!"}>
                        </FormLabel>
                        <FormLabel  username={"Password : "} type={"text"} placeholder={"Enter your password!"}>
                        </FormLabel>
                        <br></br>
                    </form>

                    <div className="grid md:grid-cols-2 sm:flex-col">
                        <Button button={"CANCEL"}></Button>
                    
                        <Button button={"LOGIN"} type="submit"></Button>
                        
                    </div>

                </div>
                <div className="w-full  bg-yellow-800 rounded-b-3xl py-2.5"> 
                    <div className="inline px-16 text-lg font-semibold font-serif tracking-wide ">
                        <input class="mr-2 leading-tight" type="checkbox" />
                        <span className=" text-center text-white"> {props.terms}</span> 
                    </div>
                    
                </div>
            
            </div>

        </div>
    </div>
)
export default Card;