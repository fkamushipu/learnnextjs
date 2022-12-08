import React from "react";
import Button from "../Form/Button";
import Heading2 from "../Heading/Heading2";
import FormLabel from "./FormLabel";
import FormFooter from "../Form/FormFooter";
const Card = (props) =>(
    <div className=" z-10  top-10 opacity-80 min-w-xl">
        <div className="">
            <div className="bg-gray-200 rounded-3xl  ">
                <div className="w-full  bg-yellow-800 rounded-t-3xl"> 
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
                        <br></br>
                    </form>

                    <div className="grid grid-cols-2">
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