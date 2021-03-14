import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Register from "./Register";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        {" "}
        <Navbar />
        <Switch>
            <Route path="/login" children={<Login />} />
            <Route path="/register" children={<Register />} />
        </Switch>
    </Router>,
    document.getElementById("app")
);
