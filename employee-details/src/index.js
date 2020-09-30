import React from "react";
import ReactDOM from "react-dom";

import FooterComponent from "./components/FooterComponent";
import PropsDataComponent from "./components/PropsDataComponent";

var dataObject = ["Anshul", 20, "Developer"]

ReactDOM.render((
    <div>
        <PropsDataComponent dataObject={dataObject}></PropsDataComponent>
    </div>
), document.getElementById("root"));