import React from "react";
import Head from "./Head";

const Layouts = ({children}) => {
    return(
        <div>
            <Head/>
            {children}
        </div>
    )
}
export default Layouts;