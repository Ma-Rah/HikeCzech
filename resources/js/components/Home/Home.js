import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [state, setState] = useState({});

    function login() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            setIsLoggedIn(AppState.isLoggedIn);
            setUser(AppState.user);
        }
    }

    useEffect(() => {
        login();
    }, []);

    //   constructor() {
    //     super();
    //     this.state = {
    //       isLoggedIn: false,
    //       user: {}
    //     }
    //   }
    //   // check if user is authenticated and storing authentication data as states if true
    //   componentWillMount() {
    //     let state = localStorage["appState"];
    //     if (state) {
    //       let AppState = JSON.parse(state);
    //       this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    //     }
    //   }

    return (
        <div>
            <Header userData={user} userIsLoggedIn={isLoggedIn} />
            <span>
                Whatever normally goes into the home/index page; A Plea To Heal
                The World for instance
            </span>
            <Footer />
        </div>
    );
}
export default Home;
