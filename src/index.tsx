import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

import { IconBar } from "./components/IconBar";
import { RouterView } from "./components/RouterView";

ReactDOM.render(
    <div id="window">
        <IconBar/>
        <RouterView/>
    </div>,
    document.getElementById("example")
);
