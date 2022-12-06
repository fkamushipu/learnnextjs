import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layouts = ({children}) => {
    return(
        <div>
            <Head/>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layouts;