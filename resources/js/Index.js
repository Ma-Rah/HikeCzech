import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Main from "./Router";

function Index() {
    return (
        <BrowserRouter>
            <Route component={Main} />
        </BrowserRouter>
    );
}
ReactDOM.render(<Index />, document.getElementById("index")); // we are using app id
