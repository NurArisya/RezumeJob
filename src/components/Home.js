import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function Home() {
    return (
        <>

        <header>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">Rezume<span>Job</span></a>
                    </div>

                    <ul className="menuBar">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">ATS-Friendly</a></li>
                        <li><a href="#">Find Job</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><Link to="/login" className="btn">Login</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
            <section className="home">
                <img src="../img/homeboard.png" alt="Homepage banner" title="Welcome to RezumeJob" />
            </section>
            <section className="sloganHome">
                <h2>Build Your Dream Here.</h2>
                <p>Create an ATS-Friendly resumes, Apply Jobs and Get Hired Smartly</p>
            </section>

        </>
    );
}

export default Home;