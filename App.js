import React from "react";
import  ReactDOM  from "react-dom/client";
const heading=React.createElement("h1",{id:"heading"},"Namaste React")
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));


const jsxHeading=<h1>Namaste React using Jsx</h1>
console.log(jsxHeading)
root.render(jsxHeading)