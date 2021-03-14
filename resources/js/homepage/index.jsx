import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Home from "./Home";
import Login from "../auth/Login";
import Register from "../auth/Register";

function Index() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Index />, document.getElementById("app"));
