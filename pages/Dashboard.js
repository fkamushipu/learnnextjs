import React from "react";


const Dashboard= (props) =>(
    <div>
        <div>
            <div className="w-full text-center py-2.5 text-2xl font-serif tracking-wide"><span className="animate-pulse ">Welcome {props.name} to our website !!!</span></div>
            <div></div>
        </div>
    </div>
)

export default Dashboard;