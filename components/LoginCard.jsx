import React from "react";
import Label from "./Label"
import Button from "./Button"
import Input from "./Input"

const Card = (props) =>(
    
    <div className="justify-center ">

        <div className="bg-gray-200  mx-96 mt-16 rounded-3xl">
            <div className="w-full  bg-yellow-800 rounded-t-3xl"> 
                <h3 className=" text-center py-3.5 tracking-normal text-5xl font-bold text-white"> {props.title}</h3> 
            </div>
            <div className="p-6">
                <p className="text-center tracking-loose text-lg">{props.description}</p>
                <br></br>

                {/* Login Register Form */}
                <form>
                    <div className="grid grid-cols-6  w-full gap-6 py-4 text-xl">
                        <Label label={"Username : "}></Label>
                        <Input type="text" name="name" placeholder={"Enter your username!"} />
                    </div>
                    <div className="grid grid-cols-6  w-full gap-6 py-4 text-xl">
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
            <div className="w-full  bg-yellow-800 rounded-b-3xl"> 
                <div className="inline px-16 ">
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span className=" text-center text-white"> {props.terms}</span> 
                </div>
                
            </div>
           
        </div>

    </div>
)
export default Card;