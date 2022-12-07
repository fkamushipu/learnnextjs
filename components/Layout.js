import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layouts = ({children}) => {
    return(
        <div>
            <Head/>
            <div className="grid grid-cols-12 bg-gray-100">
                <div className="col-span-3"> 
                    <Navigation/>
                </div>
                <div className="col-span-9">
                    {children}
                   
                </div>
            
            </div>
            <Footer/>
            
        </div>
    )
}
export default Layouts;