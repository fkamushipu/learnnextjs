import React from "react";
import Input from "./Input"
import Label from "./Label"
const FormLabel= (props) =>(
    <div>
        <div className="grid md:grid-cols-10 sm:flex-col w-full my-8 sm:py-2 md:py-2 md:text-xl sm:text-sm">
            <Label label={props.username}></Label>
            <Input type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    </div>
)

export default FormLabel;