import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar/Navbar.jsx";
import Home from "./Home.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";

function Index() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Index />, document.getElementById("app"));
