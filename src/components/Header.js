import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <div className="navheader">
                    <div className="navlogo" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
                        <span className="logo">Rezume<span>Job</span></span>
                    </div>

                    <ul className="menuBar">
                        <li><button onClick={() => navigate('/dashboard')} className="nav-button">Home</button></li>
                        <li><button onClick={() => navigate('/about')} className="nav-button">About</button></li>
                        <li><button onClick={() => navigate('/ats-friendly')} className="nav-button">ATS-Friendly</button></li>
                        <li><button onClick={() => navigate('/find-job')} className="nav-button">Find Job</button></li>
                        <li><button onClick={() => navigate('/contact')} className="nav-button">Contact</button></li>
                        <li><button onClick={() => navigate('/login')} className="btn">Login</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
