import * as React from "react";
import * as ReactDOM from "react-dom";


const root = document.createElement("div");
root.id = "app";
document.body.appendChild(root);



// http://stackoverflow.com/questions/42095600/nested-routes-in-v4
ReactDOM.render(
    <div>home1</div>, document.querySelector("#app")
);