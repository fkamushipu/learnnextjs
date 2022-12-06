import React from "react";
import Label from "./Label"
import Button from "./Button"
import Input from "./Input"
import Image from "next/image";
import image1 from "../public/images/backgroundImage.jpg"


const Card = (props) =>(
    <div className=" w-full mt-6 shadow-xl opacity-90">
        <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
            <Image src={image1} className="w-full h-96 md:h-auto object-cover md:max-w-xl rounded-t-lg md:rounded-none md:rounded-l-lg"/>

            <div className="bg-gray-200   flex flex-col justify-start w-full">
                <div className="w-full  bg-yellow-800 "> 
                    <h3 className=" text-center py-3.5 tracking-normal text-5xl font-bold text-white"> {props.title}</h3> 
                </div>
                <div className="p-6">
                    <p className="text-center tracking-loose text-lg">{props.description}</p>
                    <br></br>

                    {/* Login Register Form */}
                    <form  className="">
                        <div className="grid grid-cols-10  w-full gap-6 py-4 text-xl">
                            <Label label={"Username : "}></Label>
                            <Input type="text" name="name" placeholder={"Enter your username!"} />
                        </div>
                        <div className="grid grid-cols-10  w-full gap-6 py-4 text-xl">
                            <Label label={"Email : "}></Label>
                            <Input type="email" name="name" placeholder={"Enter your email!"} />
                        </div>
                        <br></br>
                    </form>
                    

                    <div className="grid grid-cols-2">
                        <Button button={"CANCEL"}></Button>
                    
                        <Button button={"LOGIN"} type="submit"></Button>
                        
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