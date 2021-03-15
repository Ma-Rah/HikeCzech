import React, { useState, useEffect } from "react";

export default function Register(props) {
    const [
        { email, username, password, password_confirmation },
        setValues,
    ] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let request_data = { email, username, password, password_confirmation };
        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const response_data = await response.json();

        if (response.status == 200) {
            location.href = "/login";
        } else {
            setErrors(response_data.errors);
        }
    };

    const handleChange = (event) => {
        const allowed_names = [
                "username",
                "email",
                "password",
                "password_confirmation",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form
                action="/register"
                method="post"
                onSubmit={handleSubmit}
                className="w-auto "
            >
                <div class="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>

                <div class="form-group">
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
}
