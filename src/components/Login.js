import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate();

    const validateForm = (event) => {
        event.preventDefault();
        setErrorMsg('');

        axios.post('https://rezumejob-server.onrender.com/login', {
            email,
            password
        }, {
            withCredentials: true
        })
            .then(res => {
                console.log("Response:", res.data);
                if (res.data.success) {
                    alert("You have successfully logged in!");
                    navigate('/dashboard');
                } else {
                    setErrorMsg(res.data.message || "Login failed.");
                }
            })
            .catch(err => {
                console.error("Login request error:", err);
                setErrorMsg("Login failed. Please try again.");
            });
    };


    return (
        <>
            <div className="login-page">
                <div className="container">
                    <form onSubmit={validateForm}>
                        <div className="header">
                            <h1>Log in</h1>

                            <div className="label-group">

                                <p><label htmlFor="email">Email Address</label></p>
                                <p>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="e.g. abc123@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>

                            </div>
                            <div className="label-group">

                                <p><label htmlFor="password">Password</label></p>
                                <p>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                            </div>

                            <input type="submit" value="Login" />

                            <p className="toRegister">
                                Don't have an account? <a onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'blue' }}>Register now</a>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

