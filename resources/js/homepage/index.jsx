import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar.jsx";
import Home from "./Home.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";
import EntityDetails from "../components/EntityDetails.jsx";
import MapPage from "../components/MapPage.jsx";

function Index() {
    useEffect(() => {}, []);

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
                <Route exact path="/test">
                    <EntityDetails />
                </Route>
                <Route exact path="/map">
                    <MapPage />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Index />, document.getElementById("app"));
