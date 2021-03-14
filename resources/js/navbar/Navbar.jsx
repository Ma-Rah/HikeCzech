import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container bg-lights w-100 m-0">
            <div className="d-flex justify-content-between  ">
                <a href="/">
                    <h1 className="text-dark">HikeCzech</h1>
                </a>

                <div className="m-2">
                    {" "}
                    <nav className="">
                        <a href="/login" className="px-2">
                            <button type="button" class="btn btn-success">
                                Log in{" "}
                            </button>
                        </a>

                        <a href="/register" className="px-2">
                            <button type="button" class="btn btn-danger w-auto">
                                Sign up
                            </button>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
