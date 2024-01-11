// const headings= React.createElement("h1",{"id":"heading"},"Hello World From React");

// console.log(headings); //gives an Js Object with type and props
import React from "react";
import  ReactDOM  from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am child1 h1 tag namaste react"),
        React.createElement("h2",{},"I am child1 h2 tag")
    ])
],
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am child2 h1 tag"),
    React.createElement("h2",{},"I am child2 h2 tag")
])
)

const roots=ReactDOM.createRoot(document.getElementById('root'));
roots.render(parent)