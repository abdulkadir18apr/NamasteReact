import React from "react";
import  ReactDOM  from "react-dom/client";


const Title=()=>(<h1>Namaste React Title component</h1>)
const Heading=()=>(
    <div className="container">
        <Title/>
        <h2>Heading comonent</h2>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);