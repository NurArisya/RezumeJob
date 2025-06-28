import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/dashboard.css';

function DashboardAdmin() {

    const navigate = useNavigate();

    return (
        <>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">Rezume<span>Job</span></a>
                    </div>

                    <ul className="menuBar">
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#">My Resume</a></li>
                        <li><a href="profile.html" className="btn">Profile Settings</a></li>
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