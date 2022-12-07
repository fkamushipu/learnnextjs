import React from "react";
import Label from "./Label"
import Button from "./Button"
import Input from "./Input"
import Image from "next/image";
import image1 from "../public/images/backgroundImage.jpg"
import Heading from "./Heading"
import FormLabel from "./FormLabel";


const Card = (props) =>(
    <div className=" w-full mt-6 shadow-xl opacity-90">
        <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
            <Image src={image1} className="w-full h-96 md:h-auto object-cover md:max-w-lg rounded-t-lg md:rounded-none md:rounded-l-lg"/>

            <div className="bg-gray-200   flex flex-col justify-start w-full">
                <div className="w-full  bg-yellow-800 "> 
                    <Heading heading4={props.title}></Heading> 
                </div>
                <div className="p-6">
                    <p className="text-center tracking-loose text-lg">{props.description}</p>
                    <br></br>

                    {/* Login Register Form */}
                    <form  className="">
                        <FormLabel  username={"First Name : "} type={"text"} placeholder={"Enter your first name!"}>
                        </FormLabel>
                        <FormLabel  username={"Second Name : "} type={"text"} placeholder={"Enter your last name!"}>
                        </FormLabel>
                        <FormLabel  username={"ID Number : "} type={"number"} placeholder={"Enter your Id number!"}>
                        </FormLabel>
                        <FormLabel  username={"Email : "} type={"email"} placeholder={"Enter your email!"}>
                        </FormLabel>
                        <FormLabel  username={"Mobile Number : "} type={"number"} placeholder={"Enter your mobile number!"}>
                        </FormLabel>
                        <FormLabel  username={"Postal address : "} type={"number"} placeholder={"Enter your postal address!"}>
                        </FormLabel>
                        <br></br>
                    </form>

                    <div className="grid md:grid-cols-2 sm:flex-col">
                        <Button button={"CANCEL"}></Button>
                    
                        <Button button={"Register"} type="submit"></Button>
                        
                    </div>

                </div>
                <div className="w-full  bg-yellow-800  py-2.5"> 
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