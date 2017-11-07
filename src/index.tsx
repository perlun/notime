import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello id="content" compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
