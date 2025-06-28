import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/register.css';

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errorMsg, setErrorMsg] = useState('');

    // handle input changes and update values state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    // validate form and submit
    const validateForm = (event) => {
        event.preventDefault();
        setErrorMsg(''); // reset error

        const { password } = values;
        const minlength = 8;

        if (!password) {
            setErrorMsg('Password is required!');
            return;
        }
        if (password.length < minlength) {
            setErrorMsg(`Please enter a password that is at least ${minlength} characters long.`);
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMsg('Please use at least one capital letter.');
            return;
        }
        if (!/\d/.test(password)) {
            setErrorMsg('Please use at least one number.');
            return;
        }

        axios.post('https://rezumejob-server.onrender.com/register', values)
            .then(res => {
                if (res.data.success) {
                    alert('Account created successfully. Please log in.');
                    navigate('/login');
                } else {
                    setErrorMsg(res.data.message || 'Registration failed.');
                }
            })
            .catch(err => {
                console.error('Registration error:', err.response || err.message || err);
                setErrorMsg('Something went wrong. Please try again.');
            });

    };


    return (
        <div className="register">
            <div className="left-panel">
                <h2>Create Your Resume. <br /> Unlock Opportunities.</h2>
            </div>

            <div className="right-panel">
                <form className="form-container" onSubmit={validateForm}>
                    <div className="labelField">
                        <h1>Sign Up</h1>

                        <div className="inputRegister">
                            <div className="label-group">
                                <p><label htmlFor="firstName">First Name</label></p>
                                <p>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="e.g. Mary"
                                        pattern="[A-Za-z0-9_]{3,15}"
                                        required
                                        value={values.firstName}
                                        onChange={handleChange} />
                                </p>
                            </div>

                            <div className="label-group">
                                <p><label htmlFor="lastName">Last Name</label></p>
                                <p>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="e.g. Jane"
                                        pattern="[A-Za-z0-9_]{3,15}"
                                        required
                                        value={values.lastName}
                                        onChange={handleChange} />
                                </p>
                            </div>

                            <div className="label-group">
                                <p><label htmlFor="email">Email Address</label></p>
                                <p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="e.g. abc@example.com"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        required
                                        value={values.email}
                                        onChange={handleChange} />
                                </p>
                            </div>

                            <div className="label-group">
                                <p><label htmlFor="password">Create Password</label></p>
                                <p>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        value={values.password}
                                        onChange={handleChange} />
                                </p>
                            </div>

                            <div className="label-group">
                                <p className="passCriteria">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                                <p id="passwordError" style={{ color: 'red' }}>{errorMsg}</p>
                            </div>

                            <div className="button-container">
                                <input type="submit" value="Create an account" />
                            </div>

                            <p className="terms-text">
                                By creating an account, you agree to our Terms of Use Privacy Policy.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;