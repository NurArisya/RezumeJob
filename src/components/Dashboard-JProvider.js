import React, { useState } from 'react';
import '../css/dashboard.css';

function JobProviderDashboard() {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState({ title: '', company: '', location: '', description: '' });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        setNewJob({ ...newJob, [e.target.name]: e.target.value });
    };

    const handleAddJob = () => {
        if (!newJob.title || !newJob.company) return alert("Title and Company are required");
        setJobs([...jobs, newJob]);
        setNewJob({ title: '', company: '', location: '', description: '' });
    };

    const handleEditJob = (index) => {
        setNewJob(jobs[index]);
        setEditingIndex(index);
    };

    const handleUpdateJob = () => {
        const updatedJobs = [...jobs];
        updatedJobs[editingIndex] = newJob;
        setJobs(updatedJobs);
        setNewJob({ title: '', company: '', location: '', description: '' });
        setEditingIndex(null);
    };

    const handleDeleteJob = (index) => {
        const filtered = jobs.filter((_, i) => i !== index);
        setJobs(filtered);
    };

    return (
        <>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">Rezume<span>Job</span></a>
                    </div>
                    <ul className="menuBar">
                        <li><a href="#" className="btn">Dashboard</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container-dashboard">
                <section className="left-panel">
                    <h3>{editingIndex !== null ? "Edit Job" : "Post New Job"}</h3>
                    <input type="text" name="title" placeholder="Job Title" value={newJob.title} onChange={handleChange} />
                    <input type="text" name="company" placeholder="Company Name" value={newJob.company} onChange={handleChange} />
                    <input type="text" name="location" placeholder="Location" value={newJob.location} onChange={handleChange} />
                    <textarea name="description" placeholder="Job Description" value={newJob.description} onChange={handleChange}></textarea>
                    <button onClick={editingIndex !== null ? handleUpdateJob : handleAddJob}>
                        {editingIndex !== null ? "Update Job" : "Post Job"}
                    </button>
                </section>

                <main className="middle-panel">
                    <h3>My Posted Jobs</h3>
                    {jobs.length === 0 ? <p>No jobs posted yet.</p> : (
                        jobs.map((job, idx) => (
                            <div className="job-card" key={idx}>
                                <h4>{job.title} @ {job.company}</h4>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p>{job.description}</p>
                                <button onClick={() => handleEditJob(idx)}>Edit</button>
                                <button onClick={() => handleDeleteJob(idx)}>Delete</button>
                            </div>
                        ))
                    )}
                </main>
            </div>
        </>
    );
}

export default JobProviderDashboard;
