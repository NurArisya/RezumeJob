import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/dashboard.css';

function Dashboard() {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Running auth check...");
        axios.get('https://rezumejob-server.onrender.com/', { withCredentials: true })
            .then(res => {
                console.log("Auth response:", res.data);
                if (res.data.success) {
                    setAuth(true);
                } else {
                    setAuth(false);
                    setMessage(res.data.message || 'Unauthorized');
                }
            })
            .catch(err => {
                console.error("Auth check error:", err);
                setAuth(false);
            })
            .finally(() => setLoading(false));
    }, []);


    useEffect(() => {
        // Only run after loading is complete
        if (!loading && !auth) {
            navigate('/login');
        }
    }, [loading, auth, navigate]);

    const handleCreateResume = () => navigate("/question");
    const nextMyResumePage = () => navigate("/myresume");

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout', { withCredentials: true })
            .then(res => {
                if (res.data.success) {
                    navigate('/login');
                }
            }).catch(err => {
                console.error("Logout error", err);
            });
    };

    return (
        <>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">Rezume<span>Job</span></a>
                    </div>

                    <ul className="menuBar">
                        <li><a onClick={nextMyResumePage} style={{ cursor: "pointer" }}>My Resume</a></li>
                        <li><a href="profile.html" className="btn">Profile Settings</a></li>
                        <li><a onClick={handleLogout} className="btn" style={{ cursor: "pointer" }}>Logout</a></li>
                    </ul>
                </div>
            </nav>

            <div className="searchBar">
                <input type="text" placeholder="Enter Job Title or Keywords" />
                <input type="text" placeholder="Location" />
                <div className="button-container">
                    <input type="submit" value="Search" />
                </div>
            </div>

            <div className="container-dashboard">
                <section className="left-panel">
                    <img src="img/display-resume.png" alt="Resume Preview" className="resume-img" />
                    <button className="create-btn" onClick={handleCreateResume}>Create Resume</button>
                </section>

                <main className="middle-panel">
                    <div className="jobs-suggestions">
                        <p>Job Suggestions List</p>
                    </div>
                </main>

                <aside className="right-panel">
                    <div className="profile-card">
                        <h4>Mary Jane</h4>
                        <p>Product Designer</p>
                        <button className="edit-profile-btn">Edit Profile</button>
                        <button className="view-profile-btn">View Profile</button>
                    </div>

                    <div className="skills-card">
                        <h4>Skills</h4>
                        <ul>
                            <li>Figma</li>
                            <li>HTML/CSS</li>
                            <li>React</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
}
export default Dashboard;
