import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddResume from '../components/AddResume';
import '../css/myresume.css';

function MyResume() {

    const navigate = useNavigate();

    const backDashboardPage = () => {
    navigate("/dashboard");
    };

    return(
        <>
        <header>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">RezumeJob</a>
                    </div>
                    <ul className="menuBar">
                        <li><a onClick={backDashboardPage} style={{ cursor: "pointer" }}>Back to Dashboard</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <div className='resume-container'>
            <h2 className='resume-title'>My Resume</h2>
            <p>Create your resume here</p>
            <div className='resume-grid'>
                <AddResume/>
            </div>
        </div>

        </>
    )
}
export default MyResume;